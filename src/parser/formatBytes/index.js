export const formatBytes = (bytes, options) => {
    const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const { numberOfDecimals = 0 } = options ?? {};
    if (!bytes || bytes <= 0) {
        return "0 bytes";
    }
    if (bytes === 1) {
        return "1 byte";
    }
    const base = 1000;
    const exponent = Math.trunc(Math.log(bytes) / Math.log(base));
    const rawValue = bytes / base ** exponent;
    let [whole, partial = ""] = rawValue.toString().split(".");
    if (numberOfDecimals > 0) {
        const count = numberOfDecimals - partial.length;
        if (count > 0) {
            partial += "0".repeat(count);
        }
        whole += `.${partial.slice(0, numberOfDecimals)}`;
    }
    const abbreviationSuffix = sizes[exponent];
    return `${whole} ${abbreviationSuffix}`;
};
