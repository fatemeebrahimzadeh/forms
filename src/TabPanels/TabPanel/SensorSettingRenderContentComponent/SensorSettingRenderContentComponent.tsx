import React, { Component } from "react";
import "./SensorSettingRenderContentComponent.scss"
import { ITag } from "../../../@types/entities/tag";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";

interface IProps extends ITag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof ITag) => void
    sensorSettingsensorTypeSelectionOptions: { NUMBER: number, NAME: string }[]
    sensorSettingtagsSelectionOptions: { value: string; text: string; }[]
}

class SensorSettingRenderContentComponent extends Component<IProps> {

    st: number
    ip: number
    ft: number
    enabledScaleFieldset: boolean
    enabledCompensationFieldset: boolean
    timeout: NodeJS.Timeout | undefined

    constructor(props: IProps) {
        super(props)
        this.st = props.SNT
        this.ip = 0
        this.ft = 0
        this.enabledScaleFieldset = !!this.props.SCL
        this.enabledCompensationFieldset = !this.props.CKY
        this.timeout = undefined
    }


    componentDidUpdate() {
        this.timeout && clearTimeout(this.timeout)
    }

    ScaleFieldsetenableHandler = (prevenabledScaleFieldset: boolean) => {
        this.enabledScaleFieldset = !prevenabledScaleFieldset
    }

    CompensationFieldsetenableHandler = (CKY: number) => {
        this.enabledCompensationFieldset = !CKY
    }

    sntHandler = (isCalculateSNT: boolean) => {

        if (true) {
            this.st = 0
            this.ip = 0
            this.ft = 1
        } else {
            if (isCalculateSNT) {

                let SNT = this.st + (this.ft * 128) + (this.ip * 256)
                this.props.onChangeHandler(SNT, 'SNT')

            } else {

                this.st = this.props.SNT
                this.ip = 0
                this.ft = 0

                if (this.st >= 256) {
                    this.ip = 1
                    this.st -= 256
                }
                if (this.st >= 128) {
                    this.ft = 1
                    this.st -= 128
                }
            }
        }

    }

    render() {

        let sensorTypeSelectionOptions = this.props.sensorSettingsensorTypeSelectionOptions.map((option, index) => ({ value: String(option.NUMBER), text: option.NAME }))
        sensorTypeSelectionOptions.unshift({ value: "0", text: "" })

        this.sntHandler(false)

        return (
            <section className="SensorSetting" >
                <fieldset className="SensorSetting__first-fieldset outer-field">
                    <legend>
                        <label>
                            <Checkbox
                                id="scl"
                                checked={this.props.SCL}
                                enableHandler={() => this.ScaleFieldsetenableHandler(this.enabledScaleFieldset)}
                                onChange={(value) => this.props.onChangeHandler(value, 'SCL')} />
                            Scale
                        </label>
                    </legend>
                    <label className="emptyLable">
                    </label>
                    <label className="lowLable">
                        Low
                    </label>
                    <label className="highLable">
                        High
                    </label>
                    <label className="rawLable">
                        Raw Value Range
                    </label>
                    {/*  Low */}
                    <Input
                        className="spnInput"
                        type="number"
                        id="spn"
                        value={this.props.SPN.toString()}
                        enable={this.enabledScaleFieldset}
                        onChange={(value) => this.props.onChangeHandler(Number(value), 'SPN')}
                    />
                    {/*High  */}
                    <Input
                        className="spxInput"
                        type="number"
                        id="spx"
                        value={this.props.SPX.toString()}
                        enable={this.enabledScaleFieldset}
                        onChange={(value) => this.props.onChangeHandler(Number(value), 'SPX')}
                    />

                    <label className="scaledLable">
                        Scaled Value Range
                    </label>
                    <Input
                        className="ssnInput"
                        type="number"
                        id="ssn"
                        value={this.props.SSN.toString()}
                        enable={this.enabledScaleFieldset}
                        onChange={(value) => this.props.onChangeHandler(Number(value), 'SSN')}
                    />
                    <Input
                        className="ssxInput"
                        type="number"
                        id="ssx"
                        value={this.props.SSX.toString()}
                        enable={this.enabledScaleFieldset}
                        onChange={(value) => this.props.onChangeHandler(Number(value), 'SSX')}
                    />

                </fieldset>
                <fieldset className="outer-field">
                    <legend>Sensor Settings</legend>
                    <label >
                        <span>Sensor Type</span>
                        <Select
                            enable
                            id="st"
                            value={this.st}
                            onChange={(value) => { this.st = value; this.sntHandler(true); }}
                            options={sensorTypeSelectionOptions}
                        />
                    </label>
                    <label >
                        <span>Filter Type</span>
                        <Select
                            enable
                            id="ft"
                            value={this.ft}
                            onChange={(value) => { this.ft = value; this.sntHandler(true); }}
                            options={[{ value: "null", text: "" }, { value: "0", text: "Strong" }, { value: "1", text: "Normal" }]} />
                    </label>
                    <label className="CheckboxLabel">
                        <span>Invert Polarity</span>
                        <Checkbox
                            id="ip"
                            checked={this.ip}
                            onChange={(value) => { this.ip = value as number; this.sntHandler(true); }} />
                    </label>
                </fieldset>
                <fieldset className="outer-field">
                    <label >
                        <span>Unit</span>
                        <Input
                            enable
                            id="unt"
                            value={this.props.UNT}
                            onChange={(value) => this.props.onChangeHandler(value, 'UNT')}
                        />
                    </label>
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
                </fieldset>
                <fieldset className="outer-field">
                    <legend>Compensation</legend>
                    <label >
                        <span>Tags</span>
                        <Select
                            enable
                            id="cky"
                            value={this.props.CKY}
                            enableHandler={this.CompensationFieldsetenableHandler}
                            onChange={(value) => this.props.onChangeHandler(value, 'CKY')}
                            options={this.props.sensorSettingtagsSelectionOptions} />
                    </label>
                    <label >
                        <span>Value</span>
                        <Input
                            type="number"
                            id="cvl"
                            value={this.props.CVL.toString()}
                            enable={this.enabledCompensationFieldset}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'CVL')}
                        />
                    </label>
                </fieldset>
            </section>
        );
    }
}

export default SensorSettingRenderContentComponent;