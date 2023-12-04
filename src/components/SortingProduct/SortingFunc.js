export function handleSorting(arr, type) {
    return arr.sort(function (a, b) {
        if (type === "up") {
            return (a.previousPrice - b.previousPrice)
        }
        else {
            return (b.previousPrice - a.previousPrice)
        }

    });
}