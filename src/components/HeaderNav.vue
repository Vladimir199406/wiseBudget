<template>
  <q-header>
    <q-toolbar class="row blueContainer">
      <q-toolbar-title class="col-8 q-py-md"> wiseBudget </q-toolbar-title>
      <div class="col-4 text-right">v: {{ appVersion }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data() {
    return {
      appVersion: "1.0",
    };
  },
};
</script>

<style lang="scss"></style>
