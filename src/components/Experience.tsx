import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section=styled.section`padding:120px 0;background:${theme.colors.paperStrong};border-bottom:1.5px solid ${theme.colors.line};`;
const Layout=styled.div`display:grid;grid-template-columns:.65fr 1.35fr;gap:70px;@media(max-width:820px){grid-template-columns:1fr;gap:35px;}`;
const Intro=styled.div`position:sticky;top:115px;align-self:start;@media(max-width:820px){position:relative;top:0}small{font:800 .78rem ${theme.fonts.mono};text-transform:uppercase;letter-spacing:.1em;color:${theme.colors.blue}}h2{font-size:clamp(2.8rem,5vw,4.8rem);line-height:.96;letter-spacing:-.06em;margin:15px 0 20px}p{color:${theme.colors.muted};max-width:370px}`;
const Timeline=styled.div`border-top:1.5px solid ${theme.colors.line};`;
const Role=styled.article`display:grid;grid-template-columns:1fr auto;column-gap:20px;padding:28px 0;border-bottom:1.5px solid ${theme.colors.line};h3{font-size:1.4rem;margin:0 0 4px}.company{font-weight:800;color:${theme.colors.blue};margin-bottom:14px}.date{font:700 .72rem ${theme.fonts.mono};text-transform:uppercase;white-space:nowrap;padding-top:5px}.detail{grid-column:1/-1;color:${theme.colors.muted};max-width:760px;margin:0}@media(max-width:550px){grid-template-columns:1fr;.date{grid-row:2;margin:6px 0 14px}.detail{grid-row:4}}`;

const roles=[
 ['Software Engineer Intern','Spruce InfoTech Inc.','Jun. 2026 — Aug. 2026','Building an AI-powered sales automation platform around a 17-agent architecture, Gemini image processing, and faster parallel background analysis.'],
 ['Software Engineer','Bibber Technologies Inc.','Apr. 2025 — May 2026','Shipped Kotlin Android features, 15+ REST endpoints, secure JWT and phone 2FA flows, and a pre-loading system that reduced perceived scroll load time by 80%.'],
 ['Machine Learning Intern','OISE · BalanceAI','Sep. 2025 — Jan. 2026','Supported NLP-based fluency assessment and an ML scoring system that reduced manual grading time by 97% across 500+ responses.'],
];
const Experience=()=> <Section id="experience"><div className="container"><Layout><Intro><small>Experience</small><h2>Learning by shipping.</h2><p>Engineering across mobile, full-stack, machine learning, and agentic systems—with an eye for measurable improvements.</p></Intro><Timeline>{roles.map(r=><Role key={r[0]}><div><h3>{r[0]}</h3><div className="company">{r[1]}</div></div><div className="date">{r[2]}</div><p className="detail">{r[3]}</p></Role>)}</Timeline></Layout></div></Section>;
export default Experience;
