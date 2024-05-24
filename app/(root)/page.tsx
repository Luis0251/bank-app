import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Luis",
    lastName: "QR",
    email: "contact@lushito.dev",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and manage your account and transactions. efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transaccion={[]}
        banks={[{ currentBalance: 130.5 }, { currentBalance: 500.0 }]}
      />
    </section>
  );
};

export default Home;
