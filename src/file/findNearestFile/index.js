import path from "node:path";
import { getDataPath } from "../getDataPath";
export async function findNearestFile(fileName, directoryPath = path.resolve()) {
    try {
        const data = await getDataPath(directoryPath, fileName);
        return data;
    }
    catch (error) {
        const parentDirectoryPath = path.dirname(directoryPath);
        if (parentDirectoryPath === directoryPath) {
            throw new Error(`No ${fileName} files found`);
        }
        return findNearestFile(parentDirectoryPath, fileName);
    }
}
