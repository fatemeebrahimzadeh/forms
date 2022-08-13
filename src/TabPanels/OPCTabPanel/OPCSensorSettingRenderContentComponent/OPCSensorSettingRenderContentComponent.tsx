import React, { Component } from "react";
import "./OPCSensorSettingRenderContentComponent.scss"

import Checkbox from "../../../UI/Checkbox/Checkbox";
import Input from "../../../UI/Input/Input";
import { IOPCTag } from "../../../@types/entities/opc-tag";

interface IProps extends IOPCTag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IOPCTag) => void
}

class OPCSensorSettingRenderContentComponent extends Component<IProps> {

    render() {
        return (
            <section className="OPCSensorSetting" >
                <fieldset className="outer-field">
                    <label >
                        <span>Float</span>
                        <Input
                            enable
                            type="number"
                            id="flt"
                            value={this.props.FLT.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'FLT')}
                        />
                    </label>
                    <label >
                        <span>Input Minimum</span>
                        <Input
                            enable
                            id="imn"
                            type="number"
                            value={this.props.IMN.toString()}
                            onChange={(value) => this.props.onChangeHandler(value, 'IMN')}
                        />
                    </label>
                    <label >
                        <span>Input Maximum</span>
                        <Input
                            enable
                            id="imx"
                            type="number"
                            value={this.props.IMX.toString()}
                            onChange={(value) => this.props.onChangeHandler(value, 'IMX')}
                        />
                    </label>
                    <label >
                        <span>Sensor Minimum</span>
                        <Input
                            enable
                            id="smn"
                            type="number"
                            value={this.props.SMN.toString()}
                            onChange={(value) => this.props.onChangeHandler(value, 'SMN')}
                        />
                    </label>
                    <label >
                        <span>Sensor Maximum</span>
                        <Input
                            enable
                            id="smx"
                            type="number"
                            value={this.props.SMX.toString()}
                            onChange={(value) => this.props.onChangeHandler(value, 'SMX')}
                        />
                    </label>
                </fieldset>
            </section>
        );
    }
}

export default OPCSensorSettingRenderContentComponent;