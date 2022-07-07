// import pic from './Pictures/R (10).jpg'
// import foundation from './Pictures/foundation.webp'
import { Link } from "react-router-dom";
import React from "react";
function About() {
    return (
        <div>
            <body class="body6">
                    <header class="contHead">
                        <div class="title">
                            
                                <div class="header">
                                             <Link to="/Home" class="head-left">Logout</Link>
                                     <nav class= "head-right">
                                        <li> <Link to="/">Home page</Link></li> 
                                        <li> <Link to="/contactus">Contact us  </Link></li>  
                    
                                    </nav>

                                </div>
                             
                        </div>
                    </header>


                    {/* <img src={pic} alt="Pictures" width="220px" height="220px" /> */}

                    <div class="aboutus" >

                       <div className="message">
                        <h1>TripHub</h1>
                        <p>
                        TripHub.com gives travellers one of the widest selections of accommodation on the net, including both independent and major chain hotels as well as self-catering in over hundreds of thousands properties worldwide. The company offers a one-stop shopping source for hotel pricing, amenities and availability   

                        </p>
                        <p>We help you to compare hotels from leading booking companies and many more in a single search. We promise to find you cheap hotels, last minute hotel deals, and luxury hotels.</p>
                        </div>
                        {/* <img src={foundation} alt="Pictures" width="220px" height="220px"/> */}
                    </div>
            </body >
        </div >
    );
}
export default About;