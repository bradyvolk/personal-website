<template>
  <div class="primary-content">
    <div class="tab-content">
      <About v-if="selectedTab === 'about'" />
      <Projects v-if="selectedTab === 'projects'" />
      <Writing v-if="selectedTab === 'writing'" />
      <Resume v-if="selectedTab === 'résumé'" />
    </div>
    <div class="tabs">
      <button
        class="tab-btn"
        :class="[
          buttonOption === selectedTab ? tabBtnSelectedClass : '',
          tabBtnClass,
        ]"
        v-for="buttonOption in buttonOptions"
        :key="buttonOption"
        @click="changeSelectedTab(buttonOption)"
      >
        {{ buttonOption }}
      </button>
    </div>
  </div>
</template>

<script>
import About from "./tab-content/About";

export default {
  name: "MainContent",
  components: { About },
  computed: {
    isSelectedClass(buttonOption) {
      return {
        "btn-selected": this.selectedTab === buttonOption,
      };
    },
  },
  data() {
    return {
      selectedTab: "about",
      buttonOptions: ["about", "projects", "writing", "résumé"],
      tabBtnClass: "tab-btn",
      tabBtnSelectedClass: "tab-btn-selected",
    };
  },
  methods: {
    changeSelectedTab(value) {
      this.selectedTab = value;
    },
  },
};
</script>

<style scoped>
.tab-content {
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  margin-bottom: 1rem;
}

.tabs {
  display: flex;
  height: 60px;
  grid-gap: 24px;
  padding-left: 10%;
  padding-bottom: 5rem;
}

.tab-btn {
  width: 150px;
  height: 60px;
  background-color: #f7f2ff;
  border-radius: 8px;
  border: 1px solid #1a3d5b;
  font-size: 22px;
  color: #1a3d5b;
  letter-spacing: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

.tab-btn:hover {
  background-color: #ece0ff;
}

.tab-btn-selected {
  font-weight: 500;
  background-color: #1a3d5b;
  color: #ffffff;
}

.tab-btn-selected:hover {
  background-color: #1a3d5b;
}
</style>
