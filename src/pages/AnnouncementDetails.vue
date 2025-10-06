<script setup>
import { useRoute, useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const layout = ref("list");

// شورتکات‌ها: Alt + Shift + 1/2
const handleKeydown = (event) => {
  // اگر کلیدهای Ctrl و Shift همزمان فشرده شده باشند
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;
  switch (event.key) {
    case "1":
      event.preventDefault();
      layout.value = "list";
      break;
    case "2":
      event.preventDefault();
      layout.value = "grid";
      break;
    case "3":
      event.preventDefault();
      layout.value = "compact";
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

const route = useRoute();
const router = useRouter();

const currentSlide = ref(0);
const carouselImages = ref([]);
const thumbnailContainer = ref(null);
const thumbnailRefs = ref([]);

const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

// با کلیک موس، حالت کشیدن فعال می‌شود
const startDrag = (e) => {
  isDown.value = true;
  thumbnailContainer.value.classList.add("active");
  startX.value = e.pageX - thumbnailContainer.value.offsetLeft;
  scrollLeft.value = thumbnailContainer.value.scrollLeft;
};

// با رها کردن کلیک موس، حالت کشیدن متوقف می‌شود
const stopDrag = () => {
  isDown.value = false;
  thumbnailContainer.value.classList.remove("active");
};

// با حرکت موس، اگر حالت کشیدن فعال باشد، کانتینر را اسکرول می‌کند
const onDrag = (e) => {
  if (!isDown.value) return;
  e.preventDefault();
  const x = e.pageX - thumbnailContainer.value.offsetLeft;
  const walk = (x - startX.value) * 2; // ضریب 2 برای افزایش سرعت اسکرول
  thumbnailContainer.value.scrollLeft = scrollLeft.value - walk;
};

// تابع برای تولید لیست عکس‌های Carousel برای هر اطلاعیه
function generateCarouselImages(mainImg) {
  const allPossibleImages = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
  ];
  let images = [mainImg];
  let otherImages = allPossibleImages.filter((img) => img !== mainImg);
  // اضافه کردن ۷ عکس دیگر برای داشتن یک لیست بلند
  for (let i = 0; i < 12; i++) {
    if (otherImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * otherImages.length);
      images.push(otherImages.splice(randomIndex, 1)[0]);
    } else {
      // اگر عکس غیرتکراری تمام شد، از کل لیست دوباره انتخاب کن
      images.push(allPossibleImages[Math.floor(Math.random() * allPossibleImages.length)]);
    }
  }
  return images;
}

// لیست کامل اطلاعیه‌ها (در یک پروژه واقعی این داده از API یا Store می‌آید)
const allAnnouncements = ref([
  {
    id: 1,
    title: "فراهم آوردن محیطی جهت بیان دیدگاه های متفاوت کشورها در خصوص سیاست ها و قوانین مرتبط با اینترنت",
    img: "/images/img3.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    department: "اداره تحول",
    description:
      "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون فرآیندهای اعطای مجوز به شرکت های ارائه دهنده خدمات پیامک انبوه، تصویب ضوابط محتوایی پیام رسانی، تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.",
  },
  {
    id: 2,
    title: "دسترسی به کارشناسان و خبرگان موضوع در GAC و آیکن که سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند.",
    img: "/images/img1.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    department: "معاونت توسعه و برنامه ریزی",
    description:
      "این دسترسی سبب می شود اعضای GAC از جدیدترین نوآوری های فنی و پیشرفت های آتی در حوزه سیستم نام های دامنه اینترنت مطلع باشند. کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
  },
  {
    id: 3,
    title: "کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است",
    img: "/images/img2.png",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    department: "فناوری اطلاعات",
    description: "کارت امتیازی جدید gTLD که برای برنامه های جدید gTLDها حائز اهمیت است و به طور گسترده ای به عنوان یک پیروزی بزرگ و مدلی برای آینده، مورد ستایش قرار گرفته است.",
  },
  {
    id: 4,
    title: "تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری",
    img: "/images/img5.png",
    date: "۱۴۰۴/۰۳/۰۵",
    view: "۸۵",
    department: "مالی",
    description:
      "در این جلسه گزارشی از عملکرد کارگروه مذکور در محورهایی چون تصویب مقررات ارسال پیامک در زمان های غیرعادی و اضطراری، تصویب مقررات اجرایی تامین ایمنی و سلامت ارسال پیامک انبوه، پیاده سازی سامانه برخط نظارت پس از انتشار، راه اندازی پورتال کارگروه و ایجاد بخش دریافت گزارش های مردمی ارائه شد.",
  },
]);

// اطلاعیه انتخاب شده بر اساس ID موجود در URL
const selectedAnnouncement = computed(() => {
  return allAnnouncements.value.find((card) => card.id === Number(route.params.id));
});

// لیست سایر اطلاعیه‌ها
const otherAnnouncements = computed(() => {
  return allAnnouncements.value.filter((card) => card.id !== Number(route.params.id));
});

// تابع برای تغییر اطلاعیه فعال از لیست سمت راست
function selectAnnouncement(id) {
  router.push({ name: "AnnouncementDetails", params: { id } });
}

// --- بخش ۴: Watcher ها برای همگام‌سازی ---

// همگام‌سازی اسکرول Thumbnail ها با اسلاید فعال Carousel
watch(currentSlide, (newIndex) => {
  const activeThumb = thumbnailRefs.value[newIndex];
  if (activeThumb) {
    activeThumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
});

// بازسازی لیست عکس‌های Carousel با تغییر اطلاعیه
watch(
  selectedAnnouncement,
  (newAnnouncement) => {
    if (newAnnouncement) {
      thumbnailRefs.value = []; // آرایه رف‌ها را خالی کن
      carouselImages.value = generateCarouselImages(newAnnouncement.img);
      currentSlide.value = 0;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="bg-white h-full rounded-lg p-6">
    <div v-if="selectedAnnouncement" class="grid grid-cols-12 gap-8">
      <div :class="layout === 'compact' ? 'col-span-9' : 'col-span-8'">
        <div class="flex flex-col gap-5">
          <div v-if="layout !== 'compact'">
            <v-carousel
              next-icon="mdi-chevron-left"
              prev-icon="mdi-chevron-right"
              :reverse="true"
              v-model="currentSlide"
              height="400"
              show-arrows="hover"
              hide-delimiters
              hide-delimiter-background
              class="rounded-2xl shadow-lg">
              <v-carousel-item v-for="(image, index) in carouselImages" :key="index" :src="image" cover></v-carousel-item>
            </v-carousel>

            <div v-if="layout === 'grid'" class="relative z-10 -mt-20 px-5">
              <div
                ref="thumbnailContainer"
                @mousedown="startDrag"
                @mouseleave="stopDrag"
                @mouseup="stopDrag"
                @mousemove="onDrag"
                class="flex items-center gap-3 overflow-x-auto pb-3 cursor-grab active:cursor-grabbing scrollbar-hide">
                <div
                  v-for="(image, index) in carouselImages"
                  :key="`thumb-${index}`"
                  :ref="
                    (el) => {
                      if (el) thumbnailRefs[index] = el;
                    }
                  "
                  @click="currentSlide = index"
                  class="flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 select-none"
                  :class="{
                    'ring-4 ring-white shadow-2xl scale-110': currentSlide === index,
                    'opacity-60 hover:opacity-100': currentSlide !== index,
                  }">
                  <img :src="image" class="object-cover pointer-events-none" :class="{ 'w-28 h-24': currentSlide === index, 'w-16 h-16': currentSlide !== index }" />
                </div>
              </div>
            </div>
          </div>

          <div v-if="layout === 'compact'" class="grid grid-cols-12 gap-2">
            <div class="col-span-2">
              <div class="h-[400px] pe-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div class="grid grid-cols-2 gap-2">
                  <div
                    v-for="(image, index) in carouselImages"
                    :key="`thumb-compact-${index}`"
                    :ref="
                      (el) => {
                        if (el) thumbnailRefs[index] = el;
                      }
                    "
                    @click="currentSlide = index"
                    class="cursor-pointer rounded-lg overflow-hidden transition-all duration-300 aspect-square"
                    :class="{
                      'ring-4 ring-blue-500 shadow-xl': currentSlide === index,
                      'opacity-50 hover:opacity-100': currentSlide !== index,
                    }">
                    <img :src="image" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-9">
              <v-carousel
                next-icon="mdi-chevron-left"
                prev-icon="mdi-chevron-right"
                :reverse="true"
                v-model="currentSlide"
                height="400"
                show-arrows="hover"
                hide-delimiters
                hide-delimiter-background
                class="rounded-2xl shadow-lg">
                <v-carousel-item v-for="(image, index) in carouselImages" :key="index" :src="image" cover></v-carousel-item>
              </v-carousel>
            </div>
          </div>

          <h1 class="text-2xl font-extrabold text-gray-800 leading-tight mt-5">
            {{ selectedAnnouncement.title }}
          </h1>

          <div class="flex items-center gap-x-6 text-sm text-gray-500 border-y border-gray-200 py-3">
            <div class="flex items-center gap-x-2">
              <v-icon class="!text-xl">mdi-domain</v-icon>
              <span class="font-semibold">{{ selectedAnnouncement.department }}</span>
            </div>
            <div class="flex items-center gap-x-2">
              <v-icon class="!text-xl">mdi-calendar-clock</v-icon>
              <span>{{ selectedAnnouncement.date }}</span>
            </div>
            <div class="flex items-center gap-x-2">
              <v-icon class="!text-xl">mdi-eye-outline</v-icon>
              <span>{{ selectedAnnouncement.view }} بازدید</span>
            </div>
          </div>

          <p class="text-sm text-gray-700 leading-loose whitespace-pre-line">
            {{ selectedAnnouncement.description }}
          </p>
        </div>
      </div>

      <div :class="layout === 'compact' ? 'col-span-3' : 'col-span-4'">
        <div class="sticky top-6 flex flex-col gap-2">
          <h2 class="text-xl font-bold text-gray-800 pb-2 border-b-2 border-blue-500">سایر اطلاعیه‌ها</h2>
          <div
            v-for="card in otherAnnouncements"
            :key="card.id"
            @click="selectAnnouncement(card.id)"
            class="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
            <img :src="card.img" :alt="card.title" class="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
            <div class="flex flex-col">
              <p class="text-xs text-gray-500">{{ card.department }}</p>
              <h3 class="font-semibold text-gray-800 mt-1 line-clamp-2">
                {{ card.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold">اطلاعیه مورد نظر یافت نشد!</h2>
      <button @click="router.push('/announcement')" class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">بازگشت به لیست اطلاعیه‌ها</button>
    </div>
  </div>
</template>

<style scoped>
/* کلاس کمکی برای حذف اسکرول‌بار در مرورگرهای مختلف */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
