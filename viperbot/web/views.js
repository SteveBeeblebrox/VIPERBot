export const index = ({prefix, name, color, servers}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${name}</title>
    <meta charset="UTF-8" />
    <style>
      :root {
        --theme-black: black; 
        --theme-primary: ${color};
        --theme-gray: #36393f;
        --theme-light-gray: #8E9297;
      }
      body {
        background-color: var(--theme-black);
        font-family: Arial, sans-serif;
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
      .flex-horizontal, .flex-vertical {
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
    </style>
  </head>
  <body>
    <div class="flex-horizontal flex-vertical fill-vertical">
      <div class="flex-horizontal flex-fill">
        <img src="avatar.png" />
        <div class="flex-vertical flex-column">
          <h1 class="theme-primary">${prefix + name} is here!</h1>
          <p class="theme-light-gray">Watching <strong>${servers} Server${servers > 1 && 's' || ''}</strong></p>
        </div>
      </div>
    </div>
  </body>
</html>
`