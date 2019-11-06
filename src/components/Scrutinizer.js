import React from "react";
import ip from '../ipinfo/ipaddress';
const Scrutinizer = () => (

<div>
   <div className="background">
      <div className="productTitle">


         <a href={`https://${ip}:8080`}
            target="_blank"
         >
            Scrutinizer
       </a>
         <p className="productDescription">Plixer’s network traffic analysis system, provides an invaluable source of truth. It gathers flows and metadata from every network conversation to help you detect, analyze, visualize, investigate, and respond.</p>
      </div>
   </div>

   <div className= "centerHead">
      <p>Host IP Address:  {ip}:8080</p>
      <p>Username:  admin</p>
      <p>Password:  admin</p>
      <img className = "telescopeHead" src="https://www.plixer.com/wp-content/uploads/2019/05/pictogram-lighbulb-plug.svg"></img>
   </div>

</div>

);


export default Scrutinizer