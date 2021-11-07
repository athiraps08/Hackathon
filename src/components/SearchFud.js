import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useForm from './Read'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons//Delete';

const SearchFud = () => {
    var [value,setValue]=useForm({dish:""})
    var [data,loadData]=useState([])
    




    const readFn=()=>{
        console.log(value)
        axios.post("http://localhost:8080/search",value).then(
            (response)=>{
                console.log(response.data)
                loadData(
                    data=response.data
                )
            }
        )
        }


   //SEARCH AND DELETE
   const btnDelete=(id)=>{
    const data={"_id":id}
    // console.log(id)
    axios.post("http://localhost:8080/delete",data).then(
        (response)=>{
            console.log(response.data.data)
            alert(response.data.status)
            

        }
    )

}     
    return (
        <div className="Search"><br></br>
            <Typography style={{fontFamily:"cursive",color:"#440014"}} variant="h6"><strong>Search for a Recipe</strong></Typography>
            <TextField onChange={setValue} value={value.dish} fullWidth variant="outlined" label="Enter the dish name" margin="normal" name="dish" ></TextField>
            <Button onClick={readFn} variant="contained" style={{backgroundColor:"#440014",color:"#ffffff"}} fullWidth><b>SEARCH</b></Button>
        
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><b>Dish Name</b></TableCell>
                    <TableCell><b>Category</b> </TableCell>
                    <TableCell><b>Ingredients</b></TableCell>
                    <TableCell><b>Recipe</b></TableCell>
                    <TableCell><b>Time for preparation</b></TableCell>
                    <TableCell><b>Nutritional Information</b></TableCell>
                    <TableCell><b>Operation</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {data.map( (value,index)=>{
                   return <TableRow>
                       <TableCell> {value.dish} </TableCell>
                       <TableCell> {value.category} </TableCell>
                       <TableCell> {value.ingredients} </TableCell>
                       <TableCell> {value.receipe} </TableCell>
                       <TableCell> {value.time} </TableCell>
                       <TableCell> {value.nutrition} </TableCell>
                       <TableCell> <Button onClick={()=>{btnDelete(value._id)}} style={{backgroundColor:"black",color:"#ffffff"}} variant="contained"><DeleteIcon /></Button> </TableCell>

                   </TableRow>
               })}
            </TableBody>
        </Table>
        
        
        </div>
    )
}

export default SearchFud
