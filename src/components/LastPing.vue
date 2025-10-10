<template>
  <div class="w-full h-28 flex text-lg font-semibold border-2 border-neutral-300 rounded-lg justify-center items-center animated-bg">
    Pings Component
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes colorChange {
  0% {
    background-color: #bfccfc; /* سبز خیلی ملایم */
  }
  33% {
    background-color: #e8c6f9; /* قرمز خیلی ملایم */
  }
  66% {
    background-color: #ffffc4; /* زرد خیلی ملایم */
  }
  100% {
    background-color: #fbc9c9; /* برگشت به سبز */
  }
}

.animated-bg {
  animation: colorChange 4s ease-in-out infinite;
}
</style>