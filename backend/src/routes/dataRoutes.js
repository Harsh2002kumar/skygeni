// backend/src/routes/dataRoutes.ts
import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = Router();

const readJsonFile = (fileName) => {
  const filePath = path.join(__dirname, "../../data", fileName);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

router.get("/customer-type", (req, res) => {
  const data = readJsonFile("CustomerType.json");
  res.json(data);
});

router.get("/account-industry", (req, res) => {
  const data = readJsonFile("AccountIndustry.json");
  res.json(data);
});

router.get("/team", (req, res) => {
  const data = readJsonFile("Team.json");
  res.json(data);
});

router.get("/product-line", (req, res) => {
  const data = readJsonFile("ProductLine.json");
  res.json(data);
});

export default router;
