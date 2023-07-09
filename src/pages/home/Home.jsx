import styles from "./home.module.css";
import {useContext} from "react";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const Home=()=>
{
    const {state,dispatch}=useContext(CountryContext);
    const {allCountinents}=state;
    return (
        <div className={styles[`home-container`]}>
            <h1>Welcome to Trip Advisor</h1>
            <h2 className={styles.header}>Top Continents for your next holiday</h2>
            <ul className={styles[`list-container`]}>
            {allCountinents.map(item=>(
                <Card item={item} />
            ))}
            </ul>
        </div>
    )
}