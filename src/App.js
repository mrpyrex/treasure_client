import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Query } from "react-apollo";

import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sermons from "./Pages/Sermons";
import Houses from "./Pages/Houses";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import PostDetails from "./components/Blog/PostDetails";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import { ME_QUERY } from "./queries";
import Loading from "./components/Shared/Loading";
import CreatePost from "./components/Blog/CreatePost";

export const UserContext = createContext();
const App = () => {
  return (
    <Query query={ME_QUERY}>
      {({ data, loading }) => {
        if (loading) return <Loading />;
        const currentUser = data.me;
        console.log(currentUser);

        return (
          <Router>
            <UserContext.Provider value={currentUser}>
              <Navbar currentUser={currentUser} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/messages-and-sermons" component={Sermons} />
                <Route path="/house-care-fellowship" component={Houses} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/create-new-post" component={CreatePost} />
                <Route path="/blog/:id" component={PostDetails} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/*" component={NotFound} />
              </Switch>
              <Footer />
            </UserContext.Provider>
          </Router>
        );
      }}
    </Query>
  );
};

export default App;
