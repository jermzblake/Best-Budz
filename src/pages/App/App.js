import React, { Component } from 'react';
import './App.css';
//import React Routes
import { Route, Switch, Redirect } from 'react-router-dom';
// import Pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import EntryFormPage from '../EntryFormPage/EntryFormPage';
import DiaryPage from '../DiaryPage/DiaryPage';
import UpdatePage from '../UpdatePage/UpdatePage';
import LandingPage from '../LandingPage/LandingPage';
//import Components
import NavBar from '../../components/NavBar/NavBar';
// Utilities
import userService from '../../utils/userService';
import diaryService from '../../utils/diaryService';


class App extends Component {
  constructor() {
    super();
    this.state= {
      user: userService.getUser(),
      diary: null,
    }
  }

handleLogout = () => {
  userService.logout();
  this.setState({ user: null, diary: null });
}

handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}

loadDiaries = async() => {
  if(!this.state.user) return
  const diary = await diaryService.index();
  this.setState({ diary });
}

updateDiary = (diary) => {
  this.setState({ diary })
}

  /*--- Lifecycle Methods ---*/

async componentDidMount() {
  return this.loadDiaries();

}

componentDidUpdate () {
  if(!this.state.diary){
      return this.loadDiaries();
  }
}


  render(){
    return (
      <div className="App">
        <header className="">
          B E S T &nbsp;&nbsp;&nbsp; B U D Z
        </header>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={props => 
            <LandingPage
              {...props}
              user={this.state.user}
            />
          }/>
          <Route exact path='/dank-diary' render={props =>
            this.state.user ? 
            <DiaryPage
              {...props}
              user={this.state.user}
              diary={this.state.diary}
              updateDiary={this.updateDiary}
            />
            :
            <Redirect to ='/login' />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignup={this.handleSignupOrLogin}
              user={this.state.user}
              updateDiary={this.updateDiary}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/entry-form' render={({history}) => (
            this.state.user ?
            <EntryFormPage 
            history={history} 
            updateDiary={this.updateDiary}
            />
            :
            <Redirect to ='/login' />
          )}/>
          <Route exact path='/edit/:id' render={props => 
            this.state.user ?
            <UpdatePage 
            {...props}
            user={this.state.user}
            updateDiary={this.updateDiary}
            />
            :
            <Redirect to ='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
