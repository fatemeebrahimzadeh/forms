import React, { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
    value: string
}

const Option: FC<IProps> = (props) => {
    return (
        <option className="Option" value={props.value} >{props.children}</option>
    )
}

export default Option