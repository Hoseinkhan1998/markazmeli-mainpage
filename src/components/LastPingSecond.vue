<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const modules = [Pagination];

// داده‌ها عین Ping.vue (بخش grid)
const cards = ref([
  {
    id: 1,
    title: "آپارات شورتس دنیای بی‌پایان ویدیوهای کوتاه",
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
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
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
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

// جستجو و فیلتر مثل Ping.vue
const searchQuery = ref("");
const filteredCards = computed(() => {
  return cards.value.filter((card) => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesSearch;
  });
});
</script>

<template>
  <div class="h-full rounded-lg ps-3 bg-red-200/50">
    <div class="flex items-center justify-between pe-10 pt-3 -mb-5">
      <div class="text-xl font-semibold flex items-center gap-2">
        <v-icon class="!text-red-600">mdi-fire</v-icon>
        <p>پینگ‌های جدید رو دیدی؟</p>
      </div>
      <router-link to="/ping" class="but text-blue-500"><span>مشاهده همه</span></router-link>
    </div>
    <swiper :slides-per-view="5.5" :space-between="10" :centered-slides="false" :pagination="{ clickable: true }" :modules="modules" class="mySwiper ps-3">
      <swiper-slide v-for="card in filteredCards" :key="card.id" class="group relative rounded-2xl bg-white overflow-hidden shadow-lg cursor-pointer pb-1">
        <router-link :to="{ name: 'ping-details', params: { id: card.id } }" class="col-span-3 group flex flex-col gap-3 cursor-pointer">
          <div class="rounded-t-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
            <img :src="card.poster" class="w-full aspect-video object-cover" />
          </div>
          <div class="flex flex-col px-2">
            <div class="h-14">
              <h3 class="font-bold text-gray-800 line-clamp-2 leading-relaxed">{{ card.title }}</h3>
            </div>
            <div class="flex items-center justify-between mt-2 text-xs text-gray-500">
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-x-1">
                  <v-icon class="!text-base text-red-500">mdi-cards-heart</v-icon>
                  <span>{{ card.like }}</span>
                </div>
                <div class="flex items-center gap-x-1">
                  <v-icon class="!text-base">mdi-eye</v-icon>
                  <span>{{ card.view }}</span>
                </div>
              </div>
              <span>{{ card.date }}</span>
            </div>
          </div>
        </router-link>
        <div class="absolute bottom-2 right-2">
          <span class="text-xs text-gray-400 mt-1">پینگ شماره {{ card.count }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  padding: 3rem 0;
}

.swiper-slide {
  width: 300px;
  height: 300px;
}
</style>
