import { Panel } from "./components/Panel";
import styles from "./Dashboard.module.css";
import { Routes , Route, Navigate } from "react-router";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { NotFound } from "./components/NotFound";

function Dashboard()
{
    return (
        <div className={styles.container}>
            <Panel/>

            <Routes>
                <Route index element={<Navigate to="/home"/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export {Dashboard};