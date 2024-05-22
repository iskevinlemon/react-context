import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD(){ // Consumer component
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>Username is {user}</h2>
        </div>
    )
}

export default ComponentD;