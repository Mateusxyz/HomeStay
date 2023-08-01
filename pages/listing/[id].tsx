import { GetStaticPaths,GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{
            data:{
                id:1
            }
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
      paths: [{params:{id:"1"}}],
      fallback: false,
    };
  };

interface ListingProps {
    data: {
      id: number
      title: string
      location: string
      guests: number
      description: string
      photos: string
      price: number
      userId: number
    }
  }
const test = (props:ListingProps) => {
    return (
        <div>
            Enter {props.data.id}
        </div>
    );
}


export default test;