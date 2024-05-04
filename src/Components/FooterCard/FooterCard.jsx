import React from 'react'
import './FooterCard.css'
import { footer_Card } from '../Data/Data'

const FooterCard = () => {

    let cards = footer_Card?.map((el)=>(
        <div className='footer_card' key={el.id}>
        <img src={el.img} alt="" />
        <div>
           <p>{el.title}</p>
           <span>{el.discription}</span>
        </div>
   </div>
    ))
  return (
    <>
      <div className='container'>
            
            <div className='footer_card_flex_item'>
                   {cards}
            </div>
            
          </div>
    </>
  )
}

export default FooterCard