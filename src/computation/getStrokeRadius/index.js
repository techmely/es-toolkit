import { clamp } from "../clamp";
import { lerp } from "../lerp";
export function getStrokeRadius(size, thinning, easing, pressure = 0.5) {
    if (!thinning) {
        return size / 2;
    }
    const newPressure = clamp(easing(pressure), 0, 1);
    return ((thinning < 0
        ? lerp(size, size + size * clamp(thinning, -0.95, -0.05), newPressure)
        : lerp(size - size * clamp(thinning, 0.05, 0.95), size, newPressure)) / 2);
}
