function getLocation(map: string[][]) {
    const button = document.activeElement as HTMLElement;
    const key = button?.dataset.key;
    let x = -1;
    const y = map.findIndex(row => (x = row.findIndex(cell => cell === key)) !== -1);
    return {x, y};
}

export const arrowDownHandler = (map: string[][]) => {
    let {x, y} = getLocation(map);
    if (y === map.length - 1) return map[y][x];
    y++;
    return map[y][x];
}

export const arrowUpHandler = (map: string[][]) => {
    let {x, y} = getLocation(map);
    if (y === 0) return map[y][x];
    y--;
    return map[y][x];
}

export const arrowRightHandler = (map: string[][]) => {
    let {x, y} = getLocation(map);
    const prevKey = map[y][x];
    const edgeIndex = map[y].length - 1;
    for (; map[y][x] === prevKey && x !== edgeIndex;) x++;
    return map[y][x];
}

export const arrowLeftHandler = (map: string[][]) => {
    let {x, y} = getLocation(map);
    const prevKey = map[y][x];
    const edgeIndex = 0;
    for (; map[y][x] === prevKey && x !== edgeIndex;) x--;
    return map[y][x];
}
