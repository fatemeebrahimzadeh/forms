import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { useState } from 'react';
import './App.css';
import Popup, { IPopupActions } from './UI/Popup/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { IDigitalTag } from './@types/entities/digitaltag';
import { IVirtualTag } from './@types/entities/virtual-tag';
import { IOPCTag } from './@types/entities/opc-tag';
import DigitalTabPanelComponent from './TabPanels/DigitalTabPanel/DigitalTabPanel';
import VirtualTagTabPanelComponent from './TabPanels/VirtualTagTabPanel/VirtualTagTabPanel';
import OPCTabPanel from './TabPanels/OPCTabPanel/OPCTabPanel';
import Tag from './FakeData/tags';
import { ITag } from './@types/entities/tag';
import TabPanel from './TabPanels/TabPanel/TabPanel';

interface IState {
  analogForm: IAnalogData
  digitalForm: IDigitalForm
  virtualForm: IVirtualForm
  opcForm: IOpcForm
  deviceDescription: { name: string, serialNumber: number, channel: string }
  textDescription: string
  tagselectionoptions: { value: string, text: string }[]
  sensortypes: { NUMBER: number, NAME: string }[],
}

interface IAnalogData {
  actions: IPopupActions
  selectedindex: number
  data: ITag
  icon: JSX.Element | undefined
  isSubmited: boolean
}

interface IDigitalForm {
  actions: IPopupActions
  show: boolean
  selectedIndex: number
  data: IDigitalTag
  icon: JSX.Element | undefined
  isSubmited: boolean
}

interface IVirtualForm {
  actions: IPopupActions
  selectedindex: number
  show: boolean
  data: IVirtualTag
  icon: JSX.Element | undefined
  isSubmited: boolean
  mode: "create" | "update"
}

interface IOpcForm {
  actions: IPopupActions
  selectedindex: number
  show: boolean
  data: IOPCTag
  icon: JSX.Element | undefined
  isSubmited: boolean
  mode: "create" | "update"
}

