import type { NextPage } from "next";
import styles from "./listing-card.module.css";
import { useEffect } from "react";

interface ListingProps {
  data: {
    id: number,
    title: string
    location: string,
    guests: number,
    description: string,
    photos: string,
    price: number,
    userId: number
  }
}


const ListingCard: NextPage<ListingProps> = ({data}) => {

  useEffect(() => {
  }, []);

  return (
    <div className={styles.listingcard}>
      <img className={styles.cardpicIcon} alt="" src={`http://localhost:3001/uploads/${JSON.parse(data.photos)[0]}`} />
      <div className={styles.cardinfo}>
        <div className={styles.cardarea}>
          <div className={styles.cardtitle}>
            <div className={styles.title}>{data.location}</div>
            <div className={styles.cardrating}>
              <div className={styles.title}>5,0</div>
              <img
                className={styles.iconcontainer}
                alt=""
                src="/iconcontainer1.svg"
              />
            </div>
          </div>
          <div className={styles.distancetext}>150km away</div>
        </div>
        <div className={styles.cardprice}>
          <span>
            <b>${data.price}</b>
          </span>
          <span className={styles.night}>
            <span>{` `}</span>
            <span className={styles.night1}>night</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
