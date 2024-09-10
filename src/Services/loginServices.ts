// export const loginUser = async (username: string, password: string) => {
//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ username, password, expiresInMins: 30 }),
//   });

//   if (!response.ok) {
//     throw new Error("Login failed");
//   }

//   const data = await response.json();
//   return data.token;
// };

// src/Services/loginServices.ts
export const loginUser = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, expiresInMins: 30 }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Login failed";
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.token;
};
