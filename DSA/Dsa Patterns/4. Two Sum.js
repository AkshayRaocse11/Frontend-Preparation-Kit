/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const seen ={};
	for(let i =0;i<nums.length;i++){
		const cur = target - nums[i];
		if(cur in seen){
			const j = seen[cur]
			return [j,i]
		}
		seen[nums[i]] = i ;
	}
};