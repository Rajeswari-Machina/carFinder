import CarDetails from "@/components/CarDetails";
export default function CarDetailsPage({ toggleTheme, mode }) {
  return(
    <div sx={{backgroundColor:mode === "dark" ? "black":"white"}}>
      <CarDetails toggleTheme={toggleTheme} mode={mode}/>
    </div>
  )
}