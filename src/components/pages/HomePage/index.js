// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components'

const MainBackground = styled.div`
display: grid;
background: #202020;
position: fixed;
height: 100vh;
width: 100vw;

`

const NudeBackground = styled.div`
position: absolute;
left: 138px;
top: 17px;
right: 19px;
bottom: 11px;
background: #FFFFFF;
border-radius: 45px;

`

const Overview = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
position: absolute;
left: 69px;
top: 36px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 52px;
/* identical to box height */
margin: 0;
letter-spacing: 0.02em;

color: #000000;

`

const Portfolio = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
position: absolute;
left: 69px;
top: 117px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 27.5px;
line-height: 41px;
letter-spacing: 0.02em;
margin: 0;
color: #000000;

`

const Market = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
position: absolute;
left: 69px;
top: 477px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 37px;
letter-spacing: 0.02em;
margin: 0;
color: #000000;

`

const Assets = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
position: absolute;
left: 584px;
top: 118px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 25.5px;
line-height: 38px;
letter-spacing: 0.02em;
margin: 0;
color: #000000;

`

const BlueBox = styled.div`
position: absolute;
width: 486px;
height: 244px;
left: 68px;
top: 182px;
margin: 0;
background: #E5F2FE;
border-radius: 24px;
`

const DollarBalance = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
position: absolute;
left: 35px;
top: 26px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 42px;
/* identical to box height */
margin: 0;
letter-spacing: 0.02em;
color: #000000;
`

const PortfolioBalance = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
position: absolute;
left: 36px;
top: 73px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
margin: 0;
letter-spacing: 0.02em;
color: #000000;
`

const PurpleBox = styled.div`
position: absolute;
width: 194px;
height: 244px;
left: 584px;
top: 172px;
margin: 0;
background: #E5DEF0;
border-radius: 24px;

`

const GreenBox = styled.div`
position: absolute;
width: 194px;
height: 244px;
left: 808px;
top: 172px;
margin: 0;
background: #D6EDDA;
border-radius: 24px;

`

const YellowBox = styled.div`
position: absolute;
width: 194px;
height: 244px;
left: 1028px;
top: 172px;
margin: 0;
background: #F6F0D8;
border-radius: 24px;

`

const HomePage = () => {
  return (
    <MainBackground>
      <NudeBackground>
        <Overview>
          Overview
        </Overview>
        <Portfolio>
          Portfolio
        </Portfolio>
        <BlueBox>
          <DollarBalance>
          $ 17 643.41
          </DollarBalance>
          <PortfolioBalance>
          Portfolio Balance
          </PortfolioBalance>
        </BlueBox>
        <PurpleBox>
          
        </PurpleBox>
        <GreenBox>
          
        </GreenBox>
        <YellowBox>
          
        </YellowBox>
        <Assets>
          Your Assets
        </Assets>
        <Market>
          Market is down 0.80%
        </Market>
      </NudeBackground>
    </MainBackground>
  )
}

export default HomePage
