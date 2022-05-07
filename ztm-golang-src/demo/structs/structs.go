package main

import "fmt"

type Passenger struct {
	Name         string
	TicketNumber int
	Boarded      bool
}

type Bus struct {
	FrontSeat Passenger
}

func main() {
	casey := Passenger{"Casey", 1, false}
	fmt.Println(casey)
	var (
		bill = Passenger{Name: "Bill", TicketNumber: 2}
		ella = Passenger{Name: "ella", TicketNumber: 3}
	)
	fmt.Println(bill, ella)

	var heidi Passenger
	heidi.Name = "Heidi"
	heidi.TicketNumber = 4
	fmt.Println(heidi)

	casey.Boarded = true
	bill.Boarded = true
	if casey.Boarded {
		fmt.Println(casey.Name, "has boarded")
	}

	heidi.Boarded = true
	bus := Bus{heidi}
	fmt.Println(bus.FrontSeat.Name, "is in the front seat")
}
