import express from "express";
import {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello, you are authenticated!");
// });

// router.put("/checkuser:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete you account");
// });

// router.put("/checkAdmin:id", verifyAdmin, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete you account");
// });

// CREATE
// router.put("/", verifyUser, createUser);

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello, you are authenticated!");
});
// UPDATE
router.put("/:id", verifyToken, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);
// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
