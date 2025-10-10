<script setup>
import { ref } from "vue";
import TaskIcon from "./Icons/TaskIcon.vue"; // اطمینان از وارد کردن آیکون سفارشی

// داده‌های غنی‌شده برای نمایش بهتر در کارت‌های جدید
const myWorkStats = ref([
  {
    id: 1,
    title: "وظایف",
    icon: TaskIcon, // استفاده مستقیم از کامپوننت
    color: "blue",
    stats: {
      main: { label: "باز", value: 12 },
      secondary: { label: "انجام شده امروز", value: 5 },
      total: 40, // مقدار کل برای محاسبه درصد
    },
    details: [
      { label: "نزدیک ددلاین", value: "۵", color: "orange" },
      { label: "ددلاین گذشته", value: "۲", color: "red" },
    ],
    link: "/tasks",
  },
  {
    id: 3,
    title: "گفتگو",
    icon: "mdi-wechat",
    color: "green",
    stats: {
      main: { label: "خوانده نشده", value: '۸' },
      secondary: { label: "کل گفتگوها", value: "۳۴" },
    },
    details: [
      { label: "پیام‌های منشن شده", value: "۳", icon: "mdi-at" },
    ],
    onlineUsers: [
        { name: 'AU', color: 'teal' },
        { name: 'YK', color: 'orange' },
        { name: 'SA', color: 'purple' },
    ],
    link: "/chat",
  },
  {
    id: 4,
    title: "تقویم",
    icon: "mdi-calendar-month-outline",
    color: "orange",
    stats: {
      main: { label: "جلسات امروز", value: 3 },
      secondary: { label: "رویدادهای هفته", value: "۸" },
    },
    details: [
      { label: "جلسه بازاریابی", value: "۱۱:۰۰", icon: "mdi-account-group-outline" },
      { label: "بررسی پروژه", value: "۱۴:۳۰", icon: "mdi-briefcase-check-outline" },
      { label: "تماس با مشتری", value: "۱۶:۰۰", icon: "mdi-phone-outline" },
    ],
    link: "/calendar",
  },
  {
    id: 5,
    title: "فرایندها",
    icon: "mdi-sitemap-outline",
    color: "purple",
    stats: {
      main: { label: "در حال اقدام", value: 6 },
      secondary: { label: "تکمیل شده", value: 10 },
      total: 20, // مقدار کل برای محاسبه درصد
    },
    details: [
      { label: "نیازمند بازبینی", value: "۱", color: "amber" },
      { label: "رد شده", value: "۲", color: "red" },
    ],
    link: "/processes",
  },
]);

// توابع کمکی برای استایل‌دهی داینامیک بر اساس رنگ هر آیتم
const getBorderColor = (color) => `border-${color}-500`;
const getTextColor = (color) => `text-${color}-600`;
const getBgColor = (color) => `bg-${color}-500`;
const getLightBgColor = (color) => `bg-${color}-100`;

</script>

