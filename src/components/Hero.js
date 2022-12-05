import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroContent from './HeroContent';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
  
  const mainFeaturedPost = {
    title: 'Start building your sweet home here',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'MERN FURNITURE',
    linkText: 'Shopping now',
  };
  
  
  const theme = createTheme();

export function Hero() {
    return (
          <HeroContent post={mainFeaturedPost} />

    //     <Wrapper className='section-center'>
    //     <article className='content'>
    //       <h1>
    //         design your <br />
    //         comfort zone
    //       </h1>
    //       <p>
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
    //         sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
    //         aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
    //         alias?
    //       </p>
    //       <Link to='/products' className='btn hero-btn'>
    //         shop now
    //       </Link>
    //     </article>
    //     <article className='img-container'>
    //       <img src={heroBcg} alt='nice table' className='main-img' />
    //       <img src={heroBcg2} alt='person working' className='accent-img' />
    //     </article>
    //   </Wrapper>

    )
}
 
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`