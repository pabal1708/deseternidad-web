import React from "react";
import HeaderMobile from "../components/headerMobile";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Gallery from "../components/videoGallery";

const News = () => {
  return (
    <div>
      <HeaderMobile />
      <Layout>
        <Gallery />
      </Layout>
      <Footer />
    </div>
  );
};

export default News;
