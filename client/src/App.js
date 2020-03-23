import React, { useState } from "react";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route
        path="/movies/:id"
        render={props => {
          const { id } = props.match.params;
          return <div>this is {id}</div>;
        }}
      >
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
