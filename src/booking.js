import React, { useState } from 'react'
// library.add(faStar);
import pic from '../src/Pictures/g1.jpg'
import pea from '../src/Pictures/g3.jpg'
import dla from '../src/Pictures/r3.jpg'
// import pic1 from '../src/Pictures/r3.jpg'
// import pic2 from '../src/Pictures/r3.jpg'
// import pic3 from '../src/Pictures/r3.jpg'
// import pic4 from '../src/Pictures/r3.jpg'
// import pic5 from '../src/Pictures/r3.jpg'
// import pic6 from '../src/Pictures/r3.jpg'

// import me from '../src/compo/style.css';
import { Link } from 'react-router-dom';

function Booking() {

    // const nevigate =useNevigate();
    // const [values] =useState([
    // {id:1, image1: activ1, hotelTitle:'Rose cottage', star: faStar,image2:pic1, image3:pic2},
    // {id:2, image1: activ2, hotelTitle:'Peace corner', star: faStar,image2:pic3, image3:pic4},
    // {id:3, image1: activ3, hotelTitle:'Dladlas Luxury guest suit', star: faStar,image2:pic5, image3:pic6},
    
    // ])
    
    // const view =(data)=>{
    // console.log(data)
    
    // NavigationPreloadManager("/hotelview",{state:{data:data}})
    // }


    return (

        <body>

            <div className='div1'>
                {/* <img src={pic} alt="Pictures" width="1915" height="910" /> */}
                <nav>
                    <ul>
                        <li><Link to="/home">Login</Link></li>
                        <li><Link>Our services</Link></li>
                        <li> <Link to="/aboutus">About us</Link></li>
                        <li><Link to="/contactus">Contact us</Link> </li>

                    </ul>
                </nav>
                <div class="div2">
                    <h1>Welcome to TripHub</h1>

                    <p>Where customers satisfication is a philosophy</p>
                    <button class="butInfo">More info</button>
                </div>

                <div class="dateBox">
                    <div class="dates">
                        <p>Check in</p>
                        <input type="date" placeholder="Check in" />
                    </div>

                    <div class="dates">
                        <p>Check out</p>
                        <input type="date" />
                    </div>

                    <div class="dates">
                        <p>Rooms</p>
                        <input type="number" />
                    </div>

                    <div class="dates">

                        <p>Adults</p>
                        <input type="number" />
                    </div>

                    <div class="dates">
                        <p>Children</p>
                        <input type="number" />
                    </div>
                    <div>

                        <button>Search</button>
                    </div>

                </div>
            </div>

            <div class="div3">
                <div className='divHead'>
                <h1>Destination </h1>
                
                </div>
                <div class="hotels">

                    <div class="scrol" >
                        <h1><svg class="svg-icon" viewBox="0 0 20 20">
                            <path d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"></path>
                        </svg></h1>

                    </div>

                    <div className='hotels2'>
                    <div className='house'>
                    <img src={pic} alt="Pictures" width="450" height="350" />
                    <h1>Rose cottage</h1>
                    <p>R480 per night</p>
                    <button className='butHouse'>view more</button>
                    <Link to="/checkout"> checkout</Link>
                    </div>
                    <div className='house'>
                    <img src={pea} alt="Pictures" width="450" height="350" />
                    <h1>Peace corner</h1>
                    <p>R320 per night</p>
                    <button className='butHouse'>view more</button>
                    </div>
                      <div className='house'>
                      <img src={dla} alt="Pictures" width="450" height="350" />
                    <h1>Dladlas' Luxury guest suit</h1>
                    <p>R650 per night</p>
                    <button className='butHouse'>view more</button>
                      </div>
                    </div>

                </div>

              


            </div>

<div className='div4'>

<div className='box'>
    <h1>Happy holiday</h1>
    <p>Grow rich with every discovery</p>
</div>
     
</div>
            {/* <div>
{values.map((val,id)=>(

<div key= {id}>




</div>



))}


            </div> */}
            
            <footer>
                
                <div className='foot'>
                    <h1>Contact us</h1>
                    <label>3015 Grand Ave, Cocount Grove, Merrick Way FL 123456<br />
                        demoexample@gmail.com<br />
                        123 456 7898<br />
                        123 456 7898<br />
                        24/ 7 Customer Services</label>
                </div>
                <div className='foot'>
                    <h2>For Customers</h2>
                    <p>About Luviana<br/>
                        Customer Care/Help<br/>
                        Corporate Accounts<br/>
                        Financial Information<br/>
                        Terms & Conditions</p>


                </div>

            </footer>

        </body>

    );
}
export default Booking;