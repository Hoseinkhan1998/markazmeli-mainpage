<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import { ref } from "vue";
import MyWork from "../components/MyWork.vue";
import LastAnnouncement from "../components/LastAnnouncement.vue";

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
      <Menu />
      <div class="grid grid-cols-12">
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
        <div class="col-span-full mt-5 px-5">
          <MyWork />
        </div>
        <div class="col-span-full text-xl font-semibold mt-10">جدیدترین اطلاعیه ها</div>
        <div class="col-span-full mt-5 px-5">
          <LastAnnouncement />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.v-carousel__controls) {
  border-radius: 10px;
  padding: 4px 8px;
}

::v-deep(.v-btn.v-btn--icon.v-btn--density-default) {
  color: #666 !important;
  opacity: 0.7;
}

::v-deep(.v-btn.v-btn--icon.v-btn--density-default.v-btn--active) {
  color: #000 !important;
  opacity: 1;
}
</style>
