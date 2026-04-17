class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let building = [];

        for(let i of s){
            if(i == "{" || i == "[" || i == "("){
                building.push(i);
            }
            else{
                if(i === "}" && building[building.length-1] === "{"){
                building.length--;
            }
            else if(i === "]" && building[building.length-1] === '['){
                building.length--;
            }
            else if(i === ")" && building[building.length-1] === '('){
                building.length--;
            }
            else
                return false;
            }
        }

        if(building.length <= 0) return true;
        return false;
      //return true;
    }
}
