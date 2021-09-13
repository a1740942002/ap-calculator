<template>
  <n-data-table :columns="columns" :data="data" :max-height="500" />
</template>

<script>
import { NDataTable } from "naive-ui";
import { defineComponent } from "vue";
import abyssGearDatas from "@/data/abyssGearDatas.json";

const createData = () => abyssGearDatas;

const createColumns = () => {
  return [
    {
      title: "名稱",
      key: "name",
    },
    {
      title: "等級",
      key: "level",
    },
    {
      title: "所需深淵點數",
      key: "requireAp",
    },
    {
      title: "勳章種類",
      key: "medal",
    },
    {
      title: "勳章數量",
      key: "medalNum",
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