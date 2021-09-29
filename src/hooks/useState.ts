import { ref } from 'vue';
import abyssGearDatas from '../data/abyssGearDatas.json';
import positionDatas from '../data/positionDatas.json';

export const userAp = ref();
export const atmAp = ref();

export const selectGear = ref({});
export const setSelectGear = (name) => {
  const gear = abyssGearDatas.find((ger) => {
    return ger.name == name;
  });
  selectGear.value = gear;
};

export const selectPosition = ref({});
export const setSelectPosition = (value) => {
  const position = positionDatas.find((pos) => {
    return pos.rank == value;
  });
  selectPosition.value = position;
};

export const nextUserPosition = ref({});
export const setNextUserPosition = (position) => {
  const revData = [...positionDatas].reverse();
  const nextPosition = revData.find((pos) => {
    return position?.rank + 1 == pos?.rank;
  });
  nextUserPosition.value = nextPosition || revData[0];
};

export const userPosition = ref({});
export const setUserPosition = (abyssPoint) => {
  const revData = [...positionDatas].reverse();
  const position = revData.find((position) => {
    return abyssPoint >= position.levelUpAp;
  });
  userPosition.value = position;
  setNextUserPosition(position);
};

export const atmPosition = ref({});
export const setAtmPosition = (abyssPoint) => {
  const revData = [...positionDatas].reverse();
  const position = revData.find((position) => {
    return abyssPoint >= position.levelUpAp;
  });
  atmPosition.value = position;
};

export const user1SelectPosition = ref({});
export const setUser1SelectPosition = (value) => {
  const position = positionDatas.find((pos) => {
    return pos.rank == value;
  });
  user1SelectPosition.value = position;
};

export const user2SelectPosition = ref({});
export const setUser2SelectPosition = (value) => {
  const position = positionDatas.find((pos) => {
    return pos.rank == value;
  });
  user2SelectPosition.value = position;
};
