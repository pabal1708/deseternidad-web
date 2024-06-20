import React from "react";
import HeaderMobile from "../components/headerMobile";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Gallery from "../components/videoGallery";

const News = () => {
  return (
    <div>

      <Layout>
      <iframe className="iframe-spoty" width="100%" height="315" src="https://www.youtube.com/embed/xNYrlN9koSk?si=OnPe8rzrowYzEZkm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br/>
      <iframe className="iframe-spoty" width="100%" height="315" src="https://www.youtube.com/embed/cLjtBxqMKwI?si=obw5e48dxxzsnQBv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <iframe className="iframe-spoty" width="100%" height="315" src="https://www.youtube.com/embed/FAxbc63qekA?si=IfHZboLHj1TU_VNF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/>
      <iframe className="iframe-spoty" width="100%" height="315" src="https://www.youtube.com/embed/DepQW60zddI?si=34nRVITFUfrm-5_r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Layout>

    </div>
  );
};

export default News;
