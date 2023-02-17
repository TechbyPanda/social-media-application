import UserModel from "../model/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async (req,res) => {
  console.log(req.body)
  const salt = await bcrypt.genSalt()
  req.body.password = await bcrypt.hash(req.body.password,salt)
  const new_user = new UserModel(req.body)

  try{
    const user = await new_user.save()
    const token = jwt.sign({
      username: user.username, id: user._id
    },process.env.JWT_KEY,{expiresIn: '1h'})
    res.status(200).json({user,token})
  }catch(error){
    res.status(500).json({message: error.message})
  }
}

export const loginUser = async (req,res) => {
  const {username, password} = req.body

  try{
    const user = await UserModel.findOne({username: username})

    if (user){
      const validity = await bcrypt.compare(password, user.password)

      if(!validity){
        res.status(400).json("Wrong password")
      }else {
        const token = jwt.sign({
          username: user.username, id: user._id
        },process.env.JWT_KEY,{expiresIn: '1h'})

        res.status(200).json({user,token})
      }
    }else {
      res.status(404).json("User does not exists")
    }
  }catch(error){
    res.status(500).json({message: error.message})
  }
}