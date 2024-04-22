import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRoute from "./../Routes/review.js";

const router = express.Router();

//nested route for reviews
router.use(
  "/:doctorId/reviews",
  authenticate,
  restrict(["patient"]),
  reviewRoute
);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;
