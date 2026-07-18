class Solution {
    /**
     * @param {character[][]} boxGrid
     * @return {character[][]}
     */
    rotateTheBox(boxGrid) {
        for(let r = 0; r < boxGrid.length; r++){
            let l = 0;
            while(l < boxGrid[r].length){
            for(let c = 0; c < boxGrid[0].length - 1; c++){
                if(boxGrid[r][c] === '.' || boxGrid[r][c] === '*') continue;

                else{
                    if(boxGrid[r][c + 1] === '.'){
                        boxGrid[r][c + 1] = '#';
                        boxGrid[r][c] = '.';
                    }
                }
            }
            l++;
            }
        }

        let newGrid = Array.from({length: boxGrid[0].length}, () => new Array(boxGrid.length).fill('.'));

        for(let r = 0; r < boxGrid.length; r++){
            for(let c = 0; c < boxGrid[0].length; c++){
                newGrid[c][boxGrid.length - 1 - r] = boxGrid[r][c];
            }
        }

        return newGrid;
    }
}
