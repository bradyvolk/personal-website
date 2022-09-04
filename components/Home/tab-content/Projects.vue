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
        :interval="8000"
        controls
        indicators
        background="#ababab"
        img-height="100px"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide img-height="100px">
          <h2>This Site</h2>
          <template #img>
            <div class="image-overlay">
              <a
                href="https://github.com/bradyvolk/personal-website"
                target="_blank"
              >
                <img
                  class="d-block img-fluid w-100 img-fade"
                  src="this-site.png"
                  alt="screenshot of this website"
                />
              </a>
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide img-height="100px">
          <h2>Cornell Digital Agriculture Website</h2>
          <template #img>
            <div class="image-overlay">
              <a
                href="https://github.com/bradyvolk/ewb-dig-ag-site"
                target="_blank"
              >
                <img
                  class="d-block img-fluid w-100 img-fade"
                  src="dig-ag-site.png"
                  alt="screenshot of ewb-dig-ag.org website"
                />
              </a>
            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide img-height="100px">
          <h2>Cornell Digital Agriculture Desktop App</h2>
          <template #img>
            <div class="image-overlay">
              <a href="https://github.com/bradyvolk/ewb-gui" target="_blank">
                <img
                  class="d-block img-fluid w-100 img-fade"
                  src="dig-ag-desktop-app.png"
                  alt="screenshot of EWB dig ag desktop app"
                />
              </a>
            </div>
          </template>
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

.img-fade {
  opacity: 65%;
}

.image-overlay {
  background-color: #132b3f;
}

:deep(.carousel-item) {
  height: 340px;
}
</style>
