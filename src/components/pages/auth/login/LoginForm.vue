<template>
  <div class="w-[calc(100%-8rem)] px-4 flex flex-col items-center">
    <div class="inline-flex w-fit gap-x-2 items-center justify-center p-1">
      <h1 class="text-black-400 font-bold text-[24px] text-center">
        Login here now
      </h1>
      <img
        class="w-[28px] h-[28px]"
        src="@/assets/images/login.gif"
        alt="login"
      />
    </div>
    <span class="text-[8px]"
      >Embark on a Seamless Journey: Securely Access Your Travel Adventure</span
    >
    <div class="w-10/12">
      <span
        class="cursor-pointer text-white hover:translate-y-0 transition-all translate-y-[20px] inline-block ml-4 bg-primary px-3 py-1.5 rounded-t-md text-xs"
      >
        Action:
      </span>
      <div
        class="relative z-10 w-full rounded-xl bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px] px-6 py-5"
      >
        <div>
          <span class="text-xs text-black-400">Email:</span>
          <TInputText placeholder="Email" />
        </div>
        <div class="mt-2">
          <span class="text-xs text-black-400">Password:</span>
          <TInputText placeholder="Password" />
        </div>
        <Button
          raised
          icon="pi pi-check"
          class="w-full mt-4 text-xs flex items-center gap-x-2"
          :loading="false"
          :disabled="false"
        >
          Login
          <unicon name="rocket" class="w-4 h-4 fill-white" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TInputText from "@/components/ui/TInputText.vue";
</script>

<style scoped></style>
