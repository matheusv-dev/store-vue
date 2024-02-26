import { ProductService } from "./ProductService";
import { UserService } from "./UserService";

export const SoldService = {
  async getSoldCarts() {
    return await fetch("https://fakestoreapi.com/carts").then((res) => res.json());
  },
  async getSoldCartsByYear(year) {
    return await fetch(`https://fakestoreapi.com/carts?startdate=${year}-01-01&enddate=${year + 1}-12-31`).then((res) => res.json());
  },
  async getListSoldCarts(cart) {
    const Carts = cart
    const Users = await UserService.getAllUsers();
    const Products = await ProductService.getProducts();

    Carts.forEach((item, index) => {
      const user = Users.find((usr) => usr.id === item.userId);
      Carts[index].userInfo = user;

      let valueSold = 0;
      item.products.forEach((prod, ind) => {
        const product = Products.find((p) => p.id === prod.productId);
        Carts[index].products[ind].product = product;

        valueSold += prod.quantity * product.price;
      });

      Carts[index].totalSold = valueSold;
    });

    return Carts;
  },

  async getListSoldFull() {
    const Carts = await this.getSoldCarts();
    return this.getListSoldCarts(Carts);
  },
  async getListSoldByYear(year) {
    const Carts = await this.getSoldCartsByYear(year);
    return this.getListSoldCarts(Carts);
  },
};
