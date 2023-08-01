import type { NextPage } from "next";
import UserButton from "../user-button/user-button";
import styles from "./header.module.css";
const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>HomeStay</div>
      <div className={styles.phrase}>Keep calm and travel on.</div>
      <UserButton userName="Rube Baylor" profilePic="/profilepic@2x.png" />
    </div>
  );
};

export default Header;
