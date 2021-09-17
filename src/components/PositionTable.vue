<template>
  <n-card title="軍階表">
    <n-data-table :columns="columns" :data="data" :max-height="500" />
  </n-card>
</template>

<script>
import { NDataTable } from "naive-ui";
import { defineComponent } from "vue";
import positionDatas from "@/data/positionDatas.json";

const createData = () => positionDatas;

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
    {
      title: "各族限制人數",
      key: "limit",
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