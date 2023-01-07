import React from "react";
import Footer from "./footer/Footer";
import Carosil from "./hero/Carosil";
import Navbar from "./navbar/Navbar";
import Card from "./Product/Card";

function App() {
  var card = [
    {img:'https://i.pinimg.com/736x/68/f3/90/68f390e96645a894744d1e9f87eb4f44--mens-fashion-fashion-.jpg', head:'WATCHES', head2:'This is beautifull watch'},
    {img:'https://www.generatormix.com/images/thumbs/random-cars.jpg',head:'CARS', head2:'There are expansive CARS'},
    {img:'https://plus.unsplash.com/premium_photo-1661963288471-b72fb81c61b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVsaWNvcHRlcnxlbnwwfHwwfHw%3D&w=1000&q=80',head:'HELICOPTER',head2:'There are many types of HELICOPTER'}
  ]
  return (
    <>
      <div>
      <Navbar/> 
      <Carosil/>
      <div>{card.map((item)=>{
        return(
          <Card first={item} second={item} third={item}></Card>
        )
      })}</div>
      <Footer/>    
      </div>   
      
      
    </>
  );
}

export default App;
