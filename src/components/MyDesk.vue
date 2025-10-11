<script setup>
import { ref, computed } from "vue";
import TaskIcon from "./Icons/TaskIcon.vue";
import Process_agilityIcon from "./Icons/Process_agilityIcon.vue";
import { VProgressCircular, VProgressLinear, VIcon } from "vuetify/components";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// تبدیل عدد انگلیسی به فارسی
const toPersian = (val) => String(val).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const modules = [EffectFlip, Pagination, Navigation];

const cards = ref([
  {
    id: 1,
    title: "وظایف",
    color: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
    iconComp: TaskIcon,
    width: 38,
    height: 38,
    data: {
      open: 12,
      done: 24,
      nearDeadline: 5,
      overdue: 2,
      progress: 68,
      // پشت کارت: ۳ تسک آخر
      latestTasks: [
        { id: 101, title: "بازبینی مستندات محصول", due: "۱۴۰۴/۰۷/۱۹", status: true },
        { id: 102, title: "رفع باگ ثبت فرایند", due: "۱۴۰۴/۰۷/۲۰", status: false },
        { id: 103, title: "به‌روزرسانی کارت‌های داشبورد", due: "۱۴۰۴/۰۷/۲۱", status: false },
        { id: 104, title: "بروزرسانی پرتال جدید", due: "۱۴۰۴/۰۷/۲۱", status: true },
        { id: 105, title: "طراحی صفحه اول پرتال و ui", due: "۱۴۰۴/۰۷/۲۱", status: false },
      ],
    },
  },
  {
    id: 2,
    title: "گفتگو",
    color: "from-rose-500 to-pink-600",
    bg: "from-rose-50 to-pink-50",
    icon: "mdi-wechat",
    data: {
      unread: 8,
      total: 34,
      onlineUsers: 5,
      // پشت کارت: ۴ گفتگوی آخر (آواتار + نام + یک خط از پیام)
      latestChats: [
        { id: 201, name: "علی رضایی", avatar: "/images/profile.png", snippet: "لطفاً زمان جلسه رو تأیید کن..." },
        { id: 202, name: "مهسا احسانی", avatar: "/images/profile.png", snippet: "دیتای گزارش فروش آماده شد." },
        { id: 203, name: "پویان امانی", avatar: "/images/profile.png", snippet: "فلوچارت فرایند رو دیدی؟" },
      ],
    },
  },
  {
    id: 3,
    title: "تقویم",
    color: "from-amber-500 to-orange-600",
    bg: "from-yellow-50 to-amber-50",
    icon: "mdi-calendar-month-outline",
    data: {
      todayMeetings: 3,
      weekEvents: 8,
      monthMeetings: 12,
      occupancy: 55,
      // پشت کارت: ۴ جلسه پیشِ رو
      upcoming: [
        { id: 301, title: "هماهنگی اسپرینت", time: "۱۰:۳۰", date: "۱۴۰۴/۰۷/۲۰" },
        { id: 302, title: "دموی ماژول گفتگو", time: "۱۲:۰۰", date: "۱۴۰۴/۰۷/۲۰" },
        { id: 303, title: "جلسه فروش B2B", time: "۱۴:۱۵", date: "۱۴۰۴/۰۷/۲۱" },
      ],
    },
  },
  {
    id: 4,
    title: "فرایندها",
    color: "from-purple-500 to-violet-600",
    bg: "from-purple-50 to-violet-50",
    iconComp: Process_agilityIcon,
    width: 40,
    height: 40,
    data: {
      stages: [
        { label: "دیده نشده", value: 8 },
        { label: "اقدام نشده", value: 6 },
        { label: "خاتمه یافته", value: 10 },
      ],
      // پشت کارت: ۴ فرایند پیشِ رو
      upcomingProcesses: [
        { id: 401, title: "تأیید مرخصی کارمند", owner: "منابع انسانی", due: "۱۴۰۴/۰۷/۲۱" },
        { id: 402, title: "ثبت قرارداد تأمین‌کننده", owner: "تدارکات", due: "۱۴۰۴/۰۷/۲۲" },
        { id: 403, title: "به‌روزرسانی SLA پشتیبانی", owner: "پشتیبانی", due: "۱۴۰۴/۰۷/۲۳" },
      ],
    },
  },
]);

