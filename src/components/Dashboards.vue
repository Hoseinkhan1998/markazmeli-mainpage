<script setup>
const dashboards = [
  {
    name: "گزارش درخواست فناوری اطلاعات",
    description: "A dashboard to monitor sales performance and trends.",
    image: "https://via.placeholder.com/150",
    link: "/dashboards/sales",
  },
  {
    name: "Marketing Dashboard",
    description: "A dashboard to track marketing campaigns and ROI.",
    image: "https://via.placeholder.com/150",
    link: "/dashboards/marketing",
  },
  {
    name: "Finance Dashboard",
    description: "A dashboard to oversee financial metrics and reports.",
    image: "https://via.placeholder.com/150",
    link: "/dashboards/finance",
  },
];
</script>
<template>
  <div class="grid grid-cols-12 gap-x-3">
    <div class="flex col-span-full items-center justify-between pe-10">
      <div class="text-xl border-r-4 border-red-600 pr-2 font-semibold">داشبورد‌های پر کاربرد</div>
      <div class="but text-blue-500"><span>مشاهده همه</span></div>
    </div>    
    <div class="col-span-3"></div>
  </div>
</template>

<style scoped></style>
