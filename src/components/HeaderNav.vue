<template>
  <q-header>
    <q-toolbar class="row blueContainer toolbar-wrapper">
      <q-toolbar-title class="col-8 col-md-9"> wiseBudget </q-toolbar-title>
      <q-btn
          @click.prevent="logOut"
          type="submit"
          class="standart-fat col-4 col-sm-3 toolbar-wrapper__button--size-desktop"
          color="primary"
          >Log Out</q-btn  
      >
    </q-toolbar>
  </q-header>
</template>

<script>
import { useStoreAuth } from "../stores/storeAuth";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      appVersion: "1.0",
    };
  },
  methods: {
    ...mapActions(useStoreAuth, ["logoutUser"]),
    logOut() {
      this.logoutUser();
    }
  },
};
</script>

<style lang="scss">
  @import "../css/custom/variables.scss";

  .toolbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: $tabletMedia) {
      .toolbar-wrapper {
        &__button {
          &--size-desktop {
            width: 150px;
          }
        }
      }
    }
  }
</style>
