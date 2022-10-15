import BigNumber from 'bignumber.js';
import { EtherUnitDetails, EtherUnits } from '../interfaces/global.types';
BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN });

class EthereumUnitConverter {
  value: number | string;
  defaultUnit: EtherUnits;
  units: Record<string, EtherUnitDetails>;

  constructor() {
    this.defaultUnit = EtherUnits.GWEI;
    this.value = 1;
    this.units = {
      wei: { key: EtherUnits.WEI, value: '0' },
      kwei: { key: EtherUnits.KWEI, value: '0' },
      mwei: { key: EtherUnits.MWEI, value: '0' },
      gwei: { key: EtherUnits.GWEI, value: '0' },
      microether: { key: EtherUnits.MICROETHER, value: '0' },
      milliether: { key: EtherUnits.MILLIETHER, value: '0' },
      ether: { key: EtherUnits.ETHER, value: '0' },
    };
    this.init();
  }

  get defaults() {
    return this.units;
  }

  private getConvertedValue(value: number, from: number, to: number) {
    return new BigNumber(value)
      .multipliedBy(new BigNumber(from))
      .dividedBy(new BigNumber(to))
      .toString(10);
  }

  getEtherUnits(value: number, from: number, to: number) {
    this.units.wei.value = this.getConvertedValue(value, from, EtherUnits.WEI);

    this.units.kwei.value = this.getConvertedValue(
      value,
      from,
      EtherUnits.KWEI
    );
    this.units.mwei.value = this.getConvertedValue(
      value,
      from,
      EtherUnits.MWEI
    );
    this.units.gwei.value = this.getConvertedValue(
      value,
      from,
      EtherUnits.GWEI
    );
    this.units.microether.value = this.getConvertedValue(
      value,
      from,
      EtherUnits.MICROETHER
    );
    this.units.milliether.value = this.getConvertedValue(
      value,
      from,
      EtherUnits.MILLIETHER
    );
    this.units.ether.value = this.getConvertedValue(
      value,
      from,
      EtherUnits.ETHER
    );
    return this.units;
  }

  get wei() {
    return this.units.wei;
  }

  get kwei() {
    return this.units.kwei;
  }

  get mwei() {
    return this.units.mwei;
  }

  get gwei() {
    return this.units.gwei;
  }

  get microether() {
    return this.units.microether;
  }

  get milliether() {
    return this.units.milliether;
  }

  get ether() {
    return this.units.ether;
  }

  private init() {
    return this.getEtherUnits(1, EtherUnits.GWEI, EtherUnits.ETHER);
  }
}

export default EthereumUnitConverter;
