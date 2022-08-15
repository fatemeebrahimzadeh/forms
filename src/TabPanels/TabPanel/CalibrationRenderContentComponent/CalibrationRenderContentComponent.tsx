import React, { Component } from "react";
import { ITag } from "../../../@types/entities/tag";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import Input from "../../../UI/Input/Input";
import "./CalibrationRenderContentComponent.scss"

interface IProps extends ITag {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof ITag) => void
}

class CalibrationRenderContentComponent extends Component<IProps> {

    enabledCalibrationFieldset: boolean
    timeout: NodeJS.Timeout | undefined

    constructor(props: IProps) {
        super(props)
        this.enabledCalibrationFieldset = !!this.props.CAL
        this.timeout = undefined
    }

    componentDidUpdate() {
        this.enabledCalibrationFieldset = !!this.props.CAL
        this.timeout && clearTimeout(this.timeout)
    }

    CalibrationFieldsetenableHandler = (prevenabledCalibrationFieldset: boolean) => {
        this.enabledCalibrationFieldset = !prevenabledCalibrationFieldset
    }
    render() {

        return (
            <section className="Calibration">
                <fieldset className="fieldset outer-field">
                    <legend>
                        <label className="CheckboxLabel">
                            <Checkbox
                                id="cal"
                                checked={this.props.CAL}
                                enableHandler={() => this.CalibrationFieldsetenableHandler(this.enabledCalibrationFieldset)}
                                onChange={(value) => this.props.onChangeHandler(value, 'CAL')} />
                            Need to Calibration
                        </label>
                    </legend>
                    <label>
                        <span>zero</span>
                        <Input
                            type="number"
                            id="caz"
                            value={this.props.CAZ.toString()}
                            enable={this.enabledCalibrationFieldset}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'CAZ')}
                        />
                    </label>
                    <label>
                        <span>span</span>
                        <Input
                            type="number"
                            id="cas"
                            value={this.props.CAS.toString()}
                            enable={this.enabledCalibrationFieldset}
                            onChange={(value) => this.props.onChangeHandler(Number(value), 'CAS')}
                        />
                    </label>
                </fieldset>
            </section>
        );
    }
}

export default CalibrationRenderContentComponent;