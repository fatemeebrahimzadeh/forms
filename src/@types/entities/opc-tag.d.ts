import { TagTypeEnum } from './tag'

export interface IOPCTag {
    id: number
    TID: string
    DES: string
    SOA: string
    VMN: number | string
    VMX: number | string
    IMN: number | string
    IMX: number | string
    SMN: number | string
    SMX: number | string
    UNT: string
    ACT: number
    ARC: number
    FLT: number | string
    OHV: number | string
    HIV: number | string
    LOV: number | string
    ULV: number | string
    OHM: string
    HIM: string
    NMM: string
    LOM: string
    ULM: string
    HIC: string
    OHC: string
    LOC: string
    NMC: string
    ULC: string
    HYS: number | string
    LEN: number
    // type: TagTypeEnum.OPC
    TYP: 0 | 1
    NS: number | string
    NID: number | string
    ARE: number
    val: any
}
