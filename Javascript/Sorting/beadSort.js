/**
 * Bead Sort AKA Graverty Sort
 * It is a kind of natural sorting algorithm
 * 
 * this algorithm was inspired from natural phenomenons and was designed keeping in mind objects(or beads) falling under the influence of gravity.
 * 
 * The Idea: Positive numbers are represented by a set of beads like those on an abacus.
 * 
 * Note: it only works wit an array of positive integers
 */

function beadSort(arr) {
	// check if array is positive or not
	// i = integer
	if (arr.some((i) => i < 0)) {
		throw Error('Array contains negative integer')
	}


	const max = Math.max(...arr)

	// Set initial Grid
	const grid = arr.map(number => {
		const maxArr = new Array(max)

		for (let i = 0; i < number; i++) {
			maxArr[i] = '*'
		}

		return maxArr
	})

	// drop beads
	for (let col = 0; col < max; col++) {
		let beadsCount = 0

		for (let row = 0; row < arr.length; row++) {
			if (grid[row][col] === '*') {
				beadsCount++
			}
		}

		for (let row = arr.length - 1; row > -1; row--) {
			if (beadsCount) {
				grid[row][col] = '*'
				beadsCount--
			} else {
				grid[row][col] = undefined
			}
		}
	}

	// put the beads into respective position
	const sortedArr = grid.map((beadArr) => {
		const beadsArr = beadArr.filter(bead => bead === '*')

		return beadsArr.length
	})

	return sortedArr
}

//driver code
const arr = [9,8,19,6,15,4,3,2,1]

console.log(`Original array : ${arr} `)

console.log(`Sorted array : ${beadSort(arr)} `)
