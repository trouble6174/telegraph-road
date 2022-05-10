//--Summary:
//  Create a program that directs vehicles at a mechanic shop
//  to the correct vehicle lift, based on vehicle size.
//
//--Requirements:
//* The shop has lifts for multiple vehicle sizes/types:
//  - Motorcycles: small lifts
//  - Cars: standard lifts
//  - Trucks: large lifts
//* Write a single function to handle all of the vehicles
//  that the shop works on.
//* Vehicles have a model name in addition to the vehicle type:
//  - Example: "Truck" is the vehicle type, "Road Devourer" is a model name
//* Direct at least 1 of each vehicle type to the correct
//  lift, and print out the vehicle information.
//
//--Notes:
//* Use any names for vehicle models

package main

import "fmt"

const (
	SmallLift = iota
	StandardLift
	LargeLift
)

type Lift int

type LiftPicker interface {
	PickLift() Lift
}
type Motorcycle string
type Car string
type Truck string

func (m Motorcycle) String() string {
	return fmt.Sprintf("Motorcycle: %v", string(m))
}

func (m Car) String() string {
	return fmt.Sprintf("Car: %v", string(m))
}

func (m Truck) String() string {
	return fmt.Sprintf("Truck: %v", string(m))
}

func (m Motorcycle) PickLift() Lift {
	return SmallLift
}

func (m Car) PickLift() Lift {
	return StandardLift
}

func (m Truck) PickLift() Lift {
	return LargeLift
}

func sendToLift(p LiftPicker) {
	switch p.PickLift() {
	case SmallLift:
		fmt.Printf("send %v to small\n", p)
	case StandardLift:
		fmt.Printf("send %v to middle\n", p)
	case LargeLift:
		fmt.Printf("send %v to big\n", p)
	}
}
func main() {
	car := Car("Car1")
	truck := Truck("Truck1")
	motor := Motorcycle("M1")
	sendToLift(car)
	sendToLift(truck)
	sendToLift(motor)
}
