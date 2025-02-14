import { checkBoundaryPrecision } from "../numberBoundaryStatePrecision";
import { createOperationPrecision } from "../numberCreateOperationPrecision";
import { digitLengthPrecision } from "../numberDigitLengthPrecision";
import { float2FixedPrecision } from "../numberFloat2FixedPrecision";
import { stripPrecision } from "../numberStripPrecision";
import { timesPrecision } from "../numberTimesPrecision";
export const dividePrecision = createOperationPrecision((num1, num2) => {
    const num1Changed = float2FixedPrecision(num1);
    const num2Changed = float2FixedPrecision(num2);
    checkBoundaryPrecision(num1Changed);
    checkBoundaryPrecision(num2Changed);
    return timesPrecision(num1Changed / num2Changed, stripPrecision(10 ** (digitLengthPrecision(num2) - digitLengthPrecision(num1))));
});
