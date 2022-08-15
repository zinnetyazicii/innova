import React, { useState } from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { deleteOneBook, getAllBooks } from "../../store/actions/bookActions";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const items = [
  {
    src: 'slider/Ketebe-Yayinlari_-ozel950x360.jpg',
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: 'slider/D-R_Payyayinlari_950x360-kampanyais.jpg',
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: 'slider/KATEGORI-haftanin-yayinevi-can950x360.jpg',
    altText: '',
    caption: '',
    key: 3,
  },
];

function Home(args) {
  
  const bookDispatch = useDispatch();

  useEffect(() => {
    bookDispatch(getAllBooks());
  }, []);

 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <stack>
      <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
       
        <Typography color="text.primary">Home</Typography>
      </Breadcrumbs>
    </div>
    <Box sx={{ ml: 100 ,width: 1300,
        height: 300,}}>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
      
    </Carousel>
   </Box>
   <Box  mt={12}>
    <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            
              
                <TableRow >
                  <TableCell><Button><img src='banner/0721_d_u_x_600x560_cep_telefonu_rev.jpg'></img></Button></TableCell>
                  <TableCell><Button><img src='banner/0721_d_u_x_600x560_hoparlor.jpg'></img></Button></TableCell>
                  <TableCell><Button><img src='banner/0721_d_u_x_600x560_kulaklik.jpg'></img></Button></TableCell>
                  <TableCell><Button><img src='banner/0721_d_u_x_600x560_pikap_rev.jpg'></img></Button></TableCell>
                 
                </TableRow>
             
            
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </stack>
  );
}

export default Home;