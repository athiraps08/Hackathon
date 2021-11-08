import { Button, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './components/Read'

const Add = () => {
    var [value,setValue]=useForm({dish:"",category:"",ingredients:"",receipe:"",time:"",nutrition:""})

    const readValue=()=>{
        console.log(value)
        axios.post("http://192.168.43.77:8080/addr",value).then(
            (response)=>{
                console.log(response.data)
            }
        )
    }
    return (
        <div > <br></br>
            <Typography style={{fontFamily:"cursive",color:"#440014"}} variant="h6"><strong>Add your recipes here</strong></Typography>
            
            <TextField   variant="filled" onChange={setValue} value={value.dish} name="dish" margin="normal"  label="Enter name of the Dish" fullWidth ></TextField>
            
            <TextField onChange={setValue} style={{borderColor:"#ffffff",borderWidth:"7"}} value={value.category} name="category" margin="normal" label="Category" fullWidth variant="filled" ></TextField>
            <TextField onChange={setValue} value={value.ingredients} name="ingredients" margin="normal" label="Ingredients Required" fullWidth variant="filled"></TextField>
            <TextField onChange={setValue} value={value.receipe} name="receipe" margin="normal" label="Recipe" fullWidth variant="filled"></TextField>
            <TextField onChange={setValue} value={value.time} name="time" margin="normal" label="Time for preparation" fullWidth variant="filled"></TextField>
            <TextField onChange={setValue} value={value.nutrition} name="nutrition" margin="normal" label="Nutrition Information" fullWidth variant="filled"></TextField><br></br>
            <Button onClick={readValue} style={{backgroundColor:"#440014",color:"#ffffff"}}   variant="filled">ADD</Button>
        </div>
    )
}

export default Add
