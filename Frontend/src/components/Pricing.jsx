import {Check} from 'lucide-react';
import { Link } from 'react-router-dom';
const Pricing=()=>{
    const pricing=
    [
        {
            imgUrl:"/pricing.jpg",
            title:"QUATERLY",
            price:18000,
            length:3
        },
        {
            imgUrl:"/pricing.jpg",
            title:"HALF-YEARLY",
            price:34000,
            length:6
        },
        {
            imgUrl:"/pricing.jpg",
            title:"YEARLY",
            price:67000,
            length:67
        }
    ]
    return(
        <section className='pricing'>
            <h1>ELITE EDGE FITNESS PLANS</h1>
            <div className="wrapper">
            {
                
                    pricing.map(element=>{
                        return(
                            <div className="card" key="element.title">
                                <img src={Element.imgUrl} alt={Element.title}/>
                                <div className="title">
                                    <h1>{element.title}</h1>
                                    <h1>PACKAGE</h1>
                                    <h3>Rs {element.price}</h3>
                                    <p>FOR {element.length} MONTHS</p>
                                </div>
                                <div className="description">
                                    <p>
                                        <Check/> Equipment
                                    </p>
                                    <p>
                                        <Check/>All Day Free-Training
                                    </p>
                                    <p>
                                        <Check/> 24/7 Skilled Support
                                    </p>
                                    <p>
                                        <Check/> 20 Days Freezing Option
                                    </p>
                                    <Link to={"/"}>Join Now</Link>
                                </div>
                            </div>
                        )
                    })
               }
                </div>
            
        </section>
    )
}
export default Pricing