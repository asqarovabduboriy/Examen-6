import React, { useState, useEffect } from 'react'
import './Product.css'
import { Usefect } from '../Usefect/Usefect';
import Card from '../Card/Card';


const Product = () => {

    const [categorya, setcategorya] = useState('all')
    let url = `/products/${categorya === 'all' ? "" : `/category/${categorya}`}?limit=8`
    const { data,loading } = Usefect(url, categorya)
    const { data: categoris } = Usefect(`/products/categories`)
    const handecategory = (category) => {
        setcategorya(category)
    }

    const btn = categoris?.data?.map((el, i) => (
        <button key={i} onClick={() => handecategory(el)} >{el}</button>
    ))




    return (
        <>
            <div className='container'>
                <div className='select_category'>
                    <h1>Popular Products</h1>
                    <div className='btn_wrapper'>
                    <button onClick={() => { setcategorya('all') }}>All</button>
                        {btn}
                    </div>
                </div>

                <Card loading= {loading} data= {data?.data}/>
            </div>
        </>
    )
}

export default Product