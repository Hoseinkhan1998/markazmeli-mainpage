<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const layout = ref("grid1");

// شورتکات‌ها: Alt + Shift + 1/2
const handleKeydown = (event) => {
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;
  switch (event.key) {
    case "1":
      event.preventDefault();
      layout.value = "grid1";
      break;
    case "2":
      event.preventDefault();
      layout.value = "grid2";
      break;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

const videos = ref([
  {
    id: 1,
    poster: "https://static.cdn.asset.aparat.cloud/avt/48483869-5606-l__8095.jpg?width=700&quality=90&secret=uHujqkbLYcJgKAIGGs65fg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/48483869_15s.mp4",
  },
  {
    id: 2,
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/65774467_15s.mp4",
  },

  {
    id: 3,
    poster: "https://static.cdn.asset.aparat.cloud/avt/64383485-6308-l__1414.jpg?width=700&quality=90&secret=IDojmB0q2o1n1iWBy39pTg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/64383485_15s.mp4",
  },
  {
    id: 4,
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
    previewSrc: "https://static.cdn.asset.aparat.cloud/avt/65774467_15s.mp4",
  },
]);

const playPreview = (event) => {
  event.target.play();
};

const stopPreview = (event) => {
  event.target.pause();
  event.target.currentTime = 0; // بازگشت به ابتدای ویدیو
  event.target.load();
};
</script>

<template>
  <div class="bg-white h-full -mt-2 rounded-lg">
    <div class="flex items-center justify-between pe-10">
      <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">پینگ‌های جدید رو دیدی؟</div>
      <div class="but text-blue-500"><span>مشاهده همه</span></div>
    </div>   
    <div class="grid grid-cols-12 gap-x-4 pe-4 mt-4">
      <div class="col-span-5 flex flex-col gap-2">
        <video src="/images/video1.mp4" autoplay muted loop playsinline class="h-[350px] rounded-xl object-cover"></video>
        <div class="flex flex-col px-1">
          <h3 class="font-bold text-gray-800 line-clamp-2 leading-relaxed">آپارات شورتس دنیای بی‌پایان ویدیوهای کوتاه</h3>
          <div class="flex items-center justify-between mt-2 text-xs text-gray-500">
            <div class="flex items-center gap-x-1">
              <v-icon class="!text-base text-red-500">mdi-cards-heart</v-icon>
              <span>۳۴</span>
            </div>
            <div class="flex items-center gap-x-1">
              <v-icon class="!text-base">mdi-eye</v-icon>
              <span>۱۳۲</span>
            </div>
            <span>۱۴۰۴/۰۷/۱۷</span>
          </div>
          <span class="text-xs text-gray-400 mt-1">پینگ شماره ۳۴</span>
        </div>
      </div>
      <div class="col-span-7">
        <div class="grid grid-cols-2 gap-x-4 gap-y-2">
          <router-link v-for="card in videos" :key="card.id" :to="{ name: 'ping-details', params: { id: card.id } }" class="col-span-1 group flex flex-col cursor-pointer">
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
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  padding: 2rem 0;
}

.swiper-slide {
  width: 300px;
  height: 320px;
}
</style>
