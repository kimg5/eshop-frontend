import React from "react";
import "./Home.css";

import Button from '@mui/material/Button';

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
  