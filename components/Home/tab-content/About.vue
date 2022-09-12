<template>
  <div class="about-content">
    <div class="portrait">
      <img class="portrait-image" src="portrait-brady.png" />
      <span class="portrait-caption"
        >Me ~enjoying~ the bitter winters of upstate New York at Lake
        Cazenovia!</span
      >
    </div>
    <div class="about-text-container">
      <span class="about-title">about me . . .</span>
      <p class="about-paragraph">
        Hey, nice to meet you. I’m Brady. I’m a full-stack developer at IBM. My
        team there manages a data pipeline and an interface for controlling that
        pipeline. I regularly develop new UI features, ingest data from
        multidimensional data sources using complex jobs configured by our UI,
        manage Kubernetes pods and create docker images to build these pods.
        Most recently, I’ve redesigned our product’s UI with mockups and am in
        the process of implementing it. We are removing much of the existing
        legacy code for a simpler, more consistent design and information
        hierarchy.
      </p>
      <p class="about-paragraph">
        I’m mainly not a computer person though. I love to cook, play music with
        friends, keep up with the news, and worry about things. Beyond doing
        work that is challenging and interesting technically, I hope to do work
        that I also feel deeply connected to, to take these technical skills and
        bring them to equity-focused non-profits and public programs with
        technology needs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
.about-content {
  display: flex;
}

.portrait-image {
  height: 400px;
}

.portrait-caption {
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 300;
  line-height: 5px;
}

.about-text-container {
  align-self: end;
  padding: 0 3rem 1rem 3rem;
}

.about-title {
  display: inline-block;
  color: #355c7e;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  padding-bottom: 1rem;
}

.about-paragraph {
  font-size: 1rem;
  padding: 0;
}

@media screen and (max-width: 1080px) {
  .portrait {
    display: flex;
    flex-direction: column;
  }

  .portrait-image {
    height: auto;
  }

  .portrait-caption {
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 300;
    line-height: 1rem;
  }

  .about-content {
    flex-direction: column;
  }

  .about-text-container {
    align-self: start;
    padding: 2rem;
  }
}
</style>
