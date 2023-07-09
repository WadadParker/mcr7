import styles from "./home.module.css";
import {useContext} from "react";
import { useNavigate } from "react-router-dom";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const Home=()=>
{
    const {state}=useContext(CountryContext);
    const {allCountinents}=state;

    const navigate=useNavigate();

    return (
        <div className={styles[`home-container`]}>
            <h1 className={styles.head}>Welcome to Trip Advisor</h1>
            <h2 className={styles.header}>Top Continents for your next holiday</h2>
            <ul className={styles[`list-container`]}>
            {allCountinents.map(item=>(
                <li key={item?.id} onClick={()=>navigate(`/country/${item?.id}`)}>
                <Card item={item} />
                </li>
            ))}
            </ul>
        </div>
    )
}