<template>
  <n-data-table :columns="columns" :data="data" :max-height="500" />
</template>

<script>
import { NDataTable } from "naive-ui";
import { defineComponent } from "vue";

const createData = () => [
  {
    name: "執政官十夫長之巨劍",
    level: 30,
    requireAp: 175900,
    medal: null,
    medalNum: 0,
  },
  {
    name: "執政官百夫長之巨劍",
    level: 40,
    requireAp: 106350,
    medal: "🥈",
    medalNum: 18,
  },
  {
    name: "精銳執政官千夫長之巨劍",
    level: 50,
    requireAp: 645540,
    medal: "🥇",
    medalNum: 65,
  },
];

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