import { useEffect, useState } from "react"

import "./TextArea.scss"

type validationNames = 'required' | 'number' | 'max' | 'min' | 'custom'

export interface ITextAreaValidationRules {
    name: validationNames,
    value?: number,
    handler?: (val: string) => string | undefined
    runtime?: 'onEvent' | 'onChange' | 'onBlur'
}

export interface IProps {
    value: string
    onChange?: (
        value: string,
        e?: React.ChangeEvent<HTMLTextAreaElement>
    ) => void
    rows?: number
    cols?: number
    name?: string
    placeholder?: string
    wrap?: string
    className?: string
    formId?: string
    maxLength?: number
    disabled?: boolean
    readOnly?: boolean
    autoFocus?: boolean
    required?: boolean
    groupName?: string
    validation?: ITextAreaValidationRules[]
    type?: 'number'
    onFocus?: () => void
    id?: string
}

export default function TextArea(props: IProps) {

    //#region checkValidation

    const [validationMessages, setValidationMessages] = useState<string[]>([])

    //#endregion

    const onWheel = (event: React.WheelEvent<HTMLTextAreaElement>) => {
        event.preventDefault();

        event.currentTarget.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        });
    }

    const onFocus = () => {
        props.onFocus && props.onFocus()
    }

    return (
        <div className="Textarea">
            <textarea
                onWheel={onWheel}
                onChange={(event) => { onChangeHandler(event, props.onChange) }}
                value={props.value}
                className={`Textarea__feild ${props.className} ${validationMessages.length ? "invalid-textarea" : ""}`}
                rows={props.rows}
                cols={props.cols}
                name={props.name}
                placeholder={props.placeholder}
                wrap={props.wrap}
                form={props.formId}
                maxLength={props.maxLength}
                disabled={props.disabled}
                readOnly={props.readOnly}
                autoFocus={props.autoFocus}
                required={props.required}
                data-testid='textarea'
                onFocus={onFocus}
                id={props.id}
            />
            {validationMessages.length ? <div className="validation-group-messages">
                <span className="error-message">{validationMessages[0]}</span>
            </div> : <></>}
        </div>
    )
}

export const onChangeHandler = (event?: React.ChangeEvent<HTMLTextAreaElement>, propsOnChange?: (value: string, e?: React.ChangeEvent<HTMLTextAreaElement>) => void, extrnalValue: string = '') => {

    let value = ''
    if (event) {
        value = event.target.value
    } else {
        value = extrnalValue
    }

    propsOnChange && propsOnChange(value, event)
}

export const checkTextAreaValidate = (
    value: string,
    validationRules?: ITextAreaValidationRules[],
    runime?: ITextAreaValidationRules['runtime'],
    type?: 'number'
) => {
    let validationMessages: string[] = []

    if (validationRules && validationRules.length) {

        for (const validation of validationRules) {

            switch (validation.name) {

                case 'required':
                    if (!value.trim().length) {
                        validationMessages.push('This Field is Required')
                    }
                    break

                case 'number':
                    if (!value.length || isNaN(Number(value))) {
                        validationMessages.push('Please enter Numberic values')
                    }
                    break

                case 'max':
                    if (type === 'number') {

                        if (!isNaN(Number(value))) {
                            if (Number(value) > validation.value!) {
                                validationMessages.push(`Less than ${validation.value! + 1} is acceptable`)
                            }
                        }

                    } else {
                        if (value.length > validation.value!) {
                            validationMessages.push(`Less than ${validation.value! + 1} character is acceptable`)
                        }
                    }
                    break

                case 'min':
                    if (type === 'number') {

                        if (!isNaN(Number(value))) {
                            if (Number(value) < validation.value!) {
                                validationMessages.push(`More than ${validation.value! - 1} is acceptable`)
                            }
                        }

                    } else {
                        if (value.length < validation.value!) {
                            validationMessages.push(`More than ${validation.value! - 1} character is acceptable`)
                        }

                    }
                    break

                case 'custom':
                    if (validation.runtime) {
                        if (runime === validation.runtime) {
                            const customValidationMessage = validation.handler!(value)
                            customValidationMessage && validationMessages.push(customValidationMessage)
                        }
                    } else {
                        const customValidationMessage = validation.handler!(value)
                        customValidationMessage && validationMessages.push(customValidationMessage)
                    }
                    break
            }

        }

    }

    return validationMessages

}