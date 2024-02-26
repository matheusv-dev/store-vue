
<template>
  <div class="flex flex-col gap-5 py-3">
    <div class="flex gap-3 items-center">
      <v-icon name="fa-boxes" scale="2" />
      <h1 class="text-2xl"> Resumo</h1>
    </div>

    <div class="flex gap-3">
      <InfoCard :properties="totalSumProduct" icon="fa-layer-group" icon-color="cornflowerblue"
        card-title="Valor total de produtos em estoque" />

      <InfoCard :properties="totalSoldProduct" icon="ri-money-dollar-box-fill" icon-color="limegreen"
        card-title="Total vendido periodo" />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <ProductCard key="xd" :properties="mostRatedProduct.product" :rating="mostRatedProduct.rating" icon="fa-star"
        icon-color="yellow" card-title="Produto com maior avaliação" />

      <ProductCard key="xd" :properties="lowestRatedProduct.product" :rating="lowestRatedProduct.rating"
        icon="bi-graph-down-arrow" icon-color="lightsalmon" card-title="Produto com pior avaliação" />
    </div>
  </div>
</template>

<script>
import { ProductService } from '../service/ProductService';
import ProductCard from '../components/ProductCard.vue';
import InfoCard from '../components/InfoCard.vue'

export default {
  data() {
    return {
      mostRatedProduct: {
        product: {},
        rating: {}
      },
      lowestRatedProduct: {
        product: {},
        rating: {}
      },
      totalSumProduct: {},
      totalSoldProduct: {},
    };
  },
  components: {
    ProductCard, InfoCard
  },
  mounted() {
    ProductService.getProductsMostRating().then((data) => {
      this.mostRatedProduct.product = data.product
      this.mostRatedProduct.rating = data.rating
    });
    ProductService.getProductLowestRate().then((data) => {
      this.lowestRatedProduct.product = data.product
      this.lowestRatedProduct.rating = data.rating
    });
    ProductService.getTotalValueProducts().then((data) => { return this.totalSumProduct = data });
    ProductService.getTotalSoldProducts().then((data) => { return this.totalSoldProduct = data });
  }
};
</script>
