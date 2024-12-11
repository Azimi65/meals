<template>
  <a :href="href" class="bg-red-500 hover:bg-red-600 transition-colors border-2 border-red-600 rounded px-3 py-2 text-white" target="_blank"><slot></slot></a>
</template>

<script setup>
defineProps({
    href:'string'
})
</script>

<style>

</style>