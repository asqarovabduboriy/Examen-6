import React, { useEffect, useState } from 'react'
import './Single.css'
import { FaSearch, FaStar } from 'react-icons/fa'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { TbArrowLeftRight } from "react-icons/tb";
import svg1 from '../../../assets/Imgs/1svg.png'
import svg2 from '../../../assets/Imgs/2svg.png'
import svg3 from '../../../assets/Imgs/3svg.png'
import svg4 from '../../../assets/Imgs/4svg.png'
import svg5 from '../../../assets/Imgs/5svg.png'
import Slider from '../../Slider/Slider';
import { CiFilter } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { Usefect } from '../../Usefect/Usefect';
import Banner from '../../BannerFood/BannerFood'
import Loader from '../../Loader/Loader';


const Single = () => {
    const [count, setcount] = useState(1)
    const { id } = useParams()

 useEffect(()=>{
        window.scrollTo(0,0)
    
      },[])

    const { data,loading } = Usefect(`/products/${id}`)
    console.log(data);





    return (
        <>
            <div className='container'> 
             <div style={{display:'flex',justifyContent: "space-between"}}>
             {
                     <div className='flex_element_single'>
                     <div className='one_elment' key={data?.data?.id} >
                         <div className='big_img_wrapper'>
                             <FaSearch />
                             {loading ? <Loader/> : <img src={ data?.data?.image} alt="" width={400} />}
                         </div>
                         <div className='smal_div_flex'>
                             <div className='smal_img'>
                                 <img src={data?.data?.image} alt="" width={80} />
                             </div>
                             <div className='smal_img'>
                                 <img src={data?.data?.image} alt="" width={80} />
                             </div>
                             <div className='smal_img'>
                                 <img src={data?.data?.image} alt="" width={80} />
                             </div>
                             <div className='smal_img'>
                                 <img src={data?.data?.image} alt="" width={80} />
                             </div>
                         </div>
                     </div>
         
                     <div className='two_elemnt'>
                         <div className='on'>
                             <p>Sale ON</p>
                         </div>
                         <h3>{data?.data?.title}</h3>
         
                         <div className='star_container'>
                         {Array.from({ length: Math.round(data?.data?.rating.rate) }).map((_, index) => (
                                 <FaStar key={index}  />
                             ))}
                             <p>{data?.data?.rating.rate}</p>
                         </div>
         
                         <div className='price_container_single'>
                             <b>${data?.data?.price}</b>
                             <i>Count{data?.data?.rating.count}</i>
                         </div>
         
                         <p className='p_lorem'>{data?.data?.description}</p>
         
                         <div className='size_container'>
                             <p>Size / Weight:</p>
                             <div>
                                 <p>50g</p>
                             </div>
                             <div>
                                 <p>60g</p>
                             </div>
                             <div>
                                 <p>70g</p>
                             </div>
                             <div>
                                 <p>80g</p>
                             </div>
                         </div>
         
                         <div className='count'>
                             <input value={count} onChange={() => setcount(p => p + 1)} type="number" />
                             <button className='add_cart'> <TiShoppingCart /> Add to cart</button>
                             <button className='heart_btn'><CiHeart /></button>
                             <button className='heart_btn'><TbArrowLeftRight /></button>
                         </div>
         
                         <div className='single_bi_text_content'>
                             <div className='flex_didcription'>
                                 <div className='discription'>
                                     <div>
                                         <span>Description</span>
                                     </div>
                                 </div>
                                 <div className='discription'>
                                     <div>
                                         <span>Additional info</span>
                                     </div>
                                 </div>
                                 <div className='discription'>
                                     <div>
                                         <span>Vendor</span>
                                     </div>
                                 </div>
                                 <div className='discription'>
                                     <div>
                                         <span>Reviews (3)</span>
                                     </div>
                                 </div>
                             </div>
         
                             <div className='single_bi_text_container'>
                                 <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
                                     goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                                 <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
                                     wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                                     mastodon goodness gnashed a jellyfish and one however because.</p>
         
                                 <ul className='single_items_container'>
                                     <li>Type Of Packing</li>
                                     <li>Color</li>
                                     <li>Quantity Per Case</li>
                                     <li>Ethyl Alcohol</li>
                                     <li>Piece In One</li>
                                 </ul>
         
                                 <div className='line_two'></div>
         
                                 <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
                                     minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
                                     raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
                                     limpet.</p>
         
                                 <h3 style={{ marginTop: 63 }}>Packaging & Delivery</h3>
                                 <div className='line_two'></div>
         
                                 <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                                     assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                                     held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                             </div>
                         </div>
                     </div>
                     <div className='there_elemnt'>
                         <div className='threr_card'>
                             <div className='single_category'>
                                 <h3>Category</h3>
                             </div>
                             <div className='grid_elment'>
                                 <div className='single_mni_card'>
                                     <img src={svg1} alt="" />
                                     <p>Milks & Dairies</p>
                                     <div>
                                         <b>5</b>
                                     </div>
                                 </div>
                                 <div className='single_mni_card'>
                                     <img src={svg2} alt="" />
                                     <p>Clothing</p>
                                     <div>
                                         <b>6</b>
                                     </div>
                                 </div>
                                 <div className='single_mni_card'>
                                     <img src={svg3} alt="" />
                                     <p>Pet Foods</p>
                                     <div>
                                         <b>7</b>
                                     </div>
                                 </div>
                                 <div className='single_mni_card'>
                                     <img src={svg4} alt="" />
                                     <p>Baking material</p>
                                     <div>
                                         <b>12</b>
                                     </div>
                                 </div>
                                 <div className='single_mni_card'>
                                     <img src={svg5} alt="" />
                                     <p>Fresh Fruit</p>
                                     <div>
                                         <b>16</b>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className='product_by'>
                             <div className='single_category'>
                                 <h3>Fill by price</h3>
                             </div>
                             <div className='slider'>
                                 <Slider />
                             </div>
                             <div className='peice_container_single'>
                                 <p>From: $500</p>
                                 <p>From: $1000</p>
                             </div>
                             <div className='chekbox_warpper'>
                                 <h5>color</h5>
         
         
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                     <input type="checkbox" name="" id="" />
                                     <p>Red(56)</p>
                                 </div>
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                     <input type="checkbox" name="" id="" />
                                     <p>green(78)</p>
                                 </div>
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                     <input type="checkbox" name="" id="" />
                                     <p>Blue(54)</p>
                                 </div>
         
                                 <h5 style={{ marginTop: 15 }}>Item Condition</h5>
         
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                     <input type="checkbox" name="" id="" />
                                     <p>New (1506)</p>
                                 </div>
         
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                     <input type="checkbox" name="" id="" />
                                     <p>Refurbished (27)</p>
                                 </div>
         
                                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                     <input type="checkbox" name="" id="" />
                                     <p>Used (45)</p>
                                 </div>
                             </div>
         
                             <div className='fillter_btn'>
                                 <button><CiFilter />Fillter</button>
                                 <img src={data?.data?.image} alt="" width={100} />
                             </div>
                         </div>
                         <div className='new_product'>
                             <div className='single_category'>
                                 <h3>New products</h3>
                             </div>
         
                             <div className='new_product__img_content'>
                                 <div className='imgs_warpper_product'>
                                     <img src={data?.data?.image}  alt=""  width={80}/>
                                     <div>
                                         <h4>{data?.data?.title}</h4>
                                         <p>${data?.data?.price}</p>
                                         {Array.from({ length: Math.round(data?.data?.rating.rate) }).map((_, index) => (
                                             <FaStar key={index}  />
                                         ))}
                                     </div>
                                 </div>
                                 <div className='imgs_warpper_product'>
                                     <img src={data?.data?.image} alt="" width={80} />
                                     <div>
                                         <h4>{data?.data?.title}</h4>
                                         <p>${data?.data?.price}</p>
                                         {Array.from({ length: Math.round(data?.data?.rating.rate) }).map((_, index) => (
                                             <FaStar key={index}  />
                                         ))}
                                     </div>
                                 </div>
         
                                 <div className='imgs_warpper_product'>
                                     <img src={data?.data?.image} alt=""  width={80}/>
                                     <div>
                                         <h4>{data?.data?.title}</h4>
                                         <p>${data?.data?.price}</p>
                                         {Array.from({ length: Math.round(data?.data?.rating.rate) }).map((_, index) => (
                                             <FaStar key={index}  />
                                         ))}
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                }
             </div>
             <Banner/>
            </div>
        </>
    )
}

export default Single