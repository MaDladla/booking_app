import React,{useEffect, useState} from 'react';
// import'./App.css'
import startfirebase from "./config/indeX"; 
 import {async} from '@firebase/util'
 import { addDoc, doc, getDocs } from 'firebase/firestore';
 import { collection } from 'firebase/firestore';
import { app,db } from "./config/indeX";

function Admin(){

// constructor(props){

//     super(props);


//         hotelName:'',
//         location:'',
//         price:'',

//     }
// this.interface = this.interface.bind(this);
// }

// componentDidMount(){

// this.setState({

// db:startfirebase()

// });

// }
const[hotelName, setHotel]= useState("");
const[location, setLocation]= useState("");
const[price, setPrice]= useState();
const[hotels, setHotels] = useState();
const hotelCollectionRef = collection(db,"hotels");

const createHotel = async()=>{
await addDoc(hotelCollectionRef, {name:hotelName, location:location, price: Number(price)})


}

const updateHotel = async(id, hotelName, location, price)=>{

const hotelDoc = doc(db,"hotels",id);


}

useEffect(()=>{

const getUsers = async()=>{

    const data= await getDocs(hotelCollectionRef);
    // console.log(data);
    setHotels(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
}
// getHotels()
})

    return(
<body>

    <h1>hui</h1>
<label>Entar hotel name</label>
<input type={"text"} id="hotelbox" onChange={(e)=>{setHotel(e.target.value)}}/>
<br/><br/>

<label>Entar hotel location</label>
<input type={"text"} id="locationbox" onChange={(e)=>{setLocation(e.target.value)}}/>
<br/><br/>

<label>Entar price per night </label>
<input type={"number"} id="pricebox" onChange={(e)=>{setPrice(e.target.value)}}/>
<br/><br/>

<button id="addBtn" onClick={createHotel}>Add data</button>
{/* <button id="updateBtn" onClick={this.interface}>Update data</button>
<button id="deleteBtn" onClick={this.interface}>Delete data</button>
<button id="selectBtn" onClick={this.interface}>Get data from db</button>  */}

{hotels.map((hotel)=>{
return(
<div>

<h1>{hotel.hotelName}</h1>
<h1>{hotel.location}</h1>
<h2>{hotel.price}</h2>
</div>


)


})}
</body>
        
    );
// interface(event){
//     const id = event.targert.id

//     if(id=='addBtn'){
//         this.insertData()
//     }
// }




// getAllInputs(){
//   return{
//     hotelName: this.state.hotelName,
//     location: this.state.location,
//     price: Number(this.state.price) 

//   }

// }

// insertData(){

// const db =this.state.db;
// const data= this.getAllInputs();    

// set(ref(db,'hotel/'+data.hotelName),
// {
//     fullname: data.name,
//     location: data.location,
//     price: data.price
// }
// )
// .then(()=>{alert('data was added successfully')})
// .catch((error)=>{alert("there was an error. details: "+error)});
} 
 export default Admin;
