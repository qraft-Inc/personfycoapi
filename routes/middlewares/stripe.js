import dotenv from 'dotenv-flow';
import stripe from 'stripe';
dotenv.config();

const stripeInstance = stripe(process.env.STRIPE_SK);

export default stripeInstance;


// import stripePackage from 'stripe';
// const stripe = stripePackage(process.env.STRIPE_SK);

// export default stripe;
