const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation");

  // use `await mongoose.connect('mongodb://Order:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

// let addOrder = async () => {
//     let res = await Order.insertMany([
//         {item:"Samosa", price: 12},
//         {item:"Chips", price: 10},
//         {item:"Chocolate", price: 40},]
//     )

//     console.log(res);

// }

// addOrder();

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer && customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log("Deleted Orders:", res);
  }
});


const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async (cus, odd) => {
  let c1 = new Customer(cus);

  let o1 = new Order(odd);

  c1.orders.push(o1);

  let res = await o1.save();
  console.log("New coustomer Added");

  console.log(res);

  res = await c1.save();

  console.log(res);
};
let c = {
  name: "Ravi Kisan",
};

let ord = {
  item: "Pizza",
  price: 250,
};
// addCustomer(c, ord);

const delCus = async () => {
  let data = await Customer.findByIdAndDelete("688443eb206fda2992d3d1e6");

  console.log("Data is delete: ", data);
};

delCus();
