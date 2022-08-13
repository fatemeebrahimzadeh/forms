import React, { Component } from "react";
import "./EventSettingRenderContentComponent.scss"
import { ITag } from "../../@types/entities/tag";
import Input from "../../Input/Input";
import Checkbox from "../../Checkbox/Checkbox";
import Select from "../../Select/Select";
import ColorPicker from "../../ColorPicker/ColorPicker";

interface IProps extends ITag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof ITag) => void
}

class EventSettingRenderContentComponent extends Component<IProps> {

    enabledLenFieldset: boolean
    timeout: NodeJS.Timeout | undefined


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
            <section className="EventSetting">
                <fieldset className="EventSetting-first-fieldset outer-field">
                    <label className="CheckboxLabel">
                        <Checkbox
                            id="len"
                            checked={this.props.LEN}
                            enableHandler={() => this.lenFieldsetenableHandler(this.enabledLenFieldset)}
                            onChange={(value) => this.props.onChangeHandler(value, 'LEN')} />
                        <span>Log-if you want Recorder This Signal Check this</span>
                    </label>
                    <label className="Hysterisis-label">
                        <span>Hysterisis</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            type="number"
                            id="hys"
                            value={this.props.HYS.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'HYS')} />
                    </label>
                </fieldset>
                <fieldset className="outer-field">
                    <legend>    Log Settings    </legend>
                    <label >
                        <span>Over High Limit</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            type="number"
                            id="ohv"
                            value={this.props.OHV.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'OHV')} />
                        <span className="MessageSpan">Message</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            id="ohm"
                            value={this.props.OHM}
                            onChange={(value) => this.props.onChangeHandler(value, 'OHM')} />
                        <span className="OutputSpan">OutPut</span>
                        <Select
                            enable={this.enabledLenFieldset}
                            id="ohd"
                            value={this.props.OHD}
                            onChange={(value) => this.props.onChangeHandler(value, 'OHD')}
                            options={[{ value: "0", text: "" }]} />
                        <ColorPicker
                            id="ohc"
                            defaultValue="#0693E3"
                            onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'OHC')}
                            color={this.props.OHC}
                            enable={this.enabledLenFieldset}
                        />
                    </label>
                    <label>
                        <span>High Limit</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            type="number"
                            id="hiv"
                            value={this.props.HIV.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'HIV')} />
                        <span className="MessageSpan">Message</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            id="him"
                            value={this.props.HIM}
                            onChange={(value) => this.props.onChangeHandler(value, 'HIM')} />
                        <span className="OutputSpan">OutPut</span>
                        <Select
                            enable={this.enabledLenFieldset}
                            id="hid"
                            value={this.props.HID}
                            onChange={(value) => this.props.onChangeHandler(value, 'HID')}
                            options={[{ value: "0", text: "" }]} />
                        <ColorPicker
                            id="hic"
                            defaultValue="#0693E3"
                            onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'HIC')}
                            color={this.props.HIC}
                            enable={this.enabledLenFieldset}
                        />
                    </label>
                    <label className="NormalLabel">
                        <span>Normal</span>
                        <span className="MessageSpan">Message</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            id="nmm"
                            value={this.props.NMM}
                            onChange={(value) => this.props.onChangeHandler(value, 'NMM')} />
                        <span className="OutputSpan">OutPut</span>
                        <Select
                            enable={this.enabledLenFieldset}
                            id="lod"
                            value={this.props.LOD}
                            onChange={(value) => this.props.onChangeHandler(value, 'LOD')}
                            options={[{ value: "0", text: "" }]} />
                        <div className="last-colour-picker">
                            <ColorPicker
                                id="nmc"
                                defaultValue="#0693E3"
                                onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'NMC')}
                                color={this.props.NMC}
                                enable={this.enabledLenFieldset}
                            />
                        </div>
                    </label>
                    <label>
                        <span>Low Limit</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            type="number"
                            id="lov"
                            value={this.props.LOV.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'LOV')} />
                        <span className="MessageSpan">Message</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            id="lom"
                            value={this.props.LOM}
                            onChange={(value) => this.props.onChangeHandler(value, 'LOM')} />
                        <span className="OutputSpan">OutPut</span>
                        <Select
                            enable={this.enabledLenFieldset}
                            id="uld"
                            value={this.props.ULD}
                            onChange={(value) => this.props.onChangeHandler(value, 'ULD')}
                            options={[{ value: "0", text: "" }]} />
                        <div className="last-colour-picker">
                            <ColorPicker
                                id="loc"
                                defaultValue="#0693E3"
                                onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'LOC')}
                                color={this.props.LOC}
                                enable={this.enabledLenFieldset}
                            />
                        </div>
                    </label>
                    <label>
                        <span>Under Low Limit</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            type="number"
                            id="ulv"
                            value={this.props.ULV.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'ULV')} />
                        <span className="MessageSpan">Message</span>
                        <Input
                            enable={this.enabledLenFieldset}
                            id="ulm"
                            value={this.props.ULM}
                            onChange={(value) => this.props.onChangeHandler(value, 'ULM')} />
                        <span className="OutputSpan">OutPut</span>
                        <Select
                            enable={this.enabledLenFieldset}
                            id=""
                            value={100}
                            onChange={(value) => { }}
                            options={[{ value: "0", text: "" }]} />
                        <div className="last-colour-picker">
                            <ColorPicker
                                id="ulc"
                                defaultValue="#0693E3"
                                onChangeHandler={(value) => this.props.onChangeHandler(value.hex, 'ULC')}
                                color={this.props.ULC}
                                enable={this.enabledLenFieldset}
                            />
                        </div>
                    </label>
                </fieldset>
            </section >
        );
    }
}

export default EventSettingRenderContentComponent;