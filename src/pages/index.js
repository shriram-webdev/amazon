import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({produts}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        <Banner/>
        <ProductFeed produts={produts}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch('https://fakestoreapi.com/products'); // Fetch data
  const produts = await response.json(); // Convert response to JSON

  return {
    props: {
      produts, // Pass the JSON data
    },
  };
}