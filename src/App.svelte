<script lang="ts">
  import { writable } from "svelte/store";
  import Score from "./components/Score.svelte";
  import Hands from "./components/Hands.svelte";
  import Rules from "./components/Rules.svelte";
  import Result from "./components/Result.svelte";
  import type { Option } from "./types";

  let score = 0;
  const scoreW = writable(0);
  scoreW.subscribe((value) => (score = value));

  let player: Option = null;

  function onPlayerPick(option: Option) {
    player = option;
  }
</script>

<main>
  <Score {score} />

  {#if !player}
    <Hands {onPlayerPick} />
  {:else}
    <Result {player} score={scoreW} resetPlayer={() => (player = null)} />
  {/if}

  <Rules />
</main>

<style>
</style>
