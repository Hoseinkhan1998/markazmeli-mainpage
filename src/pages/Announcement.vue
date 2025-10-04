<script setup>
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";

const layout = ref("list");

// شورتکات‌ها: Alt + Shift + 1/2
const handleKeydown = (event) => {
  // اگر کلیدهای Ctrl و Shift همزمان فشرده شده باشند
  if (event.ctrlKey && event.shiftKey) {
    switch (event.key) {
      case "Q":
        event.preventDefault();
        layout.value = "list";
        break;
      case "E":
        event.preventDefault();
        layout.value = "grid";
        break;
      case "F":
        event.preventDefault();
        layout.value = "grid3";
        break;
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

// حذف شنونده رویداد برای جلوگیری از نشت حافظه
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

const cards = ref([
  {
    id: 1,
    title: "فراهم آوردن محیطی جهت بیان دیدگاه های متفاوت کشورها در خصوص سیاست ها و قوانین مرتبط با اینترنت",
    img: "/images/img3.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    department: "اداره تحول",
    description: "این دسترسی سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
  },
  {
    id: 2,
    title: "از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img1.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
    description: "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات ارائه شد.",
  },
  {
    id: 3,
    title: "ها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
    img: "/images/img2.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    department: "فناوری اطلاعات",
    description: "این دسترسی سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
  },
  {
    id: 4,
    title: "از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img5.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۸۵",
    department: "مالی",
    description: "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات ارائه شد.",
  },
]);

// متغیرهای reactive برای فیلترها
const selectedDepartment = ref("");
const searchQuery = ref("");

// تعریف لیست دپارتمان‌ها برای انتخاب
const departments = ref(["همه", "منابع انسانی", "مالی", "اداره تحول", "فناوری اطلاعات", "معاونت توسعه و برنامه ریزی"]);

// محاسبه کارت‌های فیلتر شده
const filteredCards = computed(() => {
  return cards.value.filter((card) => {
    const matchesDepartment = selectedDepartment.value === "" || selectedDepartment.value === "همه" || card.department === selectedDepartment.value;

    const matchesSearch = card.title.toLowerCase().includes(searchQuery.value.toLowerCase());

    return matchesDepartment && matchesSearch;
  });
});

const router = useRouter();
</script>

<template>
  <div class="bg-white h-full rounded-lg p-6">
    <div class="flex flex-col gap-8 pb-10">
      <Menu activePage="announcement" />

      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-3">
          <label for="department-select" class="block text-sm font-medium text-gray-700 mb-1">دپارتمان</label>
          <select
            id="department-select"
            v-model="selectedDepartment"
            class="w-full bg-white border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
            <option v-for="dept in departments" :key="dept" :value="dept">
              {{ dept }}
            </option>
          </select>
        </div>
        <div class="col-span-4">
          <label for="search-input" class="block text-sm font-medium text-gray-700 mb-1">جستجو در عنوان</label>
          <input
            id="search-input"
            v-model.lazy="searchQuery"
            type="text"
            placeholder="مثال: گزارش عملکرد..."
            class="w-full bg-white border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div class="col-span-5 flex justify-end items-center self-end gap-x-2">
          <p class="text-sm text-gray-500">تغییر نما:</p>
          <button
            @click="layout = 'list'"
            :class="{ 'bg-blue-600 text-white': layout === 'list', 'bg-gray-200 text-gray-700': layout !== 'list' }"
            class="p-2 rounded-lg transition-colors">
            <v-icon>mdi-view-list</v-icon>
          </button>
          <button
            @click="layout = 'grid'"
            :class="{ 'bg-blue-600 text-white': layout === 'grid', 'bg-gray-200 text-gray-700': layout !== 'grid' }"
            class="p-2 rounded-lg transition-colors">
            <v-icon>mdi-view-grid</v-icon>
          </button>
          <button
            @click="layout = 'compact'"
            :class="{ 'bg-blue-600 text-white': layout === 'compact', 'bg-gray-200 text-gray-700': layout !== 'compact' }"
            class="p-2 rounded-lg transition-colors">
            <v-icon>mdi-view-dashboard</v-icon>
          </button>
        </div>
      </div>

      <div>
        <div v-if="layout === 'list'" class="border-t border-gray-200">
          <div
            v-for="card in filteredCards"
            :key="card.id"
            class="grid grid-cols-12 gap-6 items-center p-5 border-b border-gray-200 hover:bg-blue-50/50 cursor-pointer transition-colors duration-300"
            @click="router.push('/announcement-detail')">
            <div class="col-span-2">
              <img :src="card.img" alt="img" class="w-full h-32 object-cover rounded-lg" />
            </div>
            <div class="col-span-7 flex flex-col justify-center">
              <h3 class="text-lg font-bold text-gray-800 line-clamp-2 leading-relaxed">
                {{ card.title }}
              </h3>
              <div class="flex items-center gap-x-4 mt-3 text-sm text-gray-500">
                <div class="flex items-center gap-x-1.5">
                  <v-icon class="!text-lg">mdi-domain</v-icon><span>{{ card.department }}</span>
                </div>
                <div class="flex items-center gap-x-1.5">
                  <v-icon class="!text-lg">mdi-calendar-clock</v-icon><span>{{ card.date }}</span>
                </div>
                <div class="flex items-center gap-x-1.5">
                  <v-icon class="!text-lg">mdi-eye-outline</v-icon><span>{{ card.view }} بازدید</span>
                </div>
              </div>
            </div>
            <div class="col-span-3 flex justify-end">
              <button class="text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">مشاهده جزئیات</button>
            </div>
          </div>
        </div>

        <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-6">
          <div
            v-for="card in filteredCards"
            :key="card.id"
            class="col-span-3 flex flex-col bg-white border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden"
            @click="router.push('/announcement-detail')">
            <img :src="card.img" alt="img" class="w-full h-56 object-cover" />
            <div class="p-5 flex flex-col flex-grow">
              <div class="flex items-center gap-x-3 text-xs text-gray-500 mb-2">
                <span>{{ card.department }}</span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{{ card.date }}</span>
              </div>
              <h3 class="font-semibold text-gray-800 line-clamp-3 leading-relaxed flex-grow">
                {{ card.title }}
              </h3>
              <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <div class="flex items-center gap-x-1.5 text-sm text-gray-500">
                  <v-icon class="!text-lg">mdi-eye-outline</v-icon><span>{{ card.view }}</span>
                </div>
                <a class="text-sm font-bold text-blue-600">ادامه مطلب &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="layout === 'compact'" class="grid grid-cols-12 gap-8">
          <div v-for="card in filteredCards" :key="card.id" class="col-span-6" @click="router.push('/announcement-detail')">
            <div class="bg-gray-50 rounded-2xl p-2 shadow-lg hover:shadow-xl hover:bg-neutral-200 transition-all duration-300 cursor-pointer h-[150px]">
              <div class="grid grid-cols-5 gap-5">
                <div class="col-span-1">
                  <img :src="card.img" alt="img" class="w-full h-[130px] object-cover rounded-xl" />
                </div>
                <div class="col-span-4 flex flex-col">
                  <h3 class="text-lg font-semibold text-gray-800 line-clamp-1">
                    {{ card.title }}
                  </h3>
                  <p class="text-xs text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                    {{ card.description }}
                  </p>

                  <div class="mt-auto pt-4 flex items-center justify-between text-sm text-gray-500">
                    <div class="flex items-center gap-x-2">
                      <v-icon>mdi-domain</v-icon>
                      <span>{{ card.department }}</span>
                    </div>
                    <div class="flex items-center gap-x-2 pe-10">
                      <v-icon>mdi-eye-outline</v-icon>
                      <span>{{ card.view }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
