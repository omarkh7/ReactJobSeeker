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
          alt='HR'
          height="140"
          img="../../media/development.jpg"
          title='HR'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          HR Department
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Human resources  is the division of a business that is charged with finding as administering employee-benefit programs. responsible for the effective hiring, training, developing,and management of these employees.

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
