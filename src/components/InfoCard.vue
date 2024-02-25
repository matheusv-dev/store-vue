<template>
  <div
    class="rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 flex ">
    <div class="p-3 flex gap-2">
      <v-icon :name="icon" scale="4" :fill="iconColor" />
      <div class="flex flex-col">
        <h2 class="relative text-lg font-medium"> {{ cardTitle }}</h2>
        <div class="leading-tight text-neutral-800 dark:text-neutral-50 flex flex-col">
          <span>
            Produtos: {{ properties.totalProducts }}
          </span>
          <span>
            Total: {{ properties.totalvalue }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "InfoCard",
  props: {
    properties: Object,
    icon: String,
    iconColor: String,
    cardTitle: String,
  },

}
</script>