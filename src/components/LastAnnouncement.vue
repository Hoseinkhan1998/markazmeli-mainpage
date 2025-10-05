<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted, onUnmounted } from "vue";

const layout = ref("grid3");

// شورتکات‌ها: Alt + Shift + 1/2
const handleKeydown = (event) => {
  // اگر کلیدهای Ctrl و Shift همزمان فشرده شده باشند
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;
  switch (event.key) {
    case "1":
      event.preventDefault();
      layout.value = "grid";
      break;
    case "2":
      event.preventDefault();
      layout.value = "grid3";
      break;
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
    img: "/images/img5.png",
    hoverImg: "/images/img1.png",
    date: "۱۴۰۴/۰۴/۲۱",
    view: "۱۰",
    department: "اداره تحول",
  },
  {
    id: 2,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img6.png",
    hoverImg: "/images/img2.png",
    date: "۱۴۰۴/۰۵/۱۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
  },
  {
    id: 3,
    title: "کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
    img: "/images/img7.png",
    hoverImg: "/images/img3.png",
    date: "۱۴۰۴/۰۷/۱۴",
    view: "۹۶",
    department: "فناوری اطلاعات",
  },
  {
    id: 4,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img8.png",
    hoverImg: "/images/img4.png",
    date: "۱۴۰۴/۰۲/۰۱",
    view: "۸۵",
    department: "مالی",
  },
  {
    id: 5,
    title: "فراهم آوردن محیطی جهت بیان دیدگاه های متفاوت کشورها در خصوص سیاست ها و قوانین مرتبط با اینترنت",
    img: "/images/img4.png",
    hoverImg: "/images/img1.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    department: "اداره تحول",
  },
  {
    id: 6,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img3.png",
    hoverImg: "/images/img2.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
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
    <div v-if="layout === 'grid'" class="grid grid-cols-10 gap-6">
      <div v-for="card in filteredCards.slice(0, 5)" :key="card.id" class="col-span-2 h-80 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
        <img :src="card.hoverImg" alt="Hover image" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img :src="card.img" alt="Main image" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

        <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent flex flex-col justify-end p-5 text-white">
          <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div class="text-xs opacity-80">
              <span>{{ card.department }}</span
              >&nbsp;&nbsp;<span>{{ card.date }}</span>
            </div>
            <h3 class="font-semibold mt-2 leading-relaxed line-clamp-2">
              {{ card.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- طرح دوم -->
    <div v-if="layout === 'grid3'" class="grid grid-cols-12 gap-4">
      <div
        v-for="card in filteredCards"
        :key="card.id"
        class="col-span-2 h-[400px] border border-neutral-300 hover:bg-neutral-200 transition-all duration-300 cursor-pointer rounded-lg p-2 flex flex-col gap-2 relative">
        <img :src="card.img" alt="img" class="w-full h-[250px] object-cover rounded-lg" />
        <h3 class="font-semibold text-gray-800 line-clamp-3">{{ card.title }}</h3>
        <div class="absolute bottom-1 w-full pe-5">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span><v-icon class="!text-[20px]">mdi-domain</v-icon></span>
              <span class="text-xs">{{ card.department }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
