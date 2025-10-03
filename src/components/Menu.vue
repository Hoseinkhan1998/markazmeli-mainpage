<script setup>
import { useRouter } from "vue-router";

// پراپس برای مشخص کردن صفحه فعال
defineProps({
  activePage: {
    type: String,
    default: "",
  },
});

const router = useRouter();
</script>

<template>
  <div class="rounded-md border-solid border-neutral-500 border-2 flex items-center justify-between px-3 py-1">
    <div class="flex">
      <router-link to="/announcement" class="cursor-pointer transition-all duration-150 hover:text-blue-500" :class="{ 'text-blue-500 font-bold': activePage === 'announcement' }">
        اطلاعیه
      </router-link>
      <div class="bg-red-600 h-2 w-2 rounded-full -mt-1"></div>
    </div>
    <div class="flex">
      <router-link to="/ping" class="cursor-pointer transition-all duration-150 hover:text-blue-500" :class="{ 'text-blue-500 font-bold': activePage === 'ping' }">
        پینگ
      </router-link>
      <div class="bg-red-600 h-2 w-2 rounded-full -mt-1"></div>
    </div>
    <div>
      <router-link to="/security" class="cursor-pointer transition-all duration-150 hover:text-blue-500" :class="{ 'text-blue-500 font-bold': activePage === 'security' }">
        حراست
      </router-link>
    </div>
    <div>
      <router-link to="/" class="cursor-pointer transition-all duration-150 hover:text-blue-500">اطلاعیه۲</router-link>
    </div>
    <div class="flex">
      <router-link to="/" class="cursor-pointer transition-all duration-150 hover:text-blue-500">اطلاعیه۳</router-link>
      <div class="bg-red-600 h-2 w-2 rounded-full -mt-1"></div>
    </div>
    <div>
      <router-link to="/" class="cursor-pointer transition-all duration-150 hover:text-blue-500">اطلاعیه۴</router-link>
    </div>
    <div>
      <router-link to="/" class="cursor-pointer transition-all duration-150 hover:text-blue-500">اطلاعیه۵</router-link>
    </div>
    <div>
      <router-link to="/" class="cursor-pointer transition-all duration-150 hover:text-blue-500">اطلاعیه۶</router-link>
    </div>
    <div>
      <router-link to="/" class="cursor-pointer transition-all duration-150 hover:text-blue-500">اطلاعیه۷</router-link>
    </div>
  </div>
</template>
