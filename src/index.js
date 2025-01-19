//crea un servidor web
const express = require('express');
const app = express();
//paquete para rutas
const path = require('path');
const fs = require('fs');
const port = 8000;

const pathFile = path.resolve(__dirname,'../data/users.json')

app.get('/read', (req, res)=>{
    //funciones error first
    fs.readFile(pathFile, (error,data)=>{
        if(error){
            res.send('error al leer el archaivo');
        }else{
            const jsonData = JSON.parse(data);
            res.send(jsonData);
        }
    });
});

app.get('/write', (req, res)=>{

    const newInfo={number:25};
    
    fs.readFile(pathFile, (error,data)=>{
        if(error){
            res.send('error al leer el archaivo');
        }else{
            jsonData = JSON.parse(data);
            const newData = [...jsonData,newInfo]

            fs.writeFile(pathFile,JSON.stringify(newData),(error)=>{
                if(error){
                    res.send('error al guardar la info');
                }
                
                res.send('success');
            });
        }
    });
    
    
});

app.get('/update', (req, res)=>{

    const newInfo={number:25};
    
    fs.readFile(pathFile, (error,data)=>{
        if(error){
            res.send('error al leer el archaivo');
        }else{
            jsonData = JSON.parse(data);
            const newData = [...jsonData,newInfo]

            fs.writeFile(pathFile,JSON.stringify(newData),(error)=>{
                if(error){
                    res.send('error al guardar la info');
                }
                
                res.send('success');
            });
        }
    });
});
    
    
app.get('/update', (req, res)=>{

    const newInfo={number:25};
    
    fs.readFile(pathFile, (error,data)=>{
        if(error){
            res.send('error al leer el archaivo');
        }else{
            jsonData = JSON.parse(data);
            const newData = [...jsonData,newInfo]

            fs.writeFile(pathFile,JSON.stringify(newData),(error)=>{
                if(error){
                    res.send('error al guardar la info');
                }
                
                res.send('success');
            });
        }
    });
    
    
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});


console.log(pathFile);
