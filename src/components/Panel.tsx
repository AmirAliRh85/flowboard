import styles from "./Panel.module.css";
import Button from "./ui/Button";
import { usePanelStore } from "../hooks/store";
import { ChevronDown, Search , Home, Plus, MoreHorizontal } from "lucide-react";
import { useRef , useState , type CSSProperties } from "react";
import { Dialog } from "./ui/Dialog";
import { Link } from "react-router";

type PanelButtonProps = {
    children? : React.ReactNode;
    onClickFn? : (e : React.MouseEvent) => void;
    onClickFnInner? : (e : React.MouseEvent) => void;
    className? : string;
    style? : CSSProperties;

    more? : boolean;
};


function PanelButton(props : PanelButtonProps)
{
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    return (
        <button ref={buttonRef} onClick={props.onClickFn} className={`PanelButton ${props.className}`} style={props.style}>
            {props.children}
            {   
                (props.more ?? true) &&

                <Button className="p-4 icon" onClickFn={props.onClickFnInner}>
                    <MoreHorizontal width={16} height={16}/>
                </Button>
            }
        </button>
    );
};


function Panel()
{
    const isCollapsed = usePanelStore((state) => state.isCollapsed);
    const [isOpen , setIsOpen] = useState(false);

    return (
        <div className={`${styles.container} ${isCollapsed ? styles.containerIsCollapsed : null}`}>
            <div className="flex-r gap">
                <Button className="color w-f">
                    <p>WorkSpace</p>
                    <ChevronDown width={16} height={16}/>
                </Button>
                <Button>
                    <Search width={16} height={16}/>
                </Button>
            </div>

            <div className="font-s">
                <Link to="home">
                    <PanelButton more={false} className="p-8">
                            <div className="flex-r gap">
                                <Home width={16} height={16}/>
                                <p>Home</p>
                            </div>
                    </PanelButton>
                </Link>
            </div>

            <div className="flex-c gap overflow-y">
                <div className="flex-r">
                    <label className="font-s color">Projects</label>
                    <Button className="color-s p-4">
                        <Plus width={16} height={16}/>
                    </Button>
                </div>

                <div>
                    <Link to="projects">
                        <PanelButton onClickFnInner={() => setIsOpen(!isOpen)}>
                            <p>My first project</p>
                        </PanelButton>
                    </Link>
                </div>
            </div>

            <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>

            </Dialog>
        </div>
    );
}

export {Panel};