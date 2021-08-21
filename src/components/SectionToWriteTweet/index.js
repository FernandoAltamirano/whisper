import React, { useState } from "react";
import {
  SectionToWrite,
  Icons,
  Icon,
  Button,
  Bottom,
  Textarea,
  ImageUploaded,
  ImageContainer,
} from "./styles";

import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { MdTagFaces } from "react-icons/md";
import Close from "../Icons/Close";
import useSelectedImage from "../../hooks/useSelectedImage";
import { useStateValue } from "../../context/ContextProvider";
import { ImageUser } from "../ImageUser";

import Picker from "emoji-picker-react";
import { sendWhisper } from "../../firebase";
import { Link } from "react-router-dom";
const DRAG_STATE = {
  error: -1,
  none: 0,
  drag_over: 1,
  uploading: 2,
  complete: 3,
};
export const SectionToWriteTweet = ({ showModal, handleShowModal }) => {
  const [whisper, setWhisper] = useState("");
  const [{ user }] = useStateValue();
  const [drag, setDrag] = useState(DRAG_STATE.none);
  const [imgURL, chargeImage, setImgURL] = useSelectedImage();
  const [toggleEmojiPicker, setToggleEmojiPicker] = useState(false);
  const [formatError, setFormatError] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    setWhisper(whisper.concat(emojiObject.emoji));
  };

  const sendNewWhisper = ({ content, imgURL = "" }) => {
    const data = {
      username: user.username,
      likes: 0,
      comments: [],
      content,
      imgURL,
    };
    sendWhisper(data).catch((err) => console.log(err));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (imgURL) {
      const data = { content: whisper, imgURL: imgURL };
      await sendNewWhisper(data);
    } else {
      const data = { content: whisper };
      await sendNewWhisper(data);
    }
    setImgURL(null);
    setWhisper("");
    setToggleEmojiPicker(false);
    showModal && handleShowModal(false);
  };

  const handleDragEnter = (ev) => {
    ev.preventDefault();
    setDrag(DRAG_STATE.drag_over);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    setDrag(DRAG_STATE.none);
    const firstFile = ev.dataTransfer.files[0];
    firstFile && chargeImage(firstFile);
  };

  const handleChange = (ev) => {
    const firstFile = ev.target.files[0];
    if (firstFile?.type === "image/jpeg" || firstFile?.type === "image/png")
      chargeImage(firstFile);
    else setFormatError(true);
  };
  const handleChangeGif = (ev) => {
    const firstFile = ev.target.files[0];
    if (firstFile?.type === "image/gif") chargeImage(firstFile);
    else setFormatError(true);
  };

  return (
    <SectionToWrite>
      <Link to={`/profile/${user.username}`}>
        <ImageUser image={user.image} size="40px" />
      </Link>
      <form onSubmit={handleSubmit}>
        <Textarea
          border={drag === DRAG_STATE.drag_over ? true : false}
          placeholder={`What do you think ${user.name} ?`}
          name=""
          id=""
          cols="35"
          rows="4"
          onChange={(ev) => setWhisper(ev.target.value)}
          value={whisper}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
        ></Textarea>
        {imgURL && (
          <ImageUploaded>
            <div onClick={() => setImgURL(null)}>
              <Close color={"black"} />
            </div>
            <ImageContainer>
              <img width="100%" src={imgURL} alt="" />
            </ImageContainer>
          </ImageUploaded>
        )}
        {formatError && (
          <div>
            <div onClick={() => setFormatError(false)}>
              <Close color={"var(--red)"} />
            </div>
            <p style={{ color: "var(--red)", fontSize: 14, margin: "20px 0" }}>
              Formato de archivo invalido
            </p>
          </div>
        )}
        <Bottom>
          <Icons>
            <Icon>
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <AiOutlinePicture color="var(--lightblue)" size="25px" />
              </label>
            </Icon>
            <Icon>
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleChangeGif}
                />
                <AiOutlineFileGif color="var(--lightblue)" size="25px" />
              </label>
            </Icon>
            <Icon>
              <MdTagFaces
                cursor="pointer"
                onClick={() => setToggleEmojiPicker(!toggleEmojiPicker)}
                color={
                  toggleEmojiPicker ? "var(--lightblue2)" : "var(--lightblue)"
                }
                size="25px"
              />
            </Icon>
          </Icons>

          <Button disabled={whisper.length < 1 ? true : false}>Whisper!</Button>
        </Bottom>
        {toggleEmojiPicker && (
          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </form>
    </SectionToWrite>
  );
};
