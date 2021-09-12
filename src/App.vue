<template>
  <div class="w-10/12 mx-auto space-y-8">
    <h1 class="text-2xl">ATM 殺星計算機</h1>

    <div class="flex">
      <div>
        <div>
          <label for="">目前深淵點</label>
          <n-input-number
            v-model:value="currentAp"
            clearable
            placeholder="請輸入您目前的深淵點..."
          />
        </div>

        <div>
          <p>
            經過計算，你目前為 2 等兵，距離下一階級 ( 1 等兵 ) 還差 1230 點。
          </p>
          <p>需要再與 ATM 殺星對刷 5 次！</p>
        </div>
      </div>

      <div class="space-y-2 w-64">
        <div>
          <label for="">目標深淵點</label>
          <n-input-number
            v-model:value="expectAp"
            clearable
            placeholder="請輸入您的目標深淵點..."
          />
          <p>距離你的目標還差 {{ result }}</p>
        </div>

        <div>
          <p>我想當...</p>
          <Select />
          <p>距離你想當的職位還差</p>
        </div>

        <div>
          <p>我想換...</p>
          <Select />
          <p>距離你想換的武器還差</p>
        </div>
      </div>
    </div>

    <div>
      <PositionTable />
      <AbyssGearTable />
    </div>
    <n-back-top :right="32" />
  </div>
</template>

<script>
import PositionTable from "@/components/PositionTable.vue";
import AbyssGearTable from "@/components/AbyssGearTable.vue";
import Select from "@/components/Select.vue";
import { ref, computed } from "vue";

export default {
  components: {
    PositionTable,
    AbyssGearTable,
    Select,
  },
  setup() {
    const currentAp = ref();
    const expectAp = ref();
    const result = computed(() => expectAp.value - currentAp.value);

    return {
      currentAp,
      expectAp,
      result,
    };
  },
};
</script>