import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () =>{
    setShowIndex();
  }

  return (
    <div className="">
      {/*Accordian Header */}
      <div className="w-6/12 mx-auto my-4 shadow-lg px-2 bg-gray-200 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>🔽</span>
          {/*Accordian Body */}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
