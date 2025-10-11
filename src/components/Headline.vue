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
  "هوشمندسازی در عرصه کشاورزی",
  "بررسی راهبردها و سیاستهای توسعه و بکارگیری کلان ...",
  "صنعت نرم‌افزار و سخت‌افزار",
];

const Security = [
  "ردپای اکانت‌های اسرائیلی در شبکه فارسی‌زبان توییتر",
  "همایش تجلیل از مبلغین فضای مجازی فعال در جنگ ۱۲ روزه",
  "ابلاغ سند ترویج و ارتقای سواد فضای مجازی",
  "افشاگری هاآرتص درباره شبکه حساب‌های جعلی اسرائیل",
  "مردم چقدر زمان در شبکه‌های اجتماعی صرف می‌کنند؟",
  "بررسی پیش‌نویس سند بکارگیری فناوری‌های پولی و مالی در فضای مجازی",
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

  <div>
    <div class="flex items-center justify-between ps-3">
      <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">آخرین اخبار فضای مجازی</div>
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
