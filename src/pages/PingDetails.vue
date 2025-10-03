<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRoute, RouterLink } from "vue-router";

const allVideos = ref([
  {
    id: 1,
    title: "آپارات شورتس دنیای بی‌پایان ویدیوهای کوتاه",
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
    previewSrc: "/images/video1.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    count: "۱۱",
    like: "30",
  },
  {
    id: 2,
    title: "چطور ویدئوهامون رو در آپارات ویرایش کنیم؟",
    poster: "https://static.cdn.asset.aparat.cloud/avt/48483869-5606-l__8095.jpg?width=700&quality=90&secret=uHujqkbLYcJgKAIGGs65fg",
    previewSrc: "/images/video3.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    count: "۱۲",
    like: "49",
  },
  {
    id: 3,
    title: "سرگرمی و آموزش برای تمام خانواده با اپ اندروید تی‌وی آپارات",
    poster: "https://static.cdn.asset.aparat.cloud/avt/64383485-6308-l__1414.jpg?width=700&quality=90&secret=IDojmB0q2o1n1iWBy39pTg",
    previewSrc: "/images/video2.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    count: "۱۳",
    like: "66",
  },
  {
    id: 4,
    title: "آپارات شورتس دنیای بی‌پایان ویدیوهای کوتاه",
    poster: "https://static.cdn.asset.aparat.cloud/avt/66474462-2460-l__6120.jpg?width=700&quality=90&secret=XIWyo9bRghH7QJmKkZ0wvg",
    previewSrc: "/images/video1.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۱۰",
    count: "۱۴",
    like: "30",
  },
  {
    id: 5,
    title: "چطور ویدئوهامون رو در آپارات ویرایش کنیم؟",
    poster: "https://static.cdn.asset.aparat.cloud/avt/48483869-5606-l__8095.jpg?width=700&quality=90&secret=uHujqkbLYcJgKAIGGs65fg",
    previewSrc: "/images/video3.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۲۳",
    count: "۱۵",
    like: "12",
  },
  {
    id: 6,
    title: "سرگرمی و آموزش برای تمام خانواده با اپ اندروید تی‌وی آپارات",
    poster: "https://static.cdn.asset.aparat.cloud/avt/64383485-6308-l__1414.jpg?width=700&quality=90&secret=IDojmB0q2o1n1iWBy39pTg",
    previewSrc: "/images/video2.mp4",
    date: "۱۴۰۴/۰۳/۰۱",
    view: "۹۶",
    count: "۱۶",
    like: "19",
  },
]);

const route = useRoute();
const selectedVideo = ref(null);
const isLiked = ref(false);
const currentLikes = ref(0);
const videoPlayer = ref(null);

const fetchVideoData = (id) => {
  const videoId = parseInt(id);
  selectedVideo.value = allVideos.value.find((video) => video.id === videoId);

  if (selectedVideo.value) {
    currentLikes.value = parseInt(selectedVideo.value.like);
    isLiked.value = false;
  }
  nextTick(() => {
    if (videoPlayer.value) {
      videoPlayer.value.muted = false; // به صراحت ویدیو را از حالت Mute خارج می‌کنیم
    }
  });
};

// وقتی کامپوننت لود شد، ویدیوی مورد نظر را بر اساس ID از URL پیدا می‌کنیم
onMounted(() => {
  const videoId = parseInt(route.params.id);
  selectedVideo.value = allVideos.value.find((video) => video.id === videoId);
  if (selectedVideo.value) {
    currentLikes.value = parseInt(selectedVideo.value.like);
  }
  fetchVideoData(route.params.id);
});

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchVideoData(newId);
    }
  }
);

// لیستی از ویدیوها به جز ویدیوی فعلی برای نمایش در سایدبار
const otherVideos = computed(() => {
  if (!selectedVideo.value) return [];
  return allVideos.value.filter((video) => video.id !== selectedVideo.value.id);
});

// تابع برای لایک و آنلایک کردن
const toggleLike = () => {
  isLiked.value = !isLiked.value;
  if (isLiked.value) {
    currentLikes.value++;
  } else {
    currentLikes.value--;
  }
};

const toPersianDigits = (num) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

const comments = ref([
  {
    id: 1,
    user: "جنگیز",
    avatar: "/images/img3.png",
    time: "۱ سال پیش",
    text: "سلام ممنون میشم که جواب منو بدید من تمام نکات درآمد رو دارم رعایت میکنم و محتوایی که آپلود میکنم رو خودم ساختم ولی تصویر من داخل ویدئو نیست و فقط صدام هست آیا میتونم به در آمد برسم؟ این برام سؤال هست لطفا جواب بدید ممنون",
    likes: 0,
    isLiked: false,
  },
  { id: 2, user: "mohammad", avatar: "https://placehold.co/40x40/AEC6CF/4F4F4F?text=M", time: "۴ هفته پیش", text: "دنبال=دنبال", likes: 1, isLiked: false },
  { id: 3, user: "دنیای آموزشی", avatar: "https://placehold.co/40x40/B39EB5/FFFFFF?text=D", time: "۲ سال پیش", text: "دنبال کنی آموزش رایگان", likes: 0, isLiked: false },
]);

