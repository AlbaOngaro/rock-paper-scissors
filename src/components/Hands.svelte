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
    <Hand onClick={onPlayerPick} type={option} />
  {/each}
</article>

<style>
  article {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0 auto;
    width: 476px;
    height: 430px;
    flex-shrink: 0;
    background-image: url("../assets/images/bg-triangle.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
