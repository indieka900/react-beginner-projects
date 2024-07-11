/* eslint-disable no-unused-vars */
// import './App.css'
import Accordian from './components/accordian'
import { ImageSlider } from './components/imageslider'
import RandomColor from './components/randomFile'
import StarRating from './components/starRating'

function App() {

  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={8}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10}/>
    </>
  )
}

export default App
