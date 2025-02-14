const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
const getTimezoneOffset = (date) => {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? "+" : "-";
    return `${diff + pad(tzOffset / 60)}:${pad(tzOffset % 60)}`;
};
export function toISOStringTimezone(date) {
    return (`${date.getFullYear()}
    -${pad(date.getMonth() + 1)}
    -${pad(date.getDate())}
    T${pad(date.getHours())}
    :${pad(date.getMinutes())}
    :${pad(date.getSeconds())}
    ${getTimezoneOffset(date)}`);
}
