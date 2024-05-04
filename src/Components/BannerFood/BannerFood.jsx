import React from 'react'
import './BannerFood.css'
import img from '../../assets/Imgs/sotuvchi.png'

const BannerFood = () => {
  return (
   <>
    <div className='container bg_img'>
    <div className='banner_text_content'>
                    <div className='wrapper_text_kontent'>
                        <h2>Stay home & get your daily
                            needs from our shop</h2>
                        <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                        <form className='banner_form'>
                            <input type="text" placeholder='Your emaill address' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className='img_wrapper_bnaner'>
                        <img src={img} alt="" />
                    </div> 
                </div>
    </div>
   </>
  )
}

export default BannerFood