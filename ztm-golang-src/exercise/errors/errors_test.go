package timeparse

import (
	"fmt"
	"testing"
)

const (
	case1s string = "15:22:33"
	case2e string = "15:2a33"
	case3e string = "15:-2:33"
	case4e string = "25:12:33"
	case5e string = "22:62:33"
	case6e string = "22:12:93"
)

func TestParseTime(t *testing.T) {
	table := []struct {
		time string
		ok   bool
	}{
		{case1s, true},
		{case2e, false},
		{case3e, false},
		{case4e, false},
		{case5e, false},
		{case6e, false},
	}
	for _, testCase := range table {
		res, err := StringToTime(testCase.time)
		if testCase.ok && err != nil {
			t.Errorf(err.Error())
		}
		if !testCase.ok && err == nil {
			t.Errorf("uncatched error")
			fmt.Println(res, testCase.time)
		}
	}
}
