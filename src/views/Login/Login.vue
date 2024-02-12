<template>
  <div class="test d-flex align-center justify-center" style="height: 50rem">
    <img
    class="demo-bg"
    src="https://i.ytimg.com/vi/yKMeXpv65Tg/maxresdefault.jpg"
    alt=""
  >
    <v-sheet width="500" height="260" class="content mx-auto ">
      <v-col cols="12"></v-col>

      <h1 class="text-center" style="">ระบบสหกิจศึกษา</h1>
      <v-col cols="12"></v-col>

      <v-form
        model-value
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="username"
          label="รหัสนักศึกษา"
          :rules="usernameRules"
          clearable
          maxlength="10"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="รหัสผ่าน"
          type="password"
          :readonly="loading"
          :rules="passwordRules"
          clearable
        ></v-text-field>
              <v-col cols="12"></v-col>
              

        
        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="red-darken-4"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
      <div class="mt-2"></div>
    </v-sheet>
  </div>
</template>
<script>
import { auth } from "../../services/auth";

export default {
  data() {
    return {
      form: false,
      username: "",
      password: "",
      loading: false,
      usernameRules: [
        (v) => !!v || "กรุณากรอกรหัสนักศึกษา",
        (v) =>
          /^[0-9]{1,10}$/.test(v) ||
          "รหัสนักศึกษาต้องเป็นตัวเลขและมีจำนวนหลักสูงสุด 10 หลัก",
      ],
      passwordRules: [(v) => !!v || "ต้องระบุรหัสผ่าน"],
    };
  },
  computed: {
    isUsernameValid() {
      return this.username.length === 10 && /^[0-9]{10}$/.test(this.username);
    },
  },
  methods: {
    onSubmit() {
      if (!this.form) return;
      this.loading = true;
      auth(this.username, this.password).then((result) => {
        this.loading = false;
        if (result.status) {
          this.$store.dispatch("setUserData", result);
          this.$router.push("/application/student");
          sessionStorage.setItem("userData", JSON.stringify(result));
        }
      });
    },
    required(v) {
      return !!v || "จำเป็นต้องกรอกข้อมูลในช่องนี้";
    },
  },
};
</script>
<style lang="css" scoped>
.test{
  overflow: auto;
  position: sticky;
}
.demo-bg {

  opacity: 0.6;
  position: absolute;
  filter: grayscale(15%);

  width: 100%;
  height: auto;
  filter: blur(3px);

}
.content{
  position: absolute;
  border-radius: 20px;
}


</style>
