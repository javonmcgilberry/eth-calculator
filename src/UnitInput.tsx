import { HTMLProps } from 'react';
import { EtherUnitDetails } from './interfaces/global.types';

interface IUnitInput extends HTMLProps<HTMLDivElement> {
  unitName: string;
  unitDetails: EtherUnitDetails;
  handleEtherConverter: any;
  handleActiveUnit: any;
  isActiveUnit: any;
}

const UnitInput = ({
  unitName,
  unitDetails,
  handleEtherConverter,
  handleActiveUnit,
  isActiveUnit,
}: IUnitInput) => {
  const inputValue =
    unitDetails.value === '0' && isActiveUnit(unitDetails.key)
      ? ''
      : unitDetails.value;
  return (
    <label htmlFor={unitName} className="input-wrapper">
      {unitName}
      <input
        id={unitName}
        type="number"
        className="input-field"
        placeholder={unitDetails.value}
        onFocus={() => handleActiveUnit(unitDetails.key)}
        onChange={(e) => {
          handleEtherConverter(e);
        }}
        value={inputValue}
      />
    </label>
  );
};
export default UnitInput;