function App() {

  //#endregion analog

  const [analogShow, setAnalogShow] = useState<boolean>(true)

  const analogOnChangeHandler = (value: number | string | boolean, fieldName: keyof ITag) => {
    setState((prevState: IState) => (
      {
        ...state,
        analogForm: {
          ...prevState.analogForm,
          show: true,
          data: {
            ...prevState.analogForm.data!,
            [fieldName]: value
          }
        }
      }
    ));
  }

  const analogSelectionChange = (e: number) => {
    setState((prevState: IState) => (
      {
        ...state,
        analogForm: {
          ...prevState.analogForm,
          selectedindex: e
        },
      }
    ))
  }

  const analogOnCloseHandler = () => {
    setAnalogShow(false)
    setState((prevState: IState) => ({
      ...state,
      analogForm: {
        ...prevState.analogForm,
        show: false,
        selectedindex: 0
      }
    }))
  }

  //#endregion

  //#region digital

  const [digitalShow, setDigitalShow] = useState<boolean>(false)

  const digitalOnChangeHandler = (value: number | string | boolean, fieldName: keyof IDigitalTag) => {
    setState((prevState: IState) => (
      {
        ...state,
        digitalForm: {
          ...prevState.digitalForm,
          show: true,
          data: {
            ...prevState.digitalForm.data,
            [fieldName]: value
          }
        }
      }
    ))
  }

  const digitalTabChange = (e: number) => {
    setState((prevstate: IState) => (
      {
        ...state,
        digitalForm: {
          ...prevstate.digitalForm,
          selectedIndex: e
        }
      }
    ))
  }

  const digitalOnCloseHandler = () => {
    setDigitalShow(false)
    setState((prevState: IState) => ({
      ...state,
      digitalForm: {
        ...prevState.digitalForm,
        show: false,
        selectedindex: 0
      }
    }))
  }

  //#endregion

  //#region virtual

  const [virtualShow, setVirtualShow] = useState<boolean>(false)

  const virtualOnChangeHandler = (value: number | string | boolean, fieldName: keyof IVirtualTag) => {
    setState((prevState: IState) => (
      {
        ...state,
        virtualForm: {
          ...prevState.virtualForm,
          show: true,
          data: {
            ...prevState.virtualForm.data!,
            [fieldName]: value
          }
        }
      }
    ));
  }

  const virtualSelectionChange = (e: number) => {
    setState((prevState: IState) => (
      {
        ...state,
        virtualForm: {
          ...prevState.virtualForm,
          selectedindex: e
        },
      }
    ))
  }

  const virtualOnCloseHandler = () => {
    setVirtualShow(false)
    setState((prevState: IState) => ({
      ...state,
      virtualForm: {
        ...prevState.virtualForm,
        show: false,
        selectedindex: 0
      }
    }))
  }

  //#endregion

  //#region opc

  const [opcShow, setOPCShow] = useState<boolean>(false)

  const opcOnChangeHandler = (value: number | string | boolean, fieldName: keyof IOPCTag) => {
    setState((prevState: IState) => (
      {
        ...state,
        opcForm: {
          ...prevState.opcForm,
          show: true,
          data: {
            ...prevState.opcForm.data!,
            [fieldName]: value
          }
        }
      }
    ));
  }

  const opcSelectionChange = (e: number) => {
    setState((prevState: IState) => (
      {
        ...state,
        opcForm: {
          ...prevState.opcForm,
          selectedindex: e
        },
      }
    ))
  }

  const opcOnCloseHandler = () => {
    setOPCShow(false)
    setState((prevState: IState) => ({
      ...state,
      opcForm: {
        ...prevState.opcForm,
        show: false,
        selectedindex: 0
      }
    }))
  }

  //#endregion

  const [state, setState] = useState<IState>({
    sensortypes: [{ NAME: "Â±125mV", NUMBER: 1 }, { NAME: "Â±250mV", NUMBER: 2 }, { NAME: "Â±1V", NUMBER: 3 }, { NAME: "Â±5V", NUMBER: 4 }, { NAME: "0~5V", NUMBER: 5 }, { NAME: "1~5V", NUMBER: 6 }, { NAME: "Â±10V", NUMBER: 7 }, { NAME: "0~10V", NUMBER: 8 }, { NAME: "Â±2mA", NUMBER: 10 }, { NAME: "0~5mA", NUMBER: 11 }, { NAME: "0~20mA", NUMBER: 13 }, { NAME: "4~20 mA", NUMBER: 14 }, { NAME: "Â±25mA", NUMBER: 15 }, { NAME: "Â±40mA", NUMBER: 16 }, { NAME: "0~200 â¦", NUMBER: 43 }, { NAME: "0~ 1K â¦", NUMBER: 44 }, { NAME: "0~ 10K â¦", NUMBER: 45 }, { NAME: "RTD PT10", NUMBER: 18 }, { NAME: "RTD PT20", NUMBER: 19 }, { NAME: "RTD PT50", NUMBER: 20 }, { NAME: "RTD PT100", NUMBER: 21 }, { NAME: "RTD PT200", NUMBER: 22 }, { NAME: "RTD PT250", NUMBER: 23 }, { NAME: "RTD PT300", NUMBER: 24 }, { NAME: "RTD PT400", NUMBER: 25 }, { NAME: "RTD PT500", NUMBER: 26 }, { NAME: "RTD PT1000", NUMBER: 27 }, { NAME: "RTD JPT100", NUMBER: 28 }, { NAME: "RTD Cu10", NUMBER: 29 }, { NAME: "RTD Cu20", NUMBER: 30 }, { NAME: "RTD Cu50", NUMBER: 31 }, { NAME: "RTD Cu100", NUMBER: 32 }, { NAME: "RTD Ni120", NUMBER: 35 }, { NAME: "RTD RP21", NUMBER: 37 }, { NAME: "RTD RP23", NUMBER: 38 }, { NAME: "RTD 50M", NUMBER: 39 }, { NAME: "RTD 50P", NUMBER: 40 }, { NAME: "RTD 100M", NUMBER: 41 }, { NAME: "RTD 100P", NUMBER: 42 }, { NAME: "TC (B)", NUMBER: 48 }, { NAME: "TC (E)", NUMBER: 49 }, { NAME: "TC (J)", NUMBER: 50 }, { NAME: "TC (K)", NUMBER: 51 }, { NAME: "TC (L)", NUMBER: 52 }, { NAME: "TC (N)", NUMBER: 53 }, { NAME: "TC (R)", NUMBER: 54 }, { NAME: "TC (S)", NUMBER: 55 }, { NAME: "TC (T)", NUMBER: 56 }, { NAME: "TC (Wre3-25)", NUMBER: 57 }, { NAME: "TC (Wre5-26)", NUMBER: 58 }, { NAME: "TC (XA)", NUMBER: 59 }, { NAME: "TC (XK)", NUMBER: 60 }],
    deviceDescription: { name: 'APEX 794 1', serialNumber: 10000, channel: 'CH 1' },
    textDescription: "VIRTUALTAG",
    tagselectionoptions: [{ text: 'Constant Value', value: '0' }, { value: '1', text: 'Signal_one' }, { value: '2', text: 'signal-2' }, { value: '3', text: 'signal-3' }, { value: '4', text: 'signal-4' }, { value: '5', text: 'signal-5' }, { value: '6', text: 'signal-6' }, { value: '7', text: 'siganl_7' }, { value: '8', text: 'signal_8' }, { value: '9', text: 'signal_9' }, { value: '10', text: 'signal_10' }],
    analogForm: {
      selectedindex: 0,
      isSubmited: false,
      actions: {
        onSubmitHandler: () => { },
        onCloseHandler: analogOnCloseHandler,
        selectionChange: analogSelectionChange
      },
      data: {
        ACT: 1,
        ADB: "0",
        ARC: 1,
        ARE: 0,
        CAL: 1,
        CAS: 0,
        CAZ: 0,
        CKY: 12,
        CTY: 0,
        CVL: 0,
        DEB: 0,
        DES: "test tags",
        DKY: 1,
        FLT: 0,
        HIC: "#fcb900",
        HID: 0,
        HIM: "test",
        HIV: 0,
        HSN: 1,
        HYS: 0,
        KKS: "0",
        LEN: 1,
        LOC: "#fcb900",
        LOD: 0,
        LOM: "test",
        LOV: 0,
        NMC: "#00d084",
        NMM: "te",
        OHC: "#eb144c",
        OHD: 0,
        OHM: "te",
        OHV: 0,
        SCL: 1,
        SFX: 0,
        SNT: 6,
        SPN: 0,
        SPX: 123457000,
        SSN: 1234,
        SSX: 0,
        STY: 0,
        TID: "Signal_one",
        TYP: 1,
        ULC: "#eb144c",
        ULD: 0,
        ULM: "test",
        ULV: 0,
        UNT: "12",
        VMN: 20,
        VMX: 0,
        id: 1,
        val: 1
      },
      icon: <FontAwesomeIcon icon={faEdit} />
    },
    digitalForm: {
      show: false,
      selectedIndex: 0,
      isSubmited: false,
      actions: {
        onSubmitHandler: () => { },
        onCloseHandler: digitalOnCloseHandler,
        selectionChange: digitalTabChange
      },
      data: {
        id: 0,
        TYP: 2,
        TID: "",
        DES: "",
        ACT: 0,
        LEN: 0,
        HIM: "",
        LOM: "",
        DEB: 0,
        HIC: "#00D084",
        LOC: "#EB144C",
        ARE: 1,
        DKY: 0,
        HSN: 0
      },
      icon: undefined
    },
    virtualForm: {
      show: false,
      selectedindex: 0,
      isSubmited: false,
      mode: "create",
      actions: {
        onSubmitHandler: () => { },
        onCloseHandler: virtualOnCloseHandler,
        selectionChange: virtualSelectionChange
      },
      data: {
        id: 0,
        TID: "",
        DES: "",
        ACT: 0,
        ARC: 0,
        VMN: "",
        VMX: "",
        UNT: "",
        FLT: "",
        VT: 0,
        FRM: "",
        val: undefined,
        TYP: 0
      },
      icon: undefined
    },
    opcForm: {
      show: false,
      selectedindex: 0,
      isSubmited: false,
      mode: "create",
      actions: {
        onSubmitHandler: () => { },
        onCloseHandler: opcOnCloseHandler,
        selectionChange: opcSelectionChange
      },
      data: {
        id: 0,
        TID: "",
        VMN: "",
        VMX: "",
        HYS: "",
        OHV: "",
        HIV: "",
        LOV: "",
        ULV: "",
        FLT: "",
        OHM: "",
        HIM: "",
        NMM: "",
        LOM: "",
        ULM: "",
        UNT: "",
        DES: "",
        ACT: 0,
        LEN: 0,
        ARC: 0,
        LOC: "",
        HIC: "",
        IMN: "",
        IMX: "",
        SMN: "",
        SMX: "",
        ULC: "",
        NMC: "",
        OHC: "",
        NS: "",
        NID: "",
        SOA: "",
        val: undefined,
        TYP: 0,
        ARE: 0
      },
      icon: undefined
    }
  })

  return (
    <>
      <button onClick={() => { setAnalogShow(!analogShow) }}>analog</button>
      <button onClick={() => { setDigitalShow(!digitalShow) }}>digital</button>
      <button onClick={() => { setVirtualShow(!virtualShow) }}>virtual</button>
      <button onClick={() => { setOPCShow(!opcShow) }}>opc</button>
      <Popup
        width="45%"
        height="55vh"
        show={analogShow}
        actions={state.analogForm.actions}
        deviceDescription={state.deviceDescription}
        icon={state.analogForm.icon}
        content={<TabPanel
          selectedtabIndex={state.analogForm.selectedindex}
          onSelectedTabChanged={state.analogForm.actions.selectionChange!}
          onChangeHandler={analogOnChangeHandler}
          data={state.analogForm.data}
          sensorSettingtagsSelectionOptions={state.tagselectionoptions}
          sensorSettingsensorTypeSelectionOptions={state.sensortypes}
          show={analogShow}
        />}
      />
      <Popup
        width="45%"
        height="55vh"
        show={digitalShow}
        actions={state.digitalForm.actions}
        deviceDescription={state.deviceDescription}
        icon={state.digitalForm.icon}
        content={<DigitalTabPanelComponent
          selectedtabIndex={state.digitalForm.selectedIndex}
          onSelectedTabChanged={state.digitalForm.actions.selectionChange!}
          onChangeHandler={digitalOnChangeHandler}
          data={state.digitalForm.data}
          show={digitalShow}
        />}

      />
      <Popup
        width="45%"
        height="55vh"
        show={virtualShow}
        actions={state.virtualForm.actions}
        textDescription={state.textDescription}
        icon={state.virtualForm.icon}
        content={<VirtualTagTabPanelComponent
          selectedtabIndex={state.virtualForm.selectedindex}
          onSelectedTabChanged={state.virtualForm.actions.selectionChange!}
          onChangeHandler={virtualOnChangeHandler}
          data={state.virtualForm.data}
          show={virtualShow}
          tags={Tag()} />}
      />
      <Popup
        width="45%"
        height="55vh"
        show={opcShow}
        actions={state.opcForm.actions}
        textDescription={state.textDescription}
        icon={state.opcForm.icon}
        content={<OPCTabPanel
          selectedtabIndex={state.opcForm.selectedindex}
          onSelectedTabChanged={state.opcForm.actions.selectionChange!}
          onChangeHandler={opcOnChangeHandler}
          data={state.opcForm.data}
          show={opcShow}
        />}
      />
    </>
  );
}

export default App;
