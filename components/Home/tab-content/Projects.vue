<template>
  <div class="projects-content">
    <div>
      <h1 class="projects-title">my projects . . .</h1>
    </div>
    <div>
      <span class="projects-subtitle"
        >Check out my different projects on GitHub</span
      >
    </div>
    <div v-if="!this.isMobile()">
      <b-carousel
        class="projects-carousel"
        :interval="8000"
        controls
        indicators
        background="#ababab"
        img-height="100px"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide img-height="100px">
          <h2>Personal Website</h2>
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
    <div v-else>
      <div class="project-tile">
        <h2>Personal Website</h2>
        <a href="https://github.com/bradyvolk/personal-website" target="_blank">
          <img
            class="d-block img-fluid w-100 img-fade"
            src="this-site.png"
            alt="screenshot of this website"
          />
        </a>
      </div>
      <div class="project-tile">
        <h2>Cornell Digital Agriculture Website</h2>
        <a href="https://github.com/bradyvolk/ewb-dig-ag-site" target="_blank">
          <img
            class="d-block img-fluid w-100 img-fade"
            src="dig-ag-site.png"
            alt="screenshot of ewb-dig-ag.org website"
          />
        </a>
      </div>
      <div class="project-tile">
        <h2>Cornell Digital Agriculture Desktop App</h2>
        <a href="https://github.com/bradyvolk/ewb-gui" target="_blank">
          <img
            class="d-block img-fluid w-100 img-fade"
            src="dig-ag-desktop-app.png"
            alt="screenshot of EWB dig ag desktop app"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global.js";

export default {
  name: "Projects",
  components: {},
  mixins: [global],
  methods: {},
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
  font-size: 2rem;
  letter-spacing: 0.5rem;
  padding-bottom: 1rem;
}

.projects-subtitle {
  display: inline-block;
  font-size: 1rem;
  padding-bottom: 0.5rem;
}

.img-fade {
  opacity: 75%;
}

.image-overlay {
  background-color: #1a3d5b;
}

:deep(.carousel-item) {
  height: 340px;
}

@media screen and (max-width: 720px) {
  h2 {
    font-size: 0.75rem;
    text-align: center;
  }

  .projects-title {
    font-size: 24px;
    text-align: center;
  }

  .project-tile {
    padding: 1rem;
  }
}
</style>
