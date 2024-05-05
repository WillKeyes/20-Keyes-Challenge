import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
  <div class="header-left">
    <h1>William Keyes</h1> 
  </div>
  <div class="header-right">
    <a href="#about" class="nav-link">About Me</a>
    <a href="#work" class="nav-link">Work</a>
    <a href="#resume" class="nav-link">Resume</a>
    <a href="#contact" class="nav-link">Contact Me</a>
  </div>
</header>
<div class="about-me" id="about">
    <h2>About Me</h2>
    <p>I am looking for a full time career either in the mechanical engineering world or software engineering </p>
  </div>

<div class="sidebar" id="work">
    <h2>Work</h2>
  </div>

<div class="container">
 
  <div class="row">
    <a href="https://example.com/link1" class="box large">Self Report</a>
  </div>
  
  
  <div class="row">
    <a href="https://example.com/link2" class="box">LED Wall</a>
    <a href="https://example.com/link3" class="box">Calculator</a>
  </div>

  
  <div class="row">
    <a href="https://example.com/link4" class="box">Pastel Puzzles</a>
    <a href="https://example.com/link5" class="box">Run Buddy</a>
  </div>

  <div class="lower-sidebar" id="work">
    <h2>Contact information</h2>
  </div>

<div class="row" id="contact">
  <p>Email: willkeyes01@gmail.com </p>
  <p>Phone: (123) 456-7890</p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">yourprofile</a></p>
  <p>GitHub: <a href="https://www.github.com/yourusername">yourusername</a></p>
</div>

</div>
    </>
  )
}

export default App
