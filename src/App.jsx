// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import userData from "./components/Profile/userData.json";
import friends from "./components/Friends/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/Friends/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
