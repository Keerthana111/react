import {useEffect, useState} from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resID) =>{

    console.log(resID);
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () =>{
        const data = await fetch(MENU_URL+resID);
        const json = data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;