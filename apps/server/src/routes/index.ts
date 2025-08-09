import { Router } from "express";

const router: Router = Router();

router.get("/", function (_req, res) {
  res.send("Express API is running");
});

export default router;
