<template>
  <div class="writing-container">
    <div>
      <span class="writing-title">writing . . .</span>
    </div>
    <div class="writing-content-container">
      <p class="writing-text">
        No writings here yet, but I hope to put some in the future!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Writing",
  components: {},
};
</script>

<style scoped>
.writing-container {
  height: 100%;
}

.writing-title {
  display: inline-block;
  color: #1a3d5b;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  padding-bottom: 1rem;
}

.writing-content-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f2ff;
  margin: 1rem;
  height: 80%;
}

.writing-text {
  font-size: 1.25rem;
}

@media screen and (max-width: 1080px) {
  .writing-title {
    font-size: 24px;
  }

  .writing-text {
    font-size: 16px;
    padding: 1rem;
  }
}
</style>
