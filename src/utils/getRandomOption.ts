import { options } from "./constants";

export function getRandomOption() {
  return options[Math.floor(Math.random() * options.length)];
}
