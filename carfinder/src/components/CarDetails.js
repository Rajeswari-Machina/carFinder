import Box from '@mui/material/Box';
export default  function CarDetails(){
  return (
    <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center"}}>
      <Box>
        car heading
      </Box>
      <Box>
        <h1> Car Image</h1>
      </Box>
      <Box>
        car details 
      </Box>
    </Box>
  )
}