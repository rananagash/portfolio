import { motion, useReducedMotion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const portraitUrl = new URL('../../images/me.jpeg', import.meta.url).href;

const Section=styled.section`padding:120px 0;`;
const Grid=styled.div`display:grid;grid-template-columns:.75fr 1.25fr;gap:80px;align-items:start;@media(max-width:800px){grid-template-columns:1fr;gap:45px;}`;
const Portrait=styled.div`position:sticky;top:110px;@media(max-width:800px){position:relative;top:0;max-width:480px;}`;
const Frame=styled.div`position:relative;padding:14px;background:${theme.colors.lime};border:2px solid ${theme.colors.line};border-radius:30px;box-shadow:9px 10px 0 ${theme.colors.line};transform:rotate(-2deg);img{aspect-ratio:.9;object-fit:cover;object-position:center;border:1.5px solid ${theme.colors.line};border-radius:20px;filter:saturate(.9) contrast(1.03)}`;
const Note=styled.span`position:absolute;right:-18px;bottom:30px;padding:9px 12px;background:${theme.colors.orange};border:1.5px solid ${theme.colors.line};box-shadow:3px 4px 0 ${theme.colors.line};transform:rotate(5deg);font:800 .72rem ${theme.fonts.mono};`;
const Kicker=styled.p`font:800 .78rem ${theme.fonts.mono};text-transform:uppercase;letter-spacing:.1em;color:${theme.colors.blue};`;
const Heading=styled.h2`font-size:clamp(2.8rem,5.6vw,5.2rem);line-height:.96;letter-spacing:-.06em;margin-bottom:28px;`;
const Lead=styled.p`font-size:clamp(1.25rem,2.3vw,1.75rem);line-height:1.35;letter-spacing:-.025em;margin-bottom:28px;`;
const Body=styled.p`font-size:1.05rem;color:${theme.colors.muted};max-width:700px;`;
const Inventory=styled.div`margin-top:50px;border-top:1.5px solid ${theme.colors.line};`;
const Group=styled(motion.div)`display:grid;grid-template-columns:140px 1fr;gap:20px;padding:22px 0;border-bottom:1.5px solid ${theme.colors.line};h3{font:800 .77rem ${theme.fonts.mono};text-transform:uppercase;margin:3px 0;color:${theme.colors.blue}}div{display:flex;flex-wrap:wrap;gap:8px}span{background:${theme.colors.white};border:1px solid ${theme.colors.line};border-radius:9px;padding:7px 10px;font-weight:700;font-size:.85rem}@media(max-width:500px){grid-template-columns:1fr;gap:10px}`;

const groups=[['Languages',['Java','Python','Kotlin','TypeScript','JavaScript','SQL','C']],['Full stack',['React','Next.js','Express.js','Nest.js','PostgreSQL','Supabase']],['AI + data',['Gemini API','Claude','Machine Learning','NLP','Statistics']],['Product',['REST APIs','Authentication','System Design','Responsive UI']]];
const About=()=>{const reduce=useReducedMotion();return <Section id="about"><div className="container"><Grid><Portrait><Frame><img src={portraitUrl} alt="Rana Nagash in downtown Toronto" loading="lazy"/><Note>player one ✦</Note></Frame></Portrait><div><Kicker>About the builder</Kicker><Heading>Curious first.<br/>Technical always.</Heading><Lead>I’m pursuing Computer Science with minors in Mathematics and Statistics at the University of Toronto, graduating in 2028.</Lead><Body>I’ve worked across Android engineering, full-stack product development, machine learning research, and multi-agent AI systems. I also co-lead weekly sessions for 30+ first-year CS students as a UofT peer mentor—teaching Git, web development, and mathematical foundations while helping new students find their footing.</Body><Inventory>{groups.map((g,i)=><Group key={g[0] as string} initial={reduce?false:{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}}><h3>{g[0]}</h3><div>{(g[1] as string[]).map(s=><span key={s}>{s}</span>)}</div></Group>)}</Inventory></div></Grid></div></Section>};
export default About;
