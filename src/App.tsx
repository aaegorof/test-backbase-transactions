import React from "react";
import Layout from "./components/Layout/Layout";
import TransferForm from "./components/TransferForm/TransferForm";
import Panel from "./components/Panel/Panel";
import "./assets/styles/app.scss";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import logo from "./assets/logo.jpg";
import backgroundImg from "./assets/background.jpg";
import briefcaseIcon from "./assets/icons/briefcase.png";
import Button from "./components/Button/Button";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const { language: currentLang } = i18n;
  const languages = ["en", "ru"];
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app-wrap">
      <header className="app-header pd-2-v">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{float: 'right'}}>
            {languages.map((lang) => {
              const type = currentLang === lang ? "active" : "default";
              return (
                <Button
                  key={lang}
                  type={type}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang}
                </Button>
              );
            })}
          </div>
        </div>
      </header>
      <Layout sidebarComponent={<TransferForm />} backgroundImg={backgroundImg}>
        <Panel title={t("Recent Transactions")} icon={briefcaseIcon}>
          <TransactionHistory />
        </Panel>
      </Layout>
    </div>
  );
}

export default App;
