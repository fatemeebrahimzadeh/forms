import React, { Component } from "react"

import "./GeneralRenderContentComponent.scss"
import { ITag } from "../../../@types/entities/tag"
import Checkbox from "../../../UI/Checkbox/Checkbox"
import Input from "../../../UI/Input/Input"

interface IProps extends ITag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof ITag) => void
}

class GeneralRenderContentComponent extends Component<IProps> {
    render() {
        return (
            <section className="GeneralRenderContentComponent">
                <fieldset className="first-fieldset outer-field">
                    <label >
                        <span>Tag_id</span>
                        <Input
                            enable
                            id="tid"
                            value={this.props.TID}
                            onChange={(value) => this.props.onChangeHandler(value, 'TID')} />
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
                    <div>
                        <label >
                            <span>Minimum</span>
                            <Input
                                enable
                                id="vmn"
                                type="number"
                                value={this.props.VMN.toString()}
                                onChange={(value) => this.props.onChangeHandler(Number(value), 'VMN')} />
                        </label>
                        <label >
                            <span>Maximum</span>
                            <Input
                                enable
                                id="vmx"
                                type="number"
                                value={this.props.VMX.toString()}
                                onChange={(value) => this.props.onChangeHandler(Number(value), 'VMX')} />
                        </label>
                    </div>
                    <label className="CheckboxLabel">
                        <Checkbox
                            id="sfx"
                            checked={this.props.SFX}
                            onChange={(value) => this.props.onChangeHandler(value, 'SFX')} />
                        <span>Fix Scale</span>
                    </label>
                </fieldset>
            </section>
        )
    }
}

export default GeneralRenderContentComponent