import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { COMPANY_NAME, COLOR_1, FONT_1, FONT_2, FONT_3 } from '../constants';
import {theme} from './themes';
// const theme = createMuiTheme();


// style={{ width: '100%', textAlign: 'center', margin: '20px auto', fontFamily: fontFamily1 }}
export const Para1 = para => {
  const textFontSize = '20px'
  const fontFamily1 = '"Helvatica", Times, sans-serif'
  const fontFamily2 = '"Roboto", Times, sans-serif'
  return <Typography variant='body1' style={{ textAlign: 'justify', fontSize: textFontSize, fontFamily: fontFamily1 }}>{para.children}</Typography>
}
export const Para2 = para => {
  const textFontSize = '20px'
  const fontFamily1 = '"Helvatica", Times, sans-serif'
  const fontFamily2 = '"Roboto", Times, sans-serif'
  return <Typography variant='body1' style={{ textAlign: 'justify', fontSize: textFontSize, fontFamily: fontFamily2 }}>{para.children}</Typography>
}
// fontSize: textFontSize

export const Para3 = para => {
  const textFontSize = '20px'
  const fontFamily1 = FONT_3
  const fontFamily2 = '"Roboto", Times, sans-serif'
  const stl = para.style
  return <Typography variant='body1' style={{ ...stl, textAlign: 'justify', fontFamily: fontFamily1 }}>{para.children}</Typography>
}
export const Title1 = title => {
  const textFontSize = '45px'
  const fontFamily1 = '"Helvatica", Times, sans-serif'
  const fontFamily2 = '"Roboto", Times, sans-serif'
  return <Typography variant='h3' style={{ fontFamily: fontFamily1 }}> {title.children} </Typography>
}

export const Title2 = para => {
  const textFontSize = '20px'
  const fontFamily1 = '"Helvatica", Times, sans-serif'
  const fontFamily2 = '"Roboto", Times, sans-serif'
  return <Typography variant='body1' style={{ textAlign: 'justify', fontSize: textFontSize, fontFamily: fontFamily2 }}>{para.children}</Typography>
}

export const Title3 = para => {

  const textFontSize = '40px'
  const fontFamily1 = '"Helvatica", Times, sans-serif'
  const fontFamily2 = FONT_2
  return <Typography variant='h4' style={{ textAlign: 'center',  fontFamily: fontFamily2 }}>{para.children}</Typography>
}

export const Title4 = title => {
  const textFontSize = '30px'
  const fontFamily1 = '"Helvatica", Times, sans-serif'
  const fontFamily2 = '"Roboto", Times, sans-serif'
  return <Typography variant='h4' style={{ fontFamily: fontFamily1, fontSize: textFontSize }}> {title.children} </Typography>
}

export const Image1 = src => {
  const source = src.src

  return <div style={{ textAlign: 'center' }} ><img {...src} src={source} style={{ borderRadius: '1px', width: '100%', margin: '2px auto' }} /></div>

}

export const featuredImage1 = src => {
  const source = src.src
  return <div style={{ textAlign: 'center' }} ><img src={source} style={{ borderRadius: '8px', width: '80%', margin: '2px auto' }} /></div>

}

export const Divider2 = (props) => {
  const mar = props.mar
  return (
    <Divider style={{ margin: mar ? mar : '20px 0px 20px 0px' }} />
  )

}