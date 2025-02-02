import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  name: { type: "string", required: true },
  to_user: { type: "string", required: true },
  oid: { type: "string", required: true },
  message: { type: "string", required: true },
  amount: { type: "number", required: true },
  createdAt: { type: "string", required: true },
  updatedAt: { type: "string", required: true },
  done: { type: Boolean, default: false },
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);
