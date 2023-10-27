export const protocal = process?.env?.protocal || "http";
export const host = process?.env?.host || "localhost";
export const port = process?.env?.port || 3000;
export const url = `${protocal}://${host}:${port}${
  process.env?.BASE_PATH !== "/" ? process.env?.BASE_PATH : ""
}/`;
