<template>
  <q-layout view="lHh Lpr lFf">
    <header-nav />

    <q-page-container class="bg-blue-grey-2">
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
