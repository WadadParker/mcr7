import styles from "./card.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Card=({item})=>
{
    return (
        <div className={styles.card}>
            <img className={styles.img} src={item?.image} alt="image" width={300} height={300}/>
            <span className={styles.main}>
                <FontAwesomeIcon icon={faLocationDot} />   
                <b className={styles.name}>{item?.name}</b>
            </span>
        </div>
    )
}