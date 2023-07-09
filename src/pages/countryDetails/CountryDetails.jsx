import styles from "../home/home.module.css";
import {useContext,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

import {CountryContext} from "../../context/CountryContext";
import {Card} from "../../components/card/Card";

export const CountryDetails=()=>
{
    const {state,findDestination}=useContext(CountryContext);
    const {allCities, destination}=state;
    const {ID}=useParams();

    const navigate=useNavigate();
    useEffect(()=>findDestination(allCities,ID),[]);
    return (
        <div className={styles[`home-container`]}>
            <h1 className={styles.head}>{destination?.name}</h1>
            
            <main className={styles[`details-container`]}>
                <header>
                <img src={destination?.image} alt="image" className={styles.img} />
                </header>
                <footer className={styles[`description-container`]}>
                    <p>
                        <span className={styles.header}>Description: </span>
                        {destination?.description}
                    </p>
                    <p>
                        <span className={styles.header}>Rating: </span>
                        {destination?.ratings}
                    </p>
                    <p>
                        <span className={styles.header}>Reviews: </span>
                        {destination?.reviews}
                    </p>
                    <p>
                        <span className={styles.header}>Location: </span>
                        {destination?.location}
                    </p>
                    <p>
                        <span className={styles.header}>Opening Hours: </span>
                        {destination?.openingHours}
                    </p>
                    <p>
                        <span className={styles.header}>Ticket Price: </span>
                        {destination?.ticketPrice}
                    </p>
                    <a className={styles.header} href={destination?.website} target="_blank">Website</a>
                </footer>
            </main>
        </div>
    )
}