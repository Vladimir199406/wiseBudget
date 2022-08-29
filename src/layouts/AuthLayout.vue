<template>
  <q-layout class="q-page flex flex-center layoutContainer">
    <header-nav />

    <q-page-container class="blueContainer auth-container">
      <q-tabs class="text-white auth-container__header" v-model="tab">
        <q-tab name="login">
          <strong class="standart-fat">Login</strong>
        </q-tab>
        <q-tab name="register">
          <strong class="standart-fat">Register</strong>
        </q-tab>
      </q-tabs>

      <form class="q-pa-md row items-start q-gutter-md auth-container__body">
        <q-card class="full-width">
          <q-card-section>
            <div>
              <p class="q-my-md">Email</p>
              <div>
                <q-input
                  filled
                  type="email"
                  label="e.g. example@gmail.com"
                  v-model="credentials.email"
                />
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div>
              <p class="q-my-md">Password</p>
              <div>
                <q-input
                  filled
                  type="password"
                  label="Enter a password"
                  v-model="credentials.password"
                />
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="row">
            <q-btn
              @click.prevent="onSubmit"
              type="submit"
              class="col-12 standart-fat"
              color="primary"
              >{{ formTitle }}</q-btn
            >
          </q-card-section>
        </q-card>
      </form>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import { useStoreAuth } from "../stores/storeAuth";
import { mapActions } from "pinia";

export default {
  components: { HeaderNav },
  data() {
    return {
      register: false,
      tab: "login",
      credentials: {
        email: "",
        password: "",
        //storeAuth: this.useStoreAuth(),
      },
    };
  },

  computed: {
    formTitle() {
      return this.tab === "login" ? "Login" : "Register";
    },
  },

  methods: {
    ...mapActions(useStoreAuth, ["registerUser", "loginUser"]),
    onSubmit() {
      if (!this.credentials.email || !this.credentials.password) {
        console.log("Add data, please test");
      } else {
        if (this.tab === "register") {
          this.registerUser(this.credentials);
        } else {
          this.loginUser(this.credentials);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/custom/variables.scss";

.auth-container {
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;

  &__header {
    margin: $space20px $zeroDefault;
  }

  &__body {
    margin: $zeroDefault $zeroDefault $space20px $zeroDefault;
  }

  @media (min-width: $tabletMedia) {
    width: 600px;
  }
}
</style>
