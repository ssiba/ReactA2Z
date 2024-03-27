import React, { useEffect, useState } from "react";
import RestudentCard from "./RestudentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  //Swiggy Api Call By using
  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.477885&lng=78.3691213&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let allRestduntData = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(allRestduntData)
    setRestaurants(allRestduntData);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

const onlineStatus = useOnLineStatus();
if(onlineStatus === false) return(<h1>Please Check Your Internet Connection You are offline🤔</h1>)
  
  return restaurants.length===0 ? (
    <Shimmer></Shimmer>
  ): (
    <div className="body">
      <div className="filter">
        <input type="text"/>
        <button>Search</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant,) => (
          <Link key={restaurant.info.id} to={"/restudents/" + restaurant.info.id}><RestudentCard
           resData={restaurant}
          /></Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
