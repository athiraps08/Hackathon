import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons//Delete';

const DeleteFud = () => {

var [fudData,setFudData]=useState([])




useEffect(
    ()=>{
        fetchData()
    },[]
)

const fetchData=()=>{
    
    axios.get("http://localhost:8080/view").then(
        (response)=>{
            console.log(response.data)

            setFudData(
                fudData=response.data
            )

        }
    )
}
const deleteBtn=(id)=>{
    const data={"_id":id}
    // console.log(id)
    axios.post("http://localhost:8080/delete",data).then(
        (response)=>{
            console.log(response.data.data)
            alert(response.data.status)
            fetchData()

        }
    )

}



    return (
        <div><br></br>
            <Typography style={{fontFamily:"fantasy",color:"#440014",fontFamily:"cursive"}} variant="h6"><b>Delete items</b></Typography>
            <Table>
                
            <TableHead>
                
                <TableRow>
                
                    <TableCell><strong>Dish Name</strong></TableCell>
                    <TableCell><strong>Category</strong> </TableCell>
                    <TableCell><strong>Ingredients</strong></TableCell>
                    <TableCell><strong>Recipe</strong></TableCell>
                    <TableCell><strong>Time for preparation</strong></TableCell>
                    <TableCell><strong>Nutritional Information</strong></TableCell>
                    <TableCell><strong>Operation</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {fudData.map( (value,index)=>{
                   return <TableRow>
                       
                       <TableCell> {value.dish} </TableCell>
                       <TableCell> {value.category} </TableCell>
                       <TableCell> {value.ingredients} </TableCell>
                       <TableCell> {value.receipe} </TableCell>
                       <TableCell> {value.time} </TableCell>
                       <TableCell> {value.nutrition} </TableCell>
                       <TableCell> <Button onClick={()=>{deleteBtn(value._id)}} style={{backgroundColor:"#440014",color:"#ffffff"}} variant="contained"><DeleteIcon /></Button> </TableCell>

                   </TableRow>
               })}
            </TableBody>
        </Table>
        </div>
    )
}

export default DeleteFud
