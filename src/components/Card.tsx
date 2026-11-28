import type { Card } from "../utils/types";
import styles from "./Card.module.css";


export function Card_C({card} : {card : Card})
{
    return (
        <div className={styles.container}>
            {card.name}
        </div>
    );
}