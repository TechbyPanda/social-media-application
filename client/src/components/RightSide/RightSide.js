import React, {useState} from 'react'
import Home from '../../img/home.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'
import Noti from '../../img/noti.png'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className='rightSide'>
      <div className="navIcons">
        <Link to = '../home'>
          <img src={Home} alt="" />
        </Link>
        <UilSetting></UilSetting>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard></TrendCard>
      <button className="btn r-btn" onClick={() => setModalOpened(true)}>Share</button>
      <ShareModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  )
}

export default RightSide
