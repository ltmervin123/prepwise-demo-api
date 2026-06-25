import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
    isAuthenticated: { type: Boolean, default: false },
    role: { type: String, enum: ['STUDENT', 'ADMIN'], default: 'STUDENT' },
  },
  {
    timestamps: true,
  }
);

export default studentSchema;
