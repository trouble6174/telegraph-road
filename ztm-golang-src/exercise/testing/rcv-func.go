package rcv_func

import "fmt"

type Player struct {
	name      string
	health    int
	maxHealth int
	energy    int
	maxEnergy int
}

func (pl *Player) addHealth(n int) {
	pl.health += n
	if pl.health > pl.maxHealth {
		pl.health = pl.maxHealth
	}
}

func (pl *Player) addEnegry(n int) {
	pl.energy += n
}

func main() {
	p := Player{"LC", 100, 200, 100, 200}
	fmt.Println(p)
	p.addHealth(500)
	p.addEnegry(5000)
	fmt.Println(p)
}
