<script lang="ts">
  import Hand from "./Hand.svelte";
  import type { Option } from "../types";

  export let onPlayerPick: (option: Option) => void;
</script>

<article>
  <Hand onClick={onPlayerPick} type="paper" />
  <Hand onClick={onPlayerPick} type="scissors" />
  <Hand onClick={onPlayerPick} type="rock" />
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
