<template>
  <v-card class="px-10">
    <v-divider></v-divider>

    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">การฝึกอบรม</h3>

      <v-col cols="12"></v-col>
      <v-col v-for="(row, index) in formRows" :key="index" cols="12">
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="หัวข้อฝึกอบรบ"
              variant="underlined"
              v-model="row.trainingTopic"
              :loading="false"
              clearable
              required
              :rules="[
                (v) => !!v || 'กรุณากรอกชื่อการฝึกอบรม',]"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="หน่วยงานที่มอบหมาย"
              variant="underlined"
              v-model="row.organize"
              :loading="false"
              clearable
              required
              :rules="[
            (v) => !!v || 'หน่วยงานที่มอบหมาย']"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <h5>ช่วงเวลาที่ฝึกอบรม</h5>
            <VueDatePicker
              v-model="row.period"
              :enable-time-picker="false"
              range
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" align="center">
        <v-btn @click="addFormRow">เพิ่มหัวข้อที่อบรม</v-btn>
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
          trainingTopic: "",
          organize: "",
          period: "",
        },
      ],
      // test: "hello",
    };
  },
  methods: {
    addFormRow() {
      this.formRows.push({
        trainingTopic: "",
        organize: "",
        period: "",
      });
    },
  },
  removeFormRow(index) {
    this.formRows.splice(index, 1);
  },
};
</script>
<style lang="css"></style>
