module.exports = {
  getDate: (mmyyyy) => {
    const d = new Date(
      mmyyyy.slice(2),
      mmyyyy.slice(0, 2),
      parseInt(Math.random() * 29),
      parseInt(Math.random() * 10) + 12,
      parseInt(Math.random() * 60)
    );
    return `${d.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}  ${d.toLocaleDateString("en-IN", { timeStyle: "short" })}`;
  },

  calculatePrice: (order) => {
    const lineItems = [...order.lineItems]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    let total = 0;
    lineItems.forEach((item) => {
      total += item.quantity * item.price;
    });

    order.lineItems = lineItems;
    order.total = total;
    order.tax = total * 0.1;
    order.subtotal = order.total + order.tax + order.package - order.discount;
    return order;
  },
};
