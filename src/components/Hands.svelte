<script lang="ts">
  import { options } from "../utils/constants";
  import Hand from "./Hand.svelte";
  import type { Option } from "../types";

  import { state } from "../store";

  function onPlayerPick(player: Option) {
    state.update((curr) => ({
      ...curr,
      player,
    }));
  }
</script>

<article>
  {#each options as option}
    <Hand onClick={onPlayerPick} type={option} winner={false} />
  {/each}
</article>

<style>
  article {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: 100%;
    margin: 0 16px;
    max-width: 476px;
    height: 430px;
    flex-shrink: 0;
    background-image: url("../assets/images/bg-pentagon.svg");
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }
</style>
