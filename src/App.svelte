<script lang="ts">
  import { derived, get } from "svelte/store";

  import Score from "./components/Score.svelte";
  import Hands from "./components/Hands.svelte";
  import Rules from "./components/Rules.svelte";
  import Result from "./components/Result.svelte";

  import { state } from "./store";
</script>

<main>
  <Score />

  {#if !$state.player}
    <Hands />
  {:else}
    <Result />
  {/if}

  <Rules />
</main>

<style>
</style>
