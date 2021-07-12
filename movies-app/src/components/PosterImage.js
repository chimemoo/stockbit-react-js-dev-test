export default function PosterImage({ imageUrl }) {
  if (imageUrl !== 'N/A') {
    return <img src={imageUrl} />;
  }
  return <img src="/no-image.png" />;
}
