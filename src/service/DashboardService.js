import { SoldService } from "./SoldService";

export const DashboardService = {
  async getDashboardValues() {
    const soldList = await SoldService.getListSoldFull();

    const Months = [
      ...new Set(
        soldList.map((x) => {
          return this.getMonthFromData(x.date);
        })
      ),
    ];

    let byMonth = [];
    let productsByMonth = [];
    Months.forEach((month) => {
      const productsFiltered = soldList.filter((item) => month === this.getMonthFromData(item.date));
      productsByMonth.push({ month, products: productsFiltered });

      let totalMonth = 0;

      productsFiltered.forEach((e) => {
        totalMonth += e.totalSold;
      });

      byMonth.push({ totalMonth, month });
    });

    return {
      total: byMonth,
      productsByMonth,
      Months,
    };
  },
  getMes(data) {
    data = data.length === 2 ? data.replace("0", "") : data;
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return meses[data];
  },
  getMonthFromData(data) {
    const date = data.split("T");
    const dates = date[0].split("-");

    return `${this.getMes(dates[1])}/${dates[0]}`;
  },
};
