# minesweeper

## Minesweeper Generator

Build a program which generates and visualises the minesweeper (uncovered) game field.

Input: 3 parameters – number of rows, number of columns, number of mines

Rules: each field is either empty, mine or number (1-8),
- Mine means there is a mine in that field.
- Number means there is no mine in that field but the number tells you how many mines lay hidden in the eight surrounding squares.
- Empty means there is no mine and there are no mines in surrounding squares.

Generate a rectangular field based on input number of rows and columns. Place mines randomly in the field – there can be only one mine in each field. Calculate the number clues and display the field.

Output: simple visualisation of uncovered game board

## Method 

I went about this problem using JavaScript as it is the language I am most comfortable with. 

I decided to arrange the data in a 2D array in order to be able to utilize co-ordinate notation to locate the values in the array as x & y. This allows me to scale the size of the map and easily manipulate the array into a table in HTML. 

Keeping the data in this format would also allow the application to be scaled if it were to be built with more functionality and allows for easier visualization of the data. If this were to be scaled further I would possibly move it over to REACT in order to best make use of its components to add the click functionality on each 'cell' component. 

I wanted to extract out the functions into the functionality of: 
- Generating the minefield -- making the 2d array using the rows and columns as inputs I would then add the mines
- Adding the mine positions -- I used a while loop here in order to continue checking for available spaces to place the mine in case the first random coordinates are taken, and then I would fill in the markers around the mine.
- Filling Mine Markers - Here I am conditionally filling the markers based on if they are coordinates that are within the array i.e. not on the edge of the map and also if the value is empty. Or if there is a number already inside that needs to be incremented. 
