package main

import "fmt"

type Direction byte

const (
	North Direction = iota
	South
	East
	West
)

func (d Direction) String() string {
	switch d {
	case North:
		return fmt.Sprintf("North(%d)", d)
	case South:
		return fmt.Sprintf("South(%d)", d)
	case East:
		return fmt.Sprintf("East(%d)", d)
	case West:
		return fmt.Sprintf("West(%d)", d)
	default:
		return fmt.Sprintf("Unknown(%d)", d)
	}
}

// func (d Direction) String() string {
// 	return []string{"North", "East", "South", "West"}[d]
// }

func main() {
	fmt.Println(North)
	fmt.Println(South)
	d5 := Direction(6)
	fmt.Println(d5)
}
