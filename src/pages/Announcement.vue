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
  },
  {
    id: 2,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img1.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
  },
  {
    id: 3,
    title: "کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
    img: "/images/img2.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    department: "فناوری اطلاعات",
  },
  {
    id: 4,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img3.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۸۵",
    department: "مالی",
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
  <div class="bg-white h-full rounded-lg p-3">
    <div class="flex flex-col gap-5 pb-10">
      <Menu activePage="announcement" />
      <div dir="rtl" class="grid grid-cols-12 gap-5">
        <div class="col-span-3" dir="rtl">
          <div class="bg-white ps-3">واحد</div>
          <select v-model="selectedDepartment" class="select w-full bg-white select-md border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option v-for="dept in departments" :key="dept" :value="dept">
              {{ dept }}
            </option>
          </select>
        </div>
        <div class="col-span-3 mt-6" dir="rtl">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="جستجو..."
            class="w-full bg-white border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <!-- طرح اول -->
      <!-- به جای بلوک‌های طرح اول و دوم، این ساختار را بگذارید -->
      <div v-if="layout === 'list'" class="space-y-2">
        <div
          v-for="card in filteredCards"
          :key="card.id"
          class="grid gap-x-5 grid-cols-12 hover:bg-neutral-200 cursor-pointer transition-all duration-300 border-b-2 p-2 border-neutral-300 rounded-lg items-center">
          <div class="col-span-2">
            <img :src="card.img" alt="img" class="w-full h-32 object-cover rounded-lg" />
          </div>
          <div class="col-span-7 flex flex-col gap-2">
            <h3 class="font-semibold text-gray-800 line-clamp-2">
              {{ card.title }}
            </h3>
            <div class="flex items-center gap-2">
              <span><v-icon class="!text-[20px]">mdi-domain</v-icon></span>
              <span class="text-xs">{{ card.department }}</span>
            </div>
            <div class="flex gap-1 mt-2 text-sm text-gray-500">
              <span><v-icon>mdi-eye</v-icon></span>
              <span>{{ card.view }} بازدید</span>
              <span class="mr-10">{{ card.date }}</span>
              <span><v-icon>mdi-calendar-clock</v-icon></span>
            </div>
          </div>
          <div class="col-span-3 flex justify-end">
            <button @click="router.push('/announcement-detail')" class="border-2 border-neutral-900 border-solid px-3 py-1 rounded-lg">مشاهده</button>
          </div>
        </div>
      </div>
      <div v-if="layout === 'grid'" class="grid grid-cols-12 gap-4">
        <div
          v-for="card in filteredCards"
          :key="card.id"
          class="col-span-4 h-[400px] border-2 border-neutral-300 hover:bg-neutral-200 transition-all duration-300 cursor-pointer rounded-lg p-2 flex flex-col gap-2 relative">
          <img :src="card.img" alt="img" class="w-full h-[250px] object-cover rounded-lg" />
          <h3 class="font-semibold text-gray-800 line-clamp-3">{{ card.title }}</h3>
          <div class="absolute bottom-1 w-full pe-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-2">
                <span><v-icon class="!text-[20px]">mdi-domain</v-icon></span>
                <span class="text-xs">{{ card.department }}</span>
              </div>
              <div class="flex text-xs text-gray-500 items-center gap-1">
                <span><v-icon>mdi-eye</v-icon></span>
                <span class="text-sm">{{ card.view }}</span>
                <span class="mr-10">{{ card.date }}</span>
                <span><v-icon>mdi-calendar-clock</v-icon></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="layout === 'grid3'" class="grid grid-cols-12 gap-4">
        <div
          v-for="card in filteredCards"
          :key="card.id"
          class="col-span-3 h-[400px] border-2 border-neutral-300 hover:bg-neutral-200 transition-all duration-300 cursor-pointer rounded-lg p-2 flex flex-col gap-2 relative">
          <img :src="card.img" alt="img" class="w-full h-[250px] object-cover rounded-lg" />
          <h3 class="font-semibold text-gray-800 line-clamp-3">{{ card.title }}</h3>
          <div class="absolute bottom-1 w-full pe-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-2">
                <span><v-icon class="!text-[20px]">mdi-domain</v-icon></span>
                <span class="text-xs">{{ card.department }}</span>
              </div>
              <div class="flex text-xs text-gray-500 items-center gap-1">
                <span><v-icon>mdi-eye</v-icon></span>
                <span class="text-sm">{{ card.view }}</span>
                <span class="mr-10">{{ card.date }}</span>
                <span><v-icon>mdi-calendar-clock</v-icon></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
