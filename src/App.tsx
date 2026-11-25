import { Panel } from "./components/Panel";
import Button from "./components/ui/Button";
import styles from "./App.module.css";



function App()
{
    return (
        <div className={styles.container}>
            <Panel></Panel>
            <Button>Click here</Button>
        </div>
    );
}

export {App};