import useEtherUnitConverter from './hooks/useEtherUnitConverter';
import { EtherUnitDetails } from './interfaces/global.types';
import UnitInput from './UnitInput';

const Body = () => {
  const {
    conversionData,
    handleEtherConverter,
    handleActiveUnit,
    isActiveUnit,
  } = useEtherUnitConverter();
  return (
    <main className="main-content">
      {Object.entries(conversionData).map(
        ([unitName, unitDetails]: [
          unitName: string,
          unitDetails: EtherUnitDetails
        ]) => (
          <UnitInput
            key={unitName}
            unitName={unitName}
            unitDetails={unitDetails}
            isActiveUnit={isActiveUnit}
            handleActiveUnit={handleActiveUnit}
            handleEtherConverter={handleEtherConverter}
          />
        )
      )}
    </main>
  );
};

export default Body;
