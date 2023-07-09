import styles from "../home/home.module.css";
import {useContext,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const CountryList=()=>
{
    const {state,findAllCountries,findAllCities}=useContext(CountryContext);
    const {allCountinents,allCountries,allCities}=state;
    const {countryID}=useParams();
    const {cityID}=useParams();

    const navigate=useNavigate();
    const foundCountries=(allCountinents.find(({id})=>id==countryID)).countries;
    const foundDestinations=(foundCountries.find(({id})=>id==cityID)).destinations;

    return (
        <div className={styles[`home-container`]}>
            <h1 className={styles.head}>Top Destinations to visit</h1>
            
            <ul className={styles[`list-container`]}>
            {foundDestinations?.map(item=>(
                <li key={item?.id} onClick={()=>navigate(`/destination/${countryID}/${cityID}/${item?.id}`)}>
                <Card item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}