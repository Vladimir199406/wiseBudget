<template>
  <q-layout>
    <header-nav />

    <q-page-container class="layoutContainer">
      <router-view />
    </q-page-container>

    <footer-nav />
  </q-layout>
</template>

<script>
import FooterNav from "src/components/FooterNav.vue";
import HeaderNav from "src/components/HeaderNav.vue";

export default {
  name: "MainLayout",
  components: {
    FooterNav,
    HeaderNav,
  },
};
</script>
