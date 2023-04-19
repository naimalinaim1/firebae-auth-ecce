import React, { useContext } from "react";
import Hero from "../Hero/Hero";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <h3 className="text-info">Loading</h3>
      </div>
    );
  }

  return (
    <main className="w-[96%] max-w-[1280px] mx-auto">
      <section className="mt-8 py-8 grid gap-5 grid-cols-12 justify-between">
        <Hero />
        <div className="col-span-8">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Home;