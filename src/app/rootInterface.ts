export interface RootObject {
  src: number;
  feeds: Feed[];
  srcFeed: number;
  showSil: boolean;
  showFlg: boolean;
  showPic: boolean;
  flgH: number;
  flgW: number;
  acList: AcList[];
  totalAc: number;
  lastDv: string;
  shtTrlSec: number;
  stm: number;
}

export interface AcList {
  Id: number;
  Rcvr: number;
  HasSig: boolean;
  Sig?: number;
  Icao: string;
  Bad: boolean;
  Reg?: string;
  FSeen: string;
  TSecs: number;
  CMsgs: number;
  AltT: number;
  Tisb: boolean;
  TrkH: boolean;
  Type?: string;
  Mdl?: string;
  Man?: string;
  CNum?: string;
  Op?: string;
  OpIcao?: string;
  Sqk: string;
  VsiT: number;
  WTC: number;
  Species: number;
  Engines?: string;
  EngType: number;
  EngMount: number;
  Mil: boolean;
  Cou: string;
  HasPic: boolean;
  Interested: boolean;
  FlightsCount: number;
  Gnd?: boolean;
  SpdTyp: number;
  CallSus: boolean;
  Trt: number;
  Year?: string;
  Alt?: number;
  GAlt?: number;
  InHg?: number;
  Lat?: number;
  Long?: number;
  PosTime?: number;
  Mlat?: boolean;
  Spd?: number;
  Trak?: number;
  Vsi?: number;
  Call?: string;
  From?: string;
  To?: string;
  Help?: boolean;
  TAlt?: number;
  TTrk?: number;
  PicX?: number;
  PicY?: number;
  Stops?: string[];
  Tag?: string;
  PosStale?: boolean;
  Sat?: boolean;
}

export interface Feed {
  id: number;
  name: string;
  polarPlot: boolean;
}
