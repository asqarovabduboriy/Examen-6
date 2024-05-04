import React from 'react'
import './Admin.css'
import SimpleMap from '../../Karta/Karta'
import { IoLocationOutline } from "react-icons/io5";
import { admin_map } from '../../Data/Data';
import ayol from '../../../assets/Imgs/ayol.jpg'
import BannerFood from '../../BannerFood/BannerFood';

const Admin = () => {
  const map = admin_map?.map((el) => (
    <div className='two_elment_flex' key={el.id}>
      <h3>{el.title}</h3>
      <p>{el.discription}</p>
      <button><IoLocationOutline />View map</button>
    </div>
  ))
  return (
    <>
      <div className="container">
        <h3 className='admint_title_one'>How can help you ?</h3>
        <div className='flex_admin_one'>
          <div className='one_text_elmnet_admin'>
            <h1>Admin panel</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.</p>
          </div>

          <div className='two_text_elmnet_admin'>
            <h2>01. Visit Feedback</h2>
            <p className='p_text_admin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.</p>
            <div className='there_text_elmnet_admin'>
              <h2>03. Billing Inquiries</h2>
              <p className='p_text_admin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.</p>
            </div>
          </div>

          <div className='two_text_elmnet_admin'>
            <h2>02. Employer Services</h2>
            <p className='p_text_admin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.</p>
            <div className='two_text_elmnet_admin'>
              <h2>04.General Inquiries</h2>
              <p className='p_text_admin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.</p>
            </div>
          </div>


        </div>
      </div>
      <div className="container ">
        <SimpleMap />
        <div className='flrx_two_elment_'>
          {map}
        </div>

        <div className='form_admin'>
          <h3>Contact form</h3>
          <h2>Drop Us a Line</h2>
          <p>Your email address will not be published. Required fields are marked *</p>
          <div className='bi_wrapper_admin_flex'>
            <div className='input_wrapper'>
              <div className='d_grid'>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Your Phone' />
              </div>
              <div className='d_grid'>
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Subject' />
              </div>
              <div className='ayol_imgs'>
                <img src={ayol} alt="" />
              </div>
            </div>
            <div className='input_textera'>
              <textarea name="" id=""></textarea>
            </div>
            <button className='btn_send_message'>Send message</button>
          </div>
        </div>
      </div>

      <BannerFood/>

    </>
  )
}

export default Admin