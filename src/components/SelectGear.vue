<template>
  <n-space vertical>
    <n-select
      v-model:value="selectValue"
      :options="selectOptions"
      placeholder="請選擇裝備"
    />
  </n-space>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
import { selectGear, setSelectGear } from "@/hooks/useState";
import abyssGearDatas from "@/data/abyssGearDatas.json";

export default defineComponent({
  setup() {
    const selectValue = ref(null);
    const selectOptions = ref([]);
    selectOptions.value = abyssGearDatas.map((data) => ({
      label: data.name,
      value: data.name,
    }));

    watchEffect(() => setSelectGear(selectValue.value));

    return {
      selectValue,
      selectOptions,
      selectGear,
    };
  },
});
</script>