import React, { Component, createRef } from "react"

import "./OPCGeneralRenderContentComponent.scss"
import { IOPCTag } from "../../@types/entities/opc-tag"
import Checkbox from "../../Checkbox/Checkbox"
import Input from "../../Input/Input"
import TextArea from "../../TextArea/TextArea"

interface IProps extends IOPCTag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IOPCTag) => void
}

class OPCGeneralRenderContentComponent extends Component<IProps> {

    render() {
        return (
            <section className="OPCGeneralRenderContentComponent">
                <fieldset className="first-fieldset outer-field">
                    <label className="first-fieldset__TIDLabel">
                        <span>Tag_id</span>
                        <Input
                            enable
                            id="tid"
                            value={this.props.TID}
                            onChange={(value) => this.props.onChangeHandler(value, 'TID')}
                        />
                    </label>
                    <label className="first-fieldset__DESLabel">
                        <span>Description</span>
                        <Input
                            enable
                            id="des"
                            value={this.props.DES}
                            onChange={(value) => this.props.onChangeHandler(value, 'DES')}
                        />
                    </label>
                    <label className="CheckboxLabel first-fieldset__ACTLabel">
                        <Checkbox
                            id="act"
                            checked={this.props.ACT}
                            onChange={(value) => this.props.onChangeHandler(value, 'ACT')} />
                        <span>Active</span>
                    </label>
                    <label className="CheckboxLabel first-fieldset__ARCLabel">
                        <Checkbox
                            id="arc"
                            checked={this.props.ARC}
                            onChange={(value) => this.props.onChangeHandler(value, 'ARC')} />
                        <span>Archive</span>
                    </label>
                    <label className="first-fieldset__NSLabel">
                        <span>Name-space</span>
                        <Input
                            enable
                            id="ns"
                            type="number"
                            value={this.props.NS.toString()}
                            onChange={(value) => this.props.onChangeHandler(value, 'NS')}
                        />
                    </label>
                    <label className="first-fieldset__NIDLabel">
                        <span>Node-id</span>
                        <Input
                            enable
                            id="nid"
                            type="number"
                            value={this.props.NID.toString()}
                            onChange={(value) => this.props.onChangeHandler(value, 'NID')}
                        />
                    </label>
                    <label className="first-fieldset__SOALabel">
                        <span>Source Address</span>
                        <TextArea
                            className="first-fieldset__SOATextArea"
                            id="soa"
                            value={this.props.SOA}
                            onChange={(value) => this.props.onChangeHandler(value, 'SOA')}
                        />
                    </label>
                </fieldset>
                <fieldset className="second-fieldset outer-field">
                    <label >
                        <span>Minimum</span>
                        <Input
                            enable
                            id="vmn"
                            type="number"
                            value={this.props.VMN.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'VMN')}
                        />
                    </label>
                    <label >
                        <span>Maximum</span>
                        <Input
                            enable
                            id="vmx"
                            type="number"
                            value={this.props.VMX.toString()}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'VMX')}
                        />
                    </label>
                    <label >
                        <span>Unit</span>
                        <Input
                            enable
                            id="unt"
                            value={this.props.UNT}
                            onChange={(value) => this.props.onChangeHandler(value, 'UNT')}
                        />
                    </label>
                </fieldset>
            </section>
        )
    }
}

export default OPCGeneralRenderContentComponent