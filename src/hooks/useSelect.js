import { ref } from 'vue';
import positionData from '@/data/positionData.json';
import abyssGearData from '@/data/abyssGearData.json';

export const selectPosition = ref({});
export const selectGear = ref({});

export const setSelectPosition = (value) => {
  const position = positionData.find((pos) => {
    return pos.rank == value;
  });
  selectPosition.value = position;
};

export const setSelectGear = (value) => {
  const gear = abyssGearData.find((ger) => {
    return ger.requireAp == value;
  });
  selectGear.value = gear;
};
