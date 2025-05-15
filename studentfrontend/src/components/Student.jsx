import * as React from "react";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Container, Paper, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },

      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function Student() {
  const outerTheme = useTheme();
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };

  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [students,setStudents] = React.useState([]);

  const handelClic = (e) => {
    e.preventDefault(); // 1
    const Student = { name, address }; // 2
    console.log(Student); // 3
    fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Student),
    }).then(()=>{
        console.log("New student is added");
    })
  };

  React.useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result);
       })
    
  },[])
  

  return (
    <Container>
      <h1 style={{ color: "blue", textAlign: "center", margin: "20px 0" }}>
        <u>Add Student</u>
      </h1>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, m: 4 }}>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Paper elevation={10} style={paperStyle}>
            <TextField
              label="Enter the name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
          </Paper>
          <Paper elevation={10} style={paperStyle}>
            {" "}
            <TextField
              label="Enter the address"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Paper>
        </ThemeProvider>
      </Box>
      
      <div style={{display: "flex",justifyContent: "center",
    alignItems: "center", flexDirection: "column",gap:7}}>
         <Button style={{width:100}} variant="contained" onClick={handelClic} endIcon={<SendIcon />}>
          Send
        </Button>
       <Paper elevation={3} style={paperStyle}>
        <h1>Student</h1>
        {students.map(student=>(
            <Paper elevation={6} style={paperStyle} key={student.id}>
                Id:{student.id}<br/>
                Name:{student.name}<br/>
                Address:{student.address}

            </Paper>
        ))}
       </Paper>
        
   
      </div>
    </Container>
  );
}
