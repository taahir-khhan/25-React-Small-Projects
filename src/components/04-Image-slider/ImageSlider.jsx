import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, pages = 1, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${pages}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handelNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data, Please wait !</div>;
  }

  if (errorMsg !== null) {
    return <div>An error is occured ! {errorMsg}</div>;
  }

  return (
    <div className="w-[700px] h-[450px] flex items-center justify-center relative">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow__left"
      />
      {images && images.length > 0
        ? images.map((imageItem, idx) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === idx
                  ? "current__image"
                  : "current__image hide__image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handelNext}
        className="arrow arrow__right"
      />
      <span className="inidicator">
        {images && images.length
          ? images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={
                  currentSlide === idx
                    ? "current__indicator"
                    : "current__indicator inactive__indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
