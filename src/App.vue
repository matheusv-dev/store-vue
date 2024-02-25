<template>
  <header class="w-full bg-gray-800" id="nav">
    <nav class="relative mx-auto flex h-14 w-full max-w-screen-xl flex-row items-center   md:sticky ">
      <router-link
        class=" cursor-pointer rounded-xl px-2 py-1 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white  hover:opacity-90 sm:px-3"
        to="/">Dashboard</router-link>
      <router-link
        class=" cursor-pointer rounded-xl px-2 py-1 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white  hover:opacity-90 sm:px-3"
        to="/products">Produtos</router-link>
      <router-link
        class=" cursor-pointer rounded-xl px-2 py-1 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white  hover:opacity-90 sm:px-3"
        to="/summary">Resumo</router-link>
      <router-link
        class=" cursor-pointer rounded-xl px-2 py-1 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white  hover:opacity-90 sm:px-3"
        to="/graph">Gráfico</router-link>
    </nav>
  </header>
  <div class="mx-auto w-full max-w-screen-xl  false">
    <router-view />
  </div>
</template>

<script>

</script>

