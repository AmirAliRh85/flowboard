import styles from "./Workspace.module.css";

type WorkSpaceProps =
{
    children? : React.ReactNode;
    isFullyOpened? : boolean;
};

function WorkSpace(props : WorkSpaceProps)
{
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

function WorkSpaceHeader(props : WorkSpaceProps)
{
    return (
        <div className={styles.container2}>
            <div>
                {props.children}
            </div>
            <hr></hr>
        </div>
    );
}

function WorkSpaceMiddle(props : WorkSpaceProps)
{
    return (
        <div className={styles.container3}>
            <div>
                {props.children}
            </div>
            <hr></hr>
        </div>
    );
}

function WorkSpaceBody(props : WorkSpaceProps)
{
    return (
        <div className={styles.container4}>
            {props.children}
        </div>
    );
}

export {WorkSpace , WorkSpaceHeader , WorkSpaceMiddle , WorkSpaceBody};