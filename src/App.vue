<script setup>
import LogoHome from "./components/Icons/LogoHome.vue";
import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

// فعال‌سازی جلالی
dayjs.extend(jalaliday);

const time = ref("");
const date = ref("");

// تابع تبدیل اعداد انگلیسی به فارسی
function toPersianDigits(str) {
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function updateDateTime() {
  const now = new Date();

  // ساعت سیستم (فارسی‌سازی ارقام)
  time.value = toPersianDigits(now.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));

  // تاریخ شمسی (فارسی‌سازی اعداد)
  const formattedDate = dayjs().calendar("jalali").locale("fa").format("dddd D MMMM YYYY");
  date.value = toPersianDigits(formattedDate);
}

let interval;
onMounted(() => {
  updateDateTime();
  interval = setInterval(updateDateTime, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const menuItems = [
  { icon: "mdi-home", label: "خانه", rout: '/' },
  { icon: "mdi-clipboard-list-outline", label: "وظایف", rout: '/' },
  { icon: "mdi-wechat", label: "گفتگو", rout: '/' },
  { icon: "mdi-laptop-account", label: "منو سایر", rout: '/' },
  { icon: "mdi-laptop-account", label: "منو سایر", rout: '/' },
  { icon: "mdi-laptop-account", label: "منو سایر", rout: '/' },
  { icon: "mdi-laptop-account", label: "منو سایر", rout: '/' },
  { icon: "mdi-laptop-account", label: "منو سایر", rout: '/' },
  { icon: "mdi-laptop-account", label: "منو سایر", rout: '/' },
];
</script>

<template>
  <div dir="rtl" class="bg-neutral-100 h-screen">
    <div class=" min-h-[100vh] w-full bg-cover" :style="{ backgroundImage: `url(/images/homepage.png)` }">
      <div class="w-full h-screen backdrop-blur-2xl grid grid-cols-12">
        <!-- منو (ثابت) -->
        <div class="col-span-1 w-[90px]">
          <div v-for="(item, index) in menuItems" :key="index" class="fle mt-4 text-white flex-col gap-4 items-center justify-center">
            <router-link :to="item.rout"  class="flex flex-col cursor-pointer justify-center items-center">
              <v-icon class="!text-3xl">{{ item.icon }}</v-icon>
              <p>{{ item.label }}</p>
            </router-link>
          </div>
        </div>

        <!-- بخش اصلی -->
        <div class="col-span-11 pb-5 2xl:-ms-[5vh] xl:-ms-[2vh] lg:-ms-[1vh] md:ms-[1vh]  flex flex-col text-white pe-10 h-screen">
          <!-- هدر (ثابت بالا) -->
          <div class="flex items-center justify-between shrink-0 h-16">
            <!-- لوگو -->
            <div class="text-white flex items-center gap-2">
              <LogoHome />
              <p class="text-sm">
                مزکز ملی فضای مجازی <br />
                معاونت توسعه و برنامه ریزی
              </p>
            </div>

            <!-- تاریخ و ساعت و دکمه‌ها -->
            <div class="flex items-center gap-5">
              <div>{{ time }}</div>
              <div class="font-semibold">{{ date }}</div>
              <div class="text-white flex justify-center items-center rounded-full border-2 border-solid border-white">
                <v-icon>mdi-chevron-down</v-icon>
              </div>
              <img src="/public/images/profile.png" alt="profile" class="rounded-full ring-2 ring-white h-10 w-10 bg-center bg-cover" />
            </div>
          </div>

          <!-- محتوای اسکرول‌پذیر -->
          <div class="flex-1 overflow-y-auto bg-white rounded-md">            
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background: url("images/homepage.png") no-repeat center center !important;
  background-size: cover;
}
</style>
