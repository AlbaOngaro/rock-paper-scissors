<script lang="ts">
  import type { Option } from "../types";

  export let type: Option;
  export let winner: boolean;
  export let onClick: (type: Option) => void = null;
</script>

{#if onClick}
  <button
    on:click={() => onClick(type)}
    class={`hand small ${type} ${winner ? "winner" : ""}`}
  />
{:else}
  <button class={`hand big ${type} ${winner ? "winner" : ""}`} />
{/if}

<style>
  .hand {
    appearance: none;
    background-color: transparent;
    border: none;
    flex-shrink: 0;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 300px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    position: relative;

    &::before {
      content: "";
      display: block;
      widows: 120%;
      border-radius: 252px;
      opacity: 0;
      background: #fff;
      position: absolute;
      z-index: -1;
      width: 130%;
      height: 130%;
      left: -15%;
      top: -15%;
      transition: all 0.3s ease-in-out;
    }

    &::after {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      border-radius: 300px;
      background-color: white;
      box-shadow: inset 0 4px #babfd4;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 40%;
    }

    &.small {
      width: 145px;
      height: 145px;
      padding: 16px;
      align-self: center;

      &:hover {
        cursor: pointer;

        &::before {
          opacity: 0.05000000074505806;
        }
      }
    }

    &.big {
      width: 290px;
      height: 290px;
      padding: 32px;

      &::after {
        background-size: 40%;
      }
    }

    &.rock {
      grid-column: 3;
      grid-row: 1;
      background-color: #db2e4d;
      box-shadow: 0 4px 0 0 #9d1634;

      &.winner {
        box-shadow: 0 4px 0 0 #9d1634, 0 0 0 65px rgb(255 255 255 / 5%),
          0 0 0 135px rgb(255 255 255 / 5%), 0 0 0 218px rgb(255 255 255 / 5%);
      }

      &.small {
        justify-self: center;
      }

      &::after {
        content: "";
        background-image: url("../assets/images/icon-rock.svg");
      }
    }

    &.paper {
      grid-column: 1;
      grid-row: 2;
      background-color: #4664f4;
      box-shadow: 0 4px 0 0 #2a45c2;

      &.winner {
        box-shadow: 0 4px 0 0 #2a45c2, 0 0 0 65px rgb(255 255 255 / 5%),
          0 0 0 135px rgb(255 255 255 / 5%), 0 0 0 218px rgb(255 255 255 / 5%);
      }

      &.small {
        justify-self: flex-start;
        align-self: flex-start;
        margin-top: -36px;
      }

      &::after {
        content: "";
        background-image: url("../assets/images/icon-paper.svg");
      }
    }

    &.scissors {
      grid-column: 5;
      grid-row: 2;
      background-color: #eb9f0e;
      box-shadow: 0 4px 0 0 #c76c1b;

      &.winner {
        box-shadow: 0 4px 0 0 #c76c1b, 0 0 0 65px rgb(255 255 255 / 5%),
          0 0 0 135px rgb(255 255 255 / 5%), 0 0 0 218px rgb(255 255 255 / 5%);
      }

      &.small {
        justify-self: flex-end;
        align-self: flex-start;
        margin-top: -36px;
      }

      &::after {
        content: "";
        background-image: url("../assets/images/icon-scissors.svg");
      }
    }

    &.spock {
      grid-column: 2;
      grid-row: 3;
      background-color: #3fb7cd;
      box-shadow: 0 4px 0 0 #2d8dab;

      &.winner {
        box-shadow: 0 4px 0 0 #2d8dab, 0 0 0 65px rgb(255 255 255 / 5%),
          0 0 0 135px rgb(255 255 255 / 5%), 0 0 0 218px rgb(255 255 255 / 5%);
      }

      &.small {
        justify-self: center;
      }

      &::after {
        content: "";
        background-image: url("../assets/images/icon-spock.svg");
      }
    }

    &.lizard {
      grid-column: 4;
      grid-row: 3;
      background-color: #834ee3;
      box-shadow: 0 4px 0 0 #5f37a8;

      &.winner {
        box-shadow: 0 4px 0 0 #5f37a8, 0 0 0 65px rgb(255 255 255 / 5%),
          0 0 0 135px rgb(255 255 255 / 5%), 0 0 0 218px rgb(255 255 255 / 5%);
      }

      &.small {
        justify-self: center;
      }

      &::after {
        content: "";
        background-image: url("../assets/images/icon-lizard.svg");
      }
    }
  }
</style>
