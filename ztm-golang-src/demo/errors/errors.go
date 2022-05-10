package main

import (
	"fmt"
)

type Stuff struct {
	values []int
}

func (s *Stuff) Get(index int) (int, error) {
	if index > len(s.values) {
		return 0, fmt.Errorf("index error: %d", index)
	}
	return s.values[index], nil
}

func main() {
	stuff := Stuff{}
	value, err := stuff.Get(5)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(value)
	}
}
