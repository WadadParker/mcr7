import styles from "../home/home.module.css";
import {useContext, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const CountryCategory=()=>
{
    const {state,findAllCountries}=useContext(CountryContext);
    const {allCountinents,allCountries}=state;
    const {countryID}=useParams();

    const navigate=useNavigate();
    
    const foundCountinents=(allCountinents.find(({id})=>id==Number(countryID))).countries;
    console.log(foundCountinents);

    return (
        <div className={styles[`home-container`]}>
            <h1 className={styles.head}>Top Countries for your next holiday</h1>
            
            <ul className={styles[`list-container`]}>
            {foundCountinents?.map(item=>(
                <li key={item?.id} onClick={()=>navigate(`/cities/${countryID}/${item?.id}`)}>
                <Card item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}