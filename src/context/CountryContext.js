import { createContext, useReducer } from "react";

import {data} from "../backend/db/data";

export const CountryContext=createContext();

export const CountryProvider=({children})=>
{
    const CountryReducer=(state,{type,payload})=>
    {
        switch(type)
        {
            case "":
                return {...state};
            
            default:
                return state;    
        }
    }
    const initialState={
        allCountinents:data.continents,
    }
    const [state,dispatch]=useReducer(CountryReducer,initialState);

    const findAllContries=(continents)=>
    {

    }

    return (
        <CountryContext.Provider value={{state,dispatch}}>
            {children}
        </CountryContext.Provider>
    )
}