import React, { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

type DialogProps =
{
    isOpen : boolean;
    onClose : () => void;
    children? : React.ReactNode;
}

function Dialog({isOpen , onClose , children} : DialogProps)
{
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() =>
    {
        const _dialog = dialogRef.current
        if (!_dialog || !dialogRef)
            return;

        if (isOpen && !dialogRef.current.open)
            _dialog.showModal();
        if (!isOpen && dialogRef.current.open)
            _dialog.close();

    } , [isOpen]);

    useEffect(() =>
    {
        const _dialog = dialogRef.current
        if (!_dialog || !dialogRef)
            return;

        const handleClose = () => {setInterval(() => {} , 250);onClose();};

        _dialog.addEventListener("close" , handleClose);
    
        return () => _dialog.removeEventListener("close" , handleClose);
    } , [onClose]);

    const handleClick = (e: React.MouseEvent<HTMLDialogElement>) =>
    {
        if (e.target === dialogRef.current)
            onClose();
    };

    return (
        <dialog ref={dialogRef} onClick={handleClick} className={styles.container}>
            {children}
        </dialog>
    )
}

export {Dialog};