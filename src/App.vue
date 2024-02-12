<script>
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  methods: {},
  components: {
    Navbar,
  },
  created() {
    this.initUserData();
  },

  methods: {
    initUserData() {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      if (!userData) {
        return;
      }
      if (userData.status) {
        this.$store.dispatch("setUserData", userData);
        this.$router.push("/application/student");
      }
    },
  },
});
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
