package main

import "fmt"

type Coordinate struct {
	x, y int
}

type Player struct {
	health   int
	position Coordinate
}

type Resetter interface {
	Reset()
}

func (p *Player) Reset() {
	p.health = 100
	p.position = Coordinate{0, 0}
}

func Reset(r Resetter) {
	r.Reset()
}

func ResetWithPenalty(r Resetter) {
	if player, ok := r.(*Player); ok {
		player.Reset()
		// in golang (*p).xx or p.xx is the same
		(*player).health = 50
		// player.health = 50
	} else {
		r.Reset()
	}
}

func Run() {
	p := Player{50, Coordinate{6, 6}}
	fmt.Println(p)
	ResetWithPenalty(&p)
	fmt.Println(p)
}
