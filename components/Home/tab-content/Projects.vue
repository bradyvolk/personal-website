<template>
  <div class="projects-content">
    <div>
      <span class="projects-title">my projects . . .</span>
    </div>
    <div>
      <span class="projects-subtitle"
        >Check out my different projects on GitHub</span
      >
    </div>
    <div>
      <b-carousel
        class="projects-carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-height="100px"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
          img-height="100px"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=54"
          img-height="100px"
        >
          <h1>Hello world!</h1>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
};
</script>

<style scoped>
.projects-content {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 3rem;
}

.projects-title {
  display: inline-block;
  color: #1a3d5b;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 4px;
  padding-bottom: 1rem;
}

.projects-subtitle {
  display: inline-block;
  font-size: 14px;
  padding-bottom: 0.5rem;
}

:deep(.carousel-item) {
  height: 340px;
}
</style>
