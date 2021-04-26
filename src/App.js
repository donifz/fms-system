import React, { useEffect } from "react";
import "./App.css";

import MainPageContainer from "./components/main-content/mainPageContainer";
import IncomeModalContainer from "./components/income-modal/income-modal-container";
import ExpensesModalContainer from "./components/expenses-modal/expenseModalContainer";
import SiderContainer from "./components/Header/siderContainer";
import { Route } from "react-router-dom";
import SettingsContainer from "./components/settings/settingsContainer";
import TransferModalContainer from "./components/transfer-modal/transferModalContainer";
import ChartsContainer from "./components/charts/chartsContainer";
import LoginContainer from "./components/login/loginContainer";
import ArchiveContainer from "./components/archive/archiveContainer";
import { useSelector } from "react-redux";
import ProfileContainer from "./components/profile/profileContainer";
import CreateUserContainer from "./components/create-user-modal/createUserContainer";

function App(props) {
  let [modalIncomeState, setModalIncome] = React.useState(false);
  let [modalExpensesState, setModalExpenses] = React.useState(false);
  let [modalTransferState, setModalTransferState] = React.useState(false);
  let [createUserState, setcreateUserState] = React.useState(false);

  const modalIncome = () => {
    setModalIncome(!modalIncomeState);
    setModalExpenses(false);
    setModalTransferState(false);
  };
  const modalExpenses = () => {
    setModalExpenses(!modalExpensesState);
    setModalIncome(false);
    setModalTransferState(false);
  };
  const modalTransfer = () => {
    setModalTransferState(!modalTransferState);
    setModalIncome(false);
    setModalExpenses(false);
  };
  const modalCreateUser = () => {
    setcreateUserState(!createUserState);
  };

  let state = useSelector((state) => state.authReducer.entry);

  console.log(state);

  return (
    <>
      {state ? (
        <Route exact path="/" render={() => <LoginContainer />} />
      ) : (
        <div className="app-wrapper">
          <SiderContainer
            modalIncome={modalIncome}
            modalExpenses={modalExpenses}
            modalTransfer={modalTransfer}
          />

          <div className="content">
            <Route exact path="/" render={() => <MainPageContainer />} />
            <Route
              exact
              path="/settings"
              render={() => <SettingsContainer />}
            />
            <Route exact path="/diagrams" render={() => <ChartsContainer />} />
            <Route
              exact
              path="/profile"
              render={() => (
                <ProfileContainer modalCreateUser={modalCreateUser} />
              )}
            />
            <Route exact path="/archive" render={() => <ArchiveContainer />} />
          </div>
          {modalIncomeState && (
            <IncomeModalContainer modalIncome={modalIncome} />
          )}

          {modalExpensesState && (
            <ExpensesModalContainer modalExpenses={modalExpenses} />
          )}

          {modalTransferState && (
            <TransferModalContainer modalTransfer={modalTransfer} />
          )}
          {createUserState && (
            <CreateUserContainer modalCreateUser={modalCreateUser} />
          )}
        </div>
      )}
    </>
  );
}

export default App;
