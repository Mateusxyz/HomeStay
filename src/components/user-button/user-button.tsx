import type { NextPage } from "next";
import { useState, useCallback } from "react";
import FrameComponent from "../frame-component/frame-component";
import PortalPopup from "../portal-popup/portal-popup";
import styles from "./user-button.module.css";

type UserButtonType = {
  userName?: string;
  profilePic?: string;
};

const UserButton: NextPage<UserButtonType> = ({
  userName = "Seu nome",
  profilePic = "/profilepic@2x.png",
}) => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.userbutton} onClick={openFrame}>
        <img className={styles.profilepicIcon} alt="" src={profilePic} />
        <div className={styles.userinfo}>
          <div className={styles.usermsg}>Hello,</div>
          <div className={styles.username}>{userName}</div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserButton;
