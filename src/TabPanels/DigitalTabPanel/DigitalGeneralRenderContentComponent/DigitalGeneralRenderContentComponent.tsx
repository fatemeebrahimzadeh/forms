import React, { Component } from "react"
import { IDigitalTag } from "../../../@types/entities/digitaltag"
import "./DigitalGeneralRenderContentComponent.scss"
import Checkbox from "../../../UI/Checkbox/Checkbox";
import Input from "../../../UI/Input/Input"

interface IProps extends IDigitalTag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IDigitalTag) => void
}

class DigitalGeneralRenderContentComponent extends Component<IProps> {

    render() {
        return (
            <section className="DigitalGeneralRenderContentComponent">
                <fieldset className="outer-field">
                    <label >
                        <span>Tag_id</span>
                        <Input
                            enable
                            id="tid"
                            value={this.props.TID}
                            onChange={(value) => this.props.onChangeHandler(value, 'TID')}
                        />
                    </label>
                    <label>
                        <span>Description</span>
                        <Input
                            enable
                            id="des"
                            value={this.props.DES}
                            onChange={(value) => this.props.onChangeHandler(value, 'DES')}
                        />
                    </label>
                </fieldset>
                <fieldset className="outer-field">
                    <label>
                        <span>Debounce</span>
                        <Input
                            enable
                            type="number"
                            id="deb"
                            value={this.props.DEB.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'DEB')}
                            groupName="DigitalTabPanel" />
                    </label>
                    <label >
                        <span>Active</span>
                        <Checkbox
                            id="act"
                            checked={this.props.ACT}
                            onChange={(value) => this.props.onChangeHandler(value, 'ACT')} />
                    </label>
                </fieldset>
            </section>
        )
    }
}

export default DigitalGeneralRenderContentComponent