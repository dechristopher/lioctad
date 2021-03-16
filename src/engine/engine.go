package engine

import (
	"fmt"

	"github.com/dechristopher/octad"

	"github.com/dechristopher/lioctad/util"
)

// MoveEval contains the best move and the evaluation of the best sequence
// of moves to the given depth
type MoveEval struct {
	Eval float64
	Move octad.Move
}

// SearchAlg selector for Search function
type SearchAlg int

// MinimaxAB selects minimax with alpha-beta pruning
const MinimaxAB SearchAlg = 0

// NegamaxAB selects negamax with alpha-beta pruning
const NegamaxAB SearchAlg = 1

// Search returns the best move after running a search algorithm
// on the given position to the given depth
func Search(ofen string, depth int, alg SearchAlg) MoveEval {
	o, err := octad.OFEN(ofen)
	if err != nil {
		panic(err)
	}

	situation, err := octad.NewGame(o)
	if err != nil {
		panic(err)
	}

	if alg == MinimaxAB {
		return searchMinimaxAB(situation, depth)
	} else if alg == NegamaxAB {
		return searchNegamaxAB(situation, depth)
	}

	panic("invalid search algorithm")
}

// TestEngine runs a quick test of the engine for a given ofen
// at the given depth and prints all moves and positions
func TestEngine(ofen string, depth int) {
	//ofen := "K3/2kq/4/4 b - - 15 7"
	//ofen := "4/k1KP/4/4 w - - 0 2"
	o, _ := octad.OFEN(ofen)
	game, _ := octad.NewGame(o)

	util.Debug("", game.Position().String())
	fmt.Print(game.Position().Board().Draw())

	for game.Outcome() == octad.NoOutcome {
		move := Search(game.Position().String(), depth, MinimaxAB)
		_ = game.Move(&move.Move)

		util.Debug("", move.Move.String())
		util.Debug("", game.Position().String())
		fmt.Print(game.Position().Board().Draw())
	}

	util.Debug("", game.Outcome().String())
}
