<template>
  <nav class="nav-main ">
    <div class="wrapper">
      <img src="../../public/logo.png" class="svg-logo" />
      <section class="menu-btn-group">
        <div class="menu-btn" @click="handleLogin()">
          <p>Home</p>
        </div>
        <!-- <div class="menu-btn">
          <p>Personal Information</p>
        </div> -->

        <div class="menu-btn" v-if="!isLoggedIn" @click="handleLogin()">
          <p>Login</p>
        </div>
        <div class="menu-btn" v-else @click="handleLogout()">
          <p>Logout</p>
        </div>
        
      </section>
    </div>

  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {

  methods: {
    handleLogin() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(["userData"]),
    isLoggedIn() {
      return this.userData !== null;
    },
    handleLogout() {
      sessionStorage.clear("userData");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="css">
nav {
  position: relative;
  overflow: hidden;
  height: 5rem;
  width: 100%;
  background-color: #f4f4f4;
  border-bottom: 2px solid #e4e4e4;
}

.wrapper {
  height: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blue; */
}

.svg-logo {
  /* position: relative; */
  height: 4rem;
}

.menu-btn-group {
  display: flex;
  gap: 2rem;
  height: 100%;
}

.menu-btn {
  /* background-color: red; */
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.menu-btn:hover {
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
}
</style>
