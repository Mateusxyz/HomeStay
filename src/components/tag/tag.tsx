import type { NextPage } from "next";
import styles from "./tag.module.css";

type TagType = {
  tagText?: string;
};

const Tag: NextPage<TagType> = ({ tagText = "More Keywords" }) => {
  return (
    <button
      className={styles.tag}
      placeholder="Keywords..."
    >
      <label>{tagText}</label>
    </button>
  );
};

export default Tag;
