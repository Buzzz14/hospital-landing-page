import { Metadata } from "next";

import HomeContent from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <>
      <HomeContent />
    </>
  );
};

export default Home;
