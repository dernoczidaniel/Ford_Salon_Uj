import { createRouter, createWebHistory } from "vue-router";
import ServiceView from "../views/Service.vue";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/News.vue";
import HistoryView from "../views/History.vue";
import AboutView from "../views/About.vue";
import CarsView from "../views/Cars.vue";
import BoilingView from "../views/Boiling.vue";
import ProfileView from "../views/Profile.vue";
import ConfiguratorView from "../views/Configurator.vue";
import SummaryView from "../views/summary.vue";
import DonePageView from "../views/Done.vue";
import TestView from "../views/test.vue";
import login from "../views/login.vue";
import registration from "../views/registration.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/News",
      name: "News",
      component: NewsView,
    },
    {
      path: "/History",
      name: "History",
      component: HistoryView,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
    },
    {
      path: "/Cars",
      name: "Cars",
      component: CarsView,
      props: true,
    },
    {
      path: "/Boiling",
      name: "Boiling",
      component: BoilingView,
    },
    {
      path: "/Service",
      name: "Service",
      component: ServiceView,
    },
    {
      path: "/Profile",
      name: "Profile",
      component: ProfileView,
    },
    {
      path: "/Configurator/:modelId",
      name: "Configurator",
      component: ConfiguratorView,
      props: true,
    },
    {
      path: "/Done",
      name: "Done",
      component: DonePageView,
    },
    {
      path: "/test",
      name: "test",
      component: TestView,
    },
    {
      path: "/summary",
      name: "summary",
      component: SummaryView,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/registration",
      name: "registration",
      component: registration,
    },
  ],

  created() {
    this.selectedCar = JSON.parse(this.$route.params.selectedCar);
  }
});

export default router;
