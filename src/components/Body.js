import RestaurantCard from "./RestaurantCard";
import { BinTrieFlags } from "entities/lib/decode";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.012971&lng=77.545975&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline !! Kindly check your internet connection.
      </h1>
    );

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            className="border-dotted border-black"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 bg-green-100  rounded-lg"
            onClick={() => {
              //console.log(searchText);
              const filtereList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtereList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className=" border border-black bg-gray-300 m-4 filter-btn rounded-lg p-4"
            onClick={() => {
              listOfRes = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurants(listOfRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="Res-Container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
