import express from 'express';
import userController from "../controller/userController.js";




const router = express.Router();

router.get("/getAll", getAllEmp);
router.post("/addEmp", addEmp);
router.post("/updateEmp/:id", updateEmp);
router.delete("/deleteEmp/:id", deleteEmp);
router.get('/employees/:id', getEmpById);


export default router;
