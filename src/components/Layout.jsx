import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Vendor from "@/components/Vendor";

function Layout({ children }) {
  return (
    <><Header /><Search /><main>{children}</main><Vendor /><Footer /></>
  )
}

export default Layout