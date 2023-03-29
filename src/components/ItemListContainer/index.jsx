import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './itemlistcontainer.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function ItemListContainer({addDot}) {

    const URL_API = "https://augustoiraghi.github.io/ReactECOMJSON/productos.json"

    const { categories } = useParams()

    // const filteredProducts = products.filter(element=> element.categoria === categories)

    const [filteredProducts, setFilteredProducts] = useState([])

  
    const getProducts = async (url) => {
        try{
        const res = await axios(url)
        setFilteredProducts(
            res.data.filter(element=> element.categoria.toLowerCase() ===categories),
            )
        filteredProducts.length> 0 ? true : setFilteredProducts(res.data)
        } catch (error){
        }
    }

    useEffect(() => {
        getProducts(URL_API)
    }, [categories]);
    
    // if(!filteredProducts){
    //   return <LoadingButton loading></LoadingButton>
    // }


    return (
        <div className={styles.index}>
            <div className={styles.container}>
            {filteredProducts.map((producto)=> (
            <Card key={producto.id} sx={{maxWidth: 345, borderRadius: 4, p: 2, display: "flex", flexDirection: "column", justifyContent: 'center'}} className={styles.cardS}>
                <CardMedia
                sx={{ height: 150 }}
                image={`https://augustoiraghi.github.io/ReactECOMJSON/img/${producto.id}.jpg`}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {producto.nombre+" "+producto.marca}
                </Typography>
                <Typography variant="h4" color="text.secondary" align="right">
                    {"$"+addDot(producto.precio)}
                </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <Link to={`${producto.id}`}>
                    <Button variant='outlined' size="small">Descripción</Button>
                </Link>
                <Button variant='outlined' size="small">Añadir al carrito</Button>
                </CardActions>
            </Card>
            ))}
        </div>
      </div>
  )
}

export default ItemListContainer