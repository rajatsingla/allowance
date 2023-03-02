module.exports = {
  food: {
    path: "./templates/food.handlebars",
    context: {
      restaurant: {
        name: "Vaishaali",
	address: "Fergusson College Rd, Ganeshwadi, Shivajinagar, Pune, Maharashtra 411005"
      },
      customer: {
        name: "Rajat Singla",
        address: "c903, Equilife homes, Mahalunge, Pune, Maharashtra, 411045"
      },
      order: {
        lines: 3,
        number: `0${Math.random().toString().substring(2, 13)}`,
        package: 300.00,
        discount: 200.00,
        lineItems: [
          {
            name: 'Egg Paaneer Role',
            quantity: 10,
            price: 200,
            total: 2000.00
          },
          {
            name: 'Lime Soda',
            quantity: 13,
            price: 100,
            total: 1300.00
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
          },
          {
            name: 'Imperial Cheese Burger',
            quantity: 10,
            price: 150,
            total: 1500.00
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

  book: {
    path: "./templates/book.handlebars",
    context: {
      customer: {
        name: "Rajat Singla",
        address: "c903, Equilife homes, Mahalunge, Pune, Maharashtra, 411045"
      },
      order: {
        lines: 2,
        number: `0${Math.random().toString().substring(2, 13)}`,
        lineItems: [
          {
            name: 'To Kill a Mockingbird by Harper Lee',
            quantity: 2,
            seller: "RAREWAVES-IMPORTS",
            price: 1400.00,
            total: 2800.00
          },
          {
            name: 'The Great Gatsby by F. Scott Fitzgerald',
            quantity: 1,
            seller: "RAREWAVES-IMPORTS",
            price: 1600.00,
            total: 1600.00
          },
          {
            name: 'The Catcher in the Rye by J.D. Salinger',
            quantity: 3,
            seller: "Atlantic Publishers and Distributors",
            price: 514.00,
            total: 1542.00
          },
          {
            name: 'C++ Programming Language| Fourth Edition| By Pearson',
            quantity: 2,
            seller: "Cocoblu Retail",
            price: 1020.00,
            total: 2040.00
          },
          {
            name: 'Expert Python Programming: Master advanced programming concepts, 4th Edition',
            quantity: 1,
            seller: "Repro Books-On-Demand",
            price: 2957.00,
            total: 2957.00
          },
          {
            name: 'FLUTTER A Complete Book for Mobile App Development',
            quantity: 2,
            seller: "VIHU Livre",
            price: 700.00,
            total: 1400.00
          },
          {
            name: 'The Psychology of Money Hardcover',
            quantity: 4,
            seller: "Cocoblu Retail",
            price: 380.00,
            total: 1520.00
          },
          {
            name: 'Doglapan: The Hard Truth about Life and Start-Ups',
            quantity: 3,
            seller: "uRead-Store",
            price: 542.00,
            total: 1626.00
          },
          {
            name: 'The Richest Man In Babylon Mass Market Paperback',
            quantity: 1,
            seller: "Cocoblu Retail",
            price: 2841.00,
            total: 2841.00
          },
          {
            name: 'How to Win Friends and Influence People Mass Market Paperback',
            quantity: 2,
            seller: "Cocoblu Retail",
            price: 844.00,
            total: 1688.00
          },
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

  internet: {
    path: "./templates/internet.handlebars",
    context: {
      customer: {
        name: "Rajat Singla",
        address: "c903, Equilife homes, Mahalunge, Pune, Maharashtra, 411045",
        phone: 123456789,
        email: 'rajat@gmail.com',
        account: 969367,
      },
      order: {
        lines: 1,
        number: `0${Math.random().toString().substring(2, 13)}`,
        lineItems: [
          {
            quantity: 1,
            subCharges: 900,
            cpeCharges: 40,
            amount: 940,
            serviceTax: 112.80,
            cess: 28.20,
            price: 1081,
            lateAmount: 1150.00
          },
        ],
        // to be calculated
        date: null,
        total: 0,
        subtotal: 0,
        tax: 0,
        // end
      }
    },
  }
};
