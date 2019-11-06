// PYTHON
import functools

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        uniques = set(nums)
        uniques = list(uniques)
        sum_uniques = functools.reduce(lambda a, b : a + b * 2, uniques, 0) 
        sum_nums = functools.reduce(lambda a, b : a + b, nums, 0) 
        return sum_uniques - sum_nums