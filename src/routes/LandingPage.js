import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// Configure Firebase.
const config = {
    apiKey: 'AIzaSyCKQrfuJ0qBHJeqa5ol0XYm5oD9tIif_vM',
    authDomain: 'battle-blackjack.firebaseapp.com',
    // ...
  };
  firebase.initializeApp(config);
  
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/Game',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ]
  };

export default function LandingPage(){
    return (
      <div>
        <h1>Battle Blackjack</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        <p>First time? Try the demo instead.</p>
        <div className="instruction-container">
          <p>Battle Blackjack is a game built to teach you how to follow basic blackjack strategy with a fun and exciting twist!</p>
          <p>If this is your first time, click on the demo link above to walk thru the basics</p>
          <p>During the game, if you need help on what to do, just hit the "?" to open a strategy board.</p>
          <p>Selecting the leaderboard link will show how you are doing against fellow players</p>
        </div>
      </div>
    )
};