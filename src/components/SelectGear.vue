<template>
  <n-space vertical>
    <n-select
      v-model:value="value"
      :options="options"
      placeholder="請選擇裝備"
      disabled="true"
    />
  </n-space>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
import { setSelectGear } from "@/hooks/useSelect";

export default defineComponent({
  setup() {
    const value = ref(null);
    watchEffect(() => setSelectGear(value.value));

    return {
      value,
      options: [
        {
          label: "精銳千夫長雙手武器",
          value: 18,
        },
      ],
    };
  },
});
</script>