<template>
  <div class="p-4 sm:p-6 bg-gray-50 min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div v-if="myWorkStats[0]" class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-lg border-t-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" :class="getBorderColor(myWorkStats[0].color)">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl text-gray-800">{{ myWorkStats[0].title }}</h3>
            <component :is="myWorkStats[0].icon" :width="40" :height="40" :class="getTextColor(myWorkStats[0].color)" />
          </div>
          <div class="flex items-end gap-8 mt-6">
            <div class="flex items-baseline">
              <p class="text-6xl font-bold" :class="getTextColor(myWorkStats[0].color)">{{ myWorkStats[0].stats.main.value }}</p>
              <p class="text-lg text-gray-500 ml-2">{{ myWorkStats[0].stats.main.label }}</p>
            </div>
            <v-progress-circular :model-value="(myWorkStats[0].stats.main.value / myWorkStats[0].stats.total) * 100" :rotate="360" :size="70" :width="8" :color="myWorkStats[0].color">
              <span class="font-bold text-sm">{{ Math.round((myWorkStats[0].stats.main.value / myWorkStats[0].stats.total) * 100) }}%</span>
            </v-progress-circular>
          </div>
          <div class="mt-4 space-y-2 text-sm">
             <div v-for="detail in myWorkStats[0].details" :key="detail.label" class="flex items-center">
                <span class="h-2 w-2 rounded-full" :class="getBgColor(detail.color)"></span>
                <span class="ml-2 text-gray-600">{{ detail.label }}:</span>
                <span class="font-semibold ml-auto">{{ detail.value }}</span>
             </div>
          </div>
        </div>
        <button class="btn btn-ghost w-full mt-6" :class="getTextColor(myWorkStats[0].color)">مشاهده وظایف</button>
      </div>

      <div v-if="myWorkStats[1]" class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-lg border-t-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" :class="getBorderColor(myWorkStats[1].color)">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl text-gray-800">{{ myWorkStats[1].title }}</h3>
            <v-icon size="40" :color="myWorkStats[1].color">{{ myWorkStats[1].icon }}</v-icon>
          </div>
          <div class="flex items-baseline mt-6">
              <p class="text-6xl font-bold" :class="getTextColor(myWorkStats[1].color)">{{ myWorkStats[1].stats.main.value }}</p>
              <p class="text-lg text-gray-500 ml-2">{{ myWorkStats[1].stats.main.label }}</p>
          </div>
          <div class="mt-4 p-3 rounded-lg flex justify-between items-center" :class="getLightBgColor(myWorkStats[1].color)">
            <div class="flex items-center">
              <v-icon small>{{ myWorkStats[1].details[0].icon }}</v-icon>
              <span class="text-sm ml-2 text-gray-700">{{ myWorkStats[1].details[0].label }}</span>
            </div>
            <span class="font-bold text-sm px-2 py-1 rounded" :class="[getBgColor(myWorkStats[1].color), 'text-white']">{{ myWorkStats[1].details[0].value }}</span>
          </div>
          <div class="mt-4">
             <p class="text-sm text-gray-500 mb-2">کاربران آنلاین:</p>
             <div class="flex items-center -space-x-2">
                <v-avatar v-for="user in myWorkStats[1].onlineUsers" :key="user.name" :color="user.color" size="32">
                    <span class="text-xs text-white font-bold">{{ user.name }}</span>
                </v-avatar>
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-xs font-semibold border-2 border-white">
                  +{{ myWorkStats[1].stats.secondary.value - myWorkStats[1].onlineUsers.length }}
                </div>
             </div>
          </div>
        </div>
        <button class="btn btn-ghost w-full mt-6" :class="getTextColor(myWorkStats[1].color)">باز کردن گفتگو</button>
      </div>
      
      <div v-if="myWorkStats[2]" class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-lg border-t-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" :class="getBorderColor(myWorkStats[2].color)">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl text-gray-800">{{ myWorkStats[2].title }}</h3>
            <v-icon size="40" :color="myWorkStats[2].color">{{ myWorkStats[2].icon }}</v-icon>
          </div>
          <p class="text-2xl font-bold mt-6" :class="getTextColor(myWorkStats[2].color)">{{ myWorkStats[2].stats.main.value }} {{ myWorkStats[2].stats.main.label }}</p>
          <div class="mt-4 border-t border-gray-200 pt-4">
            <p class="text-sm text-gray-500 mb-3">برنامه امروز:</p>
            <ul class="space-y-3">
              <li v-for="event in myWorkStats[2].details" :key="event.label" class="flex items-center text-sm">
                <v-icon size="20" class="text-gray-400">{{ event.icon }}</v-icon>
                <span class="text-gray-700 mx-2">{{ event.label }}</span>
                <span class="font-mono text-gray-500 mr-auto">{{ event.value }}</span>
              </li>
            </ul>
          </div>
        </div>
        <button class="btn btn-ghost w-full mt-6" :class="getTextColor(myWorkStats[2].color)">مشاهده تقویم</button>
      </div>

      <div v-if="myWorkStats[3]" class="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-lg border-t-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" :class="getBorderColor(myWorkStats[3].color)">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl text-gray-800">{{ myWorkStats[3].title }}</h3>
            <v-icon size="40" :color="myWorkStats[3].color">{{ myWorkStats[3].icon }}</v-icon>
          </div>
          <div class="flex items-baseline mt-6">
              <p class="text-6xl font-bold" :class="getTextColor(myWorkStats[3].color)">{{ myWorkStats[3].stats.main.value }}</p>
              <p class="text-lg text-gray-500 ml-2">{{ myWorkStats[3].stats.main.label }}</p>
          </div>
          
          <div class="mt-4 space-y-3">
            <div>
              <div class="flex justify-between text-sm mb-1">
                 <span class="text-gray-600">میزان پیشرفت</span>
                 <span class="font-semibold">{{ Math.round((myWorkStats[3].stats.secondary.value / myWorkStats[3].stats.total) * 100) }}%</span>
              </div>
              <div class="relative h-2.5">
                  <v-progress-linear :model-value="(myWorkStats[3].stats.main.value / myWorkStats[3].stats.total) * 100" color="grey-lighten-2" height="10" rounded class="absolute w-full"></v-progress-linear>
                  <v-progress-linear :model-value="(myWorkStats[3].stats.secondary.value / myWorkStats[3].stats.total) * 100" :color="myWorkStats[3].color" height="10" rounded class="absolute w-full"></v-progress-linear>
              </div>
            </div>
            <div class="flex pt-2 gap-4">
                <div v-for="detail in myWorkStats[3].details" :key="detail.label" class="flex-1 text-center p-2 rounded-lg" :class="getLightBgColor(detail.color)">
                    <p class="font-bold text-xl" :class="getTextColor(detail.color)">{{ detail.value }}</p>
                    <p class="text-xs" :class="getTextColor(detail.color)">{{ detail.label }}</p>
                </div>
            </div>
          </div>
        </div>
        <button class="btn btn-ghost w-full mt-6" :class="getTextColor(myWorkStats[3].color)">مدیریت فرایندها</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn.btn-ghost.text-blue-600:hover {
  background-color: rgba(37, 99, 235, 0.1);
}
.btn.btn-ghost.text-green-600:hover {
  background-color: rgba(22, 163, 74, 0.1);
}
.btn.btn-ghost.text-orange-600:hover {
  background-color: rgba(234, 88, 12, 0.1);
}
.btn.btn-ghost.text-purple-600:hover {
  background-color: rgba(147, 51, 234, 0.1);
}
</style>