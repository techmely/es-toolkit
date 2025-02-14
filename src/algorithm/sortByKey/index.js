export var SortDirection;
((SortDirection) => {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
})(SortDirection || (SortDirection = {}));
export function sortByDate(a, b, key, direction = SortDirection.ASC) {
    if (a[key] < b[key]) {
        return direction === SortDirection.ASC ? 1 : -1;
    }
    if (a[key] > b[key]) {
        return direction === SortDirection.ASC ? -1 : 1;
    }
    return 0;
}
