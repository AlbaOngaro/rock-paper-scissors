<script lang="ts">
  export let onPick: (option: "rock" | "paper" | "scissors") => void;
</script>

<article>
  <button on:click={() => onPick("paper")} class="hand paper" />
  <button on:click={() => onPick("scissors")} class="hand scissors" />
  <button on:click={() => onPick("rock")} class="hand rock" />
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

  .hand {
    appearance: none;
    background-color: transparent;
    border: none;
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 300px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    padding: 24px;
    cursor: pointer;
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
      box-shadow: inset 0 10px #babfd4;
    }

    &:hover {
      &::before {
        opacity: 0.05000000074505806;
      }
    }

    &.paper {
      grid-column: 1;
      grid-row: 1;
      background-color: #4664f4;
      box-shadow: 0 10px 0 0 #2a45c2;

      &::after {
        content: url("../assets/images/icon-paper.svg");
      }
    }

    &.scissors {
      grid-column: 3;
      grid-row: 1;
      background-color: #eb9f0e;
      box-shadow: 0 10px 0 0 #c76c1b;

      &::after {
        content: url("../assets/images/icon-scissors.svg");
      }
    }

    &.rock {
      grid-column: 2;
      grid-row: 2;
      background-color: #db2e4d;
      box-shadow: 0 10px 0 0 #9d1634;

      &::after {
        content: url("../assets/images/icon-rock.svg");
      }
    }
  }
</style>
