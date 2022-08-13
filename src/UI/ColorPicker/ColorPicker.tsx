import React, { Component } from 'react'
import { ColorResult, TwitterPicker } from 'react-color'
import Backdrop from '../Backdrop/Backdrop'

import './ColorPicker.scss'

interface IProps {
  onChangeHandler: (color: ColorResult) => void
  color: string
  showPolet?: boolean
  enable: boolean
  defaultValue?: string
  id?: string
  onFocus?(): void
}

interface IState {
  show: boolean
}

export default class ColorPicker extends Component<IProps, IState> {

  state = {
    show: false
  }

  componentDidMount() {
    if (!this.props.color.length) {
      this.props.onChangeHandler({
        hex: this.props.defaultValue || '#ffffff',
        hsl: { h: 0, s: 0, l: 0, a: 1 },
        rgb: { r: 255, g: 255, b: 255, a: 1 }
      })
    }

    const elements = Array.from(document.getElementsByClassName('color-picker')[0].querySelectorAll('div'))

    var searchText = "#";

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].textContent == searchText) {
        elements[i].style.display = 'none'
        break;
      }
    }
  }

  showHandler = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  onChangeHandler = (color: ColorResult) => {
    this.props.onChangeHandler(color)
    this.showHandler()
  }

  onFocus = () => {
    this.props.onFocus && this.props.onFocus()
  }

  render() {

    return (
      <div className="color-picker" onFocus={this.onFocus}>
        <div
          id={this.props.id}
          className={`color-picker-preview ${!this.props.enable && 'disabled'}`}
          style={{ backgroundColor: this.props.enable ? this.props.color : '' }}
          onClick={this.showHandler}>

        </div>
        <Backdrop visibility={this.state.show} handler={this.showHandler} />

        <div className={`picker-plot ${this.state.show ? 'show' : 'hide'} ${this.props.showPolet ? '' : 'hide-plote'}`} >
          {this.state.show && <TwitterPicker
            color={this.props.color}
            onChangeComplete={this.onChangeHandler}
          />}
        </div>
      </div>)
  }
}