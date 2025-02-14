import { isArray } from "../../predicate/isArray";
export function toPointsArray(points) {
    if (isArray(points[0])) {
        return points.map(([x, y, pressure = 0.5]) => [x, y, pressure]);
    }
    return points.map(({ x, y, pressure = 0.5 }) => [x, y, pressure]);
}
