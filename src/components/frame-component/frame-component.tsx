import type { NextPage } from "next";
import styles from "./frame-component.module.css";

type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({ onClose }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.rubeBaylorParent}>
          <div className={styles.rubeBaylor}>Rube Baylor</div>
          <div className={styles.hello}>Hello,</div>
        </div>
        <b className={styles.logOut}>Log out</b>
        <b className={styles.myProfile}>My profile</b>
        <img className={styles.groupInner} alt="" src="/profilepic@2x.png" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent;
