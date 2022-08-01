import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
      {/* <nav>
        <Link to="add-job">add job</Link>
        <Link to="all-jobs">All jobs</Link>
      <Link to="profile">Profile</Link>
      <Link to="add-job">add job</Link>
      </nav> */}
    </Wrapper>
  );
};

export default SharedLayout;
