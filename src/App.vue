<template>
  <n-notification-provider>
    <Header />
    <router-view></router-view>
    <Footer />
  </n-notification-provider>
  <n-back-top :right="32" :visibility-height="300" />
</template>

<script>
import { useAuth } from "@/hooks/useAuth";
import { provide } from "vue";

export default {
  setup() {
    const { user, isLogin, token, getMe } = useAuth();
    if (token.value) {
      getMe(token).then((userData) => (user.value = userData));
    }
    provide("user", user);
    provide("isLogin", isLogin);

    return { user, isLogin, token };
  },
};
</script>

<style>
#nprogress .bar {
  background: rgb(231, 255, 231) !important;
}
</style>