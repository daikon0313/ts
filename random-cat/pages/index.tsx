import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.css";

type Image = {
  url: string;
};

type Props = {
    initialImageUrl: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>One More Cat</button>
      {loading ? (
        <p className={styles.loadingText}>Loading...</p>
      ) : (
        <img src={imageUrl} alt="Cat image" className={styles.catImage}/>
      )}
    </div>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    return {
      props: {
        initialImageUrl: image.url,
      },
    };
  }