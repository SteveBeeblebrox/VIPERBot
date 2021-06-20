export const index = ({prefix, name, color}) => `
<!DOCTYPE html>
<html>
  <head lang="en">
    <title>${name}</title>
  </head>
  <body>
    <h1>${prefix + name} is here!</h1>
  </body>
</html>
`