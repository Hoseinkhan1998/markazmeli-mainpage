import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../components/HomePage.vue";
import FirstLayout from "../pages/FirstLayout.vue";
import Announcement from "../pages/Announcement.vue";
import Ping from "../pages/Ping.vue";
import Security from "../pages/Security.vue";
import PingDetails from "../pages/PingDetails.vue";
import AnnouncementDetails from "../pages/AnnouncementDetails.vue";

const routes = [
  // { path: "/", component: HomePage, name: "home" },
  { path: "/", component: FirstLayout, name: "first-layout" },
  { path: "/announcement", component: Announcement, name: "announcement" },
  { path: "/announcement/:id", component: AnnouncementDetails, name: "AnnouncementDetails" },
  { path: "/ping", component: Ping, name: "ping" },
  { path: "/ping-details/:id", component: PingDetails, name: "ping-details" },
  { path: "/security", component: Security, name: "security" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // همیشه به بالای صفحه بروید
    return { top: 0 };
  },
});

export default router;
