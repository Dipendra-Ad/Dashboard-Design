import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be 5 characters long ")
    .nonempty("Username is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});
