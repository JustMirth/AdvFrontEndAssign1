import Navbar from "/components/Navbar.js"
import OnClick from "/components/OnClick.js"
import Counter from "/components/Counter.js"
import Form from "/components/Form.js"

export default function Home() {
  return (
    <>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <h2>On Click Event:</h2>
      <OnClick/>
      <br/>
      <br/>
      <h2>Counter:</h2>
      <Counter/>
      <br/>
      <br/>
      <h2>Validated Form:</h2>
      <Form/>
    </>
  )
}