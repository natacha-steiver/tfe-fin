import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SolutionExList from '../../../container/SolutionExList'
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import '../../../../../assets/sass/app.min.css'

  import '../../../../../assets/sass/768px.min.css'
  import '../../../../../assets/sass/grid.min.css'
import { connect } from 'react-redux';
import TheorieFront from './index';
import { fetchAllTheories } from '../../../../redux/actions';

import { fetchAllSolutions } from '../../../../redux/actions';

import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...other}
    >
    {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
display:"flex",
    wordBreak:"break-all",
width:'100%',
    position:'relative',
    top:"51rem",
    listStylePuce:"none"
  },
  root768: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

    wordBreak:"break-all",
width:'100%',
    position:'relative',
    top:"51rem",
    listStylePuce:"none"
  }
  ,
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth:"11rem",
    alignItems:'center',
    minHeight:"100vh"

  },
  card: {
   width:"15em",
   maxWidth: 345,

 },
 media: {
   height: 140,

 },
}));

function TheorieListe({ theories,onFetch,onFetchSolution,solutions,langages}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [langageNew, setLangage] = useState('python');
  const [titreNew, setTitre] = useState('');

    const [buttonNew, setButton] = useState('show/hide Katas');
    const [visible2New, setVisible2] = useState(true);

  {/* récupérer redux langages!*/}
  //const langages=[{langage:"html"},{langage:"javascript"},{langage:"react"},{langage:"css"},{langage:"python"}]



  return (
    <div >
    <div className={screen.width>768?classes.root:classes.root768}>



          <div className={visible2New==false?"displayNone":""}>
      <div className="col-xs-12 col-md-1 ">
      <Tabs
      justify-content-center
       align-items-xs-center
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      className={classes.tabs}
      >
      {langages.map((ex,index)=>{
        return(
          <li key={ex.index} className="center">







          <Tab align-items-center label={ex.langage} {...a11yProps(index)}          onClick={()=>{  setLangage(ex.langage);}} style={{cursor:"pointer"}} />





          </li>





        );
      })}
      </Tabs>
      </div>
          </div>




    <Router basename="/">

    <div  style={{width:"100%"}}>


          <div  className={visible2New==false?"displayNone":"row"}>
          <h3 style={{textAlign:"center",width:"100%"}} className="titre">Liste des theories</h3>

          {
            theories.filter(theorie=>theorie.langage==langageNew ).map((theorie,index )=> {
              return (

                <div className="align-block col-xs-12 col-md-6 col-xl-3 d-flex justify-content-center">


              <div className="align-block d-flex justify-content-center" style={{width:"100%",top:"1em",margin:"1.5em"}}>


        <Link to={ `/apprendre/theorie/${theorie._id}` } style={{height:"27em"}} onClick={()=>{setVisible2(!visible2New)}}>
             <Card className={classes.card} align-items-xs-center >
                    <CardActionArea style={{height:"27em"}}>
                      <CardMedia
                        className={classes.media}
                        image="./images/solution.png"
                        title={theorie.titre}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <li >

                        {theorie.titre}

                        </li>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {theorie.texte.substring(1,100)} ...
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                  </Card>


                </Link>

          </div>

          </div>
          );
          })}

          </div>




{
  theories.filter(theorie=>theorie.langage==langageNew ).map((theorie,index )=> {

    return (

    <div style={{width:"100%"}}>
    <Switch >




    <Route exact path={ `/apprendre/theorie/${theorie._id}` }   >
    <TheorieFront  theorie={theorie } key={theorie._id}   onFetchSolution={  onFetchSolution} solutions={solutions}/>


    </Route>




    </Switch>
    </div>


        );
      })}


      </div>


      </Router>
      </div>

      </div>
    );
  }


  const mapStateToProps = state => {

    return {
      theories: state.theories,
      solutions:state.solutions,
      langages:state.langages


    };
  };


  const mapDispatchToProps = dispatch => {

    return {


      onFetch:()=>{
        dispatch(fetchAllTheories())

      },
      onFetchSolution:()=>{
        dispatch(fetchAllSolutions())

      }
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TheorieListe);
