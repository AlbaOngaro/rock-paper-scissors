<script lang="ts">
  import Score from "./components/Score.svelte";
  import Hands from "./components/Hands.svelte";
  import Rules from "./components/Rules.svelte";

  let score = 0;

  function onPick(option: "rock" | "paper" | "scissors") {
    alert(option);
  }
</script>

<main>
  <Score {score} />
  <Hands {onPick} />
  <Rules />
</main>

<style>
</style>
