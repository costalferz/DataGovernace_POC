<template>
  <section class="form">
    <section id="name-thai">
      <div class="input-wrapper">
        <p>First Name(THAI)</p>
        <input class="input" />
      </div>
      <div class="input-wrapper">
        <p>Last Name(THAI)</p>
        <input class="input" />
      </div>
    </section>

    <section id="name-eng">
      <div class="input-wrapper">
        <p>First Name(ENG)</p>
        <input class="input" />
      </div>
      <div class="input-wrapper">
        <p>Last Name(ENG)</p>
        <input class="input" />
      </div>
    </section>

    <section id="student-id">
      <div class="input-wrapper">
        <p>Student ID</p>
        <input class="input" />
      </div>
    </section>

    <section id="study-detail">
      <div class="input-wrapper">
        <p>Faculty</p>
        <input
          class="input"
          type="select"
          value="วิทยาลัยสหวิทยาการ"
          disabled
        />
      </div>
      <div class="input-wrapper">
        <p>Department</p>
        <input
          class="input"
          type="select"
          value="วิทยาศาสตร์และนวัตกรรมข้อมูล"
          disabled
        />
      </div>
    </section>

    <section>
      <div class="input-wrapper">
        <p>Company</p>
        <input class="input" />
      </div>
    </section>

    <section>
      <div class="input-wrapper">
        <p>Position</p>
        <input class="input" />
      </div>
      <div class="input-wrapper">
        <p>Department</p>
        <input class="input" />
      </div>
    </section>
  </section>
</template>
<script>
export default {};
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
</style>
