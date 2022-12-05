import React from "react";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Hero } from "../components/Hero";
import Box from '@mui/material/Box';

// import "./Home.css";




function Home() {
  const go = (url) => {

  }
     return (
       <main>
         <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
       <Hero />
           <FeaturedProducts /> 
           </Box>   
      </main>
       
    );
}
  export default Home;
  