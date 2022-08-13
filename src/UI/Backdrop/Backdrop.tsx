import React, { FC } from "react";
import "./Backdrop.scss"

interface IProps {
    visibility: Boolean,
    handler: () => void,
    className?: string
}

const backdrop: FC<IProps> = (props) => {
    return props.visibility ? <div onClick={props.handler} className={`backdrop ${props.className}`}></div> : null
}

export default backdrop;