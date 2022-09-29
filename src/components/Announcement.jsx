import styled from 'styled-components'
import React from 'react'
import {  AnnouncementSharp } from '@material-ui/icons'
const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
`

export const Announcement = () => {
  return (
    <div>
        <Container>
             <AnnouncementSharp/> INDEPENDENCE DAY SALE IS LIVE
        </Container>
    </div>
  )
}
