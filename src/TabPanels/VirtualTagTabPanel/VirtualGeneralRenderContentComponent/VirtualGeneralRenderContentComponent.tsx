import React, { Component } from "react"
import "./VirtualGeneralRenderContentComponent.scss"
import { IVirtualTag } from "../../../@types/entities/virtual-tag";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";

interface IProps extends IVirtualTag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IVirtualTag) => void
}

class GeneralRenderContentComponent extends Component<IProps> {

    render() {
        return (
            <section className="VirtualGeneralRenderContentComponent">
                <fieldset className="first-fieldset outer-field">
                    <label >
                        <span>Tag_id</span>
                        <Input
                            enable
                            id="tid"
                            value={this.props.TID}
                            onChange={(value) => this.props.onChangeHandler(value, 'TID')}
                        />
                    </label>
                    <label >
                        <span>Description</span>
                        <Input
                            enable
                            id="des"
                            value={this.props.DES}
                            onChange={(value) => this.props.onChangeHandler(value, 'DES')}
                        />
                    </label>
                    <label className="CheckboxLabel">
                        <Checkbox
                            id="act"
                            checked={this.props.ACT}
                            onChange={(value) => this.props.onChangeHandler(value, 'ACT')} />
                        <span>Active</span>
                    </label>
                    <label className="CheckboxLabel">
                        <Checkbox
                            id="arc"
                            checked={this.props.ARC}
                            onChange={(value) => this.props.onChangeHandler(value, 'ARC')} />
                        <span>Archive</span>
                    </label>
                </fieldset>
                <fieldset className="second-fieldset outer-field">
                    <label >
                        <span>Float</span>
                        <Input
                            enable
                            type="number"
                            id="flt"
                            value={this.props.FLT.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'FLT')}
                            groupName="VirtualTabPanel"
                        />
                    </label>
                    <label >
                        <span>Unit</span>
                        <Input
                            enable
                            id="unt"
                            value={this.props.UNT}
                            onChange={(value) => this.props.onChangeHandler(value, 'UNT')}
                            groupName="VirtualTabPanel" />
                    </label>
                    <label >
                        <span>Virtual Type</span>
                        <Select
                            enable
                            id="cky"
                            value={this.props.VT}
                            onChange={(value) => this.props.onChangeHandler(value, 'VT')}
                            options={[{ value: "0", text: "real time" }, { value: "1", text: "daily efficiency" }]} />
                    </label>
                </fieldset>
                <fieldset className="third-fieldset outer-field">
                    <label >
                        <span>Minimum</span>
                        <Input
                            enable
                            id="vmn"
                            type="number"
                            value={this.props.VMN.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'VMN')}
                            groupName="VirtualTabPanel" />
                    </label>
                    <label >
                        <span>Maximum</span>
                        <Input
                            enable
                            id="vmx"
                            type="number"
                            value={this.props.VMX.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'VMX')}
                            groupName="VirtualTabPanel" />
                    </label>
                </fieldset>
            </section>
        )
    }
}

export default GeneralRenderContentComponent