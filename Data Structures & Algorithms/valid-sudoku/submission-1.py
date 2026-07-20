class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        nums = set(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
        row = [set() for _ in range(9)]
        col = [set() for _ in range(9)]
        box = [[set() for _ in range(3)] for _ in range(3)]

        for r in range(len(board)):
            for c in range(len(board[0])):
                num = board[r][c]
                if num in nums:
                    if num in row[r]:
                        return False
                    row[r].add(num)

                    if num in col[c]:
                        return False
                    col[c].add(num)

                    if num in box[r // 3][c // 3]:
                        return False
                    box[r // 3][c // 3].add(num)
        
        return True
