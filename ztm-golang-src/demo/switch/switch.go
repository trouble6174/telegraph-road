package main

import "fmt"

func price() int {
	return 100
}

const (
	Economy    = 0
	Business   = 1
	FirstClass = 2
)

func main() {
	switch p := price(); {
	case p < 2:
		fmt.Println("cheap item")
	case p < 10:
		fmt.Println("moderately item")
	default:
		fmt.Println("expensive item")
	}

	ticket := Economy
	switch ticket {
	case Economy:
		fmt.Println("eco")
	case Business:
		fmt.Println("buss")
	case FirstClass:
		fmt.Println("fc")
	default:
		fmt.Println("other")
	}
}
