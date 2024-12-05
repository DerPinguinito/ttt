
const BOARD = function() {
    const grid =  [];

    const createRow = (rNumber) => {
        const rowNumber = rNumber;
        const columns = [];

        return { rowNumber, columns };
    }

    const createColumn = (cNumber) => {
        const columnNumber = cNumber;
        const active = false;
        const value = '';

        const changeStatus = () => active = !active;

        return { columnNumber, active, value, changeStatus };
    }

    const createGrid = function() {
        for (let i = 0; i < 3; i++) {
            const row = createRow(i);

            for (let j = 0; j < 3; j++) {
                const column = createColumn(j);
                row.columns.push(column);
            }

            grid.push(row);
        }
    }();

    return { grid };
}();
