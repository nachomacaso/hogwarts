import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import '../styles/index.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  title: {
    background: '#7280ce',
    color: '#FFF',
    height: '40px',
    paddingLeft: '40px',
    paddingTop: '8px',
  },
  paper: {
    width: '800px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    float: 'right',
  },
  subHeader: {
    width: '100%',
  },
  grid: {
    textAlign: 'left',
  }
});

const houses = [
  {
    value: 'Gryffindor',
    label: 'Gryffindor Tower'
  },
  {
    value: 'Hufflepuff',
    label: 'Hufflepuff Basement'
  },
  {
    value: 'Ravenclaw',
    label: 'Ravenclaw Tower'
  },
  {
    value: 'Slytherin',
    label: 'Slytherin Dungeon'
  },
];

const courseNames = [ 
  "Transfiguration", 
  "Charms", 
  "Potions", 
  "History of Magic", 
  "Defense Against the Dark Arts", 
  "Herbology" 
];

class StudentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      house: 'Gryffindor',
      muggle: 'false',
      courses: [
        { id: "1", name: "Transfiguration", enrolled: 'false' },
        { id: "2", name: "Charms", enrolled: 'false' },
        { id: "3", name: "Potions", enrolled: 'false'},
        { id: "4", name: "History of Magic", enrolled: 'false' },
        { id: "5", name: "Defense Against the Dark Arts", enrolled: 'false' },
        { id: "6", name: "Herbology", enrolled: 'false' }
      ] 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = name => event => {
    if(name === 'muggle') {
      this.setState({ [name]: event.target.checked.toString() });
    }
    else if(courseNames.indexOf(name) > -1) {
      let stateCopy = Object.assign({}, this.state);
      let copyCourses = stateCopy.courses;
      let updatedCourse  = copyCourses.find(x => x.name === name);
      updatedCourse.enrolled = event.target.checked.toString();
      let idx = copyCourses.findIndex(obj => obj.id === updatedCourse.id);
      copyCourses[idx] = updatedCourse;
      this.setState({ courses: copyCourses });
    }
    else {
      this.setState({ [name]: event.target.value });
    }
  }

  handleSubmit() {
    let newStudent = this.state;
    let studentData = localStorage.getItem('students');
    let copyStudents = JSON.parse(studentData);
    let idx = copyStudents[copyStudents.length - 1].id;
    newStudent['id'] = (parseInt(idx) + 1).toString();
    copyStudents.push(newStudent);
    localStorage.setItem('students', JSON.stringify(copyStudents));
  }

  render() {
    const { classes } = this.props;
    const { name, age, house, muggle, courses } = this.state;

    return (
      <div>
        <div>
          <Typography className={classes.title} color="primary" align="left" variant="subtitle1">
            Create A New Student
          </Typography>
        </div>

        <Paper className={classes.paper} elevation={1}>
          <form className={classes.container} noValidate autoComplete="off">
            <div style={{paddingBottom: '20px'}}>
              <Typography variant="h6" color="primary" align="left" style={{width: '100%'}} gutterBottom>
                Enrollment Info
              </Typography>
        
              <TextField
                id="name"
                label="Full Name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="age"
                label="Age"
                className={classes.textField}
                value={age}
                onChange={this.handleChange('age')}
                margin="normal"
                variant="outlined"
                style={{width: '150px'}}
              />

              <TextField
                id="house"
                select
                label="Select a House"
                className={classes.textField}
                value={house}
                onChange={this.handleChange('house')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
                variant="outlined"
              >
                {houses.map(h => (
                  <MenuItem key={h.value} value={h.value}>
                    {h.label}
                  </MenuItem>
                ))}
              </TextField>

              <FormControlLabel
                control={
                  <Switch
                    checked={ muggle === 'true' ? true : false }
                    onChange={this.handleChange('muggle')}
                    value={muggle}
                  />
                }
                label="Muggle-Born?"
                labelPlacement="top"
              />

            </div>
            
            <Divider className={classes.divider} />
            <Typography variant="h6" align="left" color="primary" style={{width: '100%', marginTop: '20px'}} gutterBottom>
              Choose Classes
            </Typography>

            <Grid container spacing={32}>
              {courses.map(course => (
                <Grid item xs={4} className={classes.grid} key={course.id}>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={this.handleChange(course.name)} 
                                value={course.enrolled}
                      />
                    }
                    label={course.name}
                  />
                </Grid>   
              ))}
            </Grid>
            <div style={{width: '100%', padding: '15px'}}>
              <Button variant="contained" color="secondary" onClick={this.handleSubmit} className={classes.button} id="create-submit" href='/students'>
                Create
              </Button>
            </div>

          </form>
          
        </Paper>
      </div>
    );
  }
}

StudentCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentCreate);