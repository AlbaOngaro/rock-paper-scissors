<script lang="ts">
  import rpsLogo from "../assets/images/logo.svg";
  import { state } from "../store";
</script>

<header>
  <img src={rpsLogo} alt="logo" />
  <div class="score">
    <small> SCORE </small>
    <strong>{$state.score}</strong>
  </div>
</header>

<style>
  header {
    width: 700px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.29);
    padding: 16px 24px;
    margin: 48px auto 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .score {
      border-radius: 8px;
      background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      padding: 16px 48px;
      display: flex;
      flex-direction: column;

      & small {
        color: #2a45c2;
        font-size: 16px;
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 2.5px;
      }

      & strong {
        color: #565468;
        text-align: center;
        font-size: 64px;
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
      }
    }
  }
</style>
