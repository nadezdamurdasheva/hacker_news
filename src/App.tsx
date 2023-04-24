import React from 'react';
/* import './App.css'; */
import Posts from './components/Posts';
import { useGetIdsHackerNewsQuery } from './services/hackerNews';
import {  Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import LoadingPage from './components/LoadingPage';

function App() {
  const { data , error, isLoading } = useGetIdsHackerNewsQuery();
  if (isLoading) {
    return <LoadingPage />
  } 
  
  else if (error) {
    if ('status' in error) {
      //было закомменчено const errorMsg = 'error' in error ? error.error : JSON.stringify(error.data)
      const errorMsg = error.status;

      return (
        <ErrorPage errorMsg={errorMsg}/>
      )
    }
    else {
        return <ErrorPage errorMsg={error.message}/>
    }
  } 
  
  else if(data) {
    return <Posts data={data}/>;
  }

  else {
    return null;
  }
      {/* 1 вариант ошибки {error ? (
        <>Server error</>
      ) */}
      {/* <>Server error</> */}
      {/* <ErrorPage error={error}/> */}
      {/* {error.status} {JSON.stringify(error.data)} */}
      

      
      {/* 1 вариант всего 
      return  (<div>
      {error ? (
        <>Server error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Posts />
      ) : null}
      </div>) */}
}

{/* {data.map(dataItem => (
            <li key={dataItem.id}>{dataItem.by}</li>
          ))} */}
         {/*  {data.map(dataItem => (
            <li key={dataItem}>{dataItem}</li>
          ))} */}

export default App;
