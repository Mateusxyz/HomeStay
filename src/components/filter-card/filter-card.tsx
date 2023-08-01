import type { NextPage } from "next";
import styles from "./filter-card.module.css";

type FilterCardType = {
  country?: string;
  city?: string;
  editFilterButtonValue?: string;
};

const FilterCard: NextPage<FilterCardType> = ({
  country = "Brazil",
  city = "São Paulo",
  editFilterButtonValue = "Edit Filter",
}) => {
  return (
    <div className={styles.filtercard}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.carinfo}>
        <div className={styles.cityname}>
          <img
            className={styles.iconcontainer}
            alt=""
            src="/iconcontainer.svg"
          />
          <div className={styles.soPauloBrazilContainer}>
            <p className={styles.soPaulo}>
              <span>
                <b>{city}</b>
                <span className={styles.span}>{` `}</span>
              </span>
            </p>
            <p className={styles.brazil}>{country}</p>
          </div>
        </div>
        <button
          className={styles.editfilterbutton}
          placeholder="Keywords..."
        >
          <label>{editFilterButtonValue}</label>
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
