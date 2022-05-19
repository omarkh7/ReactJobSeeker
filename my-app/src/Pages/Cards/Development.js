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
          alt='development'
          height="140"
          image="../../media/development.jpg"
          title='development'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Development Department
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The development team is one of the larger departments in the company 
          and in our role of product development we impact a large number of cross-organizational
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
