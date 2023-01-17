// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from '../styles/JobCard.module.css';

const JobCard = ({ title, subTitle, quantity }) => {
  // const bull = (
  //   <Box
  //     component='span'
  //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  //   >
  //     •
  //   </Box>
  // );
  return (
    <div className={styles.card}>
      <div className={styles.cardbody}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.subtitle}>
          <p>{subTitle}</p>
        </div>
        <div>
          <h2 className={styles.quant}>{quantity}</h2>
        </div>
        <h3 className={styles.jobs}>Jobs</h3>
      </div>
      <div className={styles.button}>
        <Button>Details</Button>
      </div>
    </div>
    // <div>
    //   <Card sx={{ minWidth: 275 }} variant='outlined'>
    //     <CardContent>
    //       <Typography variant='h5' component='div'>
    //         {title}
    //       </Typography>
    //       <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
    //         {subTitle}
    //       </Typography>

    //       <Typography sx={{ mb: 1.5 }} color='text.secondary'>
    //         {quantity} Jobs
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size='small'>Details</Button>
    //     </CardActions>
    //   </Card>
    // </div>
  );
};

export default JobCard;
