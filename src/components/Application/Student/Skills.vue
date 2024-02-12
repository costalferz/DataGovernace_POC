<template>
  <v-card class="px-10">
    <v-divider></v-divider>

    <v-row align="center" class="p-10">
      <h3 class="text-center d-flex justify-center">ความสามารถพิเศษ</h3>

      <v-col cols="12"></v-col>
      <v-col cols="12">
        <v-combobox
          v-model="skills.computer"
          :items="itemsComputer"
          chips
          clearable
          label="ความถนัดด้านคอมพิวเตอร์"
          multiple
          variant="solo"
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :model-value="selected"
              closable
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong
              >&nbsp;
              <span>(interest)</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-col>

      <v-divider></v-divider>
      <v-col cols="12">
        <v-combobox
          v-model="skills.sport"
          :items="itemsSport"
          chips
          clearable
          label="ด้านกีฬา"
          multiple
          variant="solo"
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :model-value="selected"
              closable
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong
              >&nbsp;
              <span>(interest)</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-combobox
          v-model="skills.music"
          :items="itemsMusic"
          chips
          clearable
          label="ศิลปะ"
          multiple
          variant="solo"
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :model-value="selected"
              closable
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong
              >&nbsp;
              <span>(interest)</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      itemsComputer: [
        "Javascript",
        "Docker",
        "C++",
        "Machine Learning",
        "Azure",
        "AWS",
        "GCP",
      ],
      itemsSport: ["ฟุตบอล", "บาสเกตบอล"],
      itemsMusic: ["กีต้าร์", "กลองชุด"],

      skills: {
        computer: ["Python", "SQL"],
        sport: "",
        music: "",
      },
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
    },
  },
};
</script>
