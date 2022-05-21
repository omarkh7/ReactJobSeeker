import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../Css/banner.css";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import Department from "./Cards/Cards";
import axios from "axios";
function Home() {
  const [cards, setCards] = useState([]);
  async function fetchData(){
    const res=await axios.get('https://localhost:7072/GetAllDepartments');
    let deps=[];
    res.data.forEach(department => {
      deps.push({id:department.departmentSID,imgTitle:department.departmentName,imgUrl:department.image,
        title:department.departmentName+" Department",description:department.description
      })
    });
    setCards(deps)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <img src={"media/banner.jpg"} className="banner1" alt="Banner" />
      </Box>
      <br></br>
      <Typography variant="h3" className="row">
        Getting hired just got easy
      </Typography>

      <div className="row1">
        <Grid container style={{rowGap:"1em"}}>
          {cards&&cards.length>0&&cards.map((card)=>(
            <Grid item xs={4}>
            <Department imgTitle={card.imgTitle} imgUrl={card.imgUrl} title={card.title} description={card.description} id={card.id}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
