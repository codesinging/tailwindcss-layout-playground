<template>
  <div class="container mx-auto">
    <h1 class="text-center text-3xl font-bold py-3">
      TailwindCSS Layout Playground
    </h1>

    <div class="border rounded p-4">
      <div class="input-group">
        <label class="input-group-label w-1/4">Items count</label>
        <input
          type="text"
          v-model.number="itemsCount"
          class="input-group-input"
        />
      </div>

      <div class="input-group mt-3">
        <label class="input-group-label w-1/4">Container classes</label>
        <input
          type="text"
          v-model="containerCss"
          class="input-group-input"
        />
      </div>

      <div class="input-group mt-3">
        <label class="input-group-label w-1/4">Common item classes</label>
        <input
          type="text"
          v-model="commonItemCss"
          class="input-group-input"
        />
      </div>

      <div class="input-group mt-3" v-for="n in itemsCount" :key="n">
        <label class="input-group-label w-1/4">Item {{ n }} classes</label>
        <input
          type="text"
          v-model="itemCss[n-1]"
          class="input-group-input"
        />
      </div>

    </div>
  </div>

  <div class="container mx-auto bg-gray-200 mt-4">
    <div :class="containerCss">
      <div v-for="n in itemsCount" :key="n" :class="[commonItemCss, itemCss[n-1]]">{{ n }}</div>
    </div>
  </div>

  <div class="container mx-auto mt-10">
      <div class="flex justify-center space-x-4 border-t py-4">
        <a href="https://tailwindchina.com" target="_blank" class="text-gray-500 hover:text-gray-600 hover:underline">Tailwind CSS 中文网</a>
        <a href="https://docs.tailwindchina.com" target="_blank" class="text-gray-500 hover:text-gray-600 hover:underline">Tailwind CSS 中文文档</a>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerCss: "grid grid-cols-3 gap-4",
      commonItemCss: "bg-blue-500 text-white flex items-center justify-center w-10 h-10",
      itemsCount: 6,
      itemCss: [],
    };
  },
};
</script>

<style>
</style>