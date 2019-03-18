import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import '../styles/index.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    background: '#7280ce',
    color: '#FFF',
    height: '40px',
    paddingLeft: '40px',
    paddingTop: '8px',
  },
  margin : {
    marginLeft: '20px',
    marginTop: '-7px',
    height: '30px',
    width: '30px',
    minHeight: '30px',
  }
};

class StudentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentWillMount = () => {
    let defaultStudents = [
      { 
        id: '1', name: 'Harry Potter', house: 'Gryffindor', age: '11', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'false' },
          { id: "2", name: "Charms", enrolled: 'true' },
          { id: "3", name: "Potions", enrolled: 'true' },
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'false' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ] 
      },
      { 
        id: '2', name: 'Ronald Weasley', house: 'Gryffindor', age: '11', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'true' },
          { id: "2", name: "Charms", enrolled: 'true' },
          { id: "3", name: "Potions", enrolled: 'false'},
          { id: "4", name: "History of Magic", enrolled: 'false' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'true' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ] 
      },
      { 
        id: '3', name: 'Neville Longbottom', house: 'Gryffindor', age: '11', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'true' },
          { id: "2", name: "Charms", enrolled: 'true' },
          { id: "3", name: "Potions", enrolled: 'false'},
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'false' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ] 
      },
      { 
        id: '4', name: 'Hermione Granger', house: 'Gryffindor', age: '11', muggle: 'true',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'true' },
          { id: "2", name: "Charms", enrolled: 'false' },
          { id: "3", name: "Potions", enrolled: 'false'},
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'false' },
          { id: "6", name: "Herbology", enrolled: 'true' }
        ] 
      },
      { 
        id: '5', name: 'Draco Malfoy', house: 'Slytherin', age: '11', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'true' },
          { id: "2", name: "Charms", enrolled: 'false' },
          { id: "3", name: "Potions", enrolled: 'true'},
          { id: "4", name: "History of Magic", enrolled: 'false' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'true' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ]
      },
      { 
        id: '6', name: 'Vincent Crabbe', house: 'Slytherin', age: '11', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'false' },
          { id: "2", name: "Charms", enrolled: 'false' },
          { id: "3", name: "Potions", enrolled: 'true'},
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'true' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ] 
      },
      { 
        id: '7', name: 'Gregory Goyle', house: 'Slytherin', age: '11', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'true' },
          { id: "2", name: "Charms", enrolled: 'true' },
          { id: "3", name: "Potions", enrolled: 'false'},
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'false' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ] 
      },
      { 
        id: '8', name: 'Luna Lovegood', house: 'Ravenclaw', age: '12', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'false' },
          { id: "2", name: "Charms", enrolled: 'false' },
          { id: "3", name: "Potions", enrolled: 'false'},
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'true' },
          { id: "6", name: "Herbology", enrolled: 'true' }
        ] 
      },
      { 
        id: '9', name: 'Tom Riddle', house: 'Slytherin', age: '31', muggle: 'false',
        courses: [
          { id: "1", name: "Transfiguration", enrolled: 'false' },
          { id: "2", name: "Charms", enrolled: 'true' },
          { id: "3", name: "Potions", enrolled: 'true'},
          { id: "4", name: "History of Magic", enrolled: 'true' },
          { id: "5", name: "Defense Against the Dark Arts", enrolled: 'false' },
          { id: "6", name: "Herbology", enrolled: 'false' }
        ] 
      }
    ];

    let defaultCourses = [
      { id: '1', name: 'Transfiguration' }, 
      { id: '2', name: 'Charms' }, 
      { id: '3', name: 'Potions' }, 
      { id: '4', name: 'History of Magic' }, 
      { id: '5', name: 'Defense Against the Dark Arts' }, 
      { id: '6', name: 'Herbology' }
    ];
    
    let studentData = localStorage.getItem('students');
    let classData = localStorage.getItem('courses');
    if(!studentData || !classData) {
        localStorage.setItem('students', JSON.stringify(defaultStudents));
        studentData = localStorage.getItem('students');

        localStorage.setItem('courses', JSON.stringify(defaultCourses));
        classData = localStorage.getItem('courses');
    }

    this.setState({ students: JSON.parse(studentData) });
  }

  handleClick = (id) => {
    let path = `/students/${id}/edit`;
    this.props.history.push(path);
  }

  handleDelete = (id) => {
    let studentData = localStorage.getItem('students');
    let copyStudents = JSON.parse(studentData);
    let idx = copyStudents.findIndex((obj => obj.id === id));
    copyStudents.splice(idx, 1);
    localStorage.setItem('students', JSON.stringify(copyStudents));

    let students = localStorage.getItem('students');

    this.setState({students: JSON.parse(students) })
  }

  formatCourses = (courses) => {
    let text = '';
    courses.forEach((course) => {
      if(course.enrolled === 'true'){
        if(text.length){
          text = text + ', ' + course.name;
        }
        else {
          text += course.name
        }        
      }
    });

    return (
      <TableCell>{text}</TableCell>
    );
  }

  

  render() {
    const { classes } = this.props;
    const { students } = this.state;
    return (
      <div className="App">
        <Typography className={classes.title} color="primary" align="left" variant="subtitle1">
          All Students
          <Link href='/students/create' className={classes.link}>
            <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
              <AddIcon />
            </Fab>
          </Link>
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>House</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Muggle-Born?</TableCell>
                <TableCell>Courses Enrolled</TableCell>
                <TableCell>Edit Info</TableCell>
                <TableCell>Delete Student</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map(student => (
                <TableRow key={student.id}>
                  <TableCell component="th" scope="row">
                    {student.name}
                  </TableCell>
                  <TableCell>{student.house}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.muggle === 'true' ? 'Yes' : 'No'}</TableCell>
                  {this.formatCourses(student.courses)}
                  <TableCell>
                    <Button variant="contained" color="primary" size="small" onClick={() => this.handleClick(student.id)} className={classes.button}>
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary" size="small" onClick={() => this.handleDelete(student.id)} className={classes.button}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StudentIndex);