import React, {useState,useEffect} from 'react';
import {CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link, useHistory } from 'react-router-dom';
import {tokenConfig} from '../Auth/AuthToken';




import {useStateValue} from '../../StateProvider';
import * as api from '../../api/index';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




  export default function BasicTable({setCurrentId , setMediaId}) {


  const classes = useStyles();
  const [{media}, dispatch] = useStateValue();
  const [{token} , setUser] = useStateValue();
  // console.log('user iser user',token)
  const [mediaList, setmedia] = useState([]);
  const history = useHistory();

 

  useEffect(() =>  {
    if(!token){
      history.push('/login')
    }
    async function getData(){
    const data = await api.fetchData();
   
    setmedia(data.data.data)
    return data.data;
    }
    getData();
  }, [mediaList,media]);

 
  const onRemove = (id) =>  async() =>{
    await await api.deleteMedia(id, tokenConfig(token))
    dispatch({
      type:'DEL_MEDIA',
      id: id,
    });
  };
    const rows = !mediaList.length ? 'Loading.....' : mediaList.map(onemedia => (
      <TableRow key={onemedia.id}>
              <TableCell component="th"  scope="row">{onemedia.name}</TableCell>
              <TableCell align="center">
              <img src={onemedia.image_url} alt="shoes" height='25px' width='70px'/>
              </TableCell>
              <TableCell align="center">{onemedia.type}</TableCell>
              <TableCell align="right">
                <div className="action__button">
                  
                <Link to='/Category'>
                  <button onClick={() => setMediaId(onemedia.id)}>Category</button>
              </Link>
                  <button onClick={() => setCurrentId(onemedia.id)}>update</button>
                  <button onClick={onRemove(onemedia.id)} >delete</button>
                </div>
              </TableCell>
       </TableRow>
    )) 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Nat/Reg</TableCell>
            {/* <TableCell align="right"> <pre>{JSON.stringify(token, null, 2)}</pre> </TableCell> */}
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}