// متغیر برای نگهداری متن دیدگاه جدید
const newCommentText = ref("");

// تابع برای افزودن دیدگاه جدید
const addComment = () => {
  // اگر متنی نوشته نشده بود، خارج شو
  if (!newCommentText.value.trim()) return;

  const newComment = {
    id: Date.now(), // یک شناسه یکتا برای key
    user: "شما",
    avatar: "/images/profile.png",
    time: "چند لحظه پیش",
    text: newCommentText.value,
    likes: 0,
    isLiked: false,
  };

  // دیدگاه جدید را به ابتدای لیست اضافه می‌کنیم
  comments.value.unshift(newComment);

  // اینپوت را خالی می‌کنیم
  newCommentText.value = "";
};

// تابع برای لایک کردن یک دیدگاه
const toggleCommentLike = (comment) => {
  comment.isLiked = !comment.isLiked;
  if (comment.isLiked) {
    comment.likes++;
  } else {
    comment.likes--;
  }
};

const deleteComment = (commentId) => {
  comments.value = comments.value.filter((comment) => comment.id !== commentId);
};
</script>

<template>
  <div class="bg-white h-full rounded-lg p-5">
    <div v-if="selectedVideo" class="grid grid-cols-12 gap-8">
      <div class="col-span-9 pb-10">
        <div class="flex flex-col gap-4">
          <div>
            <video ref="videoPlayer" autoplay muted :src="selectedVideo.previewSrc" :poster="selectedVideo.poster" class="w-full rounded-lg bg-black" controls></video>
          </div>
          <h1 class="text-2xl font-bold text-gray-800">{{ selectedVideo.title }}</h1>
          <div class="flex justify-between items-center text-gray-600">
            <div class="flex items-center gap-4 text-sm">
              <span>پینگ شماره {{ selectedVideo.count }}</span>
              <div class="flex items-center gap-1">
                <span>{{ selectedVideo.view }}</span> <v-icon>mdi-eye-outline</v-icon>
              </div>
              <div class="flex items-center gap-1">
                <span>{{ selectedVideo.date }}</span> <v-icon>mdi-calendar-clock-outline</v-icon>
              </div>
            </div>
            <div @click="toggleLike" class="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 cursor-pointer select-none hover:bg-gray-100 transition-colors">
              <span class="font-semibold">{{ toPersianDigits(currentLikes) }}</span>
              <v-icon :class="{ 'text-red-500': isLiked }">{{ isLiked ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
            </div>
          </div>
          <hr />
          <div class="mt-8">
            <h2 class="text-lg font-bold mb-4">دیدگاه‌ها</h2>

            <div class="flex flex-col gap-4 mb-8">
              <div class="relative w-full">
                <input
                  v-model="newCommentText"
                  @keyup.enter="addComment"
                  type="text"
                  placeholder="دیدگاه خود را وارد کنید..."
                  class="w-full bg-white border-2 border-solid rounded-xl px-5 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div class="w-full flex justify-end">
                <button @click="addComment" class="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors">ارسال دیدگاه</button>
              </div>
            </div>

            <div class="flex flex-col gap-6">
              <div v-for="comment in comments" :key="comment.id" class="flex items-start gap-4">
                <img :src="comment.avatar" alt="avatar" class="w-10 h-10 rounded-full" />
                <div class="flex-1">
                  <div class="flex items-center gap-2 text-sm text-gray-500">
                    <span class="font-semibold text-gray-800">{{ comment.user }}</span>
                    <span>•</span>
                    <span>{{ comment.time }}</span>
                    <button v-if="comment.user === 'شما'" @click="deleteComment(comment.id)" class="text-gray-400 hover:text-red-500">
                      <v-icon size="small">mdi-trash-can-outline</v-icon>
                    </button>
                  </div>
                  <p class="mt-1 text-gray-700">{{ comment.text }}</p>
                  <div class="mt-2 flex items-center gap-2 text-gray-500">
                    <button @click="toggleCommentLike(comment)" class="flex items-center gap-1">
                      <v-icon :class="{ 'text-red-500': comment.isLiked }">{{ comment.isLiked ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
                      <span class="text-xs">{{ comment.likes }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3 pb-10">
        <div class="flex flex-col gap-3">
          <h3 class="font-semibold mb-2">ویدیوهای دیگر</h3>
          <RouterLink
            v-for="video in otherVideos"
            :key="video.id"
            :to="{ name: 'ping-details', params: { id: video.id } }"
            class="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-100">
            <img :src="video.poster" alt="poster" class="w-32 h-20 object-cover rounded" />
            <div class="flex flex-col">
              <p class="text-sm font-semibold line-clamp-2">{{ video.title }}</p>
              <span class="text-xs text-gray-500 mt-1">{{ video.view }} بازدید</span>
              <span class="text-xs text-gray-500 mt-1">پینگ شماره {{ video.count }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10">
      <p>ویدیویی با این شناسه یافت نشد.</p>
    </div>
  </div>
</template>

<style scoped>
/* برای نمایش صحیح عنوان ویدیوها در سایدبار */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
