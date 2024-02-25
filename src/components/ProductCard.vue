<template>
  <div
    class="rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 flex ">
    <img class="rounded-t-lg max-h-36 aspect-square object-contain object-center bg-white" :src="properties.image"
      alt="" />
    <div class="py-3 px-6  flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <v-icon :name="icon" scale="1" :fill="iconColor" />
        <h2 class="relative"> {{ cardTitle }} <span>({{ rating.rate }})</span> </h2>
      </div>
      <h5 class="text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {{ properties.title }}
      </h5>
      <p class="text-base text-neutral-600 dark:text-neutral-200 mt-auto">
        {{ properties.price }}
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ProductCard",
  props: {
    properties: Object,
    rating: Object,
    icon: String,
    iconColor: String,
    cardTitle: String,
  },
  setup(props) {
    console.log(props)
  }
}
</script>