// کمک‌کننده برای محاسبه درصد هر سگمنت
const segmentWidth = (stages, idx) => {
  const total = stages.reduce((a, b) => a + b.value, 0);
  return (stages[idx].value / (total || 1)) * 100 + "%";
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pe-3">
    <div
      v-for="card in cards"
      :key="card.id"
      class="group relative overflow-visible rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 h-80">
      <!-- آیکون بیرون کارت -->
      <div :class="['absolute -top-6 right-6 w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg text-white z-30', 'bg-gradient-to-br', card.color]">
        <component v-if="card.iconComp" :is="card.iconComp" :width="card.width" :height="card.height" class="text-white opacity-90" />
        <v-icon v-else class="!text-5xl opacity-90 text-white">{{ card.icon }}</v-icon>
      </div>

      <!-- Wrapper داخلیِ کارت (برای کلیپِ گوشه‌ها و بک‌گراند) -->
      <div :class="['relative rounded-3xl overflow-hidden bg-gradient-to-br', card.bg, 'h-full']">
        <!-- Swiper: دو اسلاید (رو/پشت) -->
        <Swiper :effect="'flip'" :grabCursor="true" :pagination="false" :modules="modules" class="cardSwiper !p-0 h-full">
          <!-- FRONT (روی کارت) -->
          <SwiperSlide class="h-full">
            <div class="h-full p-5">
              <!-- عنوان -->
              <h3 class="font-bold text-xl text-gray-800 mt-8 mb-3">{{ card.title }}</h3>

              <!-- محتوا: بر اساس نوع کارت -->
              <!-- وظایف -->
              <template v-if="card.id === 1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-600">پیشرفت کل</span>
                  <span class="text-sm font-bold text-gray-800">{{ toPersian(card.data.progress) }}٪</span>
                </div>
                <v-progress-linear :model-value="card.data.progress" height="10" rounded color="primary" class="mb-4" />
                <div class="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div class="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2">
                    <span class="text-gray-600">باز</span>
                    <span class="font-semibold text-gray-800">{{ toPersian(card.data.open) }}</span>
                  </div>
                  <div class="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2">
                    <span class="text-gray-600">انجام‌شده</span>
                    <span class="font-semibold text-gray-800">{{ toPersian(card.data.done) }}</span>
                  </div>
                  <div class="flex items-center justify-between bg-orange-50 rounded-xl px-3 py-2">
                    <span class="text-amber-700">نزدیک ددلاین</span>
                    <span class="font-semibold text-amber-800">{{ toPersian(card.data.nearDeadline) }}</span>
                  </div>
                  <div class="flex items-center justify-between bg-rose-50 rounded-xl px-3 py-2">
                    <span class="text-rose-700">ددلاین گذشته</span>
                    <span class="font-semibold text-rose-800">{{ toPersian(card.data.overdue) }}</span>
                  </div>
                </div>
                <div class="absolute bottom-2 w-full right-0">
                  <div class="px-5">
                    <button class="w-full py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">همه وظایف</button>
                  </div>
                </div>
              </template>

              <!-- گفتگو -->
              <template v-else-if="card.id === 2">
                <div class="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div class="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2">
                    <span class="text-gray-600">خوانده‌نشده</span>
                    <span class="font-semibold text-gray-800">{{ toPersian(card.data.unread) }}</span>
                  </div>
                  <div class="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2">
                    <span class="text-gray-600">کل گفتگوها</span>
                    <span class="font-semibold text-gray-800">{{ toPersian(card.data.total) }}</span>
                  </div>
                  <div class="flex items-center justify-between bg-emerald-50 rounded-xl px-3 py-2 col-span-2">
                    <span class="text-emerald-700">کاربران آنلاین</span>
                    <span class="font-semibold text-emerald-800">{{ toPersian(card.data.onlineUsers) }}</span>
                  </div>
                </div>
                <div class="absolute bottom-2 w-full right-0">
                  <div class="px-5">
                    <button class="w-full py-2 text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition">همه گفتگوها</button>
                  </div>
                </div>
              </template>

              <!-- تقویم -->
              <template v-else-if="card.id === 3">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2 text-sm w-48">
                      <span class="text-gray-600">جلسات امروز</span>
                      <span class="font-semibold text-gray-800">{{ toPersian(card.data.todayMeetings) }}</span>
                    </div>
                    <div class="flex items-center justify-between bg-white/70 rounded-xl px-3 py-2 text-sm w-48">
                      <span class="text-gray-600">رویدادهای هفته</span>
                      <span class="font-semibold text-gray-800">{{ toPersian(card.data.weekEvents) }}</span>
                    </div>
                    <div class="flex items-center justify-between bg-amber-50 rounded-xl px-3 py-2 text-sm w-48">
                      <span class="text-amber-700">جلسات این ماه</span>
                      <span class="font-semibold text-amber-800">{{ toPersian(card.data.monthMeetings) }}</span>
                    </div>
                  </div>
                  <!-- <v-progress-circular :model-value="card.data.occupancy" :size="86" :width="8" color="primary" class="text-blue-600">
                    <div class="text-center">
                      <div class="text-lg font-bold text-gray-800">{{ toPersian(card.data.occupancy) }}٪</div>
                      <div class="text-[11px] text-gray-600">اشغال هفته</div>
                    </div>
                  </v-progress-circular> -->
                </div>
                <div class="absolute bottom-2 w-full right-0">
                  <div class="px-5">
                    <button class="w-full mt-4 py-2 text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white rounded-xl transition">مشاهده تقویم</button>
                  </div>
                </div>
              </template>

              <!-- فرایندها -->
              <template v-else-if="card.id === 4">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-sm text-gray-600">
                    <span>وضعیت ماه جاری</span>
                  </div>

                  <div class="w-full h-4 rounded-full overflow-hidden bg-white/70 flex">
                    <div
                      v-for="(st, idx) in card.data.stages"
                      :key="idx"
                      :style="{ width: segmentWidth(card.data.stages, idx) }"
                      :class="['h-full', idx === 0 ? 'bg-red-200' : idx === 1 ? 'bg-indigo-500' : 'bg-emerald-500']"
                      class="first:rounded-s-full last:rounded-e-full" />
                  </div>

                  <div class="grid grid-cols-3 gap-2 mt-2 text-[11px] text-gray-700">
                    <div class="flex items-center gap-1"><span class="w-2 h-2 bg-red-200 rounded"></span>دیده نشده</div>
                    <div class="flex items-center gap-1"><span class="w-2 h-2 bg-indigo-500 rounded"></span>اقدام نشده</div>
                    <div class="flex items-center gap-1"><span class="w-2 h-2 bg-emerald-500 rounded"></span>خاتمه یافته</div>
                  </div>

                  <div class="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div class="col-span-full flex items-center justify-center">
                      <div class="flex items-center justify-between bg-red-200/70 rounded-xl w-5/12 px-3 py-2">
                        <span class="text-gray-600">دیده نشده</span>
                        <span class="font-semibold text-gray-800">{{ toPersian(card.data.stages[0].value) }}</span>
                      </div>
                    </div>
                    <div class="col-span-full grid grid-cols-2 gap-x-2">
                      <div class="flex items-center justify-between bg-indigo-100 rounded-xl px-3 py-2">
                        <span class="text-indigo-700">اقدام نشده</span>
                        <span class="font-semibold text-indigo-800">{{ toPersian(card.data.stages[1].value) }}</span>
                      </div>
                      <div class="flex items-center justify-between bg-emerald-50 rounded-xl px-3 py-2">
                        <span class="text-emerald-700">خاتمه یافته</span>
                        <span class="font-semibold text-emerald-800">{{ toPersian(card.data.stages[2].value) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-2 w-full right-0">
                  <div class="px-5">
                    <button class="w-full mt-4 py-2 text-sm font-semibold bg-purple-600 hover:bg-violet-700 text-white rounded-xl transition">همه فرایندها</button>
                  </div>
                </div>
              </template>
            </div>
          </SwiperSlide>

          <!-- BACK (پشت کارت: «آخرین‌ها») -->
          <SwiperSlide class="h-full">
            <div class="h-full p-2 mt-3">
              <h3 class="font-bold text-lg text-gray-800 mt-8 mb-3">{{ card.id === 1 ? 'آخرین وظایف' : card.id === 2 ? 'آخرین گفتگوها' : card.id === 3 ? 'رویدادهای آینده' : 'فرایندهای اخیر' }}</h3>

              <!-- پشتِ وظایف -->
              <template v-if="card.id === 1">
                <ul class="space-y-2">
                  <li v-for="t in card.data.latestTasks" :key="t.id" class="bg-white/70 rounded-xl px-3 py-2 flex items-center justify-between text-sm">
                    <span class="text-gray-800 text-xs line-clamp-1">{{ t.title }}</span>
                    <span v-if="t.status" class="text-[11px] text-amber-700 ms-2">
                      <v-icon class="text-red-600"
                        >mdi-alert-octagram-outline
                        <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
                      </v-icon>
                    </span>
                    <span class="text-[11px] text-gray-500">{{ t.due }}</span>
                  </li>
                </ul>
              </template>

              <!-- پشتِ گفتگو -->
              <template v-else-if="card.id === 2">
                <ul class="space-y-3">
                  <li v-for="c in card.data.latestChats" :key="c.id" class="bg-white/80 rounded-2xl px-3 py-2 flex items-center gap-3">
                    <img :src="c.avatar" alt="" class="w-9 h-9 rounded-full object-cover ring-2 ring-white" />
                    <div class="min-w-0">
                      <div class="text-sm font-semibold text-gray-800">{{ c.name }}</div>
                      <div class="text-xs text-gray-600 truncate">{{ c.snippet }}</div>
                    </div>
                  </li>
                </ul>
              </template>

              <!-- پشتِ تقویم -->
              <template v-else-if="card.id === 3">
                <ul class="space-y-2">
                  <li v-for="m in card.data.upcoming" :key="m.id" class="bg-white/70 rounded-xl px-3 py-2 flex items-center justify-between text-sm">
                    <div class="flex flex-col">
                      <span class="text-gray-800">{{ m.title }}</span>
                      <span class="text-[11px] text-gray-500">{{ m.date }}</span>
                    </div>
                    <span class="text-[12px] font-semibold text-amber-700">{{ toPersian(m.time) }}</span>
                  </li>
                </ul>
              </template>

              <!-- پشتِ فرایندها -->
              <template v-else-if="card.id === 4">
                <ul class="space-y-2">
                  <li v-for="p in card.data.upcomingProcesses" :key="p.id" class="bg-white/70 rounded-xl px-3 py-2 flex items-center justify-between text-sm">
                    <div class="flex flex-col">
                      <span class="text-gray-800">{{ p.title }}</span>
                      <span class="text-[11px] text-gray-500">{{ p.owner }}</span>
                    </div>
                    <span class="text-[11px] text-gray-500">{{ p.due }}</span>
                  </li>
                </ul>
              </template>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ثابت نگه داشتن سایز سوایپر داخل کارت */
.cardSwiper :deep(.swiper) {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

/* صفحات سوایپر باید پرِ کارت شوند */
.cardSwiper :deep(.swiper-slide) {
  height: 100%;
}

/* فلش‌ها جمع‌وجور و مناسب کارت */
.cardSwiper :deep(.swiper-button-prev),
.cardSwiper :deep(.swiper-button-next) {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: #111;
  backdrop-filter: blur(6px);
}
.cardSwiper :deep(.swiper-button-prev:after),
.cardSwiper :deep(.swiper-button-next:after) {
  font-size: 14px;
}

/* هاور کارت: افکت شیشه‌ای ملایم */
.group:hover {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
}
</style>
