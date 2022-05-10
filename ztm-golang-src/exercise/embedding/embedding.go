//--Summary:
//  Create a system monitoring dashboard using the existing dashboard
//  component structures. Each array element in the components represent
//  a 1-second sampling.
//
//--Requirements:
//* Create functions to calculate averages for each dashboard component
//* Using struct embedding, create a Dashboard structure that contains
//  each dashboard component
//* Print out a 5-second average from each component using promoted
//  methods on the Dashboard

package main

import "fmt"

type Bytes int
type Celcius float32

type BandwidthUsage struct {
	amount []Bytes
}

type CpuTemp struct {
	temp []Celcius
}

type MemoryUsage struct {
	amount []Bytes
}

func (b *BandwidthUsage) AverageBandwidth() int {
	res := 0
	for i := 0; i < len(b.amount); i++ {
		res += int(b.amount[i])
	}
	return res / len(b.amount)
}

func (c *CpuTemp) AverageCpu() int {
	res := 0
	for i := 0; i < len(c.temp); i++ {
		res += int(c.temp[i])
	}
	return res / len(c.temp)
}

func (m *MemoryUsage) AverageMem() int {
	res := 0
	for i := 0; i < len(m.amount); i++ {
		res += int(m.amount[i])
	}
	return res / len(m.amount)
}

type Dashboard struct {
	BandwidthUsage
	CpuTemp
	MemoryUsage
}

func main() {
	bandwidth := BandwidthUsage{[]Bytes{50000, 100000, 130000, 80000, 90000}}
	temp := CpuTemp{[]Celcius{50, 51, 53, 51, 52}}
	memory := MemoryUsage{[]Bytes{800000, 800000, 810000, 820000, 800000}}
	dashboard := Dashboard{BandwidthUsage: bandwidth, CpuTemp: temp, MemoryUsage: memory}
	fmt.Println(dashboard.AverageBandwidth(), dashboard.AverageCpu(), dashboard.AverageMem())
}
