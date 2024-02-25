export const UserService = {
  async getUser(id) {
    return await fetch(`https://fakestoreapi.com/users?limit=${id}`).then((res) => res.json());
  },
  async getAllUsers() {
    return await fetch("https://fakestoreapi.com/users").then((res) => res.json());
  },
};
