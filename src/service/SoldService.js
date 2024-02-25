import { ProductService } from "./ProductService";
import { UserService } from "./UserService";

export const SoldService = {
  async getSoldCarts() {
    return await fetch("https://fakestoreapi.com/carts").then((res) => res.json());
  },

  async getListSoldCarts() {
    const Carts = await this.getSoldCarts();
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
};
