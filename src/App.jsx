import './App.css'
import Navbar from './components/Navbar'
import { createTheme, styled, ThemeProvider, darken, alpha } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios, { Axios } from "axios"
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail';
import LoadingButton from '@mui/lab/LoadingButton';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F2A61E',
    },
    secondary: {
      main: '#ffcc80',
    },
    warning: {
      main: '#ffea00',
    },
    error: {
      main: '#b71c1c',
    },
  },
});

const addDot = (number) =>{
  return number.toLocaleString("es-ES")
}

function App() {

  const URL_API = "https://augustoiraghi.github.io/ReactECOMJSON/productos.json"

  const [productos, setProductos] = useState([])

  const getProducts = async (url) => {
      try{
      const res = await axios(url)
      setProductos(res.data)
      } catch (error){
      console.log("ERROR: "+error)
      }
  }
  useEffect(() => {
      getProducts(URL_API)
  }, [])
  
  if(!productos){
    return <LoadingButton loading></LoadingButton>
}


  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/home" element={<Navigate to="/products" />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/products" element={<Navigate to="/products/a" />} />
          <Route path="/products/a" element={<ItemListContainer addDot={addDot}/>} />
          <Route path="/products/a/:i" element={<ItemDetail productos={productos} addDot={addDot}/>}/>
          <Route path='/categories/:categories' element={<ItemListContainer addDot={addDot}/>}/>
          <Route path="/categories/:categories/:i" element={<ItemDetail productos={productos} addDot={addDot}/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App