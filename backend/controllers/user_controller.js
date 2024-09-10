import { DogModel } from "../models/dog_model.js";
import { dogSchema } from "../schema/dog_schema.js";

export const getHomePage = (req, res) => {
  res.send("server is ready");
};

export const getDogs = (req, res) => {};

export const addDog = async (req, res) => {
  const { error, value } = dogSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const newDog = await DogModel.create(value);

    await newDog.save();

    res.status(201).json({ success: true, data: newDog });
  } catch (error) {
    console.error("Error in adding dog:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    await DogModel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Dog Extinguished" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Dog not found" });
  }
};
