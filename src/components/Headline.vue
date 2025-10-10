<script setup>
import Divider from "./Icons/Divider.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const layout = ref("ping");
const handleKeydown = (event) => {
  // اگر کاربر در حال تایپ در input یا textarea بود، کاری نکن
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;

  switch (event.key.toLowerCase()) {
    case "p":
      event.preventDefault();
      layout.value = "ping";
      break;
    case "s":
      event.preventDefault();
      layout.value = "security";
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

const Headlines = [
  "چالش‌ها و راهکارهای پذیرش و توسعه فناوری اینترنت ...",
  "هوشمندسازی در عرصه کشاورزی",
  "بررسی راهبردها و سیاستهای توسعه و بکارگیری کلان ...",
  "صنعت نرم‌افزار و سخت‌افزار",
  "«طرح کنوانسیون ژنو دیجیتال» و «توافق‌نامه امنیت ...",
  "موتور جستجوی بومی",
  "خوداتکایی در حوزه فضای مجازی",
];

const Security = [
  "الزامات جدید در خصوص ورود و خروج تجهیزات رایانه‌ای ...",
  "افزایش ضریب امنیت اطلاعات در واحدهای ستادی",
  "نحوه استفاده مجاز از پیام‌رسان‌های سازمانی",
  "گزارش عملکرد حراست در حوزه حفاظت فیزیکی ...",
  "بازنگری در دستورالعمل احراز هویت کارکنان",
  "پیشگیری از نشت اطلاعات در بستر شبکه داخلی",
];
</script>
<template>
  <div class="flex items-center justify-between ps-3">
    <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">سرخط</div>
    <div class="but text-blue-500 text-sm"><span>موارد بیشتر ...</span></div>
  </div>
  <div class="flex flex-col gap-3 mt-5 ps-4">
    <div v-for="head in Headlines" :key="head" class="pb-2 border-b hover:text-blue-600 cursor-pointer transition-all duration-300">
      <p class="truncate">{{ head }}</p>
    </div>
  </div>
  <Divider />
  <div v-if="layout === 'ping'" class="ps-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-1">
        <v-icon size="30px" class="!text-red-600 font-semibold">mdi-fire</v-icon>
        <p class="text-lg font-semibold">پینگ جدید رو دیدی؟</p>
      </div>
      <div class="but text-blue-500"><span>برو ببین ...</span></div>
    </div>

    <!-- ویدیو پینگ -->
    <div class="mt-4 rounded-xl overflow-hidden shadow-lg cursor-pointer">
      <video src="/images/video1.mp4" autoplay muted loop playsinline class="h-full object-cover"></video>
    </div>
    <div class="flex justify-between items-center px-5 mt-2">
      <div class="flex items-center gap-1 text-xs">
        <span>۵۸</span> <v-icon>mdi-eye-outline</v-icon><span class="mr-6">۲۴</span> <v-icon class="text-red-600">mdi-heart</v-icon>
      </div>

      <div class="flex items-center gap-1 text-xs"><span>۱۴۰۴/۰۷/۱۶</span> <v-icon>mdi-calendar-clock-outline</v-icon></div>
    </div>
  </div>

  <div v-if="layout === 'security'">
    <div class="flex items-center justify-between ps-3">
      <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">آخرین اخبار حراست</div>
      <div class="but text-blue-500 text-sm"><span>موارد بیشتر ...</span></div>
    </div>
    <div class="flex flex-col gap-3 mt-5 ps-4">
      <div v-for="sec in Security" :key="sec" class="pb-2 border-b hover:text-blue-600 cursor-pointer transition-all duration-300">
        <p class="truncate">{{ sec }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
