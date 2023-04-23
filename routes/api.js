import { Router } from 'express';
import rateLimit from "express-rate-limit";
import authJwt from "./auth/authJwt.js";
import stripeRouter from './stripe/index.js';
import authRouter from './auth/index.js';
import userRouter from './user/index.js';
import aiRouter from './ai/index.js';



const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200 // maximum of 200 requests per windowMs
});

const apiRouter = Router();

// Webhooks and things
apiRouter.use('/stripe', stripeRouter);

apiRouter.use("/", apiLimiter);

// Signup and Authentication
apiRouter.use('/auth', authRouter);

// Everything after this requires user authentication
apiRouter.use('/', authJwt.verifyToken);

// Already signed up user routes
apiRouter.use('/user', userRouter);

// Using AI Platform
apiRouter.use('/ai', aiRouter);

export default apiRouter;
