<script setup>
import { ref } from 'vue';

// پراپس برای مشخص کردن صفحه فعال
defineProps({
 activePage: {
  type: String,
  default: "", // یک مقدار پیش‌فرض برای نمایش حالت فعال
 },
});

// لیست آیتم‌های منو برای شبیه‌سازی واقعی‌تر
const menuItems = ref([
 { id: 'announcement', label: 'اطلاعیه', to: '/announcement', hasNotification: true },
 { id: 'ping', label: 'پینگ', to: '/ping', hasNotification: true },
 { id: 'security', label: 'حراست', to: '/security', hasNotification: false },
 { id: 'tasks', label: 'وظایف', to: '/tasks', hasNotification: false },
 { id: 'calendar', label: 'تقویم', to: '/calendar', hasNotification: false },
 { id: 'processes', label: 'فرایندها', to: '/processes', hasNotification: false },
 { id: 'chat', label: 'گفتگو', to: '/chat', hasNotification: true },
 { id: 'reports', label: 'گزارش‌ها', to: '/reports', hasNotification: false },
 { id: 'settings', label: 'تنظیمات', to: '/settings', hasNotification: false },
 { id: 'archive', label: 'بایگانی', to: '/archive', hasNotification: false },
]);
</script>

<template>
  <div class="flex items-center justify-center bg-blue-600 rounded-lg">
    <div v-for="item in menuItems" :key="item.id">
   <router-link
    :to="item.to"
    class="relative text-white text-sm py-3 px-4 block transition-colors duration-200"
    :class="{
     'hover:bg-blue-700': activePage !== item.id, // هاور فقط برای آیتم‌های غیرفعال
     '!bg-blue-800 font-bold': activePage === item.id, // استایل آیتم فعال
    }"
   >
    {{ item.label }}
        <div
     v-if="item.hasNotification"
     class="absolute top-2.5 right-2 bg-red-500 h-2 w-2 rounded-full ring-1 ring-blue-600"
         :class="{ '!ring-blue-800': activePage === item.id }"
    ></div>
   </router-link>
  </div>
 </div>
</template>

<style scoped>
/* .justify-center > div:first-child > a {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.justify-center > div:last-child > a {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
} */
</style>