import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const subscriptionSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  mealPlan: z.string().min(1, 'Meal Plan is required'),
  mealPlanPrice: z.number().int().positive('Meal Plan Price must be a positive integer'),
  mealTypes: z.array(z.string()).min(1, 'At least one Meal Type is required'),
  deliveryDays: z.array(z.string()).min(1, 'At least one Delivery Day is required'),
  allergies: z.string().optional(),
  totalPrice: z.number().positive('Total Price must be a positive number'),
});

type SubscriptionInput = z.infer<typeof subscriptionSchema>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const validatedData = subscriptionSchema.parse(req.body);

    const newSubscription = await prisma.subscription.create({
      data: {
        fullName: validatedData.fullName,
        phoneNumber: validatedData.phoneNumber,
        mealPlan: validatedData.mealPlan,
        mealPlanPrice: validatedData.mealPlanPrice,
        mealTypes: validatedData.mealTypes,
        deliveryDays: validatedData.deliveryDays,
        allergies: validatedData.allergies,
        totalPrice: validatedData.totalPrice,
      },
    });

    res.status(201).json({ message: 'Subscription successful!', subscription: newSubscription });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    console.error('Subscription API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}