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
      <main-content> </main-content>
    </div>
  </div>
</template>

<script>
import MainContent from "./MainContent.vue";

export default {
  name: "Home",
  components: {
    MainContent,
  },
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.landing {
  height: 65vw;
}

@media screen and (max-width: 1080px) {
  .landing {
    height: 95vh;
  }
}

.header {
  height: 35vh;
  line-height: 35vh;
  width: 100%;
  opacity: 0;
  animation: fadeIn 1s ease-out 0s forwards;
}

@keyframes slideDown {
  to {
    transform: translateY(5vh);
  }
}

@keyframes slideFromRight {
  to {
    transform: translateX(-5vw);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.my-name {
  font-size: 3vw;
  color: #1a3d5b;
  font-weight: 600;
  letter-spacing: 8px;
  margin-left: 5%;
}

@media screen and (max-width: 1080px) {
  .my-name {
    font-size: 2rem;
    letter-spacing: 2px;
  }
}

.my-position-container {
  height: 10vh;
  line-height: 10vh;
  width: 100%;
  line-height: 15vh;
  text-align: right;
  opacity: 0;
  animation: fadeIn 1s ease-out 1s forwards;
}

.my-position {
  font-size: 2vw;
  color: #1a3d5b;
  font-weight: 400;
  letter-spacing: 2px;
  margin-left: auto;
  margin-right: 5%;
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
