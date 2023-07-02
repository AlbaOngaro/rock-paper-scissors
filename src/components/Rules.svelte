<script>
  import iconClose from "../assets/images/icon-close.svg";
  import rulesImage from "../assets/images/image-rules.svg";
  import { onMount } from "svelte";

  let dialog; // Reference to the dialog tag
  onMount(() => {
    dialog = document.querySelector("dialog");
  });

  const showDialogClick = () => {
    try {
      dialog.showModal();
    } catch (e) {
      console.error(e);
    }
  };

  const closeClick = () => {
    dialog.close();
  };
</script>

<button class="primary" on:click={showDialogClick}> Rules </button>
<dialog class="dialog">
  <header>
    <h3 class="title">RULES</h3>
    <button on:click={closeClick}> <img src={iconClose} alt="" /> </button>
  </header>
  <section>
    <img src={rulesImage} alt="Rules" />
  </section>
</dialog>

<style>
  button.primary {
    appearance: none;
    background: transparent;
    border-radius: 8px;
    border: 1px solid #fff;
    width: 128px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-family: Barlow Semi Condensed;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2.5px;
    position: fixed;
    bottom: 32px;
    right: 32px;
    transition: all 0.5s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
      border-radius: 8px;
      border: 1px solid #fff;
      background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
      color: #3b4262;
      text-align: center;
      font-size: 16px;
      font-family: Barlow Semi Condensed;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 2.5px;
    }
  }

  .dialog {
    width: 400px;
    height: 415px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    padding: 32px;

    & header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 48px;

      & .title {
        color: #3b4262;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        margin: 0;
      }

      & button {
        appearance: none;
        background-color: transparent;
        border: none;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:focus {
          outline: none;
        }

        & img {
          width: 19px;
          height: 19px;
        }
      }
    }

    & section {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
