//Creating a functional Component in React --> New version of react

import { useEffect, useState } from "react";

const User = ({name,location}) =>{
 const [count, setCount] = useState(0);

//  useEffect(() =>{
//     data() //Callbackfunction
//  },[]);

//  const data = async () => {
//     const dd = await fetch("//Api call");
//     const json = dd.json();
//     console.log(json);
//  }

 const [count1] = useState(5);
    return(
        <div>
            <h1>Name : {name}</h1>
            <h2>Count : {count}</h2>
            <h2>Count2 : {count1}</h2>
            <h2>Location : {location}</h2>
        </div>
    )
}

export default User;