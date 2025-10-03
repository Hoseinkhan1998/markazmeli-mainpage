<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import { ref, computed } from "vue";

// 1. داده‌ها را با لینک‌های صحیح (پوستر و ویدیوی پیش‌نمایش) به‌روز می‌کنیم
const cards = ref([
  {
    id: 1,
    title: "آپارات شورتس دنیای بی‌پایان ویدیوهای کوتاه",
    // آدرس عکس ثابت که قبل از هاور نمایش داده می‌شود
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
    // آدرس ویدیوی کوتاه پیش‌نمایش (مثلا _15s.mp4)
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/65774467_15s.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    count: "۱۱",
    like: "۳۰",
  },
  {
    id: 2,
    title: "چطور ویدئوهامون رو در آپارات ویرایش کنیم؟",
    poster: "https://static.cdn.asset.aparat.cloud/avt/48483869-5606-l__8095.jpg?width=700&quality=90&secret=uHujqkbLYcJgKAIGGs65fg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/48483869_15s.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    count: "۱۲",
    like: "۴۹",
  },
  {
    id: 3,
    title: "سرگرمی و آموزش برای تمام خانواده با اپ اندروید تی‌وی آپارات",
    poster: "https://static.cdn.asset.aparat.cloud/avt/64383485-6308-l__1414.jpg?width=700&quality=90&secret=IDojmB0q2o1n1iWBy39pTg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/64383485_15s.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    count: "۱۳",
    like: "۶۶",
  },
  {
    id: 4,
    title: "آپارات شورتس دنیای بی‌پایان ویدیوهای کوتاه",
    // آدرس عکس ثابت که قبل از هاور نمایش داده می‌شود
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
    // آدرس ویدیوی کوتاه پیش‌نمایش (مثلا _15s.mp4)
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/65774467_15s.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    count: "۱۴",
    like: "۳۰",
  },
  {
    id: 5,
    title: "چطور ویدئوهامون رو در آپارات ویرایش کنیم؟",
    poster: "https://static.cdn.asset.aparat.cloud/avt/48483869-5606-l__8095.jpg?width=700&quality=90&secret=uHujqkbLYcJgKAIGGs65fg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/48483869_15s.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    count: "۱۵",
    like: "۱۲",
  },
  {
    id: 6,
    title: "سرگرمی و آموزش برای تمام خانواده با اپ اندروید تی‌وی آپارات",
    poster: "https://static.cdn.asset.aparat.cloud/avt/64383485-6308-l__1414.jpg?width=700&quality=90&secret=IDojmB0q2o1n1iWBy39pTg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/64383485_15s.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    count: "۱۶",
    like: "۱۹",
  },
]);

// 2. توابع کنترل ویدیو که به صورت مستقیم روی تگ ویدیو اعمال می‌شوند
const playPreview = (event) => {
  event.target.play();
};

const stopPreview = (event) => {
  event.target.pause();
  event.target.currentTime = 0; // بازگشت به ابتدای ویدیو
  event.target.load();
};

// منطق فیلتر و جستجو بدون تغییر
const searchQuery = ref("");
const filteredCards = computed(() => {
  return cards.value.filter((card) => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesSearch;
  });
});

const router = useRouter();
</script>

<template>
  <div class="bg-white h-full rounded-lg p-3">
    <div class="flex flex-col gap-5 pb-10">
      <Menu activePage="ping" />
      <div dir="rtl" class="grid grid-cols-12 gap-5">
        <div class="col-span-3" dir="rtl">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="جستجو..."
            class="w-full bg-white border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <router-link
          v-for="card in filteredCards"
          :key="card.id"
          :to="{ name: 'ping-details', params: { id: card.id } }"
          class="col-span-3 h-[400px] border-2 border-neutral-300 hover:bg-neutral-200 transition-all duration-300 cursor-pointer rounded-lg p-2 flex flex-col gap-2 relative">
          <video
            :src="card.previewSrc"
            :poster="card.poster"
            class="w-full h-[250px] object-cover rounded-lg"
            muted
            loop
            playsinline
            @mouseenter="playPreview"
            @mouseleave="stopPreview"></video>

          <h3 class="font-semibold text-gray-800 line-clamp-3">{{ card.title }}</h3>
          <div class="absolute bottom-1 w-full pe-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center text-xs gap-2">پینگ شماره {{ card.count }}</div>
              <div class="flex text-xs text-gray-500 items-center gap-1">
                <span class="text-sm">{{ card.like }}</span>
                <span><v-icon class="text-red-500">mdi-cards-heart</v-icon></span>
                <span class="text-sm mr-3">{{ card.view }}</span>
                <span><v-icon>mdi-eye</v-icon></span>
                <span class="mr-3">{{ card.date }}</span>
                <span><v-icon>mdi-calendar-clock</v-icon></span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
