module.exports = {
  getShortDate: (date) => {
    const d = new Date(date);
    return `${d.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  },
  getDate: (mmyyyy) => {
    const d = new Date(
      mmyyyy.slice(2),
      parseInt(mmyyyy.slice(0, 2)) - 1,
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
      .slice(0, order.lines);
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
