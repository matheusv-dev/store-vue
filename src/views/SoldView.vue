
<template>
  <div class="flex flex-col gap-5 py-3 max-w-screen-x">
    <div class="flex gap-3 items-center">
      <v-icon name="fa-cart-arrow-down" scale="2" />
      <h1 class="text-2xl">Histórico de vendas</h1>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <Cart :cartList="carts" />
    </div>
  </div>
</template>

<script>
import { SoldService } from '../service/SoldService';
import Cart from '../components/Cart.vue'

export default {
  data() {
    return {
      carts: null
    };
  },
  components: { Cart },
  mounted() {
    SoldService.getListSoldCarts().then((data) => this.carts = data);
  },

};
</script>
