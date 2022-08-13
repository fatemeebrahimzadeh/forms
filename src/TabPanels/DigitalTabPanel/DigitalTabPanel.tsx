import React, { Component } from "react";
import TabPanel, { Item } from "devextreme-react/tab-panel"
import "./DigitalTabPanel.scss"
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import DigitalGeneralRenderContentComponent from "./DigitalGeneralRenderContentComponent/DigitalGeneralRenderContentComponent";
import DigitalEventSettingRenderContentComponent from "./DigitalEventSettingRenderContentComponent/DigitalEventSettingRenderContentComponent";
import { IDigitalTag } from "../../@types/entities/digitaltag";

interface IProps {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IDigitalTag) => void
    data: IDigitalTag
    selectedtabIndex: number
    onSelectedTabChanged(e: number): void
    show: boolean
}

class DigitalTabPanelComponent extends Component<IProps> {

    render() {

        return (
            <TabPanel
                className="Popup__DigitalTabPanel"
                id="digitalTabPanel"
                height="95%"
                width="100%"
                selectedIndex={this.props.selectedtabIndex}
                onSelectedIndexChange={this.props.onSelectedTabChanged}
                loop={false}
                animationEnabled={true}
                swipeEnabled={true}
            >
                <Item title="General" >
                    {this.props.show && <DigitalGeneralRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data} />}
                </Item>
                <Item title="Event Setting" >
                    {this.props.show && <DigitalEventSettingRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data} />}
                </Item>
            </TabPanel>
        );
    }
}

export default DigitalTabPanelComponent;