// src/api/api.ts
import { dummyUsers, User } from '../data/dummyData';

interface UserCredentials {
  username: string;
  password: string;
}

export const validateUser = async (credentials: UserCredentials): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return dummyUsers.some(
    (user) => user.username === credentials.username && user.password === credentials.password
  );
};

export const registerUser = async (credentials: { username: string; password: string; email: string }): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userExists = dummyUsers.some(user => user.username === credentials.username || user.email === credentials.email);

  if (!userExists) {
    // Determine the next ID
    const nextId = dummyUsers.length > 0 ? Math.max(...dummyUsers.map(user => user.id)) + 1 : 1;

    // Add the new user to dummy data
    dummyUsers.push({
      id: nextId,
      username: credentials.username,
      password: credentials.password,
      email: credentials.email
    });

    return true;
  }
  return false;
};
