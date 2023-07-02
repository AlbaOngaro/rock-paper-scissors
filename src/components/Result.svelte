<script lang="ts">
  import { onMount } from "svelte";
  import { writable, type Writable } from "svelte/store";

  import { getRandomOption } from "../utils/getRandomOption";
  import type { Option, Status } from "../types";
  import Hand from "./Hand.svelte";

  let house: Option = null;
  let houseW = writable<Option>(null);

  let status: Status = null;

  onMount(() => {
    setTimeout(() => {
      houseW.set(getRandomOption());
    }, 1000);
  });

  houseW.subscribe((value) => {
    house = value;

    if (value) {
      if (
        (player === "rock" && value === "scissors") ||
        (player === "paper" && value === "rock") ||
        (player === "scissors" && value === "paper")
      ) {
        score.update((curr) => curr + 1);
        status = "victory";
      } else if (player === value) {
        status = "tie";
      } else {
        score.update((curr) => {
          if (curr - 1 > 0) {
            return curr - 1;
          }

          return 0;
        });
        status = "defeat";
      }
    }
  });

  function reset() {
    resetPlayer();
    houseW.set(null);
    status = null;
  }

  export let resetPlayer: () => void;
  export let player: Option;
  export let score: Writable<number>;
</script>

<section class={`grid ${status ? "wide" : ""}`}>
  <h5 class="player">YOU PICKED</h5>
  <article class="choice player">
    <Hand type={player} />
  </article>

  {#if status}
    {#if status === "victory"}
      <div class="status">
        <h3>You Win!</h3>
        <button on:click={reset}>play again</button>
      </div>
    {:else if status === "tie"}
      <div class="status">
        <h3>Tie!</h3>
        <button on:click={reset}>play again</button>
      </div>
    {:else}
      <div class="status">
        <h3>You Lose!</h3>
        <button on:click={reset}>play again</button>
      </div>
    {/if}
  {/if}

  <h5 class="house">THE HOUSE PICKED</h5>
  <article class="choice house">
    {#if house}
      <Hand type={house} />
    {:else}
      <span class="empty" />
    {/if}
  </article>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 700px;
    margin: 0 auto;

    &.wide {
      width: 1400px;
    }

    & h5 {
      color: #fff;
      text-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      font-size: 24px;
      font-family: Barlow Semi Condensed;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 3px;
      text-align: center;
      margin: 0 0 64px;

      &.player {
        grid-row: 1;
        grid-column: 1;
      }

      &.house {
        grid-row: 1;
        grid-column: 3;
      }
    }

    & .choice {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.player {
        grid-row: 2;
        grid-column: 1;
      }

      &.house {
        grid-row: 2;
        grid-column: 3;
      }

      & .empty {
        border-radius: 224.631px;
        background: rgba(0, 0, 0, 0.1);
        width: 224.631px;
        height: 224.631px;
        flex-shrink: 0;
      }
    }

    & .status {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-row: 1 / 3;

      & h3 {
        color: #fff;
        text-align: center;
        text-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
        font-size: 56px;
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 16px;
      }

      & button {
        border-radius: 8px;
        background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
        color: #3b4262;
        font-size: 16px;
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        padding: 16px 64px;
        transition: all 0.3s ease-in-out;

        &:hover {
          cursor: pointer;
          color: #db2e4d;
          font-size: 16px;
          font-family: Barlow Semi Condensed;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 2.5px;
        }
      }
    }
  }
</style>
