module.exports = {
  food: {
    path: "./templates/food.handlebars",
    context: {
      restaurant: {
        name: "Huber & Holly",
        address: "Hinjewadi road near pakhare wasti wakad pune pcmc 25",
      },
      customer: {
        name: "Rajat Singla",
        address: "103 Room Baner Road, Baner, Pune, Maharashtra, India Pune"
      },
      order: {
        number: `0${Math.random().toString().substring(2, 13)}`,
        package: 300.00,
        discount: 200.00,
        lineItems: [
          {
            name: 'Egg Paaneer role',
            quantity: 10,
            price: 200,
            total: 2000.00
          },
          {
            name: 'Sprite 1L',
            quantity: 5,
            price: 250,
            total: 1250.00
          },
          {
            name: 'Oreo Cookie Blizzard Cake [2450 Gms]',
            quantity: 1,
            price: 6700,
            total: 6700.00
          },
          {
            name: 'Spaghe all\'Arrabbiata Pasta',
            quantity: 10,
            price: 600,
            total: 6000.00
          },
          {
            name: 'Paaneer Tikka',
            quantity: 15,
            price: 350,
            total: 5250.00
          },
          {
            name: 'Farmhouse Pizza',
            quantity: 5,
            price: 850,
            total: 4250.00
          }
        ],
        // to be calculated
        date: null,
        total: 0,
        subtotal: 0,
        tax: 0,
        // end
      }
    },
  },
};
