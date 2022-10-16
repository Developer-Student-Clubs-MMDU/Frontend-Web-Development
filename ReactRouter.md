## Implementing React Router ⚛️
Let's get started with the definition and then understand how it works.😃👍

#### Definition
**React Router** utilizes *Client Side Routing*. This is different from traditional routing. In this, the URL is updated from a link click and that too without making another request. This is the reason that it is faster.


#### Prerequisites
- React app set up (You can do this using "create react app")


#### Installation
This can be installed using npm,yarn or pnpm. But you need to have these first and then you can use them to install react-router-dom.
- **npm** :
```
$ npm install react-router-dom@6
```
- **yarn** :
```
$ yarn add react-router-dom@6
```

- **pnpm** :
```
$ pnpm add react-router-dom@6
```
#### Create React App
- In your created react app, move to *index.js* file and then import *BrowserRouter* from *react-router-dom*. To import: 
```
import { BrowserRouter } from "react-router-dom";
```
- Next, wrap *App* component within *BrowserRouter*. 
```
<BrowserRouter>
    <App />
</BrowserRouter>
```

After these steps, your *index.js* may look something like this:
```
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

Now,since it's set up it's time to use this.

Move to *App.js/App.jsx*,import and add *Route* within *Routes*.
```
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>This is how react router works!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```
We can clearly see how the path "/" is directing to the *Home* component and */about* to *About* component. So, we need to update the Link in the *Home* and *About* section in the *App.js*.These are the route components.
```
function Home() {
  return (
    <>     
      <h2>This is the Homepage!</h2>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <h2>This is the about!!</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
```

This was how you can set up routes using react router.
Now, to run the react app simply run:

```
npm start
```
... and voila you will be able to see the routes and navigate to the home and about section!!💃🪩
To learn more about routing, you can refer to the official documentation of react router.
Happy Coding!! 😇