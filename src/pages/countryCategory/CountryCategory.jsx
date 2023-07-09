import styles from "../home/home.module.css";
import {useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const CountryCategory=()=>
{
    const {state,findAllCountries}=useContext(CountryContext);
    const {allCountinents}=state;
    const {countryID}=useParams();

    const navigate=useNavigate();
    const foundCountries=findAllCountries(allCountinents,countryID)
    return (
        <div className={styles[`home-container`]}>
            <h1 className={styles.head}>Top Countries in Asia for your next holiday</h1>
            
            <ul className={styles[`list-container`]}>
            {foundCountries.map(item=>(
                <li key={item?.id} onClick={()=>navigate(`/cities/${item?.id}`)}>
                <Card item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}