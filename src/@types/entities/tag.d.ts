
import { IDigitalTag } from './digitaltag.d'
import { IVirtualTag } from './virtual-tag'

export interface ITag extends IDigitalTag {
  CTY: number
  STY: number
  KKS: string
  ARC: number
  VMN: number | string
  VMX: number | string
  SCL: number
  SPN: number | string
  SPX: number | string
  SSN: number | string
  SSX: number | string
  SFX: number
  CKY: number
  CVL: number | string
  UNT: string
  FLT: number | string
  HYS: number | string
  ULV: number | string
  ULC: string
  ULM: string
  ULD: number
  LOV: number | string
  LOD: number
  NMC: string
  NMM: string
  HIV: number | string
  HID: number
  OHV: number | string
  OHC: string
  OHM: string
  OHD: number
  CAL: number
  CAZ: number | string
  CAS: number | string
  ADB: string
  SNT: number
  val?: number
  backgroundColor?: string
  // type: TagTypeEnum.AP7
}


export interface TagType extends ITag {
  typeId: string
}

export enum TagTypeEnum {
  AP7 = "AP7",
  VIRTUAL = "VIRTUAL",
  OPC = "OPC"
}

export type IAllTags = ITag | IVirtualTag 