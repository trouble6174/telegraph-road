//--Summary:
//  Create a function that can parse time strings into component values.
//
//--Requirements:
//* The function must parse a string into a struct containing:
//  - Hour, minute, and second integer components
//* If parsing fails, then a descriptive error must be returned
//* Write some unit tests to check your work
//  - Run tests with `go test -v ./exercise/errors`
//
//--Notes:
//* Example time string: 14:07:33
//* Use the `strings` package from stdlib to get time components
//* Use the `strconv` package from stdlib to convert strings to ints
//* Use the `errors` package to generate errors

package timeparse

import (
	"fmt"
	"strconv"
	"strings"
)

type Time struct {
	hour, minute, second int
}

type TimeParseError struct {
	msg   string
	input string
}

func (t *TimeParseError) Error() string {
	return fmt.Sprintf("%v: %v", t.msg, t.input)
}

func StringToTime(s string) (Time, error) {
	hms := strings.Split(s, ":")
	t := Time{}
	if len(hms) != 3 {
		return t, &TimeParseError{"invalid time format", s}
	}
	if strings.Contains(s, "-") {
		return t, &TimeParseError{"negative date", s}
	}
	hmsInt := make([]int, 0, 3)
	num := 0
	var err error
	for _, v := range hms {
		num, err = strconv.Atoi(v)
		if err != nil {
			return t, &TimeParseError{"invalid time string", s}
		}
		hmsInt = append(hmsInt, num)
	}
	hour := hmsInt[0]
	minute := hmsInt[1]
	second := hmsInt[2]
	if hour > 23 {
		return t, &TimeParseError{"invalid hour", s}
	}
	if minute > 59 {
		return t, &TimeParseError{"invalid minute", s}
	}
	if second > 59 {
		return t, &TimeParseError{"invalid second", s}
	}
	t.hour = hour
	t.second = second
	t.minute = minute
	return t, nil
}
