import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Smegma Male's Epic Website</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p>
      Just using this website to VIBE.
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
