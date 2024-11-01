import { Router } from "express"; 
import { login, logout } from "../controllers/User.Controllers.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.post('/login', login);
router.get('/logout', verifyToken, logout);

export default router;
