## Install

`yarn add @aeaton/react-firebase`

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { FirebaseProvider } from '@aeaton/react-firebase'
import App from './App'

// https://console.firebase.google.com -> project -> "Add Firebase to your web app" -> copy config

const config = {
   apiKey: "…",
   authDomain: "…",
   databaseURL: "…",
   projectId: "…",
   storageBucket: "…",
   messagingSenderId: "…"
 }

ReactDOM.render(
  <FirebaseProvider config={config}>
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
)
```

```jsx
import { Auth, User } from '@aeaton/react-firebase'

const App = () => (
  <div>
    <Auth/>
    <User/>
  </div>
)
```
