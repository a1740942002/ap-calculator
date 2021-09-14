<template>
  <div class="w-10/12 mx-auto space-y-8 py-8">
    <div>
      <h1 class="text-3xl font-semibold">ATM 殺星計算機</h1>
      <p>給我 ATM 殺星，我給你全世界。</p>
    </div>

    <div class="flex justify-between space-x-4">
      <div class="space-y-4">
        <h3 class="text-xl">填寫資料</h3>

        <div>
          <label for="">目前深淵點</label>
          <n-input-number
            v-model:value="userAp"
            clearable
            placeholder="請輸入您目前的深淵點..."
          />

          <div v-if="userAp">
            <p v-if="userPosition.name != '總司令'">
              你目前為 {{ userPosition.name }}，距離下一階級 (
              {{ nextUserPosition.name }} ) 還差
              {{ nextUserPosition.levelUpAp - userAp }} 點。
            </p>
            <p v-else>你目前為 {{ userPosition.name }}，已經達到最高階級。</p>
          </div>
        </div>

        <div>
          <label for="">ATM 殺星目前深淵點</label>
          <n-input-number
            v-model:value="atmAp"
            clearable
            placeholder="請輸入您目前的深淵點..."
          />
          <p v-if="atmAp">
            ATM 殺星目前為 {{ atmPosition.name }}，掉回上一階級還差
            {{ atmAp - atmPosition.levelUpAp }}
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl">對刷相關</h3>
        <div>
          <label for="">殺 ATM 殺星次數</label>
          <n-input-number
            v-model:value="killNum"
            clearable
            placeholder="請輸入您要擊殺的次數"
            max="6"
          />
          <div v-if="userBrushGet">
            <p>您預計獲取 {{ userBrushGet }} 深淵點</p>
            <p>ATM 殺星 預計獲取 {{ atmBrushGet }} 深淵點</p>
          </div>
        </div>

        <div>
          <label for="">被殺次數</label>
          <n-input-number
            v-model:value="deadNum"
            clearable
            placeholder="請輸入您要被擊殺的次數"
            max="6"
          />
          <div v-if="userBrushLose">
            <p>您預計損失 {{ userBrushLose }} 深淵點</p>
            <p>ATM 殺星 預計損失 {{ atmBrushLose }} 深淵點</p>
          </div>
        </div>

        <div v-if="userBrushTotal && atmBrushTotal">
          <n-divider />
          <n-alert :type="userBrushTotal > 0 ? 'success' : 'error'">
            <p>您總計獲得 {{ userBrushTotal }} 深淵點</p>
          </n-alert>
          <n-alert :type="atmBrushTotal > 0 ? 'success' : 'error'">
            <p>ATM 殺星總計獲得 {{ atmBrushTotal }} 深淵點</p>
          </n-alert>
        </div>
        <div v-else-if="atmBrushTotal == 0">
          <n-divider />
          <n-alert :type="userBrushTotal > 0 ? 'success' : 'error'">
            <p>您總計獲得 {{ userBrushTotal }} 深淵點</p>
          </n-alert>
          <n-alert type="warning">
            <p>ATM 殺星總計獲得 {{ atmBrushTotal }} 深淵點</p>
          </n-alert>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl">設定目標</h3>
        <div>
          <label for="">目標深淵點</label>
          <n-input-number
            v-model:value="expectAp"
            clearable
            placeholder="請輸入目標深淵點..."
          />
          <div v-if="expectAp">
            <p>距離你的目標還差 {{ goalResult }} 深淵點</p>
            <p>
              需要再與 ATM 殺星對刷
              {{ Math.ceil(goalResult / userBrushTotal) }} 次！
            </p>
          </div>
        </div>

        <div>
          <p>我想當...</p>
          <SelectPosition />
          <div v-if="selectPosition">
            <p>
              距離你想當的職位還差
              {{ selectPosition?.levelUpAp - userAp }} 深淵點
            </p>
            <p>
              需要再與 ATM 殺星對刷
              {{
                Math.ceil((selectPosition?.levelUpAp - userAp) / userBrushTotal)
              }}
              次！
            </p>
          </div>
        </div>

        <div>
          <p>我想換...</p>
          <SelectGear />
          <div v-if="selectGear?.requireAp - userAp <= 0">
            <p>恭喜，你已經可以兌換該裝備。</p>
            <p>
              兌換之後剩餘深淵點：
              {{ userAp - selectGear?.requireAp }}
            </p>
            <p v-if="userAp - selectGear?.requireAp < 150800">
              建議再多存
              {{ 150800 - userAp + selectGear?.requireAp }} 深淵點以上才進行兌換
              。
            </p>
            <p v-else>有保持 1 等兵以上，請安心兌換。</p>
          </div>
          <div v-else-if="selectGear">
            <p>距離你想換的武器還差 {{ selectGear?.requireAp - userAp }}</p>
            <p>
              需要再與 ATM 殺星對刷
              {{ Math.ceil((selectGear?.requireAp - userAp) / userBrushTotal) }}
              次！
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-8">
      <PositionTable />
      <AbyssGearTable />
    </div>
    <n-back-top :right="32" />
  </div>
</template>

<script>
import {
  userPosition,
  setUserPosition,
  nextUserPosition,
  atmPosition,
  setAtmPosition,
  selectPosition,
  selectGear,
} from "@/hooks/useState";
import { ref, computed, watchEffect } from "vue";

export default {
  setup() {
    const userAp = ref();
    const expectAp = ref();
    const atmAp = ref();
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

    watchEffect(() => {
      setUserPosition(userAp.value);
      setAtmPosition(atmAp.value);
    });

    return {
      userAp,
      expectAp,
      atmAp,
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