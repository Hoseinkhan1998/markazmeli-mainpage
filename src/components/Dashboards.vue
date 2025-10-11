Hosein, [10/11/2025 7:47 PM]
<script setup>
import ApprovalIcon from "./Icons/ApprovalIcon.vue";
import Important_report from "./Icons/Important_report.vue";
import ITServiceIcon from "./Icons/ITServiceIcon.vue";
import LetterIcon from "./Icons/letterIcon.vue";
import Process_agilityIcon from "./Icons/Process_agilityIcon.vue";

// داده‌های تبلیغاتی هر کارت (بدون عدد واقعی)
const dashboards = [
  {
    id: 1,
    title: "گزارش درخواست خدمات فناوری اطلاعات",
    iconComp: ITServiceIcon,
    iconW: 110,
    iconH: 80,
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    softBg: "from-cyan-50 to-blue-50",
    pill: "Power BI • IT Services",
    features: [
      "مشاهده انواع درخواست‌ها (نرم‌افزاری/سخت‌افزاری/شبکه)",
      "میانگین زمان پاسخگویی هر کارشناس",
      "فیلتر بر اساس دپارتمان و اولویت",
      "تحلیل تکمیل SLA و درخواست‌های معوق",
      "مقایسه عملکرد تیم‌های پشتیبانی",
    ],
    ctaColor: "bg-sky-600 hover:bg-sky-700",
  },
  {
    id: 2,
    title: "گزارش اطلاعیه‌ها",
    iconComp: Important_report,
    iconW: 110,
    iconH: 80,
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    softBg: "from-amber-50 to-rose-50",
    pill: "Power BI • Announcements",
    features: ["نرخ تعامل کارمندان با اطلاعیه‌ها", "پرخواننده‌ترین موضوعات سازمانی", "تفکیک بر اساس واحد/موضوع/زمان انتشار", "تحلیل وضعیت مطالعه‌شده/مطالعه‌نشده"],
    ctaColor: "bg-amber-600 hover:bg-amber-700",
  },
  {
    id: 3,
    title: "گزارش سند راهبردی",
    iconComp: LetterIcon,
    iconW: 110,
    iconH: 80,
    gradient: "from-violet-600 via-indigo-600 to-blue-700",
    softBg: "from-violet-50 to-indigo-50",
    pill: "Power BI • Strategy",
    features: [
      "پایش KPIهای کلیدی راهبردی",
      "پیشرفت اهداف و ابتکارات",
      "مقایسه وضعیت فعلی با اهداف هدف‌گذاری‌شده",
      "شناسایی شکاف‌ها و فرصت‌های بهبود",
      "روند تحقق مأموریت‌های کلان",
    ],
    ctaColor: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    id: 4,
    title: "مصوبات شورای عالی فضای مجازی",
    iconComp: ApprovalIcon,
    iconW: 110,
    iconH: 80,
    gradient: "from-emerald-600 via-teal-600 to-slate-700",
    softBg: "from-emerald-50 to-teal-50",
    pill: "Power BI • Approvals",
    features: ["آخرین مصوبات و جزئیات مرتبط", "وضعیت اجرا و مسئول هر مصوبه", "پیشرفت مصوبات در واحدهای مختلف", "فیلتر بر اساس تاریخ و نوع موضوع", "مصوبات معوقه و در انتظار تأیید"],
    ctaColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: 5,
    title: "چابکی فرایندها",
    iconComp: Process_agilityIcon,
    iconW: 110,
    iconH: 80,
    gradient: "from-fuchsia-600 via-purple-600 to-cyan-600",
    softBg: "from-fuchsia-50 to-cyan-50",
    pill: "Power BI • Process Agility",
    features: ["میانگین زمان انجام هر فرایند", "حجم ورودی‌ها/خروجی‌ها و روند آن", "شناسایی گلوگاه‌ها و نقاط کند", "مقایسه عملکرد دپارتمان‌ها", "شاخص‌های چابکی سازمانی"],
    ctaColor: "bg-fuchsia-600 hover:bg-fuchsia-700",
  },
];
</script>

<template>
  <section dir="rtl" class="w-full">
    <!-- هدر بخش -->
    <div class="flex items-center justify-between mb-5 pe-2">
      <h2 class="text-xl font-semibold border-r-4 border-red-600 pr-3">داشبوردهای مدیریتی (Power BI)</h2>
      <button class="text-sky-700 hover:text-sky-900 font-medium transition">مشاهده همه</button>
    </div>

    <!-- گرید 10 ستونه؛ هر کارت col-span-2 -->
    <div class="grid grid-cols-10 gap-4 md:gap-5">
      <div v-for="d in dashboards" :key="d.id" class="col-span-10 sm:col-span-5 lg:col-span-2">
        <!-- کارت -->
        <div class="relative overflow-hidden rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <!-- پس‌زمینه گرادیان نرم برای پر کردن -->
          <div :class="['absolute inset-0 opacity-80 bg-gradient-to-br', d.softBg]"></div>

          Hosein, [10/11/2025 7:47 PM]
          <!-- درخشش نقطه‌ای -->
          <div class="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30" :class="['bg-gradient-to-br', d.gradient]"></div>

          <!-- آیکون بزرگ محو در بک -->
          <div class="absolute -left-6 -bottom-6 opacity-10 blur-[1px] select-none">
            <component :is="d.iconComp" :width="d.iconW * 1.6" :height="d.iconH * 1.6" class="text-black" />
          </div>

          <!-- نوار بالایی: برچسب -->
          <div class="relative z-10 flex items-center justify-between px-5 pt-5">
            <span class="text-[11px] md:text-xs font-semibold rounded-full px-3 py-1 text-white shadow-sm" :class="['bg-gradient-to-r', d.gradient]">
              {{ d.pill }}
            </span>

            <!-- آیکون کوچک برجسته -->
            <div :class="['flex items-center justify-center rounded-2xl w-12 h-12 shadow-lg text-white', 'bg-gradient-to-br', d.gradient]">
              <component :is="d.iconComp" :width="32" :height="24" class="text-white opacity-95" />
            </div>
          </div>

          <!-- بدنه کارت -->
          <div class="relative z-10 px-5 pt-3 pb-5">
            <h3 class="text-base md:text-lg font-bold text-slate-800 leading-8">
              {{ d.title }}
            </h3>

            <ul class="mt-3 space-y-2">
              <li v-for="(f, i) in d.features" :key="i" class="flex items-start gap-2 text-sm text-slate-700">
                <span :class="['mt-1 inline-block w-2 h-2 rounded-full opacity-90', i % 3 === 0 ? 'bg-sky-600' : i % 3 === 1 ? 'bg-amber-600' : 'bg-violet-600']"></span>
                <span class="leading-6">{{ f }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <div class="mt-4">
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

<style scoped>
/* افکت شیشه‌ای ملایم هنگام هاور کل کارت */
div:hover > .glass {
  backdrop-filter: blur(8px);
}

/* جلوگیری از گزینش آیکون پس‌زمینه */
select-none {
  user-select: none;
}
</style>
