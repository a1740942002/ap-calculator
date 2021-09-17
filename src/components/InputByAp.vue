<template>
  <div class="py-2">
    <label for="">玩家 1 深淵點</label>
    <n-input-number
      v-model:value="userAp"
      clearable
      placeholder="請輸入您目前的深淵點..."
    />
    <div v-if="userAp">
      <p v-if="userPosition.name != '總司令'">
        玩家 1 目前為 {{ userPosition.name }}，距離下一階級 (
        {{ nextUserPosition.name }} ) 還差
        {{ nextUserPosition.levelUpAp - userAp }} 點。
      </p>
      <p v-else>玩家 1 目前為 {{ userPosition.name }}，已經達到最高階級。</p>
    </div>
  </div>

  <div class="py-2">
    <label for="">玩家 2 深淵點</label>
    <n-input-number
      v-model:value="atmAp"
      clearable
      placeholder="請輸入您目前的深淵點..."
    />
    <p v-if="atmAp">
      玩家 2 目前為 {{ atmPosition.name }}，掉回上一階級還差
      {{ atmAp - atmPosition.levelUpAp }}
    </p>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import {
  userAp,
  atmAp,
  userPosition,
  nextUserPosition,
  atmPosition,
  setUserPosition,
  setAtmPosition,
} from "@/hooks/useState";
export default {
  setup() {
    watchEffect(() => {
      setUserPosition(userAp.value);
      setAtmPosition(atmAp.value);
    });

    return {
      userAp,
      atmAp,
      userPosition,
      nextUserPosition,
      atmPosition,
    };
  },
};
</script>