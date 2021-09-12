<template>
  <h1>ATM 殺星計算機</h1>
  <form action="">
    <label for="">請輸入您目前的深淵點：</label>
    <input type="number" v-model="currentAp" />
    <label for="">預計達成的深淵點：</label>
    <input type="number" v-model="expectAp" />
    <n-button type="primary">計算</n-button>
    <p>目前 {{ currentAp }}</p>
    <p>預計 {{ expectAp }}</p>
    <p>還差 {{ result }}</p>
    <DataTable />
  </form>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import { ref, computed } from "vue";

export default {
  components: {
    DataTable,
  },
  setup() {
    const currentAp = ref();
    const expectAp = ref();
    const result = computed(() => expectAp.value - currentAp.value);

    return {
      currentAp,
      expectAp,
      result,
    };
  },
};
</script>