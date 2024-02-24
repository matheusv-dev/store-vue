
<template>
  <div class="flex flex-col gap-5 py-3">
    <div class="flex gap-3 items-center">
      <v-icon name="fa-boxes" scale="2" />
      <h1 class="text-2xl"> Produtos</h1>
    </div>
    <div class="">
      <DataTable :value="products" stripedRows tableStyle="min-width: 50rem" class="rounded-lg p-5 bg-gray-800">
        <Column header="Imagem" field="image">
          <template #body="item">
            <img :src="`${item.data.image}`" :alt="item.data.image" class="border-round rounded" style="width: 64px" />
          </template>
        </Column>
        <Column field="price" header="Preço" sortable>
          <template #body="item">
            {{ formatCurrency(item.data.price) }}
          </template>
        </Column>
        <Column field="title" header="Produto" sortable></Column>
        <Column field="description" header="Descrição" sortable></Column>
        <Column field="category" header="Categoria" sortable></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
import { ProductService } from '../service/ProductService';

export default {
  data() {
    return {
      products: null
    };
  },
  mounted() {
    ProductService.getProducts().then((data) => {
      console.log(data)
      return this.products = data
    });
  },
  methods: {
    formatCurrency(value) {
      if (value)
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRl' });
      return;
    },
  }
};
</script>
