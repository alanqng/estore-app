import React, { useEffect } from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout'
import './App.css';
import Header from './components/header/Header';
import SigninSignup from './pages/signin-signup/SigninSignup';
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectShopCollectionArray } from './redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect';

const App = (props) => {
  const { setCurrentUser, collectionsArray } = props;
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
      // setCurrentUser(user)
      // createUserProfileDocument(user)
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SigninSignup />
          }
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  // collectionsArray: selectShopCollectionArray
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
