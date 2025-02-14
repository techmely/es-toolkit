import { isDeepEqual } from "../../predicate/isDeepEqual";
export function haveSameElement(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el = arr1[i];
        if (arr2.some((e) => isDeepEqual(e, el))) {
            return true;
        }
    }
    return false;
}
