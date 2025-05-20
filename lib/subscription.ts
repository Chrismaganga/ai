import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid = 
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime() + 86_400_000 > Date.now();

  return !!isValid;
}; 