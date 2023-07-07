import React, { useState } from "react";
import image1 from "../assets/heropic1.webp";
import image2 from "../assets/heropic2.webp";
import image3 from "../assets/heropic3.webp";
import image4 from "../assets/heropic4.webp";

const images = [image1, image2, image3, image4];

const RandomImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("");

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setImageUrl(randomImage);
  };

  // Call getRandomImage when the component mounts
  useState(getRandomImage);

  return (
    <div>
      {/* <img src={imageUrl} alt="Random Image" /> */}
      <img
       
        className="w-full lg:w-[85%] m-auto"
        src={imageUrl}
        alt=""
      />
      {/* <button onClick={getRandomImage}>Reload</button> */}
    </div>
  );
};

export default RandomImage;
