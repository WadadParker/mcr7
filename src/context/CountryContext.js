import { createContext, useReducer } from "react";

import {data} from "../backend/db/data";

export const CountryContext=createContext();

export const CountryProvider=({children})=>
{
    const CountryReducer=(state,{type,payload})=>
    {
        switch(type)
        {
            case "COUNTRIES":
                return {...state,allCountries:payload};
              
            case "CITIES":
                return {...state,allCities:payload}    ; 
               
            case "DESTINATION":
                return {...state,destination:payload};   
            
            default:
                return state;    
        }
    }
    const initialState={
        allCountinents:data.continents,
        allCountries:[],
        allCities:[],
        destination:"",
    }
    const [state,dispatch]=useReducer(CountryReducer,initialState);

    const findAllCountries=(continents,givenId)=>
    {
        const foundCountry= continents.find(({id})=>id==givenId);
        dispatch({type:"COUNTRIES",payload:foundCountry?.countries})
    }

    const findAllCities=(countries,givenId)=>
    {
        const foundCity= countries.find(({id})=>id==givenId)
        dispatch({type:"CITIES",payload:foundCity?.destinations})
    }

    const findDestination=(cities,givenID)=>
    {
        const destination= cities.find(({id})=>id==givenID)
        dispatch({type:"DESTINATION",payload:destination})
    }

    return (
        <CountryContext.Provider value={{state,dispatch,findAllCountries,findAllCities, findDestination}}>
            {children}
        </CountryContext.Provider>
    )
}