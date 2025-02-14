import path from "node:path";
import { readFile } from "../readFile";

// @__NO_SIDE_EFFECTS__
export async function getDataPath<T = any>(directoryPath: string, fileName: string) {
  const filePath = path.join(directoryPath, fileName);
  const fileContent = await readFile(filePath);
  const data = JSON.parse(fileContent) as T;
  return {
    path: filePath,
    data: data,
  };
}
