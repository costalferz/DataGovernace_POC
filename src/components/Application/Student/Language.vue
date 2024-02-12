<template>
  <v-card class="px-10">
    <v-divider></v-divider>
    <v-row align="center" class="p-10">

        <h3 class="text-center d-flex justify-center">ความสามารถทางภาษา</h3>

      <v-col v-for="(row, index) in formRows" :key="index" cols="12">
        <v-col cols="3">
          <v-text-field
            clearable
            v-model="row.language"
            label="ภาษา"
            variant="underlined"
            :rules="[
            (v) => !!v || 'กรุณากรอกชื่อภาษา',
            (v) =>
            /^[a-zA-Z]+$/.test(v) ||
              'กรุณากรอกภาษาอังกฤษเท่านั้น',
          ]"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-col cols="3">
            <v-divider></v-divider>

            <v-card width="300" title="ทักษะการฟัง">
              <v-radio-group v-model="row.listening" inline>
                <v-radio label="Poor" value="1"></v-radio>
                <v-radio label="Fair" value="2"></v-radio>
                <v-radio label="Good" value="3"></v-radio> </v-radio-group
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card width="300" title="ทักษะการพูด">
              <v-radio-group v-model="row.speaking" inline>
                <v-radio label="Poor" value="1"></v-radio>
                <v-radio label="Fair" value="2"></v-radio>
                <v-radio label="Good" value="3"></v-radio> </v-radio-group
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card width="300" title="ทักษะการอ่าน">
              <v-radio-group v-model="row.reading" inline>
                <v-radio label="Poor" value="1"></v-radio>
                <v-radio label="Fair" value="2"></v-radio>
                <v-radio label="Good" value="3"></v-radio> </v-radio-group
            ></v-card>
          </v-col>
          <v-col cols="3">
            <v-card width="300" title="ทักษะการเขียน">
              <v-radio-group v-model="row.writing" inline>
                <v-radio label="Poor" value="1"></v-radio>
                <v-radio label="Fair" value="2"></v-radio>
                <v-radio label="Good" value="3"></v-radio> </v-radio-group
            ></v-card>
          </v-col>
          <v-col cols="3"> </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" align="center">
        <v-btn @click="addFormRow">เพิ่มทักษะภาษา</v-btn>
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
          language: "English",
          listening: "",
          speaking: "",
          reading: "",
          writing: "",
        },
      ],
    };
  },
  methods: {
    addFormRow() {
      this.formRows.push({
        language: "",
        listening: "",
        speaking: "",
        reading: "",
        writing: "",
      });
    },
  },
  removeFormRow(index) {
    this.formRows.splice(index, 1);
  },
};
</script>
<style lang=""></style>
