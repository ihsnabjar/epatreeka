import React, {useState, useEffect} from 'react';
import './ChildrenForm.css';
import * as api from '../../api/index.js';
import {useStateValue} from '../../StateProvider';
import {Link,useHistory } from 'react-router-dom';
import BackspaceIcon from '@material-ui/icons/Backspace';
import {tokenConfig} from '../Auth/AuthToken';



function Form2({categoryId, setCategoryId, mediaId}) {

const history = useHistory();
  // console.log('the media id from form', mediaId)
  if(!mediaId) {
    history.push('/dashboard')
  }
 
  const [{media,token}, dispatch] = useStateValue();
  const [postData, setPostData] = useState({ media_id:mediaId ,title: '',news_url: ''});
  
  const clear = () => {
    setCategoryId (0);
    setPostData({media_id: mediaId, title: '', news_url : ''});
  };
 
  useEffect(() =>  {
    if(categoryId) {
    async function getOneCategoryData(){
    const data = await api.fetchOneCategoryData(categoryId);
    setPostData(data.data)
    return data;
    }
    getOneCategoryData();
  }
  }, [categoryId]);


  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (categoryId === 0) {
        console.log(postData)
        await api.createCategoryPost(postData,tokenConfig(token));
        dispatch({
            type : 'ADD_MEDIA',
            media: postData,
        })
        clear();
     
    } else {
        await api.updateCategoryMedia(categoryId, postData,tokenConfig(token))
      clear();
    }
  };

    return (
        <div  className='Adding__container'>
            <div className="Adding__title">
                <h3>Add Category To </h3>
                <Link   to="/dashboard"> <div  className="backSpaceIcon"><BackspaceIcon/>  </div>  </Link>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="formC__container">
                    <input type="text" placeholder='Category eg.(sports..)' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <input type="text"  placeholder='Http-Url' value={postData.news_url} onChange={(e) => setPostData({ ...postData, news_url: e.target.value })} />
                </div>
                <button type="submit" className="Adding__button">Submit</button>
            </form>
        </div>
    )
}

export default Form2
