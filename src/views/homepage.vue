<template>
  <div class="w-10/12 mx-auto space-y-8 py-8">
    <section v-if="isLogin">
      <div>
        <h1 class="text-3xl font-semibold">深淵點互刷計算機</h1>
        <n-divider />
      </div>

      <div class="md:flex md:justify-between md:space-x-4">
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
    </section>

    <section class="space-y-8" v-else>
      <h3 class="text-xl">
        請<router-link
          :to="{ name: 'Login' }"
          class="text-green-500 hover:text-green-800"
          >登入</router-link
        >以進行使用
      </h3>
      <div>
        <Skeleton />
      </div>

      <div class="md:flex md:justify-between md:space-x-4">
        <div class="flex-1">
          <Skeleton />
        </div>

        <div class="flex-1">
          <Skeleton />
        </div>
      </div>

      <div class="space-y-8">
        <Skeleton />
        <Skeleton />
      </div>
    </section>
  </div>
</template>

<script>
import { useAuth } from "@/hooks/useAuth";

export default {
  setup() {
    const { isLogin } = useAuth();
    return {
      isLogin,
    };
  },
};
</script>