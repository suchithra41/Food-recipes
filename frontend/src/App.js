import {BrowserRouter as Router , Route, } from 'react-router-dom'
import Header from './Components/Header'
import Index from './screens/Index';
import Footer from './Components/Footer'
import PostInfo from './screens/PostInfo';
import Admin from './screens/Admin';
import Posts from './screens/Posts';
import PostEdit from './screens/PostEdit';
import PostNew from './screens/PostNew';
import Users from './screens/Users';
import UserNew from './screens/UserNew';
import UserEdit from './screens/UserEdit'

function App() {
  return (
  <>
    <Router>
      <Header />
          <Route path='/admin/user/:id' component={UserEdit} />
          <Route path='/admin/user/new' exact component={UserNew} />
          <Route path='/admin/users' exact component={Users} />
          <Route path='/admin/post/' exact component={PostNew} />
          <Route path='/admin/post/:id' exact component={PostEdit} />
          <Route path='/admin/posts' exact component={Posts} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/post/:id' component={PostInfo}/>
          <Route path='/' component={Index} exact />
      <Footer />
    </Router>
  </>
  );
}

export default App;
