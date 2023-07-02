import type { Option } from "../types";

const options: Option[] = ["rock", "paper", "scissors"];

export function getRandomOption() {
	return options[Math.floor(Math.random() * options.length)]
}
