<template>
  <InputText
    id="username"
    v-model="modelValue"
    class="text-xs w-full"
    :placeholder="placeholder"
    autocomplete="off"
  />
</template>

<script setup lang="ts">
const modelValue = defineModel({
  type: String,
  default: "",
});
defineProps({
  placeholder: {
    type: String,
    default: "Label",
  },
});
</script>

<style scoped></style>
