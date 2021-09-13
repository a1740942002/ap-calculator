<template>
  <div class="w-10/12 mx-auto space-y-8 py-8">
    <div>
      <h1 class="text-3xl font-semibold">ATM 殺星計算機</h1>
      <p>給我 ATM 殺星，我給你全世界。</p>
    </div>

    <div class="flex justify-between">
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
        <h3 class="text-xl">設定目標</h3>
        <div>
          <label for="">目標深淵點</label>
          <n-input-number
            v-model:value="expectAp"
            clearable
            placeholder="請輸入您的目標深淵點..."
          />
          <p>距離你的目標還差 {{ result }} 深淵點</p>
          <p>
            需要再與 ATM 殺星對刷 {{ Math.ceil(result / userBrushTotal) }} 次！
          </p>
        </div>

        <div>
          <p>我想當...</p>
          <SelectPosition />
          <p>
            距離你想當的職位還差 {{ selectPosition?.levelUpAp - userAp }} 深淵點
          </p>
          <p>需要再與 ATM 殺星對刷 100 次！</p>
        </div>

        <div>
          <p>我想換...</p>
          <SelectGear />
          <p>距離你想換的武器還差</p>
          <p>需要再與 ATM 殺星對刷 19 次！</p>
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
          />
          <p>您預計獲取 {{ userBrushGet }} 深淵點</p>
          <p>ATM 殺星 預計獲取 {{ atmBrushGet }} 深淵點</p>
        </div>

        <div>
          <label for="">被殺次數</label>
          <n-input-number
            v-model:value="deadNum"
            clearable
            placeholder="請輸入您要被擊殺的次數"
          />
          <p>您預計損失 {{ userBrushLose }} 深淵點</p>
          <p>ATM 殺星 預計損失 {{ atmBrushLose }} 深淵點</p>
        </div>
        <div>
          <p>您總計獲得 {{ userBrushTotal }} 深淵點</p>
          <p>ATM 殺星總計獲得 {{ atmBrushTotal }} 深淵點</p>
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
import PositionTable from "@/components/PositionTable.vue";
import AbyssGearTable from "@/components/AbyssGearTable.vue";
import SelectPosition from "@/components/SelectPosition.vue";
import SelectGear from "@/components/SelectGear.vue";

import {
  userPosition,
  setUserPosition,
  nextUserPosition,
  atmPosition,
  setAtmPosition,
} from "@/hooks/usePosition";
import { selectPosition } from "@/hooks/useSelect";
import { ref, computed, watchEffect } from "vue";

export default {
  components: {
    PositionTable,
    AbyssGearTable,
    SelectPosition,
    SelectGear,
  },
  setup() {
    const userAp = ref();
    const expectAp = ref();
    const atmAp = ref();
    const result = computed(() => expectAp.value - userAp.value);
    const killNum = ref();
    const deadNum = ref();
    const userBrushGet = computed(
      () => killNum.value * atmPosition.value?.getAp
    );
    const userBrushLose = computed(
      () => deadNum.value * userPosition.value?.loseAp
    );
    const userBrushTotal = computed(
      () => userBrushGet.value - userBrushLose.value
    );

    watchEffect(() => {
      setUserPosition(userAp.value);
      setAtmPosition(atmAp.value);
    });

    return {
      userAp,
      expectAp,
      atmAp,
      result,
      killNum,
      deadNum,
      userBrushGet,
      userBrushLose,
      userBrushTotal,
      userPosition,
      nextUserPosition,
      atmPosition,
      selectPosition,
    };
  },
};
</script>