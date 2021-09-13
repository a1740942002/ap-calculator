<template>
  <n-space vertical>
    <n-select
      v-model:value="value"
      :options="options"
      placeholder="請選擇軍階"
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
          label: "總司令",
          value: 18,
        },
        {
          label: "司令官",
          value: 17,
        },
        {
          label: "大將軍",
          value: 16,
        },
        {
          label: "將軍",
          value: 15,
        },
        {
          label: "五星軍官",
          value: 14,
        },
        {
          label: "四星軍官",
          value: 13,
        },
        {
          label: "三星軍官",
          value: 12,
        },
        {
          label: "二星軍官",
          value: 11,
        },
        {
          label: "一星軍官",
          value: 10,
        },
        {
          label: "1 等兵",
          value: 9,
        },
        {
          label: "2 等兵",
          value: 8,
        },
        {
          label: "3 等兵",
          value: 7,
        },
        {
          label: "4 等兵",
          value: 6,
        },
        {
          label: "5 等兵",
          value: 5,
        },
        {
          label: "6 等兵",
          value: 4,
        },
        {
          label: "7 等兵",
          value: 3,
        },
        {
          label: "8 等兵",
          value: 2,
        },
        {
          label: "9 等兵",
          value: 1,
        },
      ],
    };
  },
});
</script>