// import { ListFilterIcon } from "lucide-react/dist/lucide-react.suffixed.js";
import { useState } from "react";
import { Panel } from "./components/Panel";
import Button from "./components/ui/Button";
import { WorkSpace, WorkSpaceBody, WorkSpaceHeader, WorkSpaceMiddle } from "./components/Workspace";
import styles from "./Dashboard.module.css";
import { PanelLeft, Search , ListFilterIcon, SlidersHorizontal } from "lucide-react";
import { usePanelStore } from "./hooks/store";
import { Dialog } from "./components/ui/Dialogm";



function Dashboard()
{
    const setIsCollapsed = usePanelStore((state) => state.setIsCollapsed);

    return (
        <div className={styles.container}>
            <Panel>
            </Panel>

            <WorkSpace>
                <WorkSpaceHeader>
                    <div>
                        <Button onClickFn={setIsCollapsed}>
                            <PanelLeft width={16} height={16}/>
                        </Button>
                    </div>
                </WorkSpaceHeader>
                
                <WorkSpaceMiddle>
                    <div>8 tasks</div>
                    <div className="flex-r">
                        <Button>
                            <Search width={16} height={16}/>
                        </Button>
                        <Button>
                            <ListFilterIcon width={16} height={16}/>
                        </Button>
                        <Button>
                            <SlidersHorizontal width={16} height={16}/>
                        </Button>
                    </div>
                </WorkSpaceMiddle>

                <WorkSpaceBody>
                </WorkSpaceBody>
            </WorkSpace>
        </div>
    );
}

export {Dashboard};