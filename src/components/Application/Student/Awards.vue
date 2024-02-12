<template>
  <v-card class="px-10">
    <v-divider></v-divider>

    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">รางวัลที่เคยได้รับ</h3>

      <v-col cols="12"> </v-col>
      <v-col v-for="(row, index) in formRows" :key="index" cols="12">
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="ชื่อรางวัล"
              variant="underlined"
              v-model="row.award"
              :loading="false"
              clearable
              required
              :rules="[(v) => !!v || 'กรุณากรอกชื่อรางวัล']"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="ชื่อหน่วยงานที่มอบให้"
              variant="underlined"
              v-model="row.organize"
              :loading="false"
              clearable
              required
              :rules="[(v) => !!v || 'กรุณากรอกชื่อหน่วยงาน']"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <h5>วันที่ได้รับ</h5>
            <VueDatePicker v-model="row.date" :enable-time-picker="false" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" align="center">
        <v-btn @click="addFormRow">เพิ่มรางวัลที่ได้รับ</v-btn>
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
          award: "",
          organize: "",
          date: "",
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
