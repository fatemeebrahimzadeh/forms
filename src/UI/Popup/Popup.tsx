import React, { Component, PureComponent } from "react";
import { Popup, ToolbarItem } from 'devextreme-react/popup'

import './Popup.scss'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export interface IPopupActions {
    onSubmitHandler(): void
    onCloseHandler(): void
    selectionChange?(e: number): void
}

interface IState {
}

interface IProps {
    fullScreen?: boolean
    showCloseButton?: boolean
    //they shouldnt be optinal
    width: string
    height: string
    icon?: JSX.Element
    deviceDescription?: { name: string, serialNumber: number, channel: string }
    textDescription?: string
    show: boolean
    actions: IPopupActions
    content: JSX.Element
}

class PopupComponent extends Component<IProps, IState> {

    // submitButtonOptions: {}

    submitButtonReference = React.createRef<HTMLButtonElement>()

    constructor(props: IProps) {
        super(props)
        // this.submitButtonOptions = {
        //     icon: 'check',
        //     text: '',
        //     onClick: props.actions.onSubmitHandler
        // };
    }

    shouldComponentUpdate = (nextProps: IProps, nextState: IState) => {
        return this.props.show != nextProps.show || this.props.content.props.selectedtabIndex != nextProps.content.props.selectedtabIndex || this.props.content.props.data != nextProps.content.props.data
    }

    renderTitle = () => {
        return (
            // <div className="Popup__Title">
            <>
                <div className="Title__details">
                    <div className="Title__item">
                        {this.props.icon}
                    </div>
                    <div className="Title__item__description">
                        {this.props.deviceDescription && this.props.deviceDescription.name + " -> S/N " + this.props.deviceDescription.serialNumber + " -> " + this.props.deviceDescription.channel}
                        {this.props.textDescription && this.props.textDescription}
                    </div>
                </div>
                <div >
                    <button
                        className="Title__button"
                        onClick={this.props.actions.onSubmitHandler}
                        ref={this.submitButtonReference}>
                        <FontAwesomeIcon className="Title__item" icon={faCheck} />
                    </button>
                    <button
                        className="Title__button"
                        onClick={this.props.actions.onCloseHandler} >
                        <FontAwesomeIcon className="Title__item" icon={faTimes} />
                    </button>
                </div>
            </>
            // </div>
        );
    }



    render() {
        return (
            <Popup
                fullScreen={false}
                closeOnOutsideClick={false}
                contentRender={() => this.props.content}
                className="Popup"
                width={this.props.width}
                height={this.props.height}
                onHiding={this.props.actions.onCloseHandler}
                visible={this.props.show}
                titleRender={this.renderTitle}>
            </Popup>
        )
    }
}

export default PopupComponent