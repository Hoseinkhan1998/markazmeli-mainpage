<script setup></script>

<template>
  <div class="grid grid-cols-12 gap-4 p-6">
    <!-- وظایف -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">وظایف</p>

      <!-- محتوا اصلی -->
      <div class="flex justify-between text-sm mb-1">
        <span>انجام شده</span>
        <span>۲۴</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-green-500 h-2 rounded" style="width: 70%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>باز</span>
        <span>۱۲</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-red-500 h-2 rounded" style="width: 30%"></div>
      </div>

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-green-600 font-semibold flex justify-between">
          <p>انجام شده</p>
          <p>۲۴</p>
        </div>
        <div class="text-black font-semibold flex justify-between">
          <p>باز</p>
          <p>۱۲</p>
        </div>
        <div class="text-orange-500 font-semibold flex justify-between">
          <p>نزدیک ددلاین</p>
          <p>۵</p>
        </div>
        <div class="text-red-600 font-semibold flex justify-between">
          <p>ددلاین گذشته</p>
          <p>۲</p>
        </div>
      </div>
    </div>

    <!-- تنخواه -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">تنخواه</p>

      <div class="flex justify-between text-sm mb-1">
        <span>هزینه ثبت شده</span>
        <span>۵,۲۰۰,۰۰۰</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-blue-500 h-2 rounded" style="width: 60%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>مانده</span>
        <span>۳,۰۰۰,۰۰۰</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-green-500 h-2 rounded" style="width: 40%"></div>
      </div>

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-blue-600 font-semibold flex justify-between">
          <p>کل تنخواه</p>
          <p>۸,۲۰۰,۰۰۰</p>
        </div>
        <div class="text-black font-semibold flex justify-between">
          <p>پرداخت شده</p>
          <p>۵,۲۰۰,۰۰۰</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>مانده</p>
          <p>۳,۰۰۰,۰۰۰</p>
        </div>
      </div>
    </div>

    <!-- چت -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">گفتگو</p>

      <div class="flex justify-between text-sm mb-1">
        <span>پیام‌های خوانده نشده</span>
        <span>۸</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-red-500 h-2 rounded" style="width: 25%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>کل گفتگوها</span>
        <span>۳۴</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-blue-500 h-2 rounded" style="width: 75%"></div>
      </div>

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-red-600 font-semibold flex justify-between">
          <p>پیام‌های خوانده نشده</p>
          <p>۸</p>
        </div>
        <div class="text-black font-semibold flex justify-between">
          <p>کل گفتگوها</p>
          <p>۳۴</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>کاربران آنلاین</p>
          <p>۵</p>
        </div>
      </div>
    </div>

    <!-- تقویم -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">تقویم</p>

      <div class="flex justify-between text-sm mb-1">
        <span>جلسات امروز</span>
        <span>۳</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-orange-500 h-2 rounded" style="width: 50%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>جلسات این هفته</span>
        <span>۸</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-blue-500 h-2 rounded" style="width: 70%"></div>
      </div>

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-orange-500 font-semibold flex justify-between">
          <p>جلسات امروز</p>
          <p>۳</p>
        </div>
        <div class="text-blue-600 font-semibold flex justify-between">
          <p>جلسات این هفته</p>
          <p>۸</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>جلسات آینده</p>
          <p>۴</p>
        </div>
      </div>
    </div>

    <!-- فرایند -->
    <div class="col-span-2 relative group border-2 border-neutral-300 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden">
      <p class="font-bold text-lg mb-2">فرایندها</p>

      <div class="flex justify-between text-sm mb-1">
        <span>در حال اقدام</span>
        <span>۶</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-yellow-500 h-2 rounded" style="width: 50%"></div>
      </div>

      <div class="flex justify-between text-sm mt-2 mb-1">
        <span>تمام شده</span>
        <span>۱۰</span>
      </div>
      <div class="w-full bg-neutral-200 h-2 rounded">
        <div class="bg-green-500 h-2 rounded" style="width: 80%"></div>
      </div>

      <!-- لایه هاور -->
      <div
        class="absolute px-4 inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="text-yellow-500 font-semibold flex justify-between">
          <p>در حال اقدام</p>
          <p>۶</p>
        </div>
        <div class="text-green-600 font-semibold flex justify-between">
          <p>تمام شده</p>
          <p>۱۰</p>
        </div>
        <div class="text-red-600 font-semibold flex justify-between">
          <p>رد شده</p>
          <p>۲</p>
        </div>
      </div>
    </div>
  </div>
</template>
