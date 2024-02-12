<template>
  <v-card class="px-10">
    <v-divider></v-divider>
    
    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">ประสบการณ์การทํางานและการทํากิจกรรมนักศึกษา</h3>
      <v-col cols="12"></v-col>
      <v-col v-for="(row, index) in formRows" :key="index" cols="12">
        <v-row>
          <v-col cols="3">
            <h5>ช่วงเวลา</h5>

            <VueDatePicker
              v-model="row.period"
              :enable-time-picker="false"
              range
            />
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="ชื่อองค์กรหรือกิจกรรม"
              variant="underlined"
              v-model="row.organzation"
              :loading="false"
              clearable
              required
              :rules="[
            (v) => !!v || 'กรุณากรอกชื่อองค์กร',]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="ความรับผิดชอบ"
              variant="underlined"
              v-model="row.responsiblity"
              :loading="false"
              clearable
              required
              :rules="[
            (v) => !!v || 'กรุณากรอกความรับผิดชอบ',]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="หมายเหตุ"
              variant="underlined"
              v-model="row.note"
              :loading="false"
              clearable
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" align="center">
        <v-btn @click="addFormRow">เพิ่มกิจกรรมที่เคยทำ</v-btn>
        <!-- <v-btn @click="removeFormRow">Remove Row</v-btn> -->
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      formRows: [
        {
          period: "",
          organzation: "",
          responsiblity: "",
          note: "",
        },
      ],
    };
  },
  methods: {
    addFormRow() {
      this.formRows.push({
        period: "",
        organzation: "",
        period: "",
        responsiblity: "",
        note: "",
      });
    },
  },
  removeFormRow(index) {
    this.formRows.splice(index, 1);
  },
};
</script>
<style lang="css">

</style>
