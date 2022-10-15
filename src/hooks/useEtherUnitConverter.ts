import { useState } from 'react';
import { EtherUnits } from '../interfaces/global.types';
import EthereumUnitConverter from '../util/EthereumUnitConverter';

const useEtherUnitConverter = () => {
  const [activeUnit, setActiveUnit] = useState(EtherUnits.GWEI);
  const etherUnitConverter = new EthereumUnitConverter();
  const [conversionData, setConversionData] = useState(
    etherUnitConverter.defaults
  );

  const isActiveUnit = (unit: EtherUnits) => unit === activeUnit;

  const handleEtherConverter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number.isInteger(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : 0;
    setConversionData({
      ...etherUnitConverter.getEtherUnits(
        inputValue,
        activeUnit,
        EtherUnits.ETHER
      ),
    });
  };

  const handleActiveUnit = (unit: EtherUnits) => {
    setActiveUnit(unit);
  };

  return {
    conversionData,
    handleEtherConverter,
    handleActiveUnit,
    isActiveUnit,
  };
};

export default useEtherUnitConverter;
