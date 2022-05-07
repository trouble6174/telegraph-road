//--Summary:
//  Create a program that can perform dice rolls using various configurations
//  of number of dice, number of rolls, and number of sides on the dice.
//  The program should report the results as detailed in the requirements.

//--Notes:
//* Use packages from the standard library to complete the project
//* Try using different values for your variables to check the results

package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"
)

func roleOnce(side int) int {
	if side == 0 {
		side = 6
	}
	return 1 + rand.Intn(side)
}

//--Requirements:
//* Print the sum of the dice roll
//* Print additional information in these cirsumstances:
//  - "Snake eyes": when the total roll is 2, and total dice is 2
//  - "Lucky 7": when the total roll is 7
//  - "Even": when the total roll is even
//  - "Odd": when the total roll is odd
//* The program must use variables to configure:
//  - number of times to roll the dice
//  - number of dice used in the rolls
//  - number of sides of all the dice (6-sided, 10-sided, etc determined
//    with a variable). All dice must use the same variable for number
//    of sides, so they all have the same number of sides.
func rollTheDice(rollTimes, diceNum, diceSide int) {
	cr := 0
	msg := ""
	for i := 0; i < rollTimes; i++ {
		points := 0
		msg += ("\nroll " + strconv.Itoa(i+1) + ": ")
		for j := 0; j < diceNum; j++ {
			cr = roleOnce(diceSide)
			points += cr
			msg += strconv.Itoa(cr) + " "
		}
		msg += ("total: " + strconv.Itoa(points) + "\n")
		if points == 2 && diceNum == 2 {
			msg += "Snake eyes\n"
		} else if points == 7 {
			msg += "Lucky 7\n"
		} else if points%2 == 0 {
			msg += "Even\n"
		} else {
			msg += "Odd\n"
		}
	}
	fmt.Println(msg)
}

func main() {
	rand.Seed(time.Now().UnixNano())
	rollTheDice(100, 2, 6)
}
