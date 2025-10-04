<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const layout = ref("grid");

// شورتکات‌ها: Alt + Shift + 1/2
const handleKeydown = (event) => {
  // اگر کلیدهای Ctrl و Shift همزمان فشرده شده باشند
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key) {
      case "E":
        event.preventDefault();
        layout.value = "grid";
        break;
      case "F":
        event.preventDefault();
        layout.value = "grid2";
        break;
    }
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
      main: { label: "باز", value: 12 },
      secondary: { label: "انجام شده", value: 24 },
    },
    details: [
      { label: "نزدیک ددلاین", value: 5, color: "orange" },
      { label: "ددلاین گذشته", value: 2, color: "red" },
    ],
    progress: 30, // درصد وظایف باز
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
  },
  {
    id: 3,
    title: "گفتگو",
    icon: "mdi-wechat",
    color: "red",
    stats: {
      main: { label: "خوانده نشده", value: 8 },
      secondary: { label: "کل گفتگوها", value: 34 },
    },
    details: [
      { label: "پیام‌های منشن شده", value: 3, color: "blue" },
      { label: "کاربران آنلاین", value: 5, color: "green" },
    ],
    progress: 25, // درصد پیام‌های خوانده نشده
  },
  {
    id: 4,
    title: "تقویم",
    icon: "mdi-calendar-month-outline",
    color: "orange",
    stats: {
      main: { label: "جلسات امروز", value: 3 },
      secondary: { label: "رویدادهای هفته", value: 8 },
    },
    details: [
      { label: "جلسات تایید نشده", value: 1, color: "yellow" },
      { label: "درخواست جلسه جدید", value: 2, color: "blue" },
    ],
    progress: 50,
  },
  {
    id: 5,
    title: "فرایندها",
    icon: "mdi-sitemap-outline",
    color: "purple",
    stats: {
      main: { label: "در حال اقدام", value: 6 },
      secondary: { label: "تکمیل شده", value: 10 },
    },
    details: [
      { label: "نیازمند بازبینی", value: 1, color: "yellow" },
      { label: "رد شده", value: 2, color: "red" },
    ],
    progress: 60,
  },
]);
</script>

<template>
  <div class="grid hidden grid-cols-12 gap-4 p-6">
    <!-- وظایف -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
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

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-green-600 font-semibold flex justify-between">
          <p>انجام شده</p>
          <p>۲۴</p>
        </div>
        <div class="text-black font-semibold flex justify-between">
          <p>باز</p>
          <p>۱۲</p>
        </div>
        <div class="text-orange-500 font-semibold flex justify-between">
          <p>نزدیک ددلاین</p>
          <p>۵</p>
        </div>
        <div class="text-red-600 font-semibold flex justify-between">
          <p>ددلاین گذشته</p>
          <p>۲</p>
        </div>
      </div>
    </div>

    <!-- تنخواه -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
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

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-blue-600 font-semibold flex justify-between">
          <p>کل تنخواه</p>
          <p>۸,۲۰۰,۰۰۰</p>
        </div>
        <div class="text-black font-semibold flex justify-between">
          <p>پرداخت شده</p>
          <p>۵,۲۰۰,۰۰۰</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>مانده</p>
          <p>۳,۰۰۰,۰۰۰</p>
        </div>
      </div>
    </div>

    <!-- چت -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
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

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-red-600 font-semibold flex justify-between">
          <p>پیام‌های خوانده نشده</p>
          <p>۸</p>
        </div>
        <div class="text-black font-semibold flex justify-between">
          <p>کل گفتگوها</p>
          <p>۳۴</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>کاربران آنلاین</p>
          <p>۵</p>
        </div>
      </div>
    </div>

    <!-- تقویم -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
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

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-orange-500 font-semibold flex justify-between">
          <p>جلسات امروز</p>
          <p>۳</p>
        </div>
        <div class="text-blue-600 font-semibold flex justify-between">
          <p>جلسات این هفته</p>
          <p>۸</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>جلسات آینده</p>
          <p>۴</p>
        </div>
      </div>
    </div>

    <!-- فرایند -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
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

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-yellow-500 font-semibold flex justify-between">
          <p>در حال اقدام</p>
          <p>۶</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>تمام شده</p>
          <p>۱۰</p>
        </div>
        <div class="text-red-600 font-semibold flex justify-between">
          <p>رد شده</p>
          <p>۲</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-6">
    <div
      v-for="item in myWorkStats"
      :key="item.id"
      class="col-span-2 group relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
      <v-icon class="!text-5xl opacity-80" :class="`text-${item.color}-500`">{{ item.icon }}</v-icon>

      <h3 class="font-bold text-xl text-gray-800 mt-4">{{ item.title }}</h3>

      <div class="mt-8">
        <p class="text-4xl font-bold text-gray-800">{{ item.stats.main.value }}</p>
        <p class="text-sm text-gray-500">{{ item.stats.main.label }}</p>
      </div>

      <div class="mt-2 text-sm text-gray-400 flex justify-between items-center">
        <span>{{ item.stats.secondary.label }}</span>
        <span>{{ item.stats.secondary.value }}</span>
      </div>

      <a href="#" class="absolute bottom-4 right-5 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"> مشاهده جزئیات &rarr; </a>
    </div>
  </div>

  <div v-if="layout === 'grid2'" class="grid grid-cols-12 gap-5">
    <div
      v-for="item in myWorkStats"
      :key="item.id"
      class="col-span-2 group relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100">
      <div class="transition-opacity duration-300 group-hover:opacity-0 group-hover:invisible">
        <div class="flex items-center gap-3">
          <v-icon class="!text-2xl" :class="`text-${item.color}-500`">{{ item.icon }}</v-icon>
          <h3 class="font-bold text-lg text-gray-800">{{ item.title }}</h3>
        </div>
        <div class="mt-6 space-y-3">
          <div class="flex justify-between items-center text-sm">
            <span class="text-gray-600">{{ item.stats.main.label }}</span>
            <span class="font-bold text-lg text-gray-800">{{ item.stats.main.value }}</span>
          </div>
          <div class="w-full bg-gray-200 h-1.5 rounded-full">
            <div class="h-1.5 rounded-full" :class="`bg-${item.color}-500`" :style="{ width: `${item.progress}%` }"></div>
          </div>
          <div class="flex justify-between items-center text-xs text-gray-400">
            <span>{{ item.stats.secondary.label }}</span>
            <span>{{ item.stats.secondary.value }}</span>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 p-5 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4
          class="font-bold text-center mb-4 text-gray-700 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          style="transition-delay: 50ms">
          جزئیات {{ item.title }}
        </h4>
        <div class="space-y-2 text-sm">
          <div
            v-for="(detail, index) in item.details"
            :key="detail.label"
            class="flex justify-between font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            :class="colorClasses[detail.color]"
            :style="{ transitionDelay: `${100 + index * 50}ms` }">
            <p>{{ detail.label }}</p>
            <p>{{ detail.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
