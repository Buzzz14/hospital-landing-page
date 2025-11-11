import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must be at most 100 characters long"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z
    .string()
    .min(7, "Mobile number seems too short")
    .max(20, "Mobile number seems too long")
    .regex(/^[+\d][\d\s()-]{6,19}$/, "Please enter a valid phone number"), // basic, flexible validation
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must be at most 1000 characters long"),
});
