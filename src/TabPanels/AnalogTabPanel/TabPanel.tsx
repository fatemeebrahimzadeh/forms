import React, { Component } from "react";
import TabPanel, { Item } from "devextreme-react/tab-panel"
import GeneralRenderContentComponent from "./GeneralRenderContentComponent/GeneralRenderContentComponent"
import SensorSettingRenderContentComponent from "./SensorSettingRenderContentComponent/SensorSettingRenderContentComponent"
import EventSettingRenderContentComponent from "./EventSettingRenderContentComponent/EventSettingRenderContentComponent"
import CalibrationRenderContentComponent from "./CalibrationRenderContentComponent/CalibrationRenderContentComponent"
import { ITag } from "../../@types/entities/tag"
import "./TabPanel.scss"
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

interface IProps {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof ITag) => void
    data: ITag
    sensorSettingsensorTypeSelectionOptions: { NUMBER: number, NAME: string }[]
    sensorSettingtagsSelectionOptions: { value: string; text: string; }[]
    selectedtabIndex: number
    onSelectedTabChanged(e: number): void
    show: boolean
}

class TabPanelComponent extends Component<IProps> {

    render() {
        return (
            <TabPanel
                className="Popup__tabpanel"
                id="tabPanel"
                height="95%"
                width="100%"
                loop={false}
                animationEnabled={true}
                swipeEnabled={true}
                selectedIndex={this.props.selectedtabIndex}
                onSelectedIndexChange={this.props.onSelectedTabChanged}
            >
                <Item title="General" >
                    {this.props.show && <GeneralRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data} />}
                </Item>
                <Item title="Sensor Setting" >
                    {this.props.show && <SensorSettingRenderContentComponent
                        sensorSettingtagsSelectionOptions={this.props.sensorSettingtagsSelectionOptions}
                        sensorSettingsensorTypeSelectionOptions={this.props.sensorSettingsensorTypeSelectionOptions}
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data}
                    />}

                </Item>
                <Item title="Event Setting" >
                    {this.props.show && <EventSettingRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data}
                    />}
                </Item>
                <Item title="Calibration" >
                    {this.props.show && <CalibrationRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data}
                    />}
                </Item>
            </TabPanel>
        );
    }
}

export default TabPanelComponent;