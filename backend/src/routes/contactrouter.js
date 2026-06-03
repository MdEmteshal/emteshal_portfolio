import express from "express";
const router = express.Router();

import { submitContact } from "../controllers/contactmeController.js";

router.post("/contact", submitContact);

export default router;
