<template>
  <v-card class="px-10">
    <v-divider></v-divider>

    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">ข้อมูลส่วนตัวนักศึกษา</h3>
      <v-col cols="12"></v-col>
      <v-col cols="12">
        <v-text-field
          label="รหัสนักศึกษา"
          variant="underlined"
          v-model="personalData.userName"
          :loading="false"
          clearable
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" cols="6">
        เริ่มต้นการทำสหกิจศึกษา
        <VueDatePicker
          v-model="personalData.startDate"
          :enable-time-picker="false"
        />
      </v-col>
      <v-col class="h-full" cols="6">
        สิ้นสุดการทำสหกิจศึกษา

        <VueDatePicker
          v-model="personalData.endDate"
          :enable-time-picker="false"
        />
        <span v-if="!isEndDateValid" class="error-message"
          >วันที่สิ้นสุดการทำสหกิจศึกษาต้องไม่น้อยกว่าวันที่เริ่ม</span
        >
        <p v-if="isDiffLessThan4Months" class="error-message">
          การทำสหกิจศึกษาต้องไม่น้อยกว่า 4 เดือน
        </p>

        <!-- show error -->
      </v-col>
      <v-col class="h-full" cols="6">
        <v-text-field
          label="ชื่อ (TH)"
          variant="underlined"
          v-model="personalData.firstNameTH"
          :loading="false"
          clearable
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="นามสกุล (TH)"
          variant="underlined"
          v-model="personalData.lastNameTH"
          :loading="false"
          clearable
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="ชื่อ (EN)"
          variant="underlined"
          v-model="personalData.firstNameEN"
          :loading="false"
          clearable
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="นามสกุล (EN)"
          variant="underlined"
          v-model="personalData.lastNameEN"
          :loading="false"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="คณะ"
          variant="underlined"
          v-model="personalData.faculty"
          :loading="false"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="สาขา"
          variant="underlined"
          v-model="personalData.department"
          :loading="false"
          required
          disabled
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-select
          label="อาจารย์ที่ปรึกษา"
          :items="advisor"
          variant="underlined"
          required
          v-model="personalData.Advisor"
          :rules="[(v) => !!v || 'กรุณาเลือกอาจารย์ที่ปรึกษา']"
        ></v-select>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="เกรดเฉลี่ยสะสม"
          variant="underlined"
          v-model="personalData.GPAX"
          :loading="false"
          maxlength="4"
          :rules="[
            (v) => !!v || 'กรุณากรอกเกรดเฉลี่ยสะสม',
            (v) => isGPAXValid || 'กรุณากรอกเกรดเฉลี่ยสะสมที่ถูกต้อง',
          ]"
          required
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="โรคประจำตัว"
          variant="underlined"
          v-model="personalData.Disease"
          :loading="false"
          required
          :rules="[
            (v) => !!v || 'กรุณากรอกโรคประจำตัว',
            (v) => isGPAXValid || 'กรุณากรอกเกรดเฉลี่ยสะสมที่ถูกต้อง',
          ]"
          max-length="50"
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="ที่อยู่"
          variant="underlined"
          v-model="personalData.Address"
          :loading="false"
          :rules="[
            (v) => !!v || 'กรุณากรอกที่อยู่',
            (v) => (v && v.length <= 50) || 'ที่อยู่ต้องไม่เกิน 100 ตัวอักษร',
          ]"
          required
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-select
          label="จังหวัด"
          :items="province"
          variant="underlined"
          v-model="personalData.Province"
          :loading="false"
        ></v-select>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-select
          label="อำเภอ"
          :items="district"
          variant="underlined"
          v-model="personalData.District"
          :loading="false"
        ></v-select>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-select
          label="ตำบล"
          :items="subdistrict"
          variant="underlined"
          v-model="personalData.SubDistrict"
        ></v-select>
      </v-col>

      <v-col class="h-full" align-self="center" cols="6">
        <v-select
          label="รหัสไปรษณีย์"
          variant="underlined"
          :items="postalCode"
          v-model="personalData.PostalCode"
          :loading="false"
          maxlength="5"
          :rules="[
            (v) => !!v || 'กรุณากรอกรหัสไปรษณีย์',
            (v) => /^\d{5}$/.test(v) || 'กรุณากรอกรหัสไปรษณีย์ที่ถูกต้อง',
          ]"
          required
        ></v-select>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="อีเมล์"
          variant="underlined"
          v-model="personalData.email"
          :loading="false"
          type="email"
          :rules="[
            (v) => !!v || 'กรุณากรอกอีเมล์',
            (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(v) ||
              'กรุณากรอกอีเมล์ที่ถูกต้อง',
          ]"
          required
          email
        ></v-text-field>
      </v-col>
      <v-col class="h-full" align-self="center" cols="6">
        <v-text-field
          label="เบอร์โทรศัพท์"
          variant="underlined"
          v-model="personalData.phoneNumber"
          :loading="false"
          maxlength="10"
          :rules="[
            (v) => !!v || 'กรุณากรอกเบอร์โทรศัพท์',
            (v) =>
              /^0[\w]{0,9}$/.test(v) ||
              'เบอร์โทรศัพท์ต้องเป็นตัวเลขเริ่มต้นด้วยเลข 0 และ มี 10 หลักเท่านั้น',
          ]"
          required
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import { getStudentData } from "../../../services/auth";
import { mapState } from "vuex";
import moment from "moment";
// import axios from "axios";
export default {
  data() {
    return {
      advisor: [
        "ดร.รัชฎา คงคะจันทร์",
        "ดร.วสิศ ลิ้มประเสริฐ",
        "ดร.ศรัณย์ กุลยานนท์",
        "อาจารย์สมเกียรติ โกศลสมบัติ",
        "ดร.ธนัชพรรณ เพ็ชรรัตน์",
        "ดร.อาษา ตั้งจิตสมคิด",
        "ดร.ทวีวัฒน์ เหลืองวิริยะ",
      ],
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
      postalCode: ["12120"],
      personalData: {
        userName: "",
        firstNameTH: "",
        lastNameTH: "",
        firstNameEN: "",
        lastNameEN: "",
        department: "",
        faculty: "",
        email: "",
        haveData: false,
        startDate: "",
        endDate: "",
        GPAX: "",
        Advisor: "",
        Disease: "",
        Address: "",
        SubDistrict: "",
        District: "",
        Province: "",
        PostalCode: "",
        phoneNumber: "",
      },
    };
  },
  watch: {
    personalData: {
      handler(newValue, oldValue) {
        if (true) {
        }

        this.$store.dispatch("setPersonalData", newValue);
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(["userData"]),
    ...mapState(["personalData"]),

    isGPAXValid() {
      const gpax = this.personalData.GPAX;

      // Check if GPAX is null or empty
      if (!gpax) {
        return true;
      }

      // Check if GPAX is in the correct format (0-4 with optional decimal point and up to 2 decimal places)
      const gpaxRegex = /^[0-4](\.\d{1,2})?$/;
      return gpaxRegex.test(gpax);
    },
    isEndDateValid() {
      if (this.personalData.startDate && this.personalData.endDate) {
        return this.personalData.startDate < this.personalData.endDate;
      }
      return true;
    },
    isDiffLessThan4Months() {
      const startDate = moment(this.personalData.startDate);
      const endDate = moment(this.personalData.endDate);

      return endDate.diff(startDate, "month") < 4;
    },
    isEmailValid() {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
      return emailRegex.test(this.personalData.email);
    },
  },
  created() {
    let responseData = this.userData;
    if (responseData.status) {
      console.log(responseData);
      this.convertStudentData(responseData);
      this.personalData.haveData = true;
    }
  },
  setup() {
    // In case of a range picker, you'll receive [Date, Date]
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        studentId(value) {
          if (value && /^\d{10}$/.test(value)) return true;
          return "รหัสนักศึกษาต้องเป็นตัวเลข 10 หลักเท่านั้น";
        },
      },
    });
    const studentId = useField("studentId");
    const submit = handleSubmit(async (values) => {
      let responseData = this.userData;
      if (responseData.status) {
        this.convertStudentData(responseData.data);
        this.personalData.haveData = true;
      }
    });
    return {
      studentId,
      submit,
    };
  },
  methods: {
    regexValidate(text, regex) {
      const matches = regex.exec(text);
      console.log(matches);
      return matches;
    },
    convertStudentData(responseData) {
      this.personalData.firstNameTH = responseData.displayname_th.split(" ")[0];
      this.personalData.lastNameTH = responseData.displayname_th.split(" ")[1];
      this.personalData.firstNameEN = responseData.displayname_en.split(" ")[0];
      this.personalData.lastNameEN = responseData.displayname_en.split(" ")[1];
      this.personalData.department = responseData.department.split(" ")[1];
      this.personalData.faculty = responseData.faculty;
      this.personalData.email = responseData.email;
      this.personalData.userName = responseData.username;
    },
  },
};
</script>
<style lang="css">
.error-message {
  color: red;
}
</style>
