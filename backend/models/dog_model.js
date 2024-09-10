import mongoose, { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const dogSchema = new Schema(
  {
    dogBreed: { type: String },
    weight: { type: String },
    image: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

dogSchema.plugin(toJSON);

export const DogModel = model("Dog", dogSchema);
