import styles from "./Panel.module.css";
import Button from "./ui/Button";
import { usePanelStore } from "../hooks/store";


function Panel()
{
    const isCollapsed = usePanelStore((state) => state.isCollapsed);

    return (
        <div className={`${styles.container} ${isCollapsed ? styles.containerIsCollapsed : null}`}>
            <Button>Hello world1</Button>
            <Button>Hello world2</Button>
        </div>
    );
}

export {Panel};