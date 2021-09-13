import { ref } from 'vue';
import positionData from '@/data/positionData.json';

export const selectPosition = ref({});

export const setSelectPosition = (value) => {
  const position = positionData.find((pos) => {
    return pos.rank == value;
  });
  selectPosition.value = position;
};
