<template>
  <h1>Home</h1>
</template>

<script>
import { provide, ref, reactive } from "vue";
export default {
  setup() {
    const location = ref("North Pole");
    const geolocation = reactive({
      longitude: 93,
      latitude: 135,
    });

    provide("location", location);
    provide("geolocation", geolocation);
  },
};
</script>