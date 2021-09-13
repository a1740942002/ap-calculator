import { ref } from 'vue';
import positionData from '@/data/positionData.json';
export const revData = [...positionData].reverse();
export const userPosition = ref({});
export const nextUserPosition = ref({});
export const atmPosition = ref({});

export const setNextUserPosition = (position) => {
  const nextPosition = revData.find((pos) => {
    return position?.rank + 1 == pos?.rank;
  });
  nextUserPosition.value = nextPosition || revData[0];
};

export const setUserPosition = (abyssPoint) => {
  const position = revData.find((position) => {
    return abyssPoint >= position.levelUpAp;
  });
  userPosition.value = position;
  setNextUserPosition(position);
};

export const setAtmPosition = (abyssPoint) => {
  const position = revData.find((position) => {
    return abyssPoint >= position.levelUpAp;
  });
  atmPosition.value = position;
};
