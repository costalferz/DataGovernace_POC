<template>
  <v-card class="px-10">
    <v-divider></v-divider>

    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">ประวัติการศึกษา</h3>

      <v-col cols="12"></v-col>
      <v-col cols="4">
        <v-text-field
          label="ระดับโรงเรียนมัธยมต้น"
          variant="underlined"
          v-model="education.junior_name"
          :loading="false"
          clearable
          required
          :rules="[
            (v) => !!v || 'กรุณากรอกชื่อสถานบันการศึกษา',
            (v) =>
            /^[a-zA-Zก-๙เแไใๆ]+$/.test(v) ||
              'กรุณากรอกภาษาไทยหรือภาษาอังกฤษเท่านั้น',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="ปีที่สำเร็จการศึกษา"
          variant="underlined"
          v-model="education.junior_yearGrad"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกปีที่สำเร็จการศึกษา',
            (v) => /(?:(?:19|20)[0-9]{2})/.test(v) || 'กรุณากรอกปีที่สำเร็จการศึกษาที่ถูกต้อง',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="เกรดเฉลี่ยรวม"
          variant="underlined"
          v-model="education.junior_gpax"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกเกรดเฉลี่ยสะสม',
            (v) => /^[0-4](\.\d{1,2})?$/.test(v) || 'กรุณากรอกเกรดเฉลี่ยสะสมที่ถูกต้อง',
          ]"
          s
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="ระดับโรงเรียนมัธยมปลาย"
          variant="underlined"
          v-model="education.highschool_name"
          :loading="false"
          clearable
          required
          :rules="[
            (v) => !!v || 'กรุณากรอกชื่อสถานบันการศึกษา',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="ปีที่สำเร็จการศึกษา"
          variant="underlined"
          v-model="education.high_yearGrad"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกปีที่สำเร็จการศึกษา',
            (v) => /(?:(?:19|20)[0-9]{2})/.test(v) || 'กรุณากรอกปีที่สำเร็จการศึกษาที่ถูกต้อง',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="เกรดเฉลี่ยรวม"
          variant="underlined"
          v-model="education.high_gpax"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกเกรดเฉลี่ยสะสม',
            (v) => /^[0-4](\.\d{1,2})?$/.test(v) || 'กรุณากรอกเกรดเฉลี่ยสะสมที่ถูกต้อง',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="ระดับมหาวิทยาลัย"
          variant="underlined"
          v-model="education.university_level"
          :loading="false"
          clearable
          required
          :rules="[
            (v) => !!v || 'กรุณากรอกชื่อสถานบันการศึกษา',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="ปีที่สำเร็จการศึกษา"
          variant="underlined"
          v-model="education.university_yearGrad"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกปีที่สำเร็จการศึกษา',
            (v) => /(?:(?:19|20)[0-9]{2})/.test(v) || 'กรุณากรอกปีที่สำเร็จการศึกษาที่ถูกต้อง',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          label="เกรดเฉลี่ยรวม"
          variant="underlined"
          v-model="education.university_gpax"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกเกรดเฉลี่ยสะสม',
            (v) => /^[0-4](\.\d{1,2})?$/.test(v) || 'กรุณากรอกเกรดเฉลี่ยสะสมที่ถูกต้อง',
          ]"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      education: {
        level_junior: "",
        junior_name: "",
        junior_gpax: "",
        junior_yearGrad: "",
        level_high: "",
        high_name: "",
        high_gpax: "",
        high_yearGrad: "",
        level_university: "",
        university_name: "",
        university_gpax: "",
        university_yearGrad: "",
      },
    };
  },}

</script>
<style lang=""></style>
