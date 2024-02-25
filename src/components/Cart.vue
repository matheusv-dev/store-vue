<template>
  <Accordion v-for="cart in cartList" class="">
    <AccordionTab :key="cart.date"
      :header="'Compra realizada em: ' + formatData(cart.date) + ' - Usuário : ' + cart.userInfo.username">
      <div>
        <table class="bg-gray-800">
          <thead>
            <tr>
              <th class="p-2 border border-gray-600 text-left">Produto</th>
              <th class="p-2 border border-gray-600">Quantidade</th>
              <th class="p-2 border border-gray-600">Valor</th>
              <th class="p-2 border border-gray-600 w-28 ">Valor total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prod in cart.products">
              <td class="p-2 border border-gray-600">{{ prod.product.title }}</td>
              <td class="p-2 border border-gray-600 text-center">{{ prod.quantity }}</td>
              <td class="p-2 border border-gray-600">{{ formatCurrency(prod.product.price) }}</td>
              <td class="p-2 border border-gray-600 text-center">{{ formatCurrency(prod.quantity * prod.product.price)
              }}</td>
            </tr>
            <tr>
              <td colspan="3" class="p-2 border border-gray-600 text-right bg-neutral-800">Total</td>
              <td class="p-2 border border-gray-600 text-center bg-neutral-800">{{ formatCurrency(cart.totalSold) }}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </AccordionTab>
  </Accordion>
</template>

<script>

export default {
  name: "Cart",
  props: {
    cartList: Object,
  },
  methods: {
    formatCurrency(value) {
      if (value)
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRl' });
      return;
    },
    formatData(value) {
      if (value) {
        const date = new Date(value);
        console.log();
        return date.toLocaleString('pt-BR');
      }
      return;
    }
  }
}
</script>