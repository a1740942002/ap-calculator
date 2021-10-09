<template>
  <div class="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        登入
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        沒有帳號嗎？前往
        {{ " " }}
        <router-link
          :to="{ name: 'SignUp' }"
          class="font-medium text-green-600 hover:text-green-500"
        >
          註冊
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label
              for="identifier"
              class="block text-sm font-medium text-gray-700"
            >
              Email 或 使用者名稱
            </label>
            <div class="mt-1">
              <input
                v-model="identifier"
                id="identifier"
                name="identifier"
                type="text"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-green-500
                  focus:border-green-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              密碼
            </label>
            <div class="mt-1">
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-green-500
                  focus:border-green-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-green-600
                hover:bg-green-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-green-500
              "
            >
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useNotification } from "naive-ui";
import { useAuth } from "../hooks/useAuth";
import { ComputedRef, ref, watchEffect, inject } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { login, error } = useAuth();
    const identifier = ref("");
    const password = ref("");
    const notification = useNotification();
    const isLogin = inject("isLogin") as ComputedRef<number>;
    const router = useRouter();

    const handleLogin = async () => {
      notification.warning({ content: "登入中...", duration: 3000 });
      const res = await login({
        identifier: identifier.value,
        password: password.value,
      });
      if (res.status == 200) {
        notification.success({
          content: "登入成功，將進行跳轉...",
          duration: 3000,
        });
        identifier.value = "";
        password.value = "";
        location.href = "/";
      } else {
        notification.error({ content: error.value, duration: 3000 });
      }
    };

    watchEffect(() => {
      if (isLogin.value) {
        router.push({ name: "Home" });
      }
    });

    return {
      login,
      identifier,
      password,
      handleLogin,
      error,
    };
  },
};
</script>