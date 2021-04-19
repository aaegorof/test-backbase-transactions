import React from "react";
import Layout from "./components/Layout/Layout";
import TransferForm from "./components/TransferForm/TransferForm";
import Panel from "./components/Panel/Panel";
import "./assets/styles/app.scss";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import logo from "./assets/logo.jpg";
import backgroundImg from "./assets/background.jpg";
import briefcaseIcon from './assets/icons/briefcase.png'

function App() {
  return (
    <div className="app-wrap">
      <header className="app-header pd-2-v">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <Layout sidebarComponent={<TransferForm />} backgroundImg={backgroundImg}>
        <Panel title={"Recent Transactions"} icon={briefcaseIcon}>
            <TransactionHistory />
        </Panel>
      </Layout>
    </div>
  );
}

export default App;
