import React, { Component } from "react";
import TabPanel, { Item } from "devextreme-react/tab-panel"
import VirtualGeneralRenderContentComponent from "./VirtualGeneralRenderContentComponent/VirtualGeneralRenderContentComponent"
import FormulaRenderContentComponent, { IFormulaPropsContext } from "./FormulaRenderContentComponent/FormulaRenderContentComponent"
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { ITag } from "../../@types/entities/tag";
import { IVirtualTag } from "../../@types/entities/virtual-tag";

interface IProps {
    onChangeHandler: (value: number | string | boolean, fieldName: keyof IVirtualTag) => void
    data: IVirtualTag
    selectedtabIndex: number
    onSelectedTabChanged(e: number): void
    show: boolean
    tags: ITag[]
}

class VirtualTagTabPanelComponent extends Component<IProps> {

    render() {
        return (
            <TabPanel
                className="Popup__VirtualTabPanel"
                id="virtualTabPanel"
                height="95%"
                width="100%"
                loop={false}
                animationEnabled={true}
                swipeEnabled={true}
                selectedIndex={this.props.selectedtabIndex}
                onSelectedIndexChange={this.props.onSelectedTabChanged}
            >
                <Item title="General" >
                    {this.props.show && <VirtualGeneralRenderContentComponent
                        onChangeHandler={this.props.onChangeHandler}
                        {...this.props.data} />}
                </Item>
                <Item title="Formula" >
                    {this.props.show && <FormulaRenderContentComponent
                        FRM={this.props.data.FRM}
                        onChangeHandler={this.props.onChangeHandler}
                        tags={this.props.tags} />
                    }
                </Item>
            </TabPanel>
        );
    }
}

export default VirtualTagTabPanelComponent;