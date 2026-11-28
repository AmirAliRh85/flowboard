import { WorkSpace , WorkSpaceBody , WorkSpaceHeader , WorkSpaceMiddle } from "./Workspace";
import Button from "./ui/Button";
import { usePanelStore } from "../hooks/store";
import { PanelLeft , Search , ListFilterIcon , SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import type { Board, Column } from "../utils/types";
import { Column_C } from "./Column";

function Projects()
{
    const setIsCollapsed = usePanelStore((state) => state.setIsCollapsed);
    const [boards , setBoards] = useState<Board>();

    useEffect(() =>
    {
        async function load()
        {
            const response = await fetch("/api/projects");
            const data = await response.json();
            console.log(data);
            setBoards(data[0]);
        };

        load();

    } , []);

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

            <WorkSpaceBody className="WorkSpaceBody">
                {
                    boards &&
                    boards.columns.map((elem : Column) =>
                    {
                        return (
                            <Column_C col={elem}/>
                        );
                    })
                }
            </WorkSpaceBody>
        </WorkSpace>
    );
}

export {Projects};