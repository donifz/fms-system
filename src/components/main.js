import React, { useEffect, useState } from 'react'
import  ArchiveContainer  from './archive/archiveContainer'
import CreateUserContainer from './create-user-modal/createUserContainer'
import IncomeModalContainer from './income-modal/income-modal-container'
import ExpensesModalContainer from './expenses-modal/expenseModalContainer'
import MainPageContainer from './main-content/mainPageContainer'
import SettingsContainer from './settings/settingsContainer'
import TransferModalContainer from './transfer-modal/transferModalContainer'
import { Redirect, Route, Switch } from 'react-router'
import  ProfileContainer  from './profile/profileContainer'
import SiderContainer from './Header/siderContainer'
import { useSelector } from 'react-redux'
import ChartsContainer from './charts/chartsContainer'

const Main = () => {
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


    if(!state){
       return <Redirect to="login"/>
    }

    return (
        <div className="app-wrapper">
            
            <SiderContainer
            modalIncome={modalIncome}
            modalExpenses={modalExpenses}
            modalTransfer={modalTransfer}
          />

          <div className="content">
          <Switch>
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
            </Switch>
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
    )
}

export default Main
