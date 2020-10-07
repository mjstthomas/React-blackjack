import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../AppContext";
import PlayerContainer from "../routes/Game/Player/PlayerContainer";
import images from '../images/images';

it.only("renders without crashing", () => {
    const value = {
    user: {
        id: 4,
        user_name: "Player1",
        user_email: "player1@gmail.com",
        password: "password",
        wins: 72,
        total_games: 86,
        correct: 61,
      },
    image: images[1],
    signedIn: false,
    signInError: "",
    demo: false,
    tutorial: false
    }
  const div = document.createElement("div");
  ReactDOM.render(
      <AppContext.Provider value={value}>
            <BrowserRouter>
                <PlayerContainer playerHealth={100}/>
            </BrowserRouter>
        </AppContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});