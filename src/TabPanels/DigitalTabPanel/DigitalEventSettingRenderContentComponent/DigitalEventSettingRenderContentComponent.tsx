import React, { Component } from "react";
import "./DigitalEventSettingRenderContentComponent.scss"
import Input from "../../../UI/Input/Input";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import ColorPicker from "../../../UI/ColorPicker/ColorPicker";
import { IDigitalTag } from "../../../@types/entities/digitaltag";

interface IProps extends IDigitalTag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IDigitalTag) => void
}
class DigitalEventSettingRenderContentComponent extends Component<IProps> {

    enabledLenFieldset: boolean

    constructor(props: IProps) {
        super(props)
        this.enabledLenFieldset = !!this.props.LEN
    }

    componentDidUpdate() {
        this.enabledLenFieldset = !!this.props.LEN
    }

    lenFieldsetenableHandler = (prevenabledLenFieldset: boolean) => {
        this.enabledLenFieldset = !prevenabledLenFieldset
    }

    render() {

        return (
            <section className="DigitalEventSettingRenderContentComponent">
                <fieldset className="outer-field">
                    <label className="CheckboxLabel">
                        <Checkbox
                            id="len"
                            checked={this.props.LEN}
                            enableHandler={() => this.lenFieldsetenableHandler(this.enabledLenFieldset)}
                            onChange={(value) => this.props.onChangeHandler(value, 'LEN')} />
                        <span>Log-Check this if you want Recorder This Signal </span>
                    </label>
                </fieldset>
                <fieldset className="outer-field">
                    <legend>    Log Settings    </legend>
                    <div>
                        <label>
                            <span>High Status [1]</span>
                            <span className="MessageSpan">Message:</span>
                            <Input
                                enable={this.enabledLenFieldset}
                                id="him"
                                value={this.props.HIM}
                                onChange={(value) => this.props.onChangeHandler(value, 'HIM')}
                                groupName="DigitalTabPanel" />
                            <ColorPicker
                                id="hic"
                                defaultValue="#0693E3"
                                onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'HIC')}
                                color={this.props.HIC}
                                enable={this.enabledLenFieldset}
                            />
                        </label>
                        <label>
                            <span>Low Status [0]</span>
                            <span className="MessageSpan">Message:</span>
                            <Input
                                enable={this.enabledLenFieldset}
                                id="lom"
                                value={this.props.LOM}
                                onChange={(value) => this.props.onChangeHandler(value, 'LOM')}
                                groupName="DigitalTabPanel" />
                            <ColorPicker
                                id="LOC"
                                defaultValue="#0693E3"
                                onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'LOC')}
                                color={this.props.LOC}
                                enable={this.enabledLenFieldset}
                            />
                        </label>
                    </div>
                </fieldset>
            </section >
        );
    }
}

export default DigitalEventSettingRenderContentComponent;