import React from "react";
import logo from "./assets/logo.jpg";
import Layout from "./components/Layout/Layout";
import './assets/styles/app.scss'
import TransferForm from "./components/TransferForm/TransferForm";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <div className="app-wrap">
      <header className="app-header container">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Layout sidebarComponent={<TransferForm/>}>
          <Panel title={'Recent Transactions'}>
              Heey
          </Panel>
      </Layout>
    </div>
  );
}

export default App;
