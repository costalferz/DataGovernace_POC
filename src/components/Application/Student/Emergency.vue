<template>
  <v-card class="px-10">
    <v-divider></v-divider>

    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">
        บุคคลที่ติดต่อได้ในกรณีฉุกเฉิน
      </h3>
      <v-col cols="12"></v-col>
      <v-col cols="6">
        <v-text-field
          label="ชื่อ"
          variant="underlined"
          v-model="emergency.firstName"
          :loading="false"
          clearable
          required
          :rules="[
            (v) => !!v || 'กรุณากรอกชื่อ',
            (v) =>
            /^[a-zA-Zก-๙เแไใๆ]+$/.test(v) ||
              'กรุณากรอกภาษาไทยหรือภาษาอังกฤษเท่านั้น',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="นามสกุล"
          variant="underlined"
          v-model="emergency.lastName"
          :loading="false"
          clearable
          required
          :rules="[
            (v) => !!v || 'กรุณากรอกนามสกุล',
            (v) =>
            /^[a-zA-Zก-๙เแไใๆ]+$/.test(v) ||
              'กรุณากรอกภาษาไทยหรือภาษาอังกฤษเท่านั้น',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-select
          label="ความเกี่ยวข้อง"
          :items="relate"
          variant="underlined"
          :loading="false"
          v-model="emergency.relationShip"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="สถานที่ทำงาน"
          variant="underlined"
          v-model="emergency.workPlace"
          :loading="false"
          clearable
          required
          :rules="[(v) => !!v || 'กรุณากรอกสถานที่ทำงาน']"
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field
          label="ที่อยู่"
          variant="underlined"
          v-model="emergency.Address"
          :loading="false"
          clearable
          required
          :rules="[(v) => !!v || 'กรุณากรอกที่อยู่ปัจจุบัน']"
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-select
          label="ตำบล"
          :items="subdistrict"
          variant="underlined"
          v-model="emergency.SubDistrict"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          label="เขต/อำเภอ"
          :items="district"
          variant="underlined"
          v-model="emergency.District"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          label="จังหวัด"
          :items="province"
          variant="underlined"
          v-model="emergency.Province"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          label="รหัสไปรษณีย์"
          :items="postalcode"
          variant="underlined"
          v-model="emergency.PostalCode"
          :loading="false"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="โทรศัพท์"
          variant="underlined"
          v-model="emergency.phoneNumber"
          :loading="false"
          clearable
          required
          maxlength="10"
          :rules="[
            (v) => !!v || 'กรุณากรอกเบอร์โทรศัพท์',
            (v) =>
             /^0[\w]{0,9}$/.test(v) ||
              'เบอร์โทรศัพท์ต้องเป็นตัวเลขเริ่มต้นด้วยเลข 0 และ มี 10 หลักเท่านั้น',
          ]"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="โทรสาร"
          variant="underlined"
          v-model="emergency.faxNumber"
          :loading="false"
          clearable
          required
          maxlength="4"
          :rules="[
            (v) =>
              /^\d{4}$/.test(v) ||
              'เบอร์โทรสารต้องเป็นตัวเลข 4 หลักเท่านั้น',
          ]"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { computed } from "vue";
import { mapState } from "vuex";

// import axios from "axios";
export default {
  data() {
    return {
      emergency: {
        firstNameTH: "",
        lastNameTH: "",
        haveData: false,
        workPlace: "",
        relationShip: "",
        Disease: "",
        Address: "",
        SubDistrict: "",
        District: "",
        Province: "",
        PostalCode: "",
        phoneNumber: "",
        faxNumber: "",
      },
      relate: ["บิดา", "มารดา", "พี่น้อง", "ญาติ", "อื่นๆ"],
      subdistrict: [
        "คลองหนึ่ง",
        "คลองสอง",
        "คลองสาม",
        "คลองสี่",
        "คลองห้า",
        "คลองหก",
        "คลองเจ็ด",
      ],
      district: [
        "เมือง",
        "สามโคก",
        "ลาดหลุมแก้ว",
        "คลองหลวง",
        "ลำลูกกา",
        "ธัญบุรี",
        "หนองเสือ",
      ],
      province: [
        "กรุงเทพมหานคร",
        "นครปฐม",
        "นนทบุรี",
        "ปทุมธานี",
        "สมุทรปราการ",
        "สมุทรสาคร",
      ],
      postalcode: ["12120"],
    };
  },
  computed: {},
};
</script>
<style lang=""></style>
