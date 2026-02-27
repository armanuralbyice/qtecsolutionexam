'use client'

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React, { ReactNode } from "react";
import {Navigation} from "@/components/herosection/navigation";
import Jobsection from "@/components/jobsection/jobsection";

const CommonLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className=" min-h-screen ">

        <Navigation />
      <div className="min-h-screen" >{children}</div>
        <Jobsection />
      <Footer />
    </div>
  );
};

export default CommonLayout;
