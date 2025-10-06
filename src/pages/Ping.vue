<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const layout = ref("grid");
const handleKeydown = (event) => {
  // اگر کاربر در حال تایپ در input یا textarea بود، کاری نکن
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;

  switch (event.key.toLowerCase()) {
    case "1":
      event.preventDefault();
      layout.value = "grid";
      break;
    case "2":
      event.preventDefault();
      layout.value = "grid2";
      break;
    case "3":
      event.preventDefault();
      layout.value = "grid3";
      break;
    case "4":
      event.preventDefault();
      layout.value = "grid4";
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
    description: "با آپارات شورتس، در دنیایی از ویدیوهای کوتاه و جذاب غرق شوید و لحظات خود را با دیگران به اشتراک بگذارید.",
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
    description: "در این ویدیوی آموزشی، به صورت قدم به قدم یاد می‌گیرید که چطور از ابزارهای ویرایشگر ویدیوی آپارات برای بهتر کردن ویدیوهای خود استفاده کنید.",
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
    description: "با آپارات شورتس، در دنیایی از ویدیوهای کوتاه و جذاب غرق شوید و لحظات خود را با دیگران به اشتراک بگذارید.",
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
    description: "در این ویدیوی آموزشی، به صورت قدم به قدم یاد می‌گیرید که چطور از ابزارهای ویرایشگر ویدیوی آپارات برای بهتر کردن ویدیوهای خود استفاده کنید.",
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
    description: "با آپارات شورتس، در دنیایی از ویدیوهای کوتاه و جذاب غرق شوید و لحظات خود را با دیگران به اشتراک بگذارید.",
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
    description: "در این ویدیوی آموزشی، به صورت قدم به قدم یاد می‌گیرید که چطور از ابزارهای ویرایشگر ویدیوی آپارات برای بهتر کردن ویدیوهای خود استفاده کنید.",
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
  <div class="bg-white h-full rounded-lg p-6">
    <div class="flex flex-col gap-6 pb-10">
      <Menu activePage="ping" />

      <!-- <div class="grid grid-cols-12 gap-5 items-center">
        <div class="col-span-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="جستجو در عنوان پینگ..."
            class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="col-span-8 flex justify-end items-center gap-x-2">
          <p class="text-sm text-gray-500">تغییر نما:</p>
          <button
            @click="layout = 'classic'"
            :class="{ 'bg-blue-600 text-white': layout === 'classic', 'bg-gray-200 text-gray-700': layout !== 'classic' }"
            class="p-2 rounded-lg transition-colors">
            <v-icon>mdi-view-grid</v-icon>
          </button>
          <button
            @click="layout = 'immersive'"
            :class="{ 'bg-blue-600 text-white': layout === 'immersive', 'bg-gray-200 text-gray-700': layout !== 'immersive' }"
            class="p-2 rounded-lg transition-colors">
            <v-icon>mdi-view-dashboard-variant</v-icon>
          </button>
          <button
            @click="layout = 'list'"
            :class="{ 'bg-blue-600 text-white': layout === 'list', 'bg-gray-200 text-gray-700': layout !== 'list' }"
            class="p-2 rounded-lg transition-colors">
            <v-icon>mdi-view-list</v-icon>
          </button>
        </div>
      </div> -->

      <div>
        <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-6">
          <router-link
            v-for="card in filteredCards"
            :key="card.id"
            :to="{ name: 'ping-details', params: { id: card.id } }"
            class="col-span-3 group flex flex-col gap-3 cursor-pointer">
            <div class="rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
              <video
                :src="card.previewSrc"
                :poster="card.poster"
                class="w-full aspect-video object-cover"
                muted
                loop
                playsinline
                @mouseenter="playPreview"
                @mouseleave="stopPreview"></video>
            </div>
            <div class="flex flex-col px-1">
              <h3 class="font-bold text-gray-800 line-clamp-2 leading-relaxed">{{ card.title }}</h3>
              <div class="flex items-center justify-between mt-2 text-xs text-gray-500">
                <div class="flex items-center gap-x-1">
                  <v-icon class="!text-base text-red-500">mdi-cards-heart</v-icon>
                  <span>{{ card.like }}</span>
                </div>
                <div class="flex items-center gap-x-1">
                  <v-icon class="!text-base">mdi-eye</v-icon>
                  <span>{{ card.view }}</span>
                </div>
                <span>{{ card.date }}</span>
              </div>
              <span class="text-xs text-gray-400 mt-1">پینگ شماره {{ card.count }}</span>
            </div>
          </router-link>
        </div>

        <div v-if="layout === 'grid2'" class="grid grid-cols-12 gap-6">
          <router-link
            v-for="card in filteredCards"
            :key="card.id"
            :to="{ name: 'ping-details', params: { id: card.id } }"
            class="col-span-3 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-video hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <video
              :src="card.previewSrc"
              :poster="card.poster"
              class="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsinline
              @mouseenter="playPreview"
              @mouseleave="stopPreview"></video>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 p-4 text-white w-full">
              <h3 class="font-bold line-clamp-2 leading-relaxed">{{ card.title }}</h3>
              <div class="flex justify-between items-center mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center gap-x-1">
                    <v-icon class="!text-base">mdi-cards-heart</v-icon><span>{{ card.like }}</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <v-icon class="!text-base">mdi-eye</v-icon><span>{{ card.view }}</span>
                  </div>
                </div>
                <span>پینگ {{ card.count }}</span>
              </div>
            </div>
          </router-link>
        </div>

        <div v-if="layout === 'grid3'" class="flex flex-col border-t border-gray-200">
          <router-link
            v-for="card in filteredCards"
            :key="card.id"
            :to="{ name: 'ping-details', params: { id: card.id } }"
            class="group grid grid-cols-12 gap-6 items-start p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <div class="col-span-3 rounded-lg overflow-hidden">
              <video
                :src="card.previewSrc"
                :poster="card.poster"
                class="w-full aspect-video object-cover"
                muted
                loop
                playsinline
                @mouseenter="playPreview"
                @mouseleave="stopPreview"></video>
            </div>
            <div class="col-span-9 flex flex-col pt-1">
              <span class="text-xs text-gray-400">پینگ شماره {{ card.count }}</span>
              <h3 class="text-lg font-bold text-gray-800 mt-1 line-clamp-2 group-hover:text-blue-600">{{ card.title }}</h3>

              <div class="flex items-center gap-x-5 mt-3 text-sm text-gray-500">
                <div class="flex items-center gap-x-1.5">
                  <v-icon class="!text-lg text-red-500">mdi-cards-heart</v-icon><span>{{ card.like }} لایک</span>
                </div>
                <div class="flex items-center gap-x-1.5">
                  <v-icon class="!text-lg">mdi-eye-outline</v-icon><span>{{ card.view }} بازدید</span>
                </div>
                <div class="flex items-center gap-x-1.5">
                  <v-icon class="!text-lg">mdi-calendar-clock</v-icon><span>{{ card.date }}</span>
                </div>
              </div>

              <p class="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">
                {{ card.description }}
              </p>
            </div>
          </router-link>
        </div>

        <div v-if="layout === 'grid4'" class="grid grid-cols-12 gap-4">
          <router-link
            v-for="card in filteredCards"
            :key="card.id"
            :to="{ name: 'ping-details', params: { id: card.id } }"
            class="col-span-3 h-[400px] border border-neutral-300 hover:bg-neutral-200 transition-all duration-300 cursor-pointer rounded-lg p-2 flex flex-col gap-2 relative">
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
  </div>
</template>
<style scoped></style>
