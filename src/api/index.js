import axios from 'axios';




const url = "https://paailanews.herokuapp.com/api/media"
const category = "https://paailanews.herokuapp.com/api/by-media/category"
const categoryPost = "https://paailanews.herokuapp.com/api/category"
const setting = "https://paailanews.herokuapp.com/api/setting"


export const fetchData = () => axios.get(url);
export const fetchOneData = (id) => axios.get(`${url}/${id}`);
export const createPost = (newPost,token) => axios.post(url,newPost,token);
export const updateMedia = (id, updatedMedia, token) => axios.put(`${url}/${id}`,updatedMedia,token);
export const deleteMedia = (id,token) => axios.delete(`${url}/${id}`,token);

// Category section
export const fetchCategoryData = (id) => axios.get(`${category}/${id}`);
export const fetchOneCategoryData = (id) => axios.get(`${categoryPost}/${id}`);
export const createCategoryPost = (newPost,token) => axios.post(categoryPost,newPost,token);
export const updateCategoryMedia = (id, updatedMedia, token) => axios.put(`${categoryPost}/${id}`,updatedMedia,token);
export const deleteCategoryMedia = (id,token) => axios.delete(`${categoryPost}/${id}`,token);


// settings
export const fetchSettingData = () => axios.get(setting);
export const updateSetting = ( id,updatedMedia, token) => axios.put(`${setting}/${id}`,updatedMedia,token);
