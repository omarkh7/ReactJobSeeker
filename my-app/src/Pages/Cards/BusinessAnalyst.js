import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt='BusinessAnalyst'
          height="140"
          img="../../media/development.jpg"
          title='BusinessAnalyst'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          BusinessAnalyst Department
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Their job is to identify risk points and develop informed solutions that will save your business time and money. They accomplish that through three main initiatives: systems  
          process analysis, content strategy collaboration.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ApplyNow
        </Button>
     
      </CardActions>
    </Card>
  );
}
