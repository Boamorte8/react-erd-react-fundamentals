// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // const value = event.target.elements.username.value
    const valueRef = inputRef.current.value
    onSubmitUsername(valueRef)
  }

  const handleChangeName = event => {
    const value = event.target.value
    console.log(value)
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleChange = event => {
    const value = event.target.value.toLowerCase()
    setUsername(value)
    onSubmitUsername(value)
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            ref={inputRef}
            onChange={handleChangeName}
          />
        </div>
        {error && <p role="alert">Name must be lower case</p>}
        <button type="submit" disabled={error}>
          Submit
        </button>
      </form> */}
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={error}>
          Submit username
        </button>
      </div>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
