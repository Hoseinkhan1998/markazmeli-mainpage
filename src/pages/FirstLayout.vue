<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import LastAnnouncement from "../components/LastAnnouncement.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import Dashboards from "../components/Dashboards.vue";
import LastPing from "../components/LastPing.vue";
import { Vue3Lottie } from "vue3-lottie";
import MyAnimation from "../assets/animations/my-animation.json";
import MyDesk from "../components/MyDesk.vue";
import Headline from "../components/Headline.vue";

const layout = ref("grid");
const dialogtext = ref("first");
const dialog = ref(false);

const handleKeydown = (event) => {
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;

  switch (event.key.toLowerCase()) {
    case "7":
      event.preventDefault();
      triggerToast();
      break;
    case "9":
      event.preventDefault();
      dialogtext.value = "two";
      break;
    case "0":
      event.preventDefault();
      dialog.value = true;
      dialogtext.value = "first";
      break;
  }
};

const featuredNews = {
  main: [
    {
      title: "گزارش عملکرد کارگروه پیامک‌های انبوه در جلسه هیئت مدیره مرکز ملی فضای مجازی",
      img: "/images/img1.png",
      category: "جلسات هیئت مدیره",
    },
    {
      title: "ارزیابی عملکرد کارگروه پیامک‌های انبوه در مرکز ملی فضای مجازی",
      img: "/images/img2.png",
      category: "جلسه ارزیابی عملکرد",
    },
    {
      title: "بررسی عملکرد کارگروه پیامک‌های انبوه در جلسه شورای مدیران مرکز ملی فضای مجازی",
      img: "/images/img3.png",
      category: "جلسات شورای مدیران",
    },
  ],
  side: [
    {
      title: "تصویب ضوابط و مقررات جدید برای ارسال پیامک در شرایط اضطراری",
      img: "/images/img2.png",
      category: "اطلاعیه فنی",
    },
    {
      title: "راه‌اندازی پورتال کارگروه و بخش دریافت گزارش‌های مردمی",
      img: "/images/img3.png",
      category: "اخبار سازمان",
    },
  ],
};

const router = useRouter();

const showToast = ref(false);
let toastTimeout = null;
let autoHideTimeout = null;

