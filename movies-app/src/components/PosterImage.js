export default function PosterImage({ imageUrl, title = '', onClick = {} }) {
  if (imageUrl !== 'N/A') {
    return <img src={imageUrl} alt={title} title={title} onClick={() => onClick()} />;
  }
  return <img src="/no-image.png" alt={title} title={title} />;
}
