import User from "../modals/userModal.js";

export const searchContact = async (request, response, next) => {
  try {
    const { searchTerm } = request.body;
    if (!searchTerm || searchTerm === null || searchTerm === undefined) {
      return response.status(400).send({ message: "search term is required!" });
    }

    const sanitizedSearchTerm = searchTerm.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const regex = new RegExp(sanitizedSearchTerm, "i");
    const contacts = await User.find({
      $and: [
        { _id: { $ne: request.userId } },
        { $or: [{ firstName: regex }, { lastName: regex }, { email: regex }] },
      ],
    });

    return response.status(200).json({ contacts });
  } catch (error) {
    return response.status(500).send({ message: "internal server error!" });
  }
};
