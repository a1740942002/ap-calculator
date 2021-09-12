<template>
  <n-data-table :columns="columns" :data="data" />
</template>

<script>
import { NDataTable } from "naive-ui";
import { defineComponent, ref } from "vue";

const createData = () => [
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "8 等兵",
    rank: 2,
    getAp: 168,
    loseAp: 37,
    levelUpAp: 1200,
  },
  {
    name: "7 等兵",
    rank: 3,
    getAp: 235,
    loseAp: 58,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
  {
    name: "9 等兵",
    rank: 1,
    getAp: 1290,
    loseAp: 24,
    levelUpAp: 0,
  },
];

const createColumns = () => {
  return [
    {
      title: "軍階",
      key: "name",
    },
    {
      title: "等級",
      key: "rank",
    },
    {
      title: "獲取 AP",
      key: "getAp",
    },
    {
      title: "損失 AP",
      key: "loseAp",
    },
    {
      title: "升級所需 AP",
      key: "levelUpAp",
    },
  ];
};

export default defineComponent({
  components: {
    NDataTable,
  },
  setup() {
    return {
      data: createData(),
      columns: createColumns(),
    };
  },
});
</script>