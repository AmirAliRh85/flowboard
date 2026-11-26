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
        <button onClick={prop.onClickFn} style={prop.style} className={`Button ${prop.className ?? ""}`}>
            {prop.children}
        </button>
    );
}