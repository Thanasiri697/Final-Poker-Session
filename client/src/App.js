import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { Credit } from './components/Credit';


import Login from './components/Login';
import auth from './firebase';


import './App.css';

function App() {

  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };


  return (
    <div className="App">
    {session.isLoggedIn ? (<GlobalProvider>
      <Header />
      <button type="button" className="btn2" onClick={handleLogout}>ออกจากระบบ</button>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
        <Credit />
      </div>
    </GlobalProvider>
) :
     ( <Login setSession = {setSession} /> )}
  </div>
  
  );
}

export default App;
