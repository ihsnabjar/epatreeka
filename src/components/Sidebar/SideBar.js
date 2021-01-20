import React, {useEffect} from 'react';
import './Sidebar.css';
import {Link , useHistory} from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import {useStateValue} from '../../StateProvider';
// import {logout} from '../Auth/AuthToken';
function SideBar() {
    const [{token}, dispatch] = useStateValue()
    const history = useHistory();
    useEffect(() => {
        if(!token){
            history.push('/login')
          }
    }, [])
    const logout = () => {
        dispatch({
            type: 'LOGOUT_SUCCESS'
        })
        history.push('/login')
    }
    return (
        <div className="sidebar__root">
            <div className="sidebar__title">
                <Link className="sidebar__dash__link" to="/dashboard">
                    <h2> <DashboardRoundedIcon /> DASHBOARD</h2>
                </Link>
            </div>
            <div className="sidebar__flex">
                <div className="sidebar__content">
                <Link className="sidebar__dash__link" to="/dashboard">
                    <h5>Media</h5>
                </Link>
                </div>
                <div className="sidebar__flexend">
                    
                        <div className="sidebar__setting">
                           <Link to='/setting'>   <h5> <SettingsIcon/></h5></Link>
                        </div>
                        <div className="sidebar__logout">
                            <h5 onClick={logout}><ExitToAppIcon/> </h5>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
