import express from "express"
import { deleteUser, followUser, getUser, unFollowUser, updateUser, getAllUser } from "../controller/UserController.js"

const router = express.Router()

router.get('', getAllUser)
router.get("/:id",getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.put("/:id/follower",followUser)
router.put("/:id/unfollow",unFollowUser)

export default router