<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const modules = [Pagination];

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

const cards = ref([
  {
    id: 1,
    title: "فراهم آوردن محیطی جهت بیان دیدگاه های متفاوت کشورها در خصوص سیاست ها و قوانین مرتبط با اینترنت",
    img: "/images/img5.png",
    hoverImg: "/images/img1.png",
    date: "۱۴۰۴/۰۴/۲۱",
    view: "۱۰",
    department: "اداره تحول",
  },
  {
    id: 2,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img6.png",
    hoverImg: "/images/img2.png",
    date: "۱۴۰۴/۰۵/۱۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
  },
  {
    id: 3,
    title: "کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
    img: "/images/img7.png",
    hoverImg: "/images/img3.png",
    date: "۱۴۰۴/۰۷/۱۴",
    view: "۹۶",
    department: "فناوری اطلاعات",
  },
  {
    id: 4,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img8.png",
    hoverImg: "/images/img4.png",
    date: "۱۴۰۴/۰۲/۰۱",
    view: "۸۵",
    department: "مالی",
  },
  {
    id: 5,
    title: "فراهم آوردن محیطی جهت بیان دیدگاه های متفاوت کشورها در خصوص سیاست ها و قوانین مرتبط با اینترنت",
    img: "/images/img4.png",
    hoverImg: "/images/img1.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    department: "اداره تحول",
  },
  {
    id: 6,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img3.png",
    hoverImg: "/images/img2.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
  },
  {
    id: 7,
    title: "فراهم آوردن محیطی جهت بیان دیدگاه های متفاوت کشورها در خصوص سیاست ها و قوانین مرتبط با اینترنت",
    img: "/images/img5.png",
    hoverImg: "/images/img1.png",
    date: "۱۴۰۴/۰۴/۲۱",
    view: "۱۰",
    department: "اداره تحول",
  },
  {
    id: 8,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img6.png",
    hoverImg: "/images/img2.png",
    date: "۱۴۰۴/۰۵/۱۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
  },
  {
    id: 9,
    title: "کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
    img: "/images/img7.png",
    hoverImg: "/images/img3.png",
    date: "۱۴۰۴/۰۷/۱۴",
    view: "۹۶",
    department: "فناوری اطلاعات",
  },
]);

const router = useRouter();

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
      <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">{{ layout === "grid1" ? "آخرین اطلاعیه‌ها" : "پینگ‌های جدید رو دیدی؟" }}</div>
      <div class="but text-blue-500"><span>مشاهده همه</span></div>
    </div>
    <swiper v-if="layout === 'grid1'" :slides-per-view="4.5" :space-between="30" :centered-slides="false" :pagination="{ clickable: true }" :modules="modules" class="mySwiper">
      <swiper-slide v-for="card in cards" :key="card.id" class="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer pb-4">
        <img :src="card.img" alt="Main image" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

        <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent flex flex-col justify-end p-5 text-white">
          <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div class="text-xs opacity-80">
              <span>{{ card.department }}</span
              >&nbsp;&nbsp;
              <span>{{ card.date }}</span>
            </div>
            <h3 class="font-semibold mt-2 leading-relaxed line-clamp-2">
              {{ card.title }}
            </h3>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div v-if="layout === 'grid2'" class="grid grid-cols-12 gap-x-4 pe-4 mt-4">
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
