<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import MyWork from "../components/MyWork.vue";
import LastAnnouncement from "../components/LastAnnouncement.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
import Dashboards from "../components/Dashboards.vue";
import LastPing from "../components/LastPing.vue";

const layout = ref("grid3");

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
        layout.value = "grid3";
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

const cards = ref([
  {
    title:
      "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات پیامک انبوه، تصویب ضوابط محتوایی پیام رسانی، تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.",
    img: "/images/img3.png",
  },
  {
    title:
      "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات پیامک انبوه، تصویب ضوابط محتوایی پیام رسانی، تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات پیامک انبوه، تصویب ضوابط محتوایی پیام رسانی، تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.",
    img: "/images/img1.png",
  },
  {
    title:
      "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات پیامک انبوه، تصویب ضوابط محتوایی پیام رسانی، تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات پیامک انبوه، تصویب ضوابط محتوایی پیام رسانی، تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.",
    img: "/images/img2.png",
  },
]);

const router = useRouter();
</script>
<template>
  <div class="bg-white h-full rounded-lg p-3">
    <div class="flex flex-col gap-5">
      <div class=" px-5">
      <Menu />
      </div>
      <div class="grid grid-cols-12 px-5 pb-20">
        <!-- اسلایدر -->
        <div class="border-2 col-span-9 border-neutral-300 rounded-lg">
          <v-carousel dir="ltr" height="300" show-arrows="hover" cycle hide-delimiter-background>
            <v-carousel-item dir="rtl" v-for="card in cards" :key="card">
              <div class="w-full p-3 !grid !grid-cols-12 gap-4">
                <p class="!col-span-8">{{ card.title }}</p>
                <div class="!col-span-4 flex justify-end">
                  <img :src="card.img" :alt="card.img" class="h-[270px] w-[400px] rounded-lg" />
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-span-1"></div>
        <!-- پروفایل -->
        <div class="col-span-2 border-2 border-neutral-300 rounded-lg relative flex flex-col items-center p-3">
          <img src="/images/profile.png" alt="aks" class="rounded-xl h-40 w-40 ring-2 ring-neutral-400 bg-center bg-cover" />
          <p class="text-center mt-2">
            <span class="font-semibold text-lg">محمد حسین ولیخانی</span><br />
            <span class="text-xs text-gray-600">کارشناس اداره تحول</span>
          </p>
          <p class="absolute bottom-2">معاونت توسعه و برنامه ریزی</p>
        </div>
        <!-- کار های من -->
        <div class="col-span-full text-xl font-semibold mt-10">کار های من</div>
        <div v-if="layout === 'grid'" id="divider" class=" mt-2"></div>
        <div class="col-span-full mt-5 px-5">
          <MyWork />
        </div>
        <div class="col-span-full text-xl font-semibold mt-10">جدیدترین اطلاعیه ها</div>
        <div v-if="layout === 'grid'" id="divider" class=" mt-2"></div>
        <div class="col-span-full mt-5 px-5">
          <LastAnnouncement />
        </div>
        <div class="col-span-full text-xl font-semibold mt-10">جدیدترین داشبورد ها</div>
        <div v-if="layout === 'grid'" id="divider" class=" mt-2"></div>
        <div class="col-span-full mt-5 px-5">
          <Dashboards />
        </div>
        <div class="col-span-full text-xl font-semibold mt-10">جدیدترین ها در پینگ</div>
        <div v-if="layout === 'grid'" id="divider" class=" mt-2"></div>
        <div class="col-span-full mt-5 px-5">
          <LastPing />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#divider {
  height: 2px;
  width: 160%;
  background: blue;
  background: linear-gradient(90deg, hsl(0, 63%, 54%), hsl(0, 53%, 55%), hsl(0, 0%, 20%));
}
</style>
