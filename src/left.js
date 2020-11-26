import React from "react";

const Left = () => {

   const[lg] = React.useState([
     {id:1, img:"https://images6.fanpop.com/image/photos/41000000/Logo-The-Hunger-Games-Mockingjay-Part-2-the-hunger-games-41016592-1920-1080.jpg", name:"The Rebellion"},
     {id:2, img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", name:"The Capital"},
     {id:3, img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", name:"District 2"},
     {id:4, img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", name:"District 3"}
   ]);

  return (
  <div className="left">

    {lg.map((i) => (
      <div className="left-l" key={i.id}>
          <div className="left-img">
        <img src={i.img} alt="" />
        </div>
        <div className="left-name"> {i.name} </div>
      </div>

    ))}

  </div>
  )
}

export default Left;