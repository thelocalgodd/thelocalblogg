/* eslint-disable react/prop-types */

import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";

const BaseLayout = ({ children }) => {
  return (
    <div className="mx-4 md:w-[602px] md:mx-auto">
      {/* header */}
      <Header />

      {/* main */}
      <main>{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default BaseLayout;
