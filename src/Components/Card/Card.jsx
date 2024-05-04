import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FiShoppingCart } from 'react-icons/fi'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';


const Card = (props) => {
    const product = props.data?.map((el) => (
        <div className='card' key={el.id}>
            <div className='rating_card'>
                <p>{el.rating.rate}</p>
            </div>
            <div className='card_img_wrapper'>
                <Link to={`/product/${el.id}`}> <img src={el.image} alt="" /></Link>
            </div>
            <div className='card_text_content'>
                <p className='category'>{el.category}</p>
                <p className='text_title' title={el.title}>{el.title}</p>
                <div className='star_wrapper'>
                    {Array.from({ length: Math.round(el.rating.rate) }).map((_, index) => (
                        <FaStar key={index} className='star_card' />
                    ))}
                </div>
                <p className='buy_p'>By <b>NestFood</b> </p>
                <div className='price_container'>
                    <p className='price'>${el.price}</p>
                    <p className='old_price'>count{el.rating.count}</p>
                    <button><FiShoppingCart />Add cart</button>
                </div>
            </div>
        </div>
    ))
    return (
        <>
           
                <div className='product_fleex'>
                    { props.loading? <Loading count={8}/> : product }
                </div>
        </>
    )
}

export default Card