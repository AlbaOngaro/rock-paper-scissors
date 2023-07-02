import { derived, writable, type Writable } from "svelte/store";

import type { Option, Status } from "../types";

export type State = {
  score: number;
  house: Option | null;
  player: Option | null;
};

export const state = writable<State>({
  score: 0,
  house: null,
  player: null,
});

export const status = derived<Writable<State>, Status>(state, ($state) => {
	if (!$state.house || !$state.player) {
		return null;
	}

	if (
		($state.player === "rock" && ["scissors", "lizard"].includes($state.house)) ||
		($state.player === "paper" && ["rock", "spock"].includes($state.house)) ||
		($state.player === "scissors" && ["paper", "lizard"].includes($state.house)) ||
		($state.player === "lizard" && ["spock", "paper"].includes($state.house)) ||
		($state.player === "spock" && ["scissors", "rock"].includes($state.house))
	) {
		return "victory";
	}

	if ($state.player === $state.house) {
		return "tie";
	}

	return "defeat";
});

status.subscribe((value) => {
	if (value === 'victory') {
		return state.update(curr => ({
			...curr,
			score: curr.score + 1,
		}));
	}

	if (value === 'defeat') {
		return state.update(curr => {
			if (curr.score - 1 >= 0) {
				return {
					...curr,
					score: curr.score - 1
				}
			}

			return curr;
		})
	}
});