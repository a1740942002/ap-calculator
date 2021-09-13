<template>
  <n-space vertical>
    <n-select
      v-model:value="value"
      :options="options"
      placeholder="請選擇裝備"
    />
  </n-space>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
import { setSelectPosition } from "@/hooks/useSelect";

export default defineComponent({
  setup() {
    const value = ref(null);
    watchEffect(() => setSelectPosition(value.value));

    return {
      value,
      options: [
        {
          label: "精銳千夫長武器",
          value: 18,
        },
      ],
    };
  },
});
</script>