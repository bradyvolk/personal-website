<template>
  <div class="primary-content">
    <div class="tab-content">
      <About v-if="selectedTab === 'about'" class="fade" />
      <Projects v-if="selectedTab === 'projects'" class="fade" />
      <Writing v-if="selectedTab === 'writing'" class="fade" />
      <Resume v-if="selectedTab === 'résumé'" class="fade" />
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
    <div class="mobile-nav-container">
      <b-navbar class="mobile-nav" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">{{ selectedTab }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              v-for="buttonOption in buttonOptions"
              :key="buttonOption"
              @click="changeSelectedTab(buttonOption)"
            >
              {{ buttonOption }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import About from "./tab-content/About";
import Projects from "./tab-content/Projects";
import Writing from "./tab-content/Writing";
import Resume from "./tab-content/Resume";

export default {
  name: "MainContent",
  components: { About, Projects, Writing, Resume },
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
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 0 5% 2.5% 10%;
}

.tabs {
  display: flex;
  height: 60px;
  grid-gap: 24px;
  padding-left: 10%;
  padding-bottom: 6rem;
}

.tab-btn {
  width: 150px;
  height: 60px;
  background-color: #f7f2ff;
  border-radius: 4px;
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

.fade {
  animation: fadeIn 0.25s ease-out 0s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.mobile-nav-container {
  visibility: hidden;
  position: absolute;
  bottom: 0;
  width: 100vw;
}

@media screen and (max-width: 1080px) {
  .mobile-nav-container {
    visibility: visible;
  }

  .mobile-nav {
    background-color: #1a3d5b !important;
  }

  .tabs {
    visibility: hidden;
  }

  .tab-content {
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 3rem 2.5% 0 2.5%;
  }
}
</style>
