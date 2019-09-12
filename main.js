const getValues = () => {
  let x = document.getElementById("mineForm");
  let rows = x.elements[0].value;
  let columns = x.elements[1].value;
  let mines = x.elements[2].value;
  let table = document.getElementById("table");

  table.innerHTML = "";
  document.getElementById("format").innerHTML = "";

  let filledMap = checkMapIsValid(rows, columns, mines);

  for (let i = 0; i < filledMap.length; i++) {
    let newRow = table.insertRow(table.length);
    for (var j = 0; j < filledMap[i].length; j++) {
      let cell = newRow.insertCell(j);
      cell.innerHTML = filledMap[i][j];
    }
  }
};

const checkMapIsValid = (rows, columns, mines) => {
  if (rows * columns > mines) {
    return getMinefield(rows, columns, mines);
  } else {
    document.getElementById("format").innerHTML =
      "Please enter a valid map format";
  }
};

const getMinefield = (rows, columns, mines) => {
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
      fillMineMarker(minefield, x, y, rows, columns);
      continueLoop = false;
      return minefield;
    }
  }
};

const positionIsFree = (minefield, position) => {
  let x = position[0];
  let y = position[1];
  return !(minefield[x][y] == "X");
};

const getRandomCoordinate = (rows, columns) => {
  return [
    Math.floor(Math.random() * rows),
    Math.floor(Math.random() * columns)
  ];
};
const fillMineMarker = (minefield, x, y, rows, columns) => {
  rows = rows - 1;
  columns = columns - 1;

  if (x > 0 && minefield[x - 1][y] == " ") {
    minefield[x - 1][y] = 1;
  } else if (x > 0) {
    incrementMineMarker(x - 1, y, minefield);
  }
  if (x > 0 && y > 0 && minefield[x - 1][y - 1] == " ") {
    minefield[x - 1][y - 1] = 1;
  } else if (x > 0 && y > 0) {
    incrementMineMarker(x - 1, y - 1, minefield);
  }
  if (x > 0 && y < columns && minefield[x - 1][y + 1] == " ") {
    minefield[x - 1][y + 1] = 1;
  } else if (x > 0 && y < columns) {
    incrementMineMarker(x - 1, y + 1, minefield);
  }
  if (y < columns && minefield[x][y + 1] == " ") {
    minefield[x][y + 1] = 1;
  } else if (y < columns) {
    incrementMineMarker(x, y + 1, minefield);
  }
  if (y > 0 && minefield[x][y - 1] == " ") {
    minefield[x][y - 1] = 1;
  } else if (y > 0) {
    incrementMineMarker(x, y - 1, minefield);
  }
  if (x < rows && minefield[x + 1][y] == " ") {
    minefield[x + 1][y] = 1;
  } else if (x < rows) {
    incrementMineMarker(x + 1, y, minefield);
  }
  if (x < rows && y > 0 && minefield[x + 1][y - 1] == " ") {
    minefield[x + 1][y - 1] = 1;
  } else if (x < rows && y > 0) {
    incrementMineMarker(x + 1, y - 1, minefield);
  }
  if (x < rows && y < columns && minefield[x + 1][y + 1] == " ") {
    minefield[x + 1][y + 1] = 1;
  } else if (x < rows && y < columns) {
    incrementMineMarker(x + 1, y + 1, minefield);
  }
};

const incrementMineMarker = (x, y, minefield) => {
  if (typeof minefield[x][y] == "number") {
    minefield[x][y]++;
  }
};
