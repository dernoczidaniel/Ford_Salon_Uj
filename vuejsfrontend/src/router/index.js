import { createRouter, createWebHistory } from "vue-router";



import ServiceView from "../views/Service.vue";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/News.vue";
import HistoryView from "../views/History.vue";
import AboutView from "../views/About.vue";
import CarsView from "../views/Cars.vue";
import BoilingView from "../views/Boiling.vue";
import LoginRegistrationView from "../views/LoginRegistration.vue";
import ProfileView from "../views/Profile.vue";
import ConfiguratorViewStep1 from "../views/ConfiguratorStep1.vue";
import ConfiguratorViewStep2 from "../views/ConfiguratorStep2.vue";



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
    },
    {
      path: "/Boiling",
      name: "Boiling",
      component: BoilingView,
    },
    {
      path: "/LoginRegistration",
      name: "LoginRegistration",
      component: LoginRegistrationView,
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
      path: "/ConfiguratorStep1",
      name: "ConfiguratorStep1",
      component: ConfiguratorViewStep1,
    },
    {
      path: "/ConfiguratorStep2",
      name: "ConfiguratorStep2",
      component: ConfiguratorViewStep2,
    },
   
   
  ],
});

export default router;
