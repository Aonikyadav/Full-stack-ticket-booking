import mongoose, { Schema } from "mongoose";

const showSchema = new Schema(
  {
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    showDateTime: { type: Date, required: true },
    showPrice: { type: Number, required: true },
    occupiedSeats: { type: Object, default: {} },
  },
  { minimize: false }
);

const Show = mongoose.model("Show", showSchema);

export default Show;
