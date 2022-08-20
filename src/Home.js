import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-image'>
        <img src='https://as1.ftcdn.net/v2/jpg/03/20/68/66/1000_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg'></img>
        </div>
        <div className='categories'>
         <div className='mens'>
          <Link to="/menall">
              <img className='photo' src='https://media.gettyimages.com/photos/when-you-look-good-you-feel-good-picture-id692909934?s=2048x2048'/>
              </Link>
         </div>
          <div className='women'>
         <img className='photo' src='https://media.istockphoto.com/id/1063212632/photo/beautiful-mixes-race-woman-holding-shopping-bags-and-smiling.webp?s=612x612&w=is&k=20&c=_dqyjp0Er_MRqCXrkfUTSCOsZ_UZyURzHS_jFlnTIT8='/>
          </div>
          <div className='kids'>
<img className='photo' src='https://as1.ftcdn.net/v2/jpg/02/09/23/78/1000_F_209237853_PkcPTlx2zh7HIx7xFS0pe7xNWV02fP3v.jpg'></img>
          </div>
          <div className='electronics'>
            <img className='photo' src='https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'>
            </img>
          </div>
        </div>
    </div>
  )
}

export default Home