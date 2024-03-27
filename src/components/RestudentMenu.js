import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestudentMenu=()=>{
    const [resInfo,setResInfo] = useState(null);
    const {resId} =useParams();
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu =async ()=>{
        // const data = await fetch(
        //     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.44473&lng=78.462082&restaurantId=805434&catalog_qa=undefined&submitAction=ENTER"
        //    + MENU_API+resId
        // )
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        console.log(json);
        // console.log(json.data?.cards[0]?.card?.card?.info.name)
        setResInfo(json.data)
    }
    const {name, cuisines,costForTwoMessage,id}=resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| {};
    // console.log(itemsCard)
    // ?.itemCards[0]?.card?.info
    return resInfo === null? (
        <Shimmer/>
    ): (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} {costForTwoMessage}, resId{id}</p>
        <h2>Menu</h2>
        <ul>
            {
                itemCards  && itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name }-{item.card.info.price /100}</li>)
            }
        </ul>
        </div>
    )
}

export default RestudentMenu;