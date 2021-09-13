<template>
  <n-space vertical>
    <n-select
      v-model:value="selectValue"
      :options="selectOptions"
      placeholder="請選擇軍階"
    />
  </n-space>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
import { setSelectPosition } from "@/hooks/useState";
import positionDatas from "@/data/positionDatas.json";

export default defineComponent({
  setup() {
    const selectValue = ref(null);
    const selectOptions = ref([]);
    selectOptions.value = positionDatas.map((positionData) => ({
      label: positionData.name,
      value: positionData.rank,
    }));
    watchEffect(() => setSelectPosition(selectValue.value));

    return {
      selectValue,
      selectOptions,
    };
  },
});
</script>