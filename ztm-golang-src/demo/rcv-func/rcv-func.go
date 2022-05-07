package main

import "fmt"

type Coordinate struct {
	x, y int
}

func (coord *Coordinate) shiftBy(x, y int) {
	coord.x += x
	coord.y += y
}

type Space struct {
	occupied bool
}

type ParkingLot struct {
	spaces []Space
}

func occupySpace(lot *ParkingLot, spaceNum int) {
	lot.spaces[spaceNum-1].occupied = true
}

func (lot *ParkingLot) occupySpace(spaceNum int) {
	lot.spaces[spaceNum-1].occupied = true
}

func (lot *ParkingLot) vacateSpace(spaceNum int) {
	lot.spaces[spaceNum-1].occupied = false
}

func main() {
	coord := Coordinate{5, 5}
	coord.shiftBy(2, 2)
	fmt.Println(coord)

	lot := ParkingLot{spaces: make([]Space, 10)}
	fmt.Println(lot)
	lot.occupySpace(1)
	occupySpace(&lot, 4)
	fmt.Println(lot)

	lot.vacateSpace(1)
	fmt.Println(lot)
}
