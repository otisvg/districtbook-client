import React from "react";

const Updates = () => {

  const[lg] = React.useState([
    // {id:1, img:"https://images6.fanpop.com/image/photos/41000000/Logo-The-Hunger-Games-Mockingjay-Part-2-the-hunger-games-41016592-1920-1080.jpg", name:"The Rebellion"},
    // {id:2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNY22_bd02x1LuMQvKT2agG2KYud3eAl1CLA&usqp=CAU", name:"The Capitol"},
    // {id:3, img:"https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/04/25/node_745534/46854648/public/2020/04/25/B9723307627Z.1_20200425180345_000%2BG3FFU6HUS.2-0.jpg?itok=9GrG80eF1587830752", name:"Professor Snow"},
    {id:4, img:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/hgluxury1.jpg", name:"District 1"},
    {id:5, img:"https://am24.mediaite.com/tms/cnt/uploads/2011/10/d2-376x550.jpg", name:"District 2"},
    {id:6, img:"https://am23.mediaite.com/tms/cnt/uploads/2011/10/d3-376x550.jpg", name:"District 3"},
    {id:7, img:"https://i.pinimg.com/564x/fd/7c/ab/fd7cab3dab8c51a0405fd45eca6c3b89.jpg", name:"District 4"}
  ]);


  return (
  <div className="updates">

    {lg.map((up) => (
      <div className="updates-c" key={up.id}>
        <div className="updates-b">
          <img src={up.img} alt="" />
          <div className="updates-bo">
          <div className="updates-bo-img">
            <img src={up.img} alt="" />
          </div>
          <div className="updates-bo-name"> {up.name} </div>
          </div>
        </div>
      </div>  
    ))} 
  </div>
  )
}

export default Updates;