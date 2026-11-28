import { WorkSpace , WorkSpaceBody , WorkSpaceHeader , WorkSpaceMiddle } from "./Workspace";
import Button from "./ui/Button";
import { usePanelStore } from "../hooks/store";
import { PanelLeft , Search , ListFilterIcon , SlidersHorizontal } from "lucide-react";

function Projects()
{
    const setIsCollapsed = usePanelStore((state) => state.setIsCollapsed);

    

    return (
        <WorkSpace>
            <WorkSpaceHeader>
                <div>
                    <Button onClickFn={setIsCollapsed}>
                        <PanelLeft width={16} height={16}/>
                    </Button>
                </div>
            </WorkSpaceHeader>
            
            <WorkSpaceMiddle>
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
    );
}

export {Projects};