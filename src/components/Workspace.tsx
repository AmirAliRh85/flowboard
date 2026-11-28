import styles from "./Workspace.module.css";

type WorkSpaceProps =
{
    children? : React.ReactNode;
    isFullyOpened? : boolean;
    className? : string;
};

function WorkSpace(props : WorkSpaceProps)
{
    return (
        <div className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    )
}

function WorkSpaceHeader(props : WorkSpaceProps)
{
    return (
        <div className={`${styles.container2} ${props.className}`}>
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
        <div className={`${styles.container3} ${props.className}`}>
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
        <div className={`${styles.container4} WorkSpaceBody ${props.className}`}>
            {props.children}
        </div>
    );
}

export {WorkSpace , WorkSpaceHeader , WorkSpaceMiddle , WorkSpaceBody};