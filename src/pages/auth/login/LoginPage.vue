<template>
  <div class="flex h-full overflow-hidden">
    <div class="w-[40%] flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <img
          src="@/assets/images/travel-white.png"
          alt="logo"
          class="w-40 h-40 animate__animated animate__zoomInDown"
        />
        <p
          class="text-primary animate__animated animate__zoomInDown text-4xl bg-white mt-2 px-4 py-1"
          style="animation-delay: 0.5s"
        >
          TripTravel
        </p>
      </div>
    </div>
    <div class="w-[60%] relative flex justify-end items-center">
      <img
        class="object-cover object-left h-full absolute right-0 animate__animated animate__slideInRight z-0"
        src="@/assets/images/clouds.png"
        alt="clouds"
      />
      <LoginForm
        class="animate__animated animate__fadeIn relative z-1"
        style="animation-delay: 0.5s"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import LoginForm from "@/components/pages/auth/login/LoginForm.vue";
</script>

<style scoped></style>
