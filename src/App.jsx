import {
  Accordion,
  ImageSlider,
  RandomColor,
  Revision,
  StarRating,
} from "./components";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <Accordion /> */}

      {/* <RandomColor /> */}

      <StarRating noOfStars={10} />

      {/* <ImageSlider url="https://picsum.photos/v2/list" pages={1} limit={10} /> */}

      {/* <Revision /> */}
    </div>
  );
}

export default App;
