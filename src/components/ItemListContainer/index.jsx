import styles from './itemlistcontainer.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function ItemListContainer({productos, addDot}) {
  return (
    <div className={styles.container}>
      {productos.map((producto)=> (
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
  )
}

export default ItemListContainer