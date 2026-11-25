import styles from "./Panel.module.css";
import Button from "./ui/Button";

function Panel()
{
    return (
        <div className={styles.container}>
            <Button>Hello world1</Button>
            <Button>Hello world2</Button>
        </div>
    );
}

export {Panel};