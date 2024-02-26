<template>
  <router-link
    :class="`cursor-pointer rounded-xl px-2 py-1 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white  hover:opacity-90 sm:px-3`"
    :to="url" active-class="active">{{ title }}</router-link>
</template>

<script>
export default {
  name: "NavLink",
  data() {
    return {
      active: false,
    }
  },
  props: {
    url: String,
    title: String,
  },
}
</script>

