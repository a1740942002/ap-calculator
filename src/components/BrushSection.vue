<template>
  <n-card title="互刷相關">
    <div class="mb-4">
      <label for="">魔族殺天族次數</label>
      <n-input-number
        v-model:value="killNum"
        clearable
        placeholder="請輸入您要擊殺的次數"
        max="6"
      />
      <div v-if="userBrushGet">
        <p>魔族預計獲取 {{ userBrushGet }} 深淵點</p>
        <p>天族預計損失 {{ atmBrushLose }} 深淵點</p>
      </div>
    </div>

    <div>
      <label for="">天族殺魔族次數</label>
      <n-input-number
        v-model:value="deadNum"
        clearable
        placeholder="請輸入您要被擊殺的次數"
        max="6"
      />
      <div v-if="userBrushLose">
        <p>魔族預計損失 {{ userBrushLose }} 深淵點</p>
        <p>天族預計獲取 {{ atmBrushGet }} 深淵點</p>
      </div>
    </div>

    <div v-if="userBrushTotal && atmBrushTotal">
      <n-divider />
      <n-alert title="魔族" :type="userBrushTotal > 0 ? 'success' : 'error'">
        <p>總計獲得 {{ userBrushTotal }} 深淵點</p>
      </n-alert>
      <n-alert title="天族" :type="atmBrushTotal > 0 ? 'success' : 'error'">
        <p>總計獲得 {{ atmBrushTotal }} 深淵點</p>
      </n-alert>
      <n-alert
        title="雙方"
        :type="userBrushTotal + atmBrushTotal > 0 ? 'success' : 'error'"
      >
        總計獲得 {{ userBrushTotal + atmBrushTotal }} 深淵點
      </n-alert>
    </div>
    <div v-else>
      <n-divider />
      <n-alert type="warning"
        >請輸入完整資料以進行計算，每個欄位都要填寫</n-alert
      >
    </div>
  </n-card>
</template>

<script>
import {
  userAp,
  atmAp,
  userPosition,
  nextUserPosition,
  atmPosition,
  selectPosition,
  selectGear,
} from "@/hooks/useState";
import { ref, computed } from "vue";

export default {
  setup() {
    const expectAp = ref();
    const goalResult = computed(() => expectAp.value - userAp.value);
    const killNum = ref();
    const deadNum = ref();
    const userBrushGet = computed(
      () => killNum.value * atmPosition.value?.getAp
    );
    const atmBrushGet = computed(
      () => deadNum.value * userPosition.value?.getAp
    );

    const userBrushLose = computed(
      () => deadNum.value * userPosition.value?.loseAp
    );
    const atmBrushLose = computed(
      () => killNum.value * atmPosition.value?.loseAp
    );

    const userBrushTotal = computed(
      () => userBrushGet.value - userBrushLose.value
    );
    const atmBrushTotal = computed(
      () => atmBrushGet.value - atmBrushLose.value
    );

    return {
      userAp,
      atmAp,
      expectAp,
      goalResult,
      killNum,
      deadNum,
      userBrushGet,
      atmBrushGet,
      userBrushLose,
      atmBrushLose,
      userBrushTotal,
      atmBrushTotal,
      userPosition,
      nextUserPosition,
      atmPosition,
      selectPosition,
      selectGear,
    };
  },
};
</script>