<script setup>
import { ref, computed } from "vue";
import ApprovalIcon from "./Icons/ApprovalIcon.vue";
import Important_report from "./Icons/Important_report.vue";
import ITServiceIcon from "./Icons/ITServiceIcon.vue";
import LetterIcon from "./Icons/letterIcon.vue";
import Process_agilityIcon from "./Icons/Process_agilityIcon.vue";

// ایمپورت کردن کتابخانه‌های چارت
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from "chart.js";
import { Line, Doughnut, Pie } from "vue-chartjs";

// رجیستر کردن اجزای مورد نیاز Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement);

const showAll = ref(false);

// داده‌های کارت‌ها با ساختار جدید (ترکیب چارت و آمار)
const dashboards = [
  {
    // کارت ۱: بدون تغییر
    id: 1,
    title: "گزارش خدمات فناوری اطلاعات",
    iconComp: ITServiceIcon,
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    softBg: "from-cyan-50 to-blue-50",
    pill: "Power BI • IT Services",
    ctaColor: "bg-sky-600 hover:bg-sky-700",
    chartType: "Line",
    chartData: {
      labels: ["مهر", "آبان", "آذر", "دی", "بهمن"],
      datasets: [
        {
          label: "تعداد تیکت‌ها",
          backgroundColor: "#0284c7",
          borderColor: "#0ea5e9",
          data: [40, 39, 60, 55, 72],
          tension: 0.3,
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { ticks: { font: { size: 10 } } }, x: { ticks: { font: { size: 10 } } } },
    },
  },
  {
    // کارت ۲: چارت + آمار
    id: 2,
    title: "تحلیل بازدید اطلاعیه‌ها",
    iconComp: Important_report,
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    softBg: "from-amber-50 to-rose-50",
    pill: "Power BI • Announcements",
    ctaColor: "bg-amber-600 hover:bg-amber-700",
    chartType: "Doughnut",
    chartData: {
      labels: ["مطالعه شده", "خوانده نشده"],
      datasets: [
        {
          backgroundColor: ["#10b981", "#ef4444"],
          data: [85, 15],
        },
      ],
    },
    chartOptions: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
    // آمار عددی اضافه شد
    stats: [
      { label: "نرخ تعامل", value: "85%", color: "text-green-600" },
      { label: "پرخواننده‌ترین موضوع", value: "مالی", color: "text-amber-600" },
    ],
  },
  {
    // کارت ۳: فقط آمار (با جزئیات بیشتر)
    id: 3,
    title: "وضعیت سند راهبردی",
    iconComp: LetterIcon,
    gradient: "from-violet-600 via-indigo-600 to-blue-700",
    softBg: "from-violet-50 to-indigo-50",
    pill: "Power BI • Strategy",
    ctaColor: "bg-indigo-600 hover:bg-indigo-700",
    // آمار عددی گسترش یافت
    stats: [
      { label: "اهداف کلیدی محقق شده", value: "72%", color: "text-green-600" },
      { label: "پروژه‌های در حال اجرا", value: "14", color: "text-blue-600" },
      { label: "ابتکارات تعریف شده", value: "28", color: "text-violet-600" },
      { label: "شاخص‌های نیازمند توجه", value: "3", color: "text-red-600" },
    ],
  },
  {
    // کارت ۴: چارت + آمار
    id: 4,
    title: "وضعیت اجرای مصوبات",
    iconComp: ApprovalIcon,
    gradient: "from-emerald-600 via-teal-600 to-slate-700",
    softBg: "from-emerald-50 to-teal-50",
    pill: "Power BI • Approvals",
    ctaColor: "bg-emerald-600 hover:bg-emerald-700",
    chartType: "Pie",
    chartData: {
      labels: ["اجرا شده", "معوق", "در حال اجرا"],
      datasets: [
        {
          backgroundColor: ["#059669", "#dc2626", "#facc15"],
          data: [50, 8, 25],
        },
      ],
    },
    chartOptions: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
    // آمار عددی اضافه شد
    stats: [
      { label: "کل مصوبات", value: "83", color: "text-teal-600" },
      { label: "مصوبات معوق", value: "8", color: "text-red-600" },
    ],
  },
  {
    // کارت ۵: فقط آمار (با جزئیات بیشتر)
    id: 5,
    title: "چابکی فرایندها",
    iconComp: Process_agilityIcon,
    gradient: "from-fuchsia-600 via-purple-600 to-cyan-600",
    softBg: "from-fuchsia-50 to-cyan-50",
    pill: "Power BI • Process Agility",
    ctaColor: "bg-fuchsia-600 hover:bg-fuchsia-700",
    // آمار عددی گسترش یافت
    stats: [
      { label: "میانگین زمان انجام فرایند", value: "3.2 روز", color: "text-purple-600" },
      { label: "فرایندهای دارای گلوگاه", value: "5", color: "text-orange-600" },
      { label: "شاخص چابکی سازمان", value: "7.8 / 10", color: "text-cyan-600" },
    ],
  },
];

const displayedDashboards = computed(() => {
  if (showAll.value) {
    return dashboards;
  }
  return dashboards.slice(0, 3);
});
const toPersian = (val) => String(val).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
</script>

<template>
  <section dir="rtl" class="w-full">
    <div class="flex items-center justify-between mb-5 pe-2">
      <h2 class="text-xl font-semibold border-r-4 border-red-600 pr-3">داشبوردهای مدیریتی (Power BI)</h2>
      <button @click="showAll = !showAll" class="text-sky-700 but hover:text-sky-900 font-medium transition">
        {{ showAll ? "نمایش کمتر" : "مشاهده همه" }}
      </button>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <div v-for="d in displayedDashboards" :key="d.id" class="col-span-12 sm:col-span-6 lg:col-span-4">
        <div class="relative overflow-hidden h-[380px] rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <div :class="['absolute inset-0 opacity-80 bg-gradient-to-br', d.softBg]"></div>
          <div class="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30" :class="['bg-gradient-to-br', d.gradient]"></div>
          <div class="absolute -left-6 -bottom-2 opacity-10 blur-[1px] select-none">
            <component :is="d.iconComp" :width="d.iconW * 1.6" :height="d.iconH * 1.6" class="text-black" />
          </div>

          <div class="relative z-10 flex items-center justify-between px-5 pt-5">
            <span class="text-[11px] md:text-xs font-semibold rounded-full px-3 py-1 text-white shadow-sm" :class="['bg-gradient-to-r', d.gradient]">{{ d.pill }}</span>
            <div :class="['flex items-center justify-center rounded-2xl w-12 h-12 shadow-lg text-white', 'bg-gradient-to-br', d.gradient]">
              <component :is="d.iconComp" :width="32" :height="24" class="text-white opacity-95" />
            </div>
          </div>

          <div class="relative z-10 px-5 pt-3 pb-5 h-[220px]">
            <h3 class="text-base md:text-lg font-bold text-slate-800 leading-8 mb-4">
              {{ d.title }}
            </h3>

            <div class="h-[180px]">
              <div v-if="d.chartType && d.stats" class="grid grid-cols-2 gap-4 items-center h-full">
                <div class="h-[150px]">
                  <Doughnut v-if="d.chartType === 'Doughnut'" :data="d.chartData" :options="d.chartOptions" />
                  <Pie v-if="d.chartType === 'Pie'" :data="d.chartData" :options="d.chartOptions" />
                </div>
                <div class="flex flex-col gap-4">
                  <div v-for="stat in d.stats" :key="stat.label" class="text-center">
                    <p class="text-2xl font-bold" :class="stat.color">{{ toPersian(stat.value) }}</p>
                    <p class="text-xs text-slate-500">{{ stat.label }}</p>
                  </div>
                </div>
              </div>

              <template v-else-if="d.chartType">
                <Line :data="d.chartData" :options="d.chartOptions" />
              </template>

              <div v-else-if="d.stats" class="flex flex-col justify-center h-full gap-4">
                <div v-for="stat in d.stats" :key="stat.label" class="flex items-center justify-between border-b border-gray-200/50 pb-2 last:border-b-0">
                  <span class="text-sm text-slate-600">{{ stat.label }}</span>
                  <span class="text-lg font-bold" :class="stat.color">{{ toPersian(stat.value) }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute w-full bottom-2 right-0">
            <div class="px-5">
              <button class="w-full text-sm md:text-[13px] font-semibold text-white rounded-xl py-2.5 transition flex items-center justify-center gap-2" :class="d.ctaColor">
                مشاهده داشبورد
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -scale-x-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
