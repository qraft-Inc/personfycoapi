
import { Router } from 'express';
import initMiddleware from './middleware/index.js';
import contentFilterCheck from './middleware/contentFilterCheck.js';
import creditCheck from './middleware/creditCheck.js';
import sendResponse from './middleware/sendResponse.js';
import creditPayment from './middleware/creditPayment.js';
import saveToHistory from './middleware/saveToHistory.js';
let aiRouter = Router()

aiRouter.use('/', initMiddleware, creditCheck); 

import summarizeRouter from './summarize.js';
import interpretRouter from './code/interpret.js';
import introRouter from './writing/intro.js';
import jobadRouter from './jobad.js';
import helloworldRouter from './helloworld.js';
import exampleRouter from './example.js';

aiRouter.use('/', summarizeRouter);
aiRouter.use('/', interpretRouter);
aiRouter.use('/', introRouter);
aiRouter.use('/', jobadRouter);
aiRouter.use('/', helloworldRouter);
aiRouter.use('/', exampleRouter);


aiRouter.use('/', contentFilterCheck); 
aiRouter.use('/', creditPayment); 
aiRouter.use('/', saveToHistory); 

aiRouter.use('/', sendResponse); 

export default aiRouter