import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  //console.log(items);

  //dispatching the action - addItem reducer action
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-sans">
              <p className="font-semibold text-medium">{item.card.info.name}</p>
              <p className=" text-sm mt-1">₹{item.card.info.price / 100}</p>
            </div>
            <div>
              <p className="mt-2 text-xs text-gray-500 text-wrap">
                {item.card.info.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 p-1">
            <div className="absolute top-0...">
              <button
                className="bg-black shadow-lg text-white  rounded-lg p-1 "
                onClick={() =>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
