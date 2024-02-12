<template>
  <section class="form">
    <section>
      <div class="input-wrapper">
        <p>Report Topic (THAI)</p>
        <input class="input" />
      </div>
    </section>

    <section>
      <div class="input-wrapper">
        <p>Report Topic (ENG)</p>
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
  width: 100%;
  padding: 0.1rem 1rem;
  border: 0;
  border-radius: 10px;
  background-color: #e4e4e4;
  box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 9px 10px 29px -12px rgba(0, 0, 0, 0.57);
}

.input-wrapper {
    width: 100%;
}
</style>
