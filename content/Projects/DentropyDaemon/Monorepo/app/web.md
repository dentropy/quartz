## Data Flow Description

So how does this dashboard render stuff? The backend just consists of nodejs express server proxying whatever elastic queries coming into to an elastic search server with the contents of Keybase imported using the [keybase-binding npm package](https://www.npmjs.com/package/keybase-binding). The frontend has a bunch of different tasks, there is the root component with the app bar along the top. 

The dashboard itself that allows for selecting and rendering data visualizations is a modular component with it's own react context for managing data. The keybase frontend has a root component that renders the left sidebar with a modular graph visualization that can have its own optional additional requests. Every query has to be rendered using the "Render New Graph" button. When the "Render New Graph" button is clicked it reads the Keybase context state and renders whatever the state desires.
