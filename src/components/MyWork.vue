<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const layout = ref("grid");

const hoveredId = ref(null);

// شورتکات‌ها: Alt + Shift + 1/2
const handleKeydown = (event) => {
  // اگر کلیدهای Ctrl و Shift همزمان فشرده شده باشند
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;
  switch (event.key) {
    case "4":
      event.preventDefault();
      layout.value = "grid";
      break;
    case "5":
      event.preventDefault();
      layout.value = "grid2";
      break;
    case "6":
      event.preventDefault();
      layout.value = "grid3";
      break;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

// حذف شنونده رویداد برای جلوگیری از نشت حافظه
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

const colorClasses = {
  blue: "text-blue-600",
  green: "text-green-600",
  red: "text-red-600",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  purple: "text-purple-600",
  gray: "text-gray-600",
};

const myWorkStats = ref([
  {
    id: 1,
    title: "وظایف",
    icon: "mdi-clipboard-check-outline",
    color: "blue",
    stats: {
      main: { label: "باز", value: "۱۲" },
      secondary: { label: "انجام شده", value: "۲۴" },
    },
    details: [
      { label: "نزدیک ددلاین", value: "۵", color: "orange" },
      { label: "ددلاین گذشته", value: "۲", color: "red" },
    ],
    progress: 30, // درصد وظایف باز
    secondaryProgress: 50,
  },
  {
    id: 2,
    title: "تنخواه",
    icon: "mdi-cash-multiple",
    color: "green",
    stats: {
      main: { label: "مانده", value: "۳,۰۰۰,۰۰۰" },
      secondary: { label: "کل تنخواه", value: "۸,۲۰۰,۰۰۰" },
    },
    details: [
      { label: "هزینه ثبت شده", value: "۵,۲۰۰,۰۰۰", color: "gray" },
      { label: "در انتظار تایید", value: "۴۵۰,۰۰۰", color: "yellow" },
    ],
    progress: 40, // درصد مانده
    secondaryProgress: 70,
  },
  {
    id: 3,
    title: "گفتگو",
    icon: "mdi-wechat",
    color: "red",
    stats: {
      main: { label: "خوانده نشده", value: "۸" },
      secondary: { label: "کل گفتگوها", value: "۳۴" },
    },
    details: [
      { label: "پیام‌های منشن شده", value: "۳", color: "blue" },
      { label: "کاربران آنلاین", value: "۵", color: "green" },
    ],
    progress: 25, // درصد پیام‌های خوانده نشده
    secondaryProgress: 20,
  },
  {
    id: 4,
    title: "تقویم",
    icon: "mdi-calendar-month-outline",
    color: "orange",
    stats: {
      main: { label: "جلسات امروز", value: "۳" },
      secondary: { label: "رویدادهای هفته", value: "۸" },
    },
    details: [
      { label: "جلسات تایید نشده", value: "۱", color: "yellow" },
      { label: "درخواست جلسه جدید", value: "۲", color: "blue" },
    ],
    progress: 50,
    secondaryProgress: 30,
  },
  {
    id: 5,
    title: "فرایندها",
    icon: "mdi-sitemap-outline",
    color: "purple",
    stats: {
      main: { label: "در حال اقدام", value: "۶" },
      secondary: { label: "تکمیل شده", value: "۱۰" },
    },
    details: [
      { label: "نیازمند بازبینی", value: "۱", color: "yellow" },
      { label: "رد شده", value: "۲", color: "red" },
    ],
    progress: 60,
    secondaryProgress: 40,
  },
]);
</script>

<template>
  <!-- طرح اول -->
  <div v-if="layout === 'grid3'" class="grid grid-cols-12 gap-4 p-6">
    <!-- وظایف -->
    <div
      class="col-span-2 relative group border border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">وظایف</p>

      <!-- محتوا اصلی -->
      <div class="flex justify-between text-sm mb-1">
        <span>انجام شده</span>
        <span>۲۴</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-green-500 h-2 rounded" style="width: 70%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>باز</span>
        <span>۱۲</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-red-500 h-2 rounded" style="width: 30%"></div>
      </div>
    </div>

    <!-- تنخواه -->
    <div
      class="col-span-2 relative group border border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">تنخواه</p>

      <div class="flex justify-between text-sm mb-1">
        <span>هزینه ثبت شده</span>
        <span>۵,۲۰۰,۰۰۰</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-blue-500 h-2 rounded" style="width: 60%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>مانده</span>
        <span>۳,۰۰۰,۰۰۰</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-green-500 h-2 rounded" style="width: 40%"></div>
      </div>
    </div>

    <!-- چت -->
    <div
      class="col-span-2 relative group border border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">گفتگو</p>

      <div class="flex justify-between text-sm mb-1">
        <span>پیام‌های خوانده نشده</span>
        <span>۸</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-red-500 h-2 rounded" style="width: 25%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>کل گفتگوها</span>
        <span>۳۴</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-blue-500 h-2 rounded" style="width: 75%"></div>
      </div>
    </div>

    <!-- تقویم -->
    <div
      class="col-span-2 relative group border border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">تقویم</p>

      <div class="flex justify-between text-sm mb-1">
        <span>جلسات امروز</span>
        <span>۳</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-orange-500 h-2 rounded" style="width: 50%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>جلسات این هفته</span>
        <span>۸</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-blue-500 h-2 rounded" style="width: 70%"></div>
      </div>
    </div>

    <!-- فرایند -->
    <div
      class="col-span-2 relative group border border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">فرایندها</p>

      <div class="flex justify-between text-sm mb-1">
        <span>در حال اقدام</span>
        <span>۶</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-yellow-500 h-2 rounded" style="width: 50%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>تمام شده</span>
        <span>۱۰</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-green-500 h-2 rounded" style="width: 80%"></div>
      </div>
    </div>
  </div>
  <!-- طرح دوم -->
  <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-6">
    <div
      v-for="item in myWorkStats"
      :key="item.id"
      class="col-span-2 group relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
      <v-icon class="!text-5xl opacity-80" :class="`text-blue-500`">{{ item.icon }}</v-icon>

      <h3 class="font-bold text-2xl text-gray-800 mt-2">{{ item.title }}</h3>

      <div class="mt-4 flex items-center gap-5">
        <p class="text-4xl font-bold text-red-600">{{ item.stats.main.value }}</p>
        <p class="text-sm text-gray-500">{{ item.stats.main.label }}</p>
      </div>

      <div class="mt-2 text-sm text-gray-400 flex justify-between items-center">
        <span>{{ item.stats.secondary.label }}</span>
        <span>{{ item.stats.secondary.value }}</span>
      </div>

      <a href="#" class="absolute bottom-4 right-5 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"> مشاهده جزئیات &rarr; </a>
    </div>
  </div>
  <!-- طرح سوم (اصلاح‌شده برای overlay همیشه بالای کارت) -->
  <div v-if="layout === 'grid2'" class="grid grid-cols-12 gap-5">
    <div
      v-for="item in myWorkStats"
      :key="item.id"
      @mouseenter="hoveredId = item.id"
      @mouseleave="hoveredId = null"
      class="col-span-2 relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100">
      <!-- محتوای اصلی کارت (پشت overlay) -->
      <div class="relative z-10">
        <div class="flex items-center gap-3">
          <v-icon class="!text-2xl" :class="`text-${item.color}-500`">{{ item.icon }}</v-icon>
          <h3 class="font-bold text-lg text-gray-800">{{ item.title }}</h3>
        </div>

        <!-- بخش progress bar ها -->
        <div class="mt-6 space-y-4">
          <!-- پراگرس اصلی -->
          <div>
            <div class="flex justify-between items-center text-sm mb-1">
              <span class="text-gray-600">{{ item.stats.main.label }}</span>
              <span class="font-bold text-gray-800">{{ item.stats.main.value }}</span>
            </div>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="h-1.5 rounded-full transition-all" :class="`bg-${item.color}-500`" :style="{ width: `${item.progress}%` }"></div>
            </div>
          </div>

          <!-- پراگرس دوم (جدید) -->
          <div>
            <div class="flex justify-between items-center text-sm mb-1">
              <span class="text-gray-600">{{ item.stats.secondary.label }}</span>
              <span class="font-bold text-gray-800">{{ item.stats.secondary.value }}</span>
            </div>
            <div class="w-full bg-gray-200 h-1.5 rounded-full">
              <div class="h-1.5 rounded-full transition-all bg-red-500" :style="{ width: `${item.secondaryProgress}%` }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- overlay: حتماً بالای همه قرار می‌گیره -->
      <div
        :class="[
          'absolute inset-0 px-5 flex flex-col justify-center items-center transition-opacity duration-300 ease-out z-[50] backdrop-blur-sm',
          hoveredId === item.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ]"
        style="background-color: rgba(255, 255, 255, 0.85)">
        <!-- عنوان روی لایه -->
        <h4
          class="font-bold text-center mb-4 text-gray-700 transition-all duration-400"
          :class="hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
          :style="{ transitionDelay: '120ms' }">
          جزئیات {{ item.title }}
        </h4>

        <!-- جزییات با انیمیشن ترتیبی (slide-up + fade) -->
        <div class="space-y-2 text-sm w-full">
          <div
            v-for="(detail, index) in item.details"
            :key="detail.label"
            :style="{ transitionDelay: `${200 + index * 100}ms` }"
            :class="[
              'flex justify-between font-semibold transition-all duration-400',
              hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
              colorClasses[detail.color],
            ]">
            <p>{{ detail.label }}</p>
            <p>{{ detail.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
