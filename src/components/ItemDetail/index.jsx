import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './itemdetail.module.scss'
import { Link } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';

function ItemDetail({productos, addDot}) {

    const {i} = useParams();


    const producto = productos.find(({id})=> id == i)


    // if(!producto){
    //     return <LoadingButton loading></LoadingButton>
    // }
    
  return (
    <div className={styles.container}>
        <Link to={".." } relative="path">
            <Button size="large" variant="contained" sx={{position:"absolute", m:4,ml:15}} endIcon={<ArrowBackIosIcon />}></Button>
        </Link>
        <div className={styles.cardC}>
            <Card key={producto.id} sx={{maxWidth: 800, borderRadius: 4, p: 2, display: "flex", flexDirection: "column", justifyContent: 'center'}} className={styles.card}>
            <CardMedia
                sx={{ height: 440 }}
                image={`https://augustoiraghi.github.io/ReactECOMJSON/img/${producto.id}.jpg`}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {producto.nombre+" "+producto.marca}
                </Typography>
                <Typography variant="h4" color="text.secondary" align="right">
                {"$"+addDot(producto.precio)}
                </Typography>
                <Typography variant="" color="text.secondary">
                {producto.descripcion}
                </Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <Button variant='outlined' size="small">Añadir al carrito</Button>
            </CardActions>
            </Card>
        </div>
    </div>
  )
}

export default ItemDetail