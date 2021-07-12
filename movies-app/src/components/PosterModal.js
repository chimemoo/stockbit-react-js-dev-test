export default function PosterModal({ visible, data, onClose }) {
  if (visible) {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => onClose()}>
            &times;
          </span>
          <img className="modal-poster-image" src={data.Poster} alt={data?.Title} title={data?.Title} />
        </div>
      </div>
    );
  }
  return <div />;
}
