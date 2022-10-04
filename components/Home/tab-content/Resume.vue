<template>
  <div class="resume-container">
    <div>
      <span class="resume-title">résumé . . .</span>
    </div>
    <div class="resume-content-container">
      <a class="resume-link" href="brady-volkmann-resume.pdf" target="_blank">
        <span class="resume-link-text"> Checkout my résumé </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  components: {},
};
</script>

<style scoped>
.resume-container {
  height: 100%;
}

.resume-title {
  display: inline-block;
  color: #1a3d5b;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  padding-bottom: 1rem;
}

.resume-content-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f2ff;
  margin: 1rem;
  height: 80%;
  border: solid 1px #1a3d5b;
}

.resume-link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #212529;
  font-size: 1.25rem;
}

@media screen and (max-width: 1080px) {
  .resume-title {
    font-size: 24px;
  }

  .resume-text {
    font-size: 16px;
  }
}
</style>
