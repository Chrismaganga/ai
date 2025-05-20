-- CreateTable
CREATE TABLE "UserApiLimit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "UserSubscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "stripePriceId" TEXT,
    "stripeCurrentPeriodEnd" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "UserApiLimit_userId_key" ON "UserApiLimit"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_userId_key" ON "UserSubscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_stripeCustomerId_key" ON "UserSubscription"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_stripeSubscriptionId_key" ON "UserSubscription"("stripeSubscriptionId");
