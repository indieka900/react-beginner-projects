/* eslint-disable no-unused-vars */
// import './App.css'
import Accordian from './components/accordian'
import { ImageSlider } from './components/imageslider'
import LoadMoreData from './components/load-more_data'
import RandomColor from './components/randomFile'
import StarRating from './components/starRating'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {

  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={8}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10}/> */}
      {/* <LoadMoreData /> */}
      <TreeView menus={menus}/>
    </>
  )
}

export default App
