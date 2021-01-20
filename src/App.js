import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route,useHistory} from 'react-router-dom';
import  Media from  './components/Medias/Media';
import  Form2 from  './components/Medias/Form2';
import Sidebar from './components/Sidebar/SideBar';
import ChildrenForm from './components/Children/ChildrenForm';
import ChildrenMedia from './components/Children/ChildrenMedia';
import Setting from './components/Setting/Setting'
import Privacypolicyheader from './policy/PrivacyPolicyHeader';
import Privacy from './policy/Privacy'
import Disclaimer from './policy/Disclaimer';
import Termsandcondition from './policy/TermsAndCondition';
import About from './policy/About';
// import Login from './components/Auth/Login';
import Login from './components/Auth/Login';
import * as api from './api/index';
import {useStateValue} from './StateProvider';


function App() {
  const history = useHistory();
  const [categoryId, setCategoryId] = useState(0)
  const [mediaId, setMediaId] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const [{token}, dispatch] = useStateValue();



  useEffect(() => {
    dispatch(api.fetchCategoryData(mediaId));
  }, [mediaId, categoryId ,dispatch])

  useEffect(() => {
    dispatch(api.fetchCategoryData(categoryId));
  }, [categoryId,dispatch])

  useEffect(() => {
      dispatch(api.fetchData());
  }, [currentId, dispatch])


 

  return (
    <>
       <Router>
            <Switch>
              <Route path="/dashboard" > 
                    <div className="dashboard__sidebar">
                      <Sidebar />
                    </div> 
                    <div className="dashboard__root">
                           <div className="dashboard__form">
                              <Form2 currentId={currentId}  setCurrentId={setCurrentId}/> 
                          </div>
                          <div>
                              <Media setCurrentId={setCurrentId}  setMediaId={setMediaId} />
                          </div>
                    </div>
              </Route>
              
              
             
              <Route path='/setting'>
                  <div className="dashboard__sidebar">
                      <Sidebar />
                   </div> 
                  <div className="dashboard__root">
                    <Setting/>
                  </div>
              </Route>
            

           
              <Route path="/Category">
                  <div className="dashboard__sidebar">
                          <Sidebar />
                  </div> 
                  <div className="dashboard__root">
                        <div className="dashboard__form">
                            <ChildrenForm categoryId={categoryId} setCategoryId={setCategoryId}  mediaId={mediaId}/> 
                        </div>
                        <div>
                            <ChildrenMedia  setCategoryId={setCategoryId}  mediaId={mediaId}  setMediaId={setMediaId} />
                        </div>
                  </div>
                </Route>
              
               
              
              <Route path='/termsandcondition'>
                <Privacypolicyheader/>
                <Termsandcondition />
              </Route>
              <Route path='/disclaimer'>
                <Privacypolicyheader/>
                <Disclaimer />
              </Route>
              <Route path='/about'>
                <Privacypolicyheader/>
                <About />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path='/'>
                <Privacypolicyheader/>
                <Privacy />
              </Route>
            </Switch>
        </Router>
    </>
  );
}
export default App;
