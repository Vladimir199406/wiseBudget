<template>
  <q-footer>
    <q-tabs class="row bg-blue-grey-6">
      <q-route-tab
        v-for="link in linksList"
        :key="link"
        :to="link.link"
        class="col text-center"
        ><strong>{{ link.title }}</strong></q-route-tab
      >
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      linksList: [
        {
          title: "Budget",
          link: "/",
        },
        {
          title: "Cards",
          link: "/cards",
        },
        {
          title: "Settings",
          link: "/settings",
        },
        {
          title: "Account",
          link: "/account",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
