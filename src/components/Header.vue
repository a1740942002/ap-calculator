<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-green-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-6
          flex
          items-center
          justify-between
          border-b border-green-500
          lg:border-none
        "
      >
        <div class="flex items-center">
          <router-link :to="{ name: 'Home' }">
            <span class="sr-only">深淵點計算機</span>
            <img class="h-10 w-auto" src="../assets/logo_white.png" alt="" />
          </router-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link
              v-for="link in navigation"
              :key="link.name"
              :to="{ name: link.name }"
              class="text-base font-medium text-white hover:text-green-50"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>
        <div v-if="!isLogin" class="ml-10 space-x-4">
          <router-link
            :to="{ name: 'Login' }"
            class="
              inline-block
              bg-green-500
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-white
              hover:bg-opacity-75
            "
            >登入</router-link
          >
          <router-link
            :to="{ name: 'SignUp' }"
            class="
              inline-block
              bg-white
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-green-600
              hover:bg-green-50
            "
            >註冊</router-link
          >
        </div>
        <div class="space-x-4" v-else>
          <span class="text-green-100 inline-block"
            >你好，{{ user.username }}</span
          >
          <button
            @click="logout"
            class="
              inline-block
              bg-white
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-green-600
              hover:bg-green-50
            "
          >
            登出
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuth } from "@/hooks/useAuth";
import { inject } from "vue";

const navigation = [{ name: "Home", label: "首頁" }];

export default {
  setup() {
    const { logout } = useAuth();
    const user = inject("user");
    const isLogin = inject("isLogin");

    return {
      user,
      navigation,
      logout,
      isLogin,
    };
  },
};
</script>