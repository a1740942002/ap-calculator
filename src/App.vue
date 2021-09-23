<template>
  <n-notification-provider>
    <Header />
    <router-view></router-view>
    <Footer />
  </n-notification-provider>
  <n-back-top :right="32" :visibility-height="300" />
</template>


<style>
#nprogress .bar {
  background: red !important;
}
</style>