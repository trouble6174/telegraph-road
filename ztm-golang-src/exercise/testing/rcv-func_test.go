//--Summary:
//  Copy your rcv-func solution to this directory and write unit tests.
//
//--Requirements:
//* Write unit tests that ensure:
//  - Health & energy can not go above their maximums
//  - Health & energy can not go below 0
//* If any of your  tests fail, make the necessary corrections
//  in the copy of your rcv-func solution file.
//
//--Notes:
//* Use `go test -v ./exercise/testing` to run these specific tests
package rcv_func

import "testing"

func TestAddHealth(t *testing.T) {
	p := Player{"test", 100, 500, 200, 300}
	p.addHealth(9999)
	if p.health > p.maxHealth {
		t.Errorf("Health or energy can not go above their maximums")
	}
}
