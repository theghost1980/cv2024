import React from "react";
import ImageExpandable from "../../image-expandable/image-expandable";
import { Icon, IconPathName } from "../icon/icon";
import "./overlay-modal.css";

//TODO add texts into TR & add ES

interface Props {
  onBackClick?: () => void;
}

const OverlayModal = ({ onBackClick }: Props) => {
  const handlePropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="div-overlay-modal" onClick={onBackClick}>
      <div className="overlay-container" onClick={handlePropagation}>
        <h3 className="title-italic text-centered margin-bottom-min">
          Music Gift!
        </h3>
        <p className="content-short">
          The music is one of my greatest passions. I have been performing since
          many years ago. As a way to help others get more closer to
          spirituality, you can access these CD Albums and download them
          competely free!
        </p>
        <ul className="content-list">
          <li className="content-img">
            <div className="div-col-centered">
              <ImageExpandable
                source="./assets/images/music/Bhajananda.png"
                className="modal-img"
              />
              <Icon
                iconPathName={IconPathName.DOWNLOAD}
                width={28}
                height={28}
                color="white"
                onClick={() =>
                  window.open("https://rapidshare.io/2CJj/Bhajananda-Album.zip")
                }
                title="Go to download page"
              />
            </div>
          </li>
          <li className="content-img">
            <div className="div-col-centered">
              <ImageExpandable
                source="./assets/images/music/Inspiration-caratula.jpg"
                className="modal-img"
              />
              <Icon
                iconPathName={IconPathName.DOWNLOAD}
                width={28}
                height={28}
                color="white"
                onClick={() =>
                  window.open(
                    "https://rapidshare.io/2CJl/Digital-Album-Inspiration.zip"
                  )
                }
                title="Go to download page"
              />
            </div>
          </li>
          <li className="content-img">
            <div className="div-col-centered">
              <ImageExpandable
                source="./assets/images/music/Parapeto.png"
                className="modal-img"
              />
              <Icon
                iconPathName={IconPathName.DOWNLOAD}
                width={28}
                height={28}
                color="white"
                onClick={() =>
                  window.open("https://rapidshare.io/2CJk/Parapeto-Album.zip")
                }
                title="Go to download page"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverlayModal;
