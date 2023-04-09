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
import ConfiguratorView from "../views/Configurator.vue";
import SummaryPageView from "../views/SummaryPage.vue";
import DonePageView from "../views/Done.vue";
import TestView from "../views/test.vue";


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
      path: "/Configurator",
      name: "Configurator",
      component: ConfiguratorView,
    },
    {
      path: "/SummaryPage",
      name: "SummaryPage",
      component: SummaryPageView,
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


  ],
});

export default router;
