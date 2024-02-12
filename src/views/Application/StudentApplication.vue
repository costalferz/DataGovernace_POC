<template>
  <div class="container mx-auto pt-15">
    <div class="mb-10 bg-[#f4f4f4]">
      <v-tabs v-model="current" align-tabs="title">
        <v-tab
          v-for="item in steps"
          :key="item.index"
          :value="item.index"
          @click="$store.dispatch('setCurrentTab', item.index)"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </div>
    <PersonalData v-if="currentTab == 0" />
    <Emergency v-if="currentTab == 1" />
    <Education v-if="currentTab == 2" />
    <Training v-if="currentTab == 3" />
    <Language v-if="currentTab == 4" />
    <Skills v-if="currentTab == 5" />
    <Experience v-if="currentTab == 6" />
    <Award v-if="currentTab == 7" />

    <!-- v-if="currentTab.index !== 'finish'" -->
    <section class="action-btn-group">
      <button class="action-btn" v-if="currentTab != '0'" @click="prev()">Previous</button>
      <button class="action-btn" v-if="currentTab != '7'" @click="next">
        Next
      </button>
      <button class="action-btn" v-else>Submit</button>
    </section>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useField, useForm } from "vee-validate";
import PersonalData from "../../components/Application/Student/PersonalData.vue";
import Emergency from "../../components/Application/Student/Emergency.vue";
import Education from "../../components/Application/Student/Education.vue";
import Training from "../../components/Application/Student/Training.vue";
import Skills from "../../components/Application/Student/Skills.vue";

import Experience from "../../components/Application/Student/Experience.vue";

import Language from "../../components/Application/Student/Language.vue";
import Award from "../../components/Application/Student/Awards.vue";
import { mapState } from "vuex";

export default defineComponent({
  components: {
    PersonalData,
    Emergency,
    Education,
    Training,
    Language,
    Skills,
    Experience,
    Award,
  },
  data() {
    return {
      current: this.currentTab,
    };
  },
  setup() {
    return {
      steps: [
        {
          index: 0,
          title: "PersonalData",
          status: "start",
        },
        {
          index: 1,
          title: "Emergency",
          status: "wait",
        },
        {
          index: 2,
          title: "Education",
          status: "wait",
        },
        {
          index: 3,
          title: "Training",
          status: "wait",
        },
        {
          index: 4,
          title: "Language Ability",
          status: "wait",
        },
        {
          index: 5,
          title: "Skills",
          status: "wait",
        },
        {
          index: 6,
          title: "Work Experience & Student Activities",
          status: "wait",
        },
        {
          index: 7,
          title: "Awards",
          status: "finish",
        },
      ],
    };
  },
  methods: {
    getMenuBtnClass(nowLebel) {
      if (nowLebel === this.menuSelected) {
        return "step-btn-active";
      }
      return "step-btn";
    },
    handleMenuBtn(nowLebel) {
      this.menuSelected = nowLebel;
    },
    next() {
      this.current++;
      this.$store.dispatch("setCurrentTab", this.current);
    },
    prev() {
      this.current--;
      this.$store.dispatch("setCurrentTab", this.current);
    },
  },
  computed: {
    ...mapState(["currentTab"]),
  },
});
</script>
<style scoped></style>
