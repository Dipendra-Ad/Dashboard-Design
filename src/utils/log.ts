const isDevelopment = process.env.NODE_ENV === "development";

export const log = (...messages: any[]) => {
  if (isDevelopment) {
    console.log(...messages);
  }
};
