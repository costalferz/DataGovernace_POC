<template>
  <section class="form">
    <section id="name-thai">
      <p>Result</p>
      <div class="result-group">
        <div class="radioBtn">
          <div
            :Class="getCircleSelectClass('Passed')"
            @click="resultSelected = 'Passed'"
          />
          <p>Passed</p>
        </div>
        <div class="radioBtn">
          <div
            :class="getCircleSelectClass('Failed')"
            @click="resultSelected = 'Failed'"
          />
          <p>Failed</p>
        </div>
      </div>
      <div class="radioBtn">
        <div
          :class="getCircleSelectClass('Passed with Conditon')"
          @click="resultSelected = 'Passed with Conditon'"
        />
        <p>Passed with Conditon</p>
      </div>
      <input
        class="input-full"
        v-if="resultSelected === 'Passed with Conditon'"
      />
    </section>

    <section id="comment">
      <div class="input-wrapper">
        <p>Comments</p>
        <input class="input" />
      </div>
    </section>

    <section>
      <div class="input-wrapper">
        <p>Evaluator ’s Name</p>
        <input class="input" />
      </div>
      <div class="input-wrapper">
        <p>Adviser ’s Name</p>
        <input class="input" />
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      resultSelected: "",
    };
  },
  methods: {
    getCircleSelectClass(label) {
      if (this.resultSelected === label) {
        return "circleSelect-active";
      }
      return "circleSelect";
    },
  },
};
</script>
<style lang="css" scoped>
.form {
  max-width: 768px;
  display: flex;
  flex-wrap: wrap;
}

.form section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 2rem;
}

.form section#study-detail {
  border-bottom: 1px solid #000;
}

.form .input {
  height: 2rem;
  width: 20rem;
  padding: 0.1rem 1rem;
  border: 0;
  border-radius: 10px;
  background-color: #e4e4e4;
  box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
}

.input-full {
  height: 2rem;
  width: 100%;
  padding: 0.1rem 1rem;
  border: 0;
  border-radius: 10px;
  background-color: #e4e4e4;
  box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
}
.form section#comment {
  border-bottom: 1px solid #000;
}

.result-group {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
}

.result-group .radioBtn {
  width: 100%;
}

.circleSelect {
  background-color: #e4e4e4;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 100%;
}

.circleSelect:hover {
  background-color: #e4e4e4;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 100%;
  cursor: pointer;
}

.circleSelect-active {
  background-color: #831619;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 100%;
}
.radioBtn {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
