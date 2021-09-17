<template>
  <div class="w-10/12 mx-auto space-y-8 py-8">
    <div>
      <h1 class="text-3xl font-semibold">深淵點互刷計算機</h1>
    </div>

    <div class="flex justify-between space-x-4">
      <div class="flex-1">
        <InputSection />
      </div>

      <div class="flex-1">
        <BrushSection />
      </div>
    </div>

    <div class="space-y-8">
      <PositionTable />
      <AbyssGearTable />
    </div>
    <n-back-top :right="32" />
  </div>
</template>
