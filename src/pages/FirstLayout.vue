<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import MyWork from "../components/MyWork.vue";
import LastAnnouncement from "../components/LastAnnouncement.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import Dashboards from "../components/Dashboards.vue";
import LastPing from "../components/LastPing.vue";
import { Vue3Lottie } from "vue3-lottie";
import MyAnimation from "../assets/animations/my-animation.json";

const layout = ref("grid");
const dialogtext = ref("first");

const dialog = ref(false);

// شورتکات‌ها: Alt + Shift + 1/2
// فقط با فشردن E یا F کار کنه
const handleKeydown = (event) => {
  // اگر کاربر در حال تایپ در input یا textarea بود، کاری نکن
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;

  switch (event.key.toLowerCase()) {
    case "7":
      event.preventDefault();
      layout.value = "grid";
      break;
    case "8":
      event.preventDefault();
      layout.value = "grid2";
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

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

// حذف شنونده رویداد برای جلوگیری از نشت حافظه
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

const featuredNews = {
  main: {
    title: "گزارشی از عملکرد کارگروه راهبری پیامک‌های انبوه در جلسه اخیر مرکز ملی فضای مجازی ارائه شد",
    img: "/images/img1.png",
    category: "جلسات هیئت مدیره",
  },
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
</script>
<template>
  <div class="bg-white h-full rounded-lg p-3">
    <div class="flex flex-col gap-5">
      <div class="px-5">
        <Menu />
      </div>
      <div class="flex flex-col px-5">
        <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-x-5">
          <div class="col-span-9 grid grid-cols-3 gap-6">
            <div class="col-span-2 relative rounded-xl overflow-hidden h-[425px] group cursor-pointer">
              <img :src="featuredNews.main.img" alt="Hero Image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              <div class="absolute bottom-0 right-0 p-8 text-white">
                <span class="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">{{ featuredNews.main.category }}</span>
                <h2 class="text-3xl font-bold mt-4 leading-tight">
                  {{ featuredNews.main.title }}
                </h2>
              </div>
            </div>

            <div class="col-span-1 flex flex-col gap-6">
              <div v-for="item in featuredNews.side" :key="item.title" class="group cursor-pointer">
                <div class="overflow-hidden rounded-lg">
                  <img :src="item.img" alt="Side news" class="w-full h-[142px] object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div class="mt-2">
                  <span class="text-xs font-semibold text-blue-600">{{ item.category }}</span>
                  <h3 class="text-md font-semibold truncate text-gray-800 leading-relaxed group-hover:text-blue-600 transition-colors">
                    {{ item.title }}
                  </h3>
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

        <div v-if="layout === 'grid2'" class="grid grid-cols-12 gap-x-5">
          <div class="col-span-9 relative rounded-2xl overflow-hidden h-[450px] group cursor-pointer">
            <img :src="featuredNews.main.img" alt="Hero Image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <div class="absolute bottom-0 right-0 p-8 text-white">
              <span class="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">{{ featuredNews.main.category }}</span>
              <h2 class="text-3xl font-bold mt-4 leading-tight">
                {{ featuredNews.main.title }}
              </h2>
            </div>
          </div>

          <div class="col-span-3 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200 h-[450px]">
            <div class="w-4/5 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/profile.png" alt="profile" class="w-full h-full object-cover" />
            </div>
            <div class="text-center mt-6">
              <h3 class="font-bold text-2xl text-gray-800">محمد حسین ولیخانی</h3>
              <p class="text-md text-gray-500 mt-2">کارشناس ارشد اداره تحول دیجیتال</p>
              <p class="text-sm text-gray-400 mt-4">معاونت توسعه و برنامه ریزی</p>
            </div>
          </div>
        </div>

        <div class="col-span-full grid grid-cols-12 pb-10">
          <!-- کار های من -->
          <div class="col-span-full flex items-center justify-center gap-x-3 py-5">
            <div class="w-full h-[2px] bg-gray-200"></div>
            <v-icon class="!text-gray-400">mdi-star-four-points-outline</v-icon>
            <div class="w-full h-[2px] bg-gray-200"></div>
          </div>
          <div class="col-span-full text-xl font-semibold">کار های من</div>
          <div class="col-span-full mt-5 px-5">
            <MyWork />
          </div>
          <div class="col-span-full flex items-center justify-center gap-x-3 py-5">
            <div class="w-full h-[2px] bg-gray-200"></div>
            <v-icon class="!text-gray-400">mdi-star-four-points-outline</v-icon>
            <div class="w-full h-[2px] bg-gray-200"></div>
          </div>
          <div class="col-span-full text-xl font-semibold">جدیدترین اطلاعیه ها</div>
          <div class="col-span-full mt-5 px-5">
            <LastAnnouncement />
          </div>
          <div class="col-span-full flex items-center justify-center gap-x-3 py-5">
            <div class="w-full h-[2px] bg-gray-200"></div>
            <v-icon class="!text-gray-400">mdi-star-four-points-outline</v-icon>
            <div class="w-full h-[2px] bg-gray-200"></div>
          </div>
          <div class="col-span-full text-xl font-semibold">جدیدترین داشبورد ها</div>
          <div class="col-span-full mt-5 px-5">
            <Dashboards />
          </div>
          <div class="col-span-full flex items-center justify-center gap-x-3 py-5">
            <div class="w-full h-[2px] bg-gray-200"></div>
            <v-icon class="!text-gray-400">mdi-star-four-points-outline</v-icon>
            <div class="w-full h-[2px] bg-gray-200"></div>
          </div>
          <div class="col-span-full text-xl font-semibold">جدیدترین ها در پینگ</div>
          <div class="col-span-full mt-5 px-5">
            <LastPing />
          </div>
        </div>
      </div>
    </div>
  </div>

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
          <p class=" text-center text-3xl leading-loose font-semibold">محمد حسین ولیخانی عزیز زادروزتان خجسته باد</p>
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
</style>
