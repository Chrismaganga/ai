import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const absoluteUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
};

export const createStripeSession = async (priceId: string, userId: string) => {
  const stripeSession = await stripe.checkout.sessions.create({
    success_url: absoluteUrl("/dashboard"),
    cancel_url: absoluteUrl("/dashboard"),
    payment_method_types: ["card"],
    mode: "subscription",
    billing_address_collection: "auto",
    customer_email: userId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId,
    },
  });

  return stripeSession;
}; 