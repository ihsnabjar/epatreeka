import React ,{useState,useEffect} from 'react';
import './Setting.css'
import * as api from '../../api/index';
import {useStateValue} from '../../StateProvider';

import {tokenConfig} from '../Auth/AuthToken';
import {useHistory} from 'react-router-dom';


function Setting() {
    const history = useHistory();
    const [{token}] = useStateValue();
    const [postData, setPostData] = useState({app_name: '', disclaimer_link: '', image_url: '', privacy_policy_link: '', rate_us_link: '', share_subject: '', terms_condition_link: '', share_link: ''})

    useEffect(() => {
        if(!token){
            history.push('/login')
          }
        async function getData() {
            const data = await api.fetchSettingData();
          //  console.log('the setting data',data.data.data[0])
           setPostData(data.data.data[0])
            return data;
        }
        getData();
    },[])
    // console.log("i am confused",postData)
    const handleSubmit =  async (e) => {
        e.preventDefault();
        await api.updateSetting(postData.id, postData,tokenConfig(token))
    
      };
    return (
        <div  className='Setting__container'>
        <div className="Setting__title">
            <h3>Settings</h3>
            {/* <Link   to="/dashboard/media"> <div  className="backSpaceIcon"><BackspaceIcon/>  </div>  </Link> */}
        </div> 

        <div className="setting__data">
                    <form className="setting__form__data" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="formC__container">
                        <input type="text"  value={postData.app_name} onChange={(e) => setPostData({...postData, app_name: e.target.value })} />
                        <input type="text"  value={postData.disclaimer_link} onChange={(e) => setPostData({ ...postData, disclaimer_link: e.target.value })} />
                        <input type="text"  value={postData.image_url} onChange={(e) => setPostData({ ...postData, image_url: e.target.value })} />
                        <input type="text"  value={postData.privacy_policy_link} onChange={(e) => setPostData({ ...postData, privacy_policy_link: e.target.value })} />
                        <input type="text"  value={postData.rate_us_link} onChange={(e) => setPostData({ ...postData, rate_us_link: e.target.value })} />
                        <input type="text"  value={postData.share_subject} onChange={(e) => setPostData({ ...postData, share_subject: e.target.value })} />
                        <input type="text"  value={postData.terms_condition_link} onChange={(e) => setPostData({ ...postData, terms_condition_link: e.target.value })} />
                        <input type="text"  value={postData.share_link} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                    </div>
                    <button type="submit" className="Adding__button">Submit</button>
                    </form>
        </div>    
    </div>
    )
}
export default Setting
