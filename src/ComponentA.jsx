import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

/**
 * useContext()
 * React Hook that allows you to share values
 * between multiple levels of components
 * without passing props through each level (props- drilling)
 */

// Provider component
// 1. import {createContext} from "react";
// 2. Export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child/>
//    <MyContext/>

// Consumer component
// 1. import react, {useContext} from "react";
// 2. import {MyContext} from "./ComponentA";
// 3. const value = useContext(MyContext);

export const UserContext = createContext();

function ComponentA(){ // Provider component

    const [user, setUser] = useState("");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <input 
                type="text" 
                placeholder="Enter name" 
                onChange={(e) => setUser(e.target.value)}
            />
            <h2>Hello {user}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;