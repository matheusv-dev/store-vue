export const ProductService = {
  async getProducts() {
    return await fetch("https://fakestoreapi.com/products").then((res) => res.json());
  },

  async getCarts() {
    return await fetch("https://fakestoreapi.com/carts").then((res) => res.json());
  },

  async getProductsMostRating() {
    const products = await this.getProducts();

    const bigRating = Math.max(
      ...products.map((o) => {
        return o.rating.rate;
      })
    );

    let lastRating = 0;
    let betterRating = [];

    const biggerRates = products.filter((item) => item.rating.rate == bigRating);

    biggerRates.forEach((item) => {
      let wasBigger = lastRating < item.rating.count;

      betterRating = wasBigger ? item : betterRating;
      lastRating = wasBigger ? item.rating.count : lastRating;
    });

    betterRating.price = betterRating.price.toLocaleString("pt-BR", { style: "currency", currency: "BRl" });

    return { product: betterRating, rating: betterRating.rating };
  },

  async getProductLowestRate() {
    const products = await this.getProducts();

    const lowestRate = Math.min(
      ...products.map((o) => {
        return o.rating.rate;
      })
    );

    let lastRating = 0;
    let lowestRating = [];

    const lowestRates = products.filter((item) => item.rating.rate == lowestRate);

    lowestRates.forEach((item) => {
      let wasLower = lastRating > item.rating.count;

      lowestRating = wasLower || lastRating === 0 ? item : lowestRating;
      lastRating = wasLower ? item.rating.count : lastRating;
    });

    lowestRating.price = lowestRating.price.toLocaleString("pt-BR", { style: "currency", currency: "BRl" });

    return { product: lowestRating, rating: lowestRating.rating };
  },

  async getTotalValueProducts() {
    const products = await this.getProducts();
    let totalvalue = 0;
    let totalProducts = products.length;

    products.forEach((item) => {
      totalvalue += item.price;
    });

    totalvalue = totalvalue.toLocaleString("pt-BR", { style: "currency", currency: "BRl" });

    return { totalvalue, totalProducts };
  },

  async getTotalSoldProducts() {
    const carts = await this.getCarts();
    const products = await this.getProducts();

    let totalProducts = 0;
    let totalvalue = 0;
    carts.forEach((cart) => {
      cart.products.forEach((list) => {
        const productFiltered = products.find((product) => product.id === list.productId);

        totalvalue += list.quantity * productFiltered.price;
        totalProducts += list.quantity;
      });
    });

    totalvalue = totalvalue.toLocaleString("pt-BR", { style: "currency", currency: "BRl" });
    return { totalvalue, totalProducts };
  },
};
