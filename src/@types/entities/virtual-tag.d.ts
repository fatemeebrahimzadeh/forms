import { TagTypeEnum } from './tag'

export interface IVirtualTag {
  ACT: number
  ARC: number
  DES: string
  FLT: number | string
  FRM: string
  TID: string
  UNT: string
  VMN: number | string
  VMX: number | string
  VT: number
  id: number
  val: any
  // type: TagTypeEnum.VIRTUAL
  TYP: 0 | 1
}
export interface VirtualTagType extends IVirtualTag {
  typeId: string
}