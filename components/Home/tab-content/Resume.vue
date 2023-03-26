<template>
  <div class="resume-container">
    <div>
      <span class="resume-title">résumé . . .</span>
    </div>
    <div class="resume-content-container">
      <a class="resume-link" href="brady-volkmann-resume.pdf" target="_blank">
        <span class="resume-link-text"> Checkout my résumé </span>
        <div class="file-icon-container">
          <font-awesome-icon
            class="light-icon"
            icon="fa-regular fa-file-lines"
          />
          <font-awesome-icon class="dark-icon" icon="fa-solid fa-file-lines" />
        </div>
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

.resume-link-text {
  padding: 1rem;
}

.file-icon-container {
  padding: 1rem;
}

.dark-icon {
  position: absolute;
  color: #1a3d5b;
  /* visibility: hidden; */
  height: 32px;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease-in-out;
}

.light-icon {
  position: absolute;
  opacity: 1;
  /* visibility: visible; */
  color: #1a3d5b;
  height: 32px;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease-in-out;
}

.resume-content-container:hover .dark-icon {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.resume-content-container:hover .light-icon {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

@media screen and (max-width: 1080px) {
  .resume-title {
    font-size: 24px;
  }

  .resume-text {
    font-size: 16px;
  }

  .resume-content-container {
    padding: 1rem;
  }
}
</style>
