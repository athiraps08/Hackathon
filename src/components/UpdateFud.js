import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'
import SearchIcon from '@material-ui/icons//Search';

const UpdateFud = () => {
   
        var [value,setValue]=useForm({"dish":""})
        var [v1,setVal1]=useForm({dish:"",category:"",ingredients:"",receipe:"",time:"",nutrition:""})
        var [fudData,changefudData]=useState([])
        const readData=()=>{
            console.log(value)
    axios.post("http://localhost:8080/searchUpdt",value).then(
        (response)=>{
            console.log(response.data)
            changefudData(
                fudData=response.data
    
            )
    
        })        
    
    
    
        }
        const updateBtn=(id)=>{
            const data={"_id":id}
            // console.log(id)
            axios.post("http://localhost:8080/update",data).then(
                (response)=>{
                    console.log(response.data.data)
                    alert(response.data.status)
                    
        
                }
            )
        
        }



    return (
        <div>
            <Table>
                <TableRow>
            <TableCell><TextField onChange={setValue} name="dish" value={value.dish} label="search your dish" fullWidth variant="outlined" margin="normal" /></TableCell>
            <TableCell><Button onClick={readData} style={{backgroundColor:"#440014",color:"#ffffff",alignSelf:"center",width:200}}  variant="contained" ><SearchIcon/></Button></TableCell>
            
                </TableRow>
            </Table>

<Table >

     <TableRow>
         <TableCell><b>Enter your Dish</b></TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.dish} name="dish" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell><b>Category</b></TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.category} name="category" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell><b>Ingredients</b></TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.ingredients} name="ingredients" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell><b>Recipe</b></TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.receipe} name="receipe" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell><b>Time</b></TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.time} name="time" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     <TableRow>
         <TableCell><b>Nutrition info</b></TableCell>
         <TableCell><TextField onChange={setVal1} value={v1.nutrition} name="nutrition" variant="outlined" fullWidth margin="normal" /></TableCell>
     </TableRow>
     
     <TableRow>
        <TableCell></TableCell>
         <TableCell><Button  onClick={()=>{updateBtn(value._id)}} style={{backgroundColor:"#440014",color:"#ffffff"}} variant="contained" >Update Your Receipe</Button></TableCell>
     </TableRow>

 </Table>  
        </div>
    )
}

export default UpdateFud
