//--Summary:
//  Implement receiver functions to create stat modifications
//  for a video game character.
//
//--Requirements:
//* Implement a player having the following statistics:
//  - Health, Max Health
//  - Energy, Max Energy
//  - Name
//* Implement receiver functions to modify the `Health` and `Energy`
//  statistics of the player.
//  - Print out the statistic change within each function
//  - Execute each function at least once

package main

import "fmt"

type Player struct {
	name   string
	health int
	energy int
}

func (pl *Player) addHealth(n int) {
	pl.health += n
}

func (pl *Player) addEnegry(n int) {
	pl.energy += n
}

func main() {
	p := Player{"LC", 100, 100}
	fmt.Println(p)
	p.addHealth(500)
	p.addEnegry(5000)
	fmt.Println(p)
}
