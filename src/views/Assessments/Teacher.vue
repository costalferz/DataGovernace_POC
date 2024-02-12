<template>
  <div class="assessment-teacher">
    <p class="text-4xl">แบบประเมินรายงาน</p>

    <section class="step-menu">
      <button
        :class="getMenuBtnClass(item)"
        v-for="(item, index) in labels"
        :key="index"
        @click="handleMenuBtn(item)"
      >
        {{ item }}
      </button>
    </section>

    <section class="form-area">
      <PersonalData v-if="menuSelected === 'Personal Data'" />
      <ReportTopics v-if="menuSelected === 'Report Topics'" />
      <Result v-if="menuSelected === 'Result'" />
    </section>

    <section class="action-btn-group">
      <a-button type="primary">Primary Button</a-button>
      <button class="action-btn">Previous</button>
      <button class="action-btn" v-if="menuSelected !== 'Result'">Next</button>
      <button class="action-btn" v-else>Submit</button>
    </section>
  </div>
</template>
<script>
import PersonalData from "../../components/Assessment/Teacher/PersonalData.vue";
import ReportTopics from "../../components/Assessment/Teacher/ReportTopics.vue";
import Result from "../../components/Assessment/Teacher/Result.vue";
export default {
  components: {
    PersonalData,
    ReportTopics,
    Result
  },
  data() {
    return {
      labels: ["Personal Data", "Report Topics", "Result"],
      menuSelected: "Personal Data",
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
  },
};
</script>
<style lang="css">
.assessment-teacher {
    max-width: 1140px;
    margin: 0 auto;
}
.assessment-teacher .header {
  font-size: 3rem;
  margin: 1rem 0;
}

.step-menu {
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #000;
}

.step-btn {
  background-color: #f4f4f4;
  color: #000;
  border: 0;
  border-radius: 20px;
  height: 2rem;
  padding: 0 1rem;
  margin: 1rem 0;
}

.step-btn-active {
  background-color: #831619;
  color: #fff;
  border: 0;
  border-radius: 20px;
  height: 2rem;
  padding: 0 1rem;
  margin: 1rem 0;
}

.step-btn:hover {
  background-color: #580f12;
  color: #fff;
  border: 0;
  border-radius: 20px;
  height: 2rem;
  padding: 0 1rem;
  margin: 1rem 0;
  cursor: pointer;
}

.action-btn-group {
  display: flex;
  justify-content: end;
  gap: 2rem;
}

.action-btn {
  min-width: 8rem;
  background-color: #831619;
  color: #fff;
  border: 0;
  border-radius: 20px;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 1rem 0;
}
</style>
