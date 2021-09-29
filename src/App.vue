<template>
  <n-notification-provider>
    <Header />
    <router-view></router-view>
    <Footer />
  </n-notification-provider>
  <n-back-top :right="32" :visibility-height="300" />
</template>

<script lang="ts">
import { useAuth } from "./hooks/useAuth";
import { provide, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { user, isLogin, token, getMe } = useAuth();
    if (token.value) {
      getMe(token).then((userData) => (user.value = userData));
    }
    provide("user", user);
    provide("isLogin", isLogin);

    return { user, isLogin, token };
  },
});
</script>

<style>
#nprogress .bar {
  background: rgb(231, 255, 231) !important;
}
</style>