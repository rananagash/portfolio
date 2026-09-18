import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

const portraitUrl = new URL('../../images/me.jpeg', import.meta.url).href;

const float = keyframes`0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-10px) rotate(2deg)}`;
const blink = keyframes`0%,45%{opacity:1}46%,100%{opacity:.25}`;
const HeroSection = styled.section`min-height: 860px; padding: 150px 0 80px; display: grid; align-items: center; @media(max-width:900px){padding-top:130px; min-height:auto;}`;
const Grid = styled.div`display:grid; grid-template-columns:minmax(0,.9fr) minmax(420px,1.1fr); gap:56px; align-items:center; @media(max-width:900px){grid-template-columns:1fr; gap:30px;}`;
const Eyebrow = styled.div`display:inline-flex; align-items:center; gap:9px; font:700 .78rem ${theme.fonts.mono}; text-transform:uppercase; letter-spacing:.08em; background:${theme.colors.lime}; border:1.5px solid ${theme.colors.line}; border-radius:999px; padding:8px 12px; margin-bottom:22px; &::before{content:'✦';}`;
const Title = styled.h1`font-size:clamp(3.5rem,7vw,7.2rem); line-height:.9; letter-spacing:-.075em; margin-bottom:28px; max-width:760px; span{display:block;color:${theme.colors.blue};}`;
const Copy = styled.p`font-size:clamp(1.05rem,1.7vw,1.3rem); color:${theme.colors.muted}; max-width:590px; margin-bottom:30px; b{color:${theme.colors.ink};}`;
const Actions = styled.div`display:flex; flex-wrap:wrap; gap:12px;`;
const Button = styled.a<{ $secondary?: boolean }>`display:inline-flex;align-items:center;gap:10px;padding:14px 19px;border:1.5px solid ${theme.colors.line};border-radius:12px;font-weight:800;background:${p=>p.$secondary?theme.colors.white:theme.colors.blue};color:${p=>p.$secondary?theme.colors.ink:'white'};box-shadow:3px 4px 0 ${theme.colors.line};transition:.18s transform,.18s box-shadow;&:hover{transform:translate(2px,2px);box-shadow:1px 2px 0 ${theme.colors.line};}`;
const MiniPortrait = styled.div`position:absolute;right:1%;top:-5%;z-index:4;width:max-content;padding:7px;background:${theme.colors.white};border:1.5px solid ${theme.colors.line};border-radius:50%;box-shadow:4px 5px 0 rgba(24,24,23,.16);transform:rotate(4deg);img{width:132px;height:132px;border-radius:50%;object-fit:cover;object-position:50% 58%;border:1.5px solid ${theme.colors.line};display:block}@media(max-width:600px){right:0;top:-3%;img{width:108px;height:108px}}`;
const World = styled(motion.div)`position:relative; aspect-ratio:1.08; min-height:440px; perspective:900px; @media(max-width:520px){min-height:360px;}`;
const Platform = styled.div`position:absolute; inset:11% 5% 8%; border:2px solid ${theme.colors.line}; border-radius:35% 14% 30% 14%; background:linear-gradient(145deg,#dbe3ff,#9db1ff); transform:rotateX(55deg) rotateZ(-9deg); box-shadow:18px 28px 0 rgba(49,87,226,.15),inset 0 0 0 14px rgba(255,255,255,.25);`;
const Console = styled.div`position:absolute;left:31%;top:34%;width:39%;height:27%;background:${theme.colors.ink};border:2px solid ${theme.colors.line};border-radius:15px;transform:skewY(-8deg);box-shadow:9px 11px 0 rgba(0,0,0,.18);&::before{content:'AGENT OS';position:absolute;inset:12px;background:${theme.colors.blue};border-radius:7px;color:white;font:700 clamp(.55rem,1.2vw,.8rem) ${theme.fonts.mono};padding:12px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);}`;
const Person = styled.div`position:absolute;left:44%;top:59%;width:55px;height:83px;background:${theme.colors.orange};border:2px solid ${theme.colors.line};border-radius:18px 18px 10px 10px;box-shadow:5px 6px 0 rgba(0,0,0,.16);&::before{content:'🙂';position:absolute;left:4px;top:-45px;width:45px;height:45px;display:grid;place-items:center;background:#ffd4ad;border:2px solid ${theme.colors.line};border-radius:12px;font-size:1.45rem;}`;
const Agent = styled.div<{ $x:string;$y:string;$color:string;$delay:string }>`position:absolute;left:${p=>p.$x};top:${p=>p.$y};width:65px;height:54px;display:grid;place-items:center;background:${p=>p.$color};border:2px solid ${theme.colors.line};border-radius:16px;box-shadow:5px 6px 0 rgba(0,0,0,.16);font-size:1.55rem;animation:${float} 3s ease-in-out ${p=>p.$delay} infinite;&::after{content:'';position:absolute;right:10px;top:9px;width:7px;height:7px;border-radius:50%;background:white;animation:${blink} 1.4s infinite;}`;
const Bubble = styled.div`position:absolute;right:0;top:27%;max-width:235px;padding:12px 14px;background:${theme.colors.white};border:1.5px solid ${theme.colors.line};border-radius:13px 13px 13px 3px;box-shadow:4px 5px 0 rgba(0,0,0,.12);font:700 clamp(.65rem,1.2vw,.78rem)/1.4 ${theme.fonts.mono};span{color:${theme.colors.blue};}@media(max-width:520px){top:30%;max-width:190px}`;
const Label = styled.div`position:absolute;left:5%;bottom:8%;transform:rotate(-5deg);padding:8px 12px;background:${theme.colors.lime};border:1.5px solid ${theme.colors.line};font:800 .72rem ${theme.fonts.mono};box-shadow:3px 3px 0 ${theme.colors.line};`;

const Hero = () => {
  const reduce = useReducedMotion(); const [tilt,setTilt]=useState({x:0,y:0});
  return <HeroSection id="top"><div className="container"><Grid>
    <motion.div initial={reduce?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
      <Eyebrow>Computer Science @ UofT</Eyebrow><Title>I build software <span>with personality.</span></Title>
      <Copy>Hey, I’m <b>Rana Nagash</b>—a software engineer building full-stack products, intelligent learning tools, and agentic systems for real people.</Copy>
      <Actions><Button href="#work">Explore my work <span>↓</span></Button><Button $secondary href="#contact">Say hello ↓</Button></Actions>
    </motion.div>
    <World aria-label="An isometric AI workspace with Rana and three helper agents" onMouseMove={e=>{if(reduce)return;const r=e.currentTarget.getBoundingClientRect();setTilt({x:(e.clientY-r.top-r.height/2)/45,y:(e.clientX-r.left-r.width/2)/45})}} onMouseLeave={()=>setTilt({x:0,y:0})} animate={{rotateX:-tilt.x,rotateY:tilt.y}} transition={{type:'spring',stiffness:80,damping:18}}>
      <Platform/><Console/><Person/><Agent $x="10%" $y="27%" $color={theme.colors.lime} $delay="0s">⌕</Agent><Agent $x="76%" $y="55%" $color="#fff" $delay="-.8s">⚙</Agent><Agent $x="16%" $y="72%" $color="#ffb49a" $delay="-1.6s">✦</Agent>
      <MiniPortrait><img src={portraitUrl} alt="Rana Nagash"/></MiniPortrait>
      <Bubble><span>builder_agent:</span><br/>prototype ready for review_</Bubble><Label>RANA'S BUILD LAB / 01</Label>
    </World>
  </Grid></div></HeroSection>;
};
export default Hero;