const triggerToast = () => {
  clearTimeout(toastTimeout); // پاک کردن تایمر قبلی اگر وجود داشت
  showToast.value = true;
  toastTimeout = setTimeout(() => {
    showToast.value = false;
  }, 11000); // مخفی شدن بعد از ۵ ثانیه
};
const closeToast = () => {
  showToast.value = false;
  clearTimeout(autoHideTimeout); // پاک کردن تایمر مخفی کردن خودکار
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  toastTimeout = setInterval(triggerToast, 1 * 60 * 100); // 2 دقیقه
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  // clearInterval(toastTimeout);
});
</script>
<template>
  <div class="bg-white h-full rounded-lg">
    <div class="flex flex-col gap-5">
      <div class="p-3">
        <div class="toast toast-top toast-end z-50">
          <transition name="slide-left">
            <div v-if="showToast" class="alert !bg-gradient-to-br from-blue-300 to-purple-400 shadow-xl relative overflow-hidden rounded-lg p-4">
              <button @click="closeToast" class="absolute top-2 left-2 text-white hover:text-gray-200 transition">
                <v-icon>mdi-close-circle</v-icon>
              </button>
              <div class="flex flex-col items-center gap-3 text-white">
                <p class="text-center break-words text-sm font-medium leading-relaxed">
                  میدونستی میتونی با برگردوندن
                  <br />
                  هر کارت توی میز کار من آخرین
                  <br />
                  وضیعت اون کارت رو ببینی؟
                </p>
                <img src="/images/record.gif" class="!w-[150px] h-[160px] rounded-lg shadow-md" alt="" />
              </div>
            </div>
          </transition>
        </div>
        <Menu />
      </div>
      <div class="flex flex-col pb-10">
        <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-x-5 px-3">
          <div class="col-span-9 grid grid-cols-3 gap-6">
            <div class="col-span-2 relative rounded-xl overflow-hidden h-[424px] group cursor-pointer">
              <v-carousel next-icon="mdi-chevron-left" prev-icon="mdi-chevron-right" show-arrows="hover" :reverse="true" hide-delimiter-background cycle height="425">
                <v-carousel-item v-for="(item, index) in featuredNews.main" :key="index">
                  <img :src="item.img" alt="Hero Image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div class="absolute bottom-0 right-0 p-8 text-white">
                    <span class="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">{{ item.category }}</span>
                    <h2 class="text-3xl font-bold mt-4 leading-tight">
                      {{ item.title }}
                    </h2>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </div>

            <div class="col-span-1 flex flex-col gap-6">
              <div v-for="item in featuredNews.side" :key="item.title" class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl h-[200px]">
                  <img :src="item.img" alt="Side news" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div class="absolute bottom-0 right-0 p-3 text-white">
                    <span class="text-xs font-semibold bg-blue-600 px-2 py-1 rounded-md">{{ item.category }}</span>
                    <h3 class="text-sm font-semibold mt-2 leading-relaxed">{{ item.title }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-3 flex flex-col items-center p-2 bg-white rounded-2xl shadow-lg h-full border- border-gray-200">
            <img src="/images/profile.png" alt="profile" class="rounded-full h-56 w-56 ring-4 ring-gray-400" />
            <p class="text-center mt-2">
              <span class="font-bold text-xl text-gray-800">محمد حسین ولیخانی</span><br />
              <span class="text-gray-500 mt-1">کارشناس اداره تحول</span>
            </p>
            <p class="text-sm text-gray-400 mt-2">معاونت توسعه و برنامه ریزی</p>
            <!-- action buttons -->
            <div class="flex gap-2 items-center mt-2">
              <div class="cursor-pointer bg-gray-100 p-1 rounded-lg hover:bg-gray-200 transition">
                <img src="/images/rahkaran.png" class="w-7 h-7 rounded-lg" alt="" />
                <v-tooltip activator="parent" location="bottom">راهکاران</v-tooltip>
              </div>
              <div class="cursor-pointer bg-gray-100 p-1 rounded-lg hover:bg-gray-200 transition">
                <img src="/images/pargar.png" class="w-7 h-7 rounded-lg" alt="" />
                <v-tooltip activator="parent" location="bottom">پرگار</v-tooltip>
              </div>
              <div class="cursor-pointer bg-gray-100 p-1 rounded-lg hover:bg-gray-200 transition">
                <img src="/images/rahkaran.png" class="w-7 h-7 rounded-lg" alt="" />
                <v-tooltip activator="parent" location="bottom">راهکاران</v-tooltip>
              </div>
              <div class="cursor-pointer bg-gray-100 p-1 rounded-lg hover:bg-gray-200 transition">
                <img src="/images/pargar.png" class="w-7 h-7 rounded-lg" alt="" />
                <v-tooltip activator="parent" location="bottom">پرگار</v-tooltip>
              </div>
            </div>
            <div
              class="w-10/12 py-1 mt-4 font-semibold bg-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer rounded-3xl border-2 border-neutral-300 flex justify-center items-center">
              تنظیمات پروفایل
            </div>
          </div>
        </div>

        <div class="col-span-full mt-10 grid grid-cols-12">
          <div class="col-span-3 bg-neutral-100 border flex flex-col shadow-md shadow-neutral-200 p-3">
            <Headline />
          </div>

          <!-- کار های من -->
          <div class="col-span-9 flex flex-col ps-3">
            <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">میز کار من</div>
            <div class="mt-10 mb-10">
              <MyDesk />
            </div>
            <div class="">
              <LastPing />
            </div>
          </div>
          <div class="col-span-full flex items-center justify-center gap-x-3 py-5">
            <div class="w-full h-[2px] bg-gray-200"></div>
            <v-icon class="!text-gray-400">mdi-star-four-points-outline</v-icon>
            <div class="w-full h-[2px] bg-gray-200"></div>
          </div>

          <div class="col-span-full mt-5 px-5">
            <Dashboards />
          </div>
          <div class="col-span-full flex items-center justify-center gap-x-3 mt-10">
            <div class="w-full h-[2px] bg-gray-200"></div>
            <v-icon class="!text-gray-400">mdi-star-four-points-outline</v-icon>
            <div class="w-full h-[2px] bg-gray-200"></div>
          </div>
          <div class="col-span-full mt-10">
            <LastAnnouncement />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- دیالوگ تولد -->
  <v-dialog v-model="dialog" max-width="900">
    <div class="grid justify-items-center items-center grid-cols-12">
      <div class="col-span-3" @click="dialog = false">
        <Vue3Lottie :animationData="MyAnimation" :height="300" :width="300" :loop="true" />
      </div>
      <div class="col-span-6 w-full flex flex-col bg-white rounded-lg">
        <img src="/images/birthday.png" class="rounded-t-lg h-[250px] w-full" alt="" />

        <div class="scallop-up"></div>

        <div v-if="dialogtext === 'first'" class="max-h-[400px] bg-[#369A7E] min-h-[200px] overflow-y-auto flex flex-col gap-3 text-white pt-4 px-3">
          <div class="flex justify-between items-center">
            <p>۰۷/۲۴</p>
            <div class="flex items-center gap-1">
              <p>محمد حسین ولیخانی</p>
              <img src="/images/profile.png" class="h-8 w-8 rounded-full bg-cover bg-center" alt="" />
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p>۰۷/۱۹</p>
            <div class="flex items-center gap-1">
              <p>جعفر ابراهیمی</p>
              <img src="/images/profile.png" class="h-8 w-8 rounded-full bg-cover bg-center" alt="" />
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p>۰۷/۲۴</p>
            <div class="flex items-center gap-1">
              <p>حسین مزینانی</p>
              <img src="/images/profile.png" class="h-8 w-8 rounded-full bg-cover bg-center" alt="" />
            </div>
          </div>
          <div class="flex justify-between items-center">
            <p>۰۷/۱۴</p>
            <div class="flex items-center gap-1">
              <p>کیمیا شکرایی</p>
              <img src="/images/profile.png" class="h-8 w-8 rounded-full bg-cover bg-center" alt="" />
            </div>
          </div>
        </div>
        <div v-if="dialogtext === 'two'" class="max-h-[400px] bg-[#369A7E] min-h-[200px] overflow-y-auto flex flex-col gap-3 text-white pt-4 px-3">
          <p class="text-center text-3xl leading-loose font-semibold">محمد حسین ولیخانی عزیز زادروزتان خجسته باد</p>
        </div>

        <div class="scallop-down"></div>

        <p class="text-center text-sm text-black">
          در پناه الطاف الهی امیدواریم در سفر زندگی همیشه راهی برای شادی و رضایت بیابید و در پایان آرزویی نباشد که بدان دست پیدا نکرده باشید
        </p>
        <p class="text-center text-sm text-black mb-2">
          لحظاتتون پر از عشق و امید<br />
          روزتان متبرک بـه نگاه خدا
        </p>
      </div>
      <div class="col-span-3 rotate-180" @click="dialog = false">
        <Vue3Lottie :animationData="MyAnimation" :height="300" :width="300" :loop="true" />
      </div>
    </div>
  </v-dialog>
</template>

<style scoped>
.scallop-down {
  height: 50px;
  width: 100%;
  background: -webkit-gradient(radial, 50% 0, 10, 50% 0, 40, from(#369a7e), color-stop(0.49, #369a7e), color-stop(0.51, #fff), to(white));
  -webkit-background-size: 49px 100%;
}

.scallop-up {
  height: 50px;
  background: -webkit-gradient(radial, 50% 100%, 10, 50% 100%, 40, from(#369a7e), color-stop(0.49, #369a7e), color-stop(0.51, #fff), to(white));
  -webkit-background-size: 49px 100%;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-120%);
  opacity: 0;
}
</style>
