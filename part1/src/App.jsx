const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name ="Maya" age={26+10} />
      Hello name=
      <Footer />
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href ="https://github.com/jonironnvall">jonironnvall</a>
    </div>
  )
}
export default App