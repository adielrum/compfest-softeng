import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const prisma = new PrismaClient()

const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const { name, email, password } = signupSchema.parse(req.body)

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'user',
      },
    })

    res.status(201).json({ message: 'User created successfully', user: { id: user.id, email: user.email, name: user.name, role: user.role } })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message })
    }
    console.error('Signup error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}