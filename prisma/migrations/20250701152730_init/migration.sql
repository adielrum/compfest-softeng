-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "mealPlan" TEXT NOT NULL,
    "mealPlanPrice" INTEGER NOT NULL,
    "mealTypes" TEXT[],
    "deliveryDays" TEXT[],
    "allergies" TEXT,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);
