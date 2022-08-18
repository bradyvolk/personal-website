<template>
  <div>
    <img class="background-image" src="homemade-background.png" />
    <div class="content">
      <div class="landing">
        <div class="header">
          <span class="my-name">brady volkmann . . .</span>
        </div>
        <div class="my-position-container">
          <span class="my-position">full-stack developer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.background-image {
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: -100;
}

@media screen and (max-width: 1080px) {
  .background-image {
    overflow-x: hidden;
    width: auto;
    height: 100vh;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

.content {
  display: flex;
  flex-direction: column;
  height: 2000px;
}

.landing {
  height: 820px;
}

@media screen and (max-width: 1080px) {
  .landing {
    height: 100vh;
  }
}

.header {
  height: 30vh;
  width: 100%;
  line-height: 30vh;
}

.my-name {
  font-size: 4rem;
  color: #1a3d5b;
  font-weight: 600;
  letter-spacing: 8px;
  margin-left: 3%;
}

@media screen and (max-width: 1080px) {
  .my-name {
    font-size: 2rem;
    letter-spacing: 2px;
  }
}

.my-position-container {
  height: 15vh;
  width: 100%;
  line-height: 15vh;
  text-align: right;
}

.my-position {
  font-size: 2.5vw;
  color: #1a3d5b;
  font-weight: 400;
  letter-spacing: 2px;
  margin-left: auto;
  margin-right: 3%;
}

@media screen and (max-width: 1080px) {
  .my-position {
    font-size: 1rem;
    letter-spacing: 1px;
  }
}

@media screen and (max-width: 1080px) {
  .my-position-container {
    height: 1vh;
    line-height: 1vh;
  }
}
</style>
