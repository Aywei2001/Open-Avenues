import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App(){

  const [data, setData] = useState([])

  useEffect(() => {
     fetch("http://127.0.0.1:5000").then(
        res => res.json()
      ).then(
          data => {
            setData(data)
            console.log("test", data)
          }
      )
  }, [])

  return(
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              // console.log("All the data", d)
              <TableRow>
                <TableCell>{d.name}</TableCell>
                <TableCell align="right">{d.calories}</TableCell>
                <TableCell align="right">{d.fat}</TableCell>
                <TableCell align="right">{d.carbs}</TableCell>
                <TableCell align="right">{d.protien}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
