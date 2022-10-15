export type EtherUnitDetails = { key: EtherUnits; value: string };

export enum EtherUnits {
  WEI = 1,
  KWEI = 1000,
  MWEI = 1000000,
  GWEI = 1000000000,
  MICROETHER = 1000000000000,
  MILLIETHER = 1000000000000000,
  ETHER = 1000000000000000000,
}
