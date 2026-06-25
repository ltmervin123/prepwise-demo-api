import { z } from 'zod';

export const student = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name is required' })
    .max(100, { message: 'First name must be at most 100 characters long' }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .max(100, { message: 'Last name must be at most 100 characters long' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' })
    .max(100, { message: 'Email must be at most 100 characters long' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(100, { message: 'Password must be at most 100 characters long' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' }),
});

export type Student = z.infer<typeof student>;
