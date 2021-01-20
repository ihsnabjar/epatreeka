import React from 'react';
import './PrivacyPolicy.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import {Link } from 'react-router-dom';
import {useStateValue} from '../StateProvider';
// import { auth } from './firebase';

function Header() {
    // const [{basket , user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                 <img className="header__logo" src="https://pngimg.com/uploads/infinity_symbol/infinity_symblo_PNG48.png" alt=""/>
            </Link>
            <div className="header__policy">
            <Link to="/">
            <div className="header__option">
                    <span className="header__optionLineTwo">
                      Privacy_Policy
                    </span>
                </div>
            </Link>

                <Link to="/termsandcondition">
            <div className="header__option">

                    <span className="header__optionLineTwo">
                      TermsAndCondition
                    </span>
                </div>
            </Link>

                <Link to="/disclaimer">
            <div className="header__option">

                    <span className="header__optionLineTwo">
                      Disclaimer
                    </span>
                </div>
            </Link>

                <Link to="/about">
            <div className="header__option">

                    <span className="header__optionLineTwo">
                      About
                    </span>
                </div>
            </Link>

            </div>
            <div className="header__nav">
                {/* <div className="header__option">
                    <span className="header__optionLineTwo">
                       & Orders
                    </span>
                </div> */}
                <Link to="/login"> 
                <div className="header__option">
                    <span className="header__optionLineTwo">
                        Login
                    </span>  
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;