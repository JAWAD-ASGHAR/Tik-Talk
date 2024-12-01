import { Router } from "express";
import { searchContact } from "../controllers/contactsController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const contactRoutes = Router();

contactRoutes.post("/search", verifyToken, searchContact);

export default  contactRoutes;