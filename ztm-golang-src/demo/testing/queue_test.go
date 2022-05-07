package queue

import (
	"fmt"
	"testing"
)

func TestAddQueue(t *testing.T) {
	q := New(3)
	fmt.Println(q.items)
	for i := 0; i < 3; i++ {
		if len(q.items) != i {
			t.Errorf("Incorrect count: %v, want %v", len(q.items), i)
		}
		if !q.Append(i) {
			t.Errorf("failed to append item %v to queue", i)
		}
	}
	if q.Append(4) {
		t.Errorf("should not able to add to a full queue")
	}
}

func TestNext(t *testing.T) {
	q := New(3)
	for i := 0; i < 3; i++ {
		q.Append(i)
	}
	for i := 0; i < 3; i++ {
		item, ok := q.Next()
		if !ok {
			t.Errorf("ffffffffffffffff")
		}
		if item != i {
			t.Errorf("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")
		}
	}
}
