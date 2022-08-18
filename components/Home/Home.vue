<template>
  <div class="test">
    <!-- <img class="background-image" src="~/assets/homemade-background.png" /> -->
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.background-image {
  height: 100%;
  width: 100%;
  background-image: url("~/assets/homemade-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  opacity: 45%;
}

/* .background-image {
  width: 100%;
  opacity: 50%;
} */
</style>
