<template>
  <header class="w-full bg-gray-800" id="nav">
    <nav class="relative mx-auto flex h-14 w-full max-w-screen-xl flex-row items-center   md:sticky ">
      <NavLink url='/' title="Dashboard" />
      <NavLink url='/products' title="Produtos" />
      <NavLink url='/summary' title="Resumo" />
      <NavLink url='/sold' title="Vendas" />
    </nav>
  </header>
  <div class="mx-auto w-full max-w-screen-xl dark">
    <router-view />
  </div>
</template>

<script>

import NavLink from './components/NavLink.vue';

export default {
  components: {
    NavLink
  },
}
</script>