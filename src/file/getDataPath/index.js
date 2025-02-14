import path from "node:path";
import { readFile } from "../readFile";
export async function getDataPath(directoryPath, fileName) {
    const filePath = path.join(directoryPath, fileName);
    const fileContent = await readFile(filePath);
    const data = JSON.parse(fileContent);
    return {
        path: filePath,
        data: data,
    };
}
