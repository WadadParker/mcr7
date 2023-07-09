import styles from "../home/home.module.css";
import {useContext,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const CountryList=()=>
{
    const {state,findAllCountries,findAllCities}=useContext(CountryContext);
    const {allCountries,allCities}=state;
    const {cityID}=useParams();

    const navigate=useNavigate();
    useEffect(()=>findAllCities(allCountries,cityID),[]);
    return (
        <div className={styles[`home-container`]}>
            <h1 className={styles.head}>Top Destinations to visit</h1>
            
            <ul className={styles[`list-container`]}>
            {allCities?.map(item=>(
                <li key={item?.id} onClick={()=>navigate(`/destination/${item?.id}`)}>
                <Card item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}