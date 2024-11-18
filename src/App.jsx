import './App.css'
import CV from './CV.jsx'

function App() {

  return (
    <>
      <CV></CV>
      <diV className="header">
        <h1>Comment Box</h1>
        <label>Name</label>
        <input placeholder='Enter Name ...'></input>
        <label>Email</label>
        <input placeholder='Enter your email ...'></input>
        <label>Comment</label>
        <input placeholder='Enter your comment ...'></input>
      </diV>
    </>
  )
}

export default App
