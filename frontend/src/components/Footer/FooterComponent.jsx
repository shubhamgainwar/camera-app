import React from "react";
import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <div>
      <Footer container className="bg-gray-900 text-slate-50">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-slate-50">
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="ShubGainwar™" year={2024} />
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;
