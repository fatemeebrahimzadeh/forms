import React, { Component } from "react";
import Option from "./Option/Option"

interface IProps {
    name?: string
    id?: string
    value: number
    enable: boolean
    enableHandler?: (CKY: number) => void
    options: { value: string, text: string }[]
    onChange: (value: number, event: React.ChangeEvent<HTMLSelectElement>) => void
    onSubmitedModeValidationHandler?: () => void
    className?: string
    onFocus?: () => void
}

interface IState {
    value: string
}

class Select extends Component<IProps, IState> {

    convertedToStringValue: string
    convertedToNumberValue: number

    constructor(props: IProps) {
        super(props)
        this.convertedToStringValue = "0"
        this.convertedToNumberValue = 0

        this.convertToString(this.props.value)

        this.state = {
            value: this.convertedToStringValue
        }
    }

    componentDidUpdate(prevProps: IProps) {
        if (prevProps !== this.props) {
            this.convertToString(this.props.value)
            this.setState(() => ({
                value: this.convertedToStringValue
            }))

        }
    }

    convertToString = (numberValue: number) => {
        this.convertedToStringValue = String(numberValue)
    }

    convertToNumber = (stringValue: string) => {
        this.convertedToNumberValue = Number(stringValue)
    }

    onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.onSubmitedModeValidationHandler && this.props.onSubmitedModeValidationHandler()
        let value = event.target.value

        this.convertToNumber(value)
        this.props.onChange(this.convertedToNumberValue, event)

        this.setState({
            value
        });

        this.props.enableHandler && this.props.enableHandler(this.convertedToNumberValue)
    }

    onFocus = () => {
        this.props.onFocus && this.props.onFocus()
    }

    render() {

        let options = this.props.options.map((option, index) => <Option key={index} value={option.value}>{option.text}</Option>)

        return (
            <select
                className={this.props.className ? `Select ${this.props.className}` : "Select"}
                disabled={!this.props.enable}
                name={this.props.name}
                id={this.props.id}
                value={this.state.value}
                onChange={this.onChange}
                onFocus={() => this.onFocus()}>
                {options}
            </select>
        );
    }

}

export default Select;