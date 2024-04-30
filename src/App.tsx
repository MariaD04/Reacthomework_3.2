import { Listing } from './components/Listing'
import data from './data/etsy'
import './App.css'

function App() {

  return (
    <>
      <Listing items={data} />
    </>
  )
}

export default App
