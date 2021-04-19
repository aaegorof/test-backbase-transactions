import React from "react";
import logo from "./assets/logo.jpg";
import backgroundImg from "./assets/background.jpg";
import Layout from "./components/Layout/Layout";
import TransferForm from "./components/TransferForm/TransferForm";
import Panel from "./components/Panel/Panel";
import "./assets/styles/app.scss";

function App() {
  return (
    <div className="app-wrap">
      <header className="app-header pd-2-v">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <Layout sidebarComponent={<TransferForm />} backgroundImg={backgroundImg}>
        <Panel title={"Recent Transactions"}>Heey</Panel>
      </Layout>
    </div>
  );
}

export default App;
