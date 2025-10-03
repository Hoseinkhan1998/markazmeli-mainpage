<template>
  <div class="w-full h-28 flex text-lg font-semibold border-2 border-neutral-300 rounded-lg justify-center items-center animated-bg">
    Dashboards Component
  </div>
</template>

<script>
export default {

}
</script>

<style>
@keyframes colorChange {
  0% {
    background-color: #ccf8cc; /* سبز خیلی ملایم */
  }
  33% {
    background-color: #f9d0cb; /* قرمز خیلی ملایم */
  }
  66% {
    background-color: #ffffc4; /* زرد خیلی ملایم */
  }
  100% {
    background-color: #dcfddc; /* برگشت به سبز */
  }
}

.animated-bg {
  animation: colorChange 4s ease-in-out infinite;
}
</style>