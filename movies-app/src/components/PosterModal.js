export default function PosterModal({ visible, data, onClose }) {
  if (visible) {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => onClose()}>
            &times;
          </span>
          <br />
          <img src={data.Poster} />
        </div>
      </div>
    );
  }
  return <div />;
}
