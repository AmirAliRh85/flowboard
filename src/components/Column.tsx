import type { Card, Column} from "../utils/types";
import { Card_C } from "./Card";
import styles from "./Column.module.css";

export function Column_C({col} : {col : Column})
{
    return (
        <div className={styles.container}>
            <div>
                {col.name} {col.numOfTasks}
            </div>

            <div>
                {
                    col.cards.map((elem : Card) =>
                    {
                        return (
                            <Card_C card={elem}/>
                        )
                    })
                }
            </div>
        </div>
    );
}