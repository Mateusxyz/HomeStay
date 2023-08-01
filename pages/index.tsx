import type { NextPage } from "next";
import Header from "../src/components/header/header";
import Tag from "../src/components/tag/tag";
import FilterCard from "../src/components/filter-card/filter-card";
import ListingCard from "../src/components/listing-card/listing-card";
import styles from "./index.module.css";

export async function getServerSideProps(context:NextPage){
  const res = await fetch(process.env.NEXT_PUBLIC_APP_URL);
  if (!res) {
    return {notFound:true};
  }
  const data = await res.json();
  return {props:{data}}
}

interface MainProps {
  data: any; // Substitua 'any' pelo tipo adequado para a prop 'data'
}

const Main: NextPage<MainProps> = ({data}) => {
  return (
    <div className={styles.main}>
      <Header />
      {data.price}
      <div className={styles.tagcontainer}>
        <Tag tagText="More Keywords" />
      </div>
      <div className={styles.cardContainter}>
        <FilterCard
          country="Brazil"
          city="São Paulo"
          editFilterButtonValue="Edit Filter"
        />
        {data.map((element:any, i:number) => 
          <ListingCard data={element} key={i} />
        )}
      </div>
    </div>
  );
};

export default Main;
