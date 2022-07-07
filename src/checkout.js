import React, { useState } from 'react'
import pic from '../src/Pictures/g1.jpg'
import pea from '../src/Pictures/g3.jpg'
import dla from '../src/Pictures/r3.jpg'
import me from '../src/compo/style.css';
import { Link } from 'react-router-dom';

function Checkout() {
    return (

        <body>

            <div >
                {/* <img src={pic} alt="Pictures" width="1915" height="910" /> */}
                <nav>
                    <ul>

                        <li><Link>Our services</Link></li>
                        <li> <Link>About us</Link></li>
                        <li><Link>Contact us</Link> </li>

                    </ul>
                </nav>
                <div className='checkout'>
            <div className='travel'>
            <input type="checkbox" /> <label>Are you travelling for work?</label><br/>
            
            <input type="checkbox" /><label>On vacation?</label>
            

            </div>

           <div>
            <h1>Personal details</h1>
            <p>Name</p>
            <input type="text" name='' placeholder='' required />

            <p>Surname</p>
            <input type="text" name='' placeholder='' required />

            <p>Email address</p>
            <input type="email" name='' placeholder='' required />
            
            <p>Contacts</p>
            <input type="number" name='' placeholder='' required />
            
            <p>Country</p>
            <input type="text" name='' placeholder='' required />
            
            </div>   
       
       <div className='payments'>
        <h1>CHECKOUT</h1>
        <h2>Payment Method</h2>
 
        <input type="checkbox" /><label> Pay on arrival day</label><br/>
 
        <input type="checkbox" /><label> Pay using master card</label><br/>

        <input type="checkbox" /><label>I have read and understood the terms and conditions</label>
<div className='butPayment'><button>Book</button></div>
        
       </div>
      </div>
         


                </div>

        </body>

    );
}
export default Checkout;