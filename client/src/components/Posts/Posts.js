import React, { useEffect } from 'react'
import Post from '../Post/Post'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  const {posts, loading,error} = useSelector((state) => state.postReducer)
  useEffect(()=> {
    dispatch(getTimelinePosts(user._id))
  },[])
  return (
    <div className='posts'>
      {loading? "Fetching Posts..." :posts.map((post,id) => {
        return <Post key={id} data={post} id={id}/>
      })}
    </div>
  )
}

export default Posts
