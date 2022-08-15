import React, { Component } from "react";
import TabPanel, { Item } from "devextreme-react/tab-panel"
import OPCGeneralRenderContentComponent from "./OPCGeneralRenderContentComponent/OPCGeneralRenderContentComponent"
import OPCSensorSettingRenderContentComponent from "./OPCSensorSettingRenderContentComponent/OPCSensorSettingRenderContentComponent"
import OPCEventSettingRenderContentComponent from "./OPCEventSettingRenderContentComponent/OPCEventSettingRenderContentComponent"
import "./OPCTabPanel.scss"
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { IOPCTag } from "../../@types/entities/opc-tag";

interface IProps {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IOPCTag) => void
    data: IOPCTag
    selectedtabIndex: number
    onSelectedTabChanged(e: number): void
    show: boolean
}

class OPCTabPanelComponent extends Component<IProps> {

    render() {
        return (
            <TabPanel
                className="Popup__OPCTabPanel"
                id="OPCTabPanel"
                height="95%"
                width="100%"
                loop={false}
                animationEnabled={true}
                swipeEnabled={true}
                selectedIndex={this.props.selectedtabIndex}
                onSelectedIndexChange={this.props.onSelectedTabChanged}
            >
                <Item title="General" >
                    {this.props.show && <OPCGeneralRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data} />}
                </Item>
                <Item title="Sensor Setting" >
                    {this.props.show && <OPCSensorSettingRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data}
                    />}

                </Item>
                <Item title="Event Setting" >
                    {this.props.show && <OPCEventSettingRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data}
                    />}
                </Item>
            </TabPanel>
        );
    }
}

export default OPCTabPanelComponent;