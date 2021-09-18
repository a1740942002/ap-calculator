<template>
  <n-card title="互刷相關">
    <div class="mb-4">
      <label for="">魔族殺天族次數</label>
      <n-input-number
        v-model:value="killNum"
        clearable
        placeholder="請輸入您要擊殺的次數"
        :max="isEloyRankOne ? 5 : 6"
        min="0"
      />
      <div class="space-y-1 mt-1" v-if="userBrushGet">
        <p class="text-gray-700 text-xs">
          魔族預計獲取 {{ userBrushGet }} 深淵點
        </p>
        <p class="text-gray-700 text-xs">
          天族預計損失 {{ atmBrushLose }} 深淵點
        </p>
        <p v-if="isEloyRankOne" class="text-gray-700 text-xs">
          提醒：天族玩家為 {{ user2SelectPosition.name }}，1
          等兵以上的階級每人最多只能被擊殺 5 次，再多將無法取得。
        </p>
        <p v-else class="text-gray-700 text-xs">
          提醒：天族玩家為 {{ user2SelectPosition.name }}，1
          等兵以下的階級每人最多可以被擊殺 6 次，再多將無法取得。
        </p>
      </div>
    </div>

    <div>
      <label for="">天族殺魔族次數</label>
      <n-input-number
        v-model:value="deadNum"
        clearable
        placeholder="請輸入您要被擊殺的次數"
        :max="isAsmoRankOne ? 5 : 6"
        min="0"
      />
      <div class="space-y-1 mt-1" v-if="userBrushLose">
        <p class="text-gray-700 text-xs">
          魔族預計損失 {{ userBrushLose }} 深淵點
        </p>
        <p class="text-gray-700 text-xs">
          天族預計獲取 {{ atmBrushGet }} 深淵點
        </p>
        <p v-if="isAsmoRankOne" class="text-gray-700 text-xs">
          提醒：魔族玩家為 {{ user1SelectPosition.name }}，1
          等兵以上的階級每人最多只能被擊殺 5 次，再多將無法取得。
        </p>
        <p v-else class="text-gray-700 text-xs">
          提醒：魔族玩家為 {{ user1SelectPosition.name }}，1
          等兵以下的階級每人最多可以被擊殺 6 次，再多將無法取得。
        </p>
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
  user1SelectPosition,
  user2SelectPosition,
} from "@/hooks/useState";
import { ref, computed } from "vue";

export default {
  setup() {
    const expectAp = ref();
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

    const isAsmoRankOne = computed(
      () => userAp >= 150800 || user1SelectPosition.value?.levelUpAp >= 150800
    );
    const isEloyRankOne = computed(
      () => atmAp >= 150800 || user2SelectPosition.value?.levelUpAp >= 150800
    );

    return {
      userAp,
      atmAp,
      expectAp,
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
      isAsmoRankOne,
      isEloyRankOne,
      user1SelectPosition,
      user2SelectPosition,
    };
  },
};
</script>