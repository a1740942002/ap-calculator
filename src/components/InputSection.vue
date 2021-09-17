<template>
  <n-card title="輸入資料" style="margin-bottom: 16px">
    <n-tabs type="line">
      <n-tab-pane name="選擇軍階" tab="選擇軍階" class="space-y-4">
        <div>
          <label>魔族玩家軍階</label>
          <User1SelectPosition />
        </div>
        <div>
          <label>天族玩家軍階</label>
          <User2SelectPosition />
        </div>
      </n-tab-pane>
      <n-tab-pane name="輸入深淵點" tab="輸入深淵點">
        <InputByAp />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
import {
  userPosition,
  atmPosition,
  user1SelectPosition,
  user2SelectPosition,
} from "@/hooks/useState.js";
import { watchEffect } from "vue";
export default {
  setup() {
    watchEffect(() => {
      userPosition.value = user1SelectPosition.value;
      atmPosition.value = user2SelectPosition.value;
    });

    return {
      user1SelectPosition,
      user2SelectPosition,
    };
  },
};
</script>