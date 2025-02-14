export function isSameMonth(date1, date2) {
    if (!(date1 && date2)) {
        return false;
    }
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}
