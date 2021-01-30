const sudoku = require("./sudoku")
var board;
describe('#parseBoard', function(){
    test("should parse a sudoku board into a 20 Array", function(){
        const parseBoard = sudoku.parseBoard(board);
        var expectedBoard = [
            
            [0, 9, 0, 0, 0, 0, 0, 0, 6],
            [0, 0, 0, 9, 6, 0, 4, 8, 5],
            [0,0,0,5,8,1,0,0,0],
            [0,4,0,0,0,0,0,0,0],
            [5,1,7,2,0,0,9,0,0],
            [6,0,2,0,0,0,3,7,0],
            [1,0,0,8,0,4,0,2,0],
            [7,0,6,0,0,0,8,1,0],
            [3,0,0,0,9,0,0,0,0]
            


        ];
        expect(parseBoard.length).toBe(9);
        expect(parseBoard[0].length).toBe(9);
        expect(JSON.stringify(parseBoard)).toBe(JSON.stringify(expectedBoard));
    });
});