import type { CSSProperties } from "react";

type ButtonProps = {
    children? : React.ReactNode;
    onClickFn? : (e : React.MouseEvent) => void;
    className? : string;
    style? : CSSProperties;
};

export default function Button(prop : ButtonProps)
{
    return (
        <button className={`Button ${prop.className ?? ""}`} onClick={prop.onClickFn} style={prop.style}>
            {prop.children}
        </button>
    );
}