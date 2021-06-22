export const index = ({prefix, name, color, servers}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${name}</title>
    <meta charset="UTF-8" />
    <style>
      @import url('https://fonts.googleapis.com/css?family=Exo:400,700');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

      :root {
        --theme-black: black;
        --theme-white: white;
        --theme-primary: ${color};
        --theme-gray: #36393f;
        --theme-light-gray: #8E9297;
        --discord-blurple: #5865F2;
      }
      body {
        background-color: var(--theme-black);
        font-family: 'Montserrat', Arial, sans-serif;
        user-select: none;
      }
      .theme-primary {
        color: var(--theme-primary);
      }
      .theme-gray {
        color: var(--theme-gray);
      }
      .theme-light-gray {
        color: var(--theme-light-gray);
      }
      .flex, .flex-horizontal, .flex-vertical {
        display: flex;
      }
      .flex-horizontal {
        justify-content: center;
      }
      .flex-vertical {
        align-items: center;
      }
      .flex-column {
        flex-direction: column;
      }
      .flex-fill {
        flex-grow: 1;
      }
      html, body, .fill-vertical {
        height: 100%;
      }
      html, body {
        margin: 0px;
        padding: 0px;
      }
      .details {
        padding: 1em;
      }
      .title {
        font-family: 'Exo';
        font-size: xxx-large;
        padding-bottom: 4px;
        border-bottom: 4px solid var(--theme-light-gray); 
      }
      .background-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .background-animation span {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
      }

      .background-animation span:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }


      .background-animation span:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }

      .background-animation span:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }

      .background-animation span:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }

      .background-animation span:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }

      .background-animation span:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
      }

      .background-animation span:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
      }

      .background-animation span:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }

      .background-animation span:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }

      .background-animation span:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }

      .auto-select {
        user-select: all;
      }

      @keyframes animate {
        0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      .back {
        z-index: -1;
      }
      .details-content {
        font-family: 2.5em;
      }

      .bot-tag {
        background-color: var(--discord-blurple);
        color: var(--theme-white);
        border-radius: 12px;
        padding: 0px 4px 0px 4px;
        font-family: revert;
      }
    </style>
  </head>
  <body>
  <div class="background-animation back">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="flex-horizontal flex-vertical fill-vertical">
      <div class="flex-horizontal flex-fill">
        <img src="avatar.png" />
        <div class="flex flex-column details theme-light-gray">
          <h1 class="theme-primary title">${name} <span class="bot-tag">BOT</span></h1>
          <div class="details-content">
            <p>Watching <strong>${servers} Server${servers > 1 && 's' || ''}</strong></p>
            <p>Use <strong class="auto-select">${prefix}help</strong> for more info</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`