const getRandomCoordinate = (rows, columns) => {
  return [
    Math.floor(Math.random() * rows),
    Math.floor(Math.random() * columns)
  ];
};

const getMineField = (rows, columns, mines) => {
  let minefield = [];
  for (let i = 0; i < rows; i++) {
    minefield[i] = [rows];
    for (let j = 0; j < columns; j++) {
      minefield[i][j] = " ";
    }
  }
  for (let i = 0; i < mines; i++) {
    minefield = generateMinePositions(minefield, rows, columns);
  }
  return minefield;
};

const generateMinePositions = (minefield, rows, columns) => {
  let minePosition = null;
  let continueLoop = true;
  while (continueLoop) {
    minePosition = getRandomCoordinate(rows, columns);
    if (positionIsFree(minefield, minePosition)) {
      let x = minePosition[0];
      let y = minePosition[1];
      minefield[x][y] = "X";
      minefield = fillMineMarker(minefield, x, y);
    }
  }
};

const positionIsFree = (minefield, position) => {
  let x = position[0];
  let y = position[1];
  return !(minefield[x][y] = "X");
};

const fillMineMarker = (minefield, x, y) => {};
