import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";
import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  background-color: #fff7f7;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderValue * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  color: ${(props) => props.fontColor};
`;
const Image = styled.img`
  height: 100%;
`;
const Ticket = styled.div`

`

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;
export const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      if (sliderValue > 0) {
        setSliderValue(sliderValue - 1);
      }
    } else {
      if (sliderValue < 2) {
        setSliderValue(sliderValue + 1);
      }
    }

    console.log(sliderValue);
  };
  return (
    <div>
      <Container>
        <Wrapper sliderValue={sliderValue}>
          {sliderItems.map((items) => {
            return (
              <Slide bg={items.bg}  fontColor={items.fontColor} key = {items.id}>
                <ImageContainer>
                  <Image src={items.img} />
                </ImageContainer>
                <InfoContainer>
                  <Title>{items.title}</Title>
                  <Description>{items.desc}</Description>
                  <Button>SHOP NOW</Button>
                </InfoContainer>
              </Slide>
            );
          })}
        </Wrapper>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};
