import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  return (
    <div data-testid = "resCard" className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 h-auto">
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Image not found"
      />
      <h3 className="font-bold pt-2 pb-2">{name}</h3>
      <h4 className="cuisine pt-1 pb-1">{cuisines.join(", ")}</h4>
      <div className="delivery pt-1 pb-1">
        <h4 className="rating pt-1 pb-1">
          <i className="fi fi-ss-star"></i>
          {avgRating}
        </h4>
        <h4 className="rating pt-1 pb-1">{slaString}</h4>
        <h4 className="rating pt-1 pb-1">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
