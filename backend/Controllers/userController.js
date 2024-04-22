import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
      sucess: true,
      message: "Successfully updated user",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Failed to update user",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      sucess: true,
      message: "Successfully deleted user",
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Failed to delete user",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      sucess: true,
      message: "Successfully found user",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: "No user found",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      sucess: true,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: "No user found",
    });
  }
};
