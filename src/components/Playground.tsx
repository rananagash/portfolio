import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../styles/theme';

type CaseStudy = {
  id: string;
  number: string;
  title: string;
  context: string;
  proof: string;
  problem: string;
  stages: { label: string; detail: string }[];
  decision: string;
  tradeoff: string;
  guardrail: string;
  result: string;
  tools: string[];
};

const cases: CaseStudy[] = [
  {
    id: 'agents', number: '01', title: 'Multi-agent sales automation', context: 'Spruce InfoTech · production engineering', proof: '17-agent architecture',
    problem: 'Lead prospecting and personalized outreach required too much sequential research and campaign preparation.',
    stages: [
      { label: 'Orchestrate', detail: 'Route a prospecting task to the right specialist agents.' },
      { label: 'Research', detail: 'LinkedIn crawling agents gather and organize lead context.' },
      { label: 'Personalize', detail: 'Campaign agents turn context into targeted outreach.' },
      { label: 'Review', detail: 'Keep final decisions visible and reviewable before action.' },
    ],
    decision: 'Use specialized agents with bounded responsibilities instead of one oversized prompt.',
    tradeoff: 'More coordination and observability work, in exchange for clearer ownership and parallel execution.',
    guardrail: 'Human review remains the final boundary for targeted outreach.',
    result: 'A scalable system that streamlined lead prospecting and personalized campaign preparation.',
    tools: ['Agent orchestration', 'LinkedIn crawlers', 'Claude', 'Gemini API'],
  },
  {
    id: 'parser', number: '02', title: 'AI syllabus parser', context: 'UofT Launchpad · shipped product', proof: 'Removes manual data entry',
    problem: 'Students had to manually translate inconsistent PDF course outlines into assignment weights and grading schemes.',
    stages: [
      { label: 'Upload', detail: 'Accept a course-outline PDF from the student.' },
      { label: 'Extract', detail: 'Recover relevant text from varied document layouts.' },
      { label: 'Structure', detail: 'Use Gemini to map grading details into a predictable schema.' },
      { label: 'Store', detail: 'Save confirmed course weights under row-level security.' },
    ],
    decision: 'Treat model output as structured data to validate—not prose to trust blindly.',
    tradeoff: 'Schema constraints limit open-ended output but make the feature dependable inside a calculator.',
    guardrail: 'The parsed result stays visible and editable before it becomes student data.',
    result: 'Converted uploaded syllabi into grading schemes and eliminated repetitive manual entry.',
    tools: ['Gemini API', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
  },
  {
    id: 'learning', number: '03', title: 'Adaptive AI learning', context: 'Elefrench · live tutoring clients', proof: 'Adapts across 4 skills',
    problem: 'Static quizzes could not respond to the different strengths and histories of French learners in grades 1–8.',
    stages: [
      { label: 'Observe', detail: 'Track historical performance across four core skills.' },
      { label: 'Calibrate', detail: 'Select difficulty from the learner’s current profile.' },
      { label: 'Generate', detail: 'Ask Gemini for practice at the chosen level and skill.' },
      { label: 'Learn', detail: 'Record outcomes to shape the next quiz.' },
    ],
    decision: 'Separate deterministic difficulty calibration from generative question creation.',
    tradeoff: 'More application logic, but learner progression does not depend on unpredictable model judgment.',
    guardrail: 'An in-memory cache prevents duplicate API calls during retries and improves response consistency.',
    result: 'A deployed learning loop used regularly by tutoring clients, with faster retries and personalized difficulty.',
    tools: ['Gemini API', 'Express.js', 'React', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'workflow', number: '04', title: 'AI-forward engineering workflow', context: 'How I work · every project', proof: 'AI accelerates; I verify',
    problem: 'AI can accelerate exploration and implementation, but unverified output creates fragile software and shallow decisions.',
    stages: [
      { label: 'Frame', detail: 'Define the user, constraints, interfaces, and success criteria first.' },
      { label: 'Explore', detail: 'Use AI to compare approaches, surface edge cases, and accelerate research.' },
      { label: 'Build', detail: 'Generate small, inspectable changes rather than accepting a full opaque solution.' },
      { label: 'Verify', detail: 'Read the code, test behavior, check sources, and measure the result.' },
    ],
    decision: 'Use AI as a high-speed collaborator while keeping architecture and verification human-owned.',
    tradeoff: 'Verification takes time, but it prevents speed from becoming hidden technical debt.',
    guardrail: 'No generated change is done until it is understood, tested, and connected to a real user need.',
    result: 'A workflow that helps me move faster without outsourcing technical judgment.',
    tools: ['Claude', 'Gemini', 'Documentation', 'Testing', 'Code review'],
  },
];

const Section=styled.section`padding:120px 0;background:${theme.colors.blue};color:white;overflow:hidden;`;
const Head=styled.div`display:grid;grid-template-columns:1fr .75fr;gap:50px;align-items:end;margin-bottom:45px;small{font:800 .78rem ${theme.fonts.mono};text-transform:uppercase;letter-spacing:.1em;color:${theme.colors.lime}}h2{font-size:clamp(2.8rem,6vw,5.7rem);letter-spacing:-.065em;line-height:.95;margin:14px 0 0}p{font-size:1.08rem;color:#dbe3ff;max-width:540px;margin:0}@media(max-width:760px){grid-template-columns:1fr;gap:22px}`;
const Lab=styled.div`border:2px solid ${theme.colors.ink};border-radius:25px;background:${theme.colors.paper};color:${theme.colors.ink};box-shadow:12px 14px 0 ${theme.colors.ink};overflow:hidden;`;
const Bar=styled.div`min-height:50px;border-bottom:2px solid ${theme.colors.ink};display:flex;align-items:center;gap:7px;padding:10px 17px;background:${theme.colors.white};i{width:11px;height:11px;border:1px solid ${theme.colors.ink};border-radius:50%;background:${theme.colors.orange}i:nth-child(2){background:${theme.colors.lime}}i:nth-child(3){background:#9db1ff}}span{margin-left:auto;font:700 .7rem ${theme.fonts.mono};text-align:right}`;
const Tabs=styled.div`display:grid;grid-template-columns:repeat(4,1fr);border-bottom:2px solid ${theme.colors.ink};@media(max-width:760px){grid-template-columns:repeat(2,1fr)}`;
const Tab=styled.button<{ $active:boolean }>`position:relative;min-height:105px;padding:17px;text-align:left;border:0;border-right:1.5px solid ${theme.colors.ink};background:${p=>p.$active?theme.colors.lime:theme.colors.white};cursor:pointer;&:last-child{border-right:0}&:hover{background:${p=>p.$active?theme.colors.lime:'#e6ebff'}}small{display:block;font:800 .64rem ${theme.fonts.mono};color:${theme.colors.blue};margin-bottom:12px}strong{display:block;font-size:.9rem;line-height:1.2}@media(max-width:760px){min-height:92px;&:nth-child(2){border-right:0}&:nth-child(-n+2){border-bottom:1.5px solid ${theme.colors.ink}}}`;
const Content=styled(motion.div)`padding:clamp(25px,5vw,55px);`;
const Overview=styled.div`display:grid;grid-template-columns:1fr auto;gap:25px;align-items:start;margin-bottom:42px;h3{font-size:clamp(2rem,4vw,3.6rem);line-height:1;letter-spacing:-.05em;margin:8px 0 15px}.context{font:800 .7rem ${theme.fonts.mono};text-transform:uppercase;color:${theme.colors.blue}}p{max-width:690px;color:${theme.colors.muted};font-size:1.02rem;margin:0}@media(max-width:620px){grid-template-columns:1fr}`;
const Proof=styled.div`padding:10px 13px;border:1.5px solid ${theme.colors.ink};border-radius:999px;background:${theme.colors.orange};font:900 .7rem ${theme.fonts.mono};white-space:nowrap;box-shadow:3px 3px 0 ${theme.colors.ink};`;
const Flow=styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:42px;@media(max-width:780px){grid-template-columns:repeat(2,1fr)}@media(max-width:480px){grid-template-columns:1fr}`;
const Step=styled.div`position:relative;min-height:150px;padding:18px;border:1.5px solid ${theme.colors.ink};border-radius:15px;background:${theme.colors.white};box-shadow:4px 5px 0 rgba(24,24,23,.13);&:not(:last-child)::after{content:'→';position:absolute;right:-14px;top:50%;z-index:2;width:27px;height:27px;display:grid;place-items:center;background:${theme.colors.blue};color:white;border:1px solid ${theme.colors.ink};border-radius:50%;font-weight:900;transform:translateY(-50%)}span{display:block;font:800 .65rem ${theme.fonts.mono};color:${theme.colors.blue};margin-bottom:22px}h4{font-size:1rem;margin:0 0 8px}p{font-size:.78rem;color:${theme.colors.muted};margin:0}@media(max-width:780px){&:nth-child(2)::after{display:none}}@media(max-width:480px){min-height:auto;&::after{display:none!important}}`;
const Decisions=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px;@media(max-width:760px){grid-template-columns:1fr}`;
const Decision=styled.div<{ $accent?:boolean }>`padding:20px;border-top:3px solid ${p=>p.$accent?theme.colors.orange:theme.colors.blue};background:#ece9df;border-radius:0 0 12px 12px;small{font:900 .64rem ${theme.fonts.mono};text-transform:uppercase;color:${theme.colors.blue}}p{font-size:.84rem;margin:10px 0 0;color:${theme.colors.ink}}`;
const Result=styled.div`display:grid;grid-template-columns:1fr auto;gap:25px;align-items:center;padding:20px;border:1.5px solid ${theme.colors.ink};border-radius:14px;background:${theme.colors.lime};h4{font:900 .7rem ${theme.fonts.mono};text-transform:uppercase;margin:0 0 7px}p{margin:0;font-weight:800}.tools{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px;max-width:360px}.tools span{padding:5px 8px;border:1px solid ${theme.colors.ink};border-radius:999px;background:${theme.colors.white};font:700 .61rem ${theme.fonts.mono}}@media(max-width:700px){grid-template-columns:1fr;.tools{justify-content:flex-start}}`;
const Principles=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-top:35px;color:white;article{padding:20px;border:1px solid rgba(255,255,255,.55);border-radius:15px;background:rgba(24,24,23,.12)}strong{display:block;color:${theme.colors.lime};margin-bottom:7px}p{font-size:.83rem;color:#dbe3ff;margin:0}@media(max-width:700px){grid-template-columns:1fr}`;

const Playground=()=>{
  const [active,setActive]=useState(cases[0]);
  const reduce=useReducedMotion();
  return <Section id="ai-workflow"><div className="container"><Head><div><small>AI engineering / real systems</small><h2>How I build with AI.</h2></div><p>I use AI where it creates genuine leverage—then surround it with structure, validation, and human judgment. Explore the systems and decisions behind my work.</p></Head><Lab><Bar><i/><i/><i/><span>AI SYSTEMS LAB · SELECT A CASE STUDY</span></Bar><Tabs role="tablist" aria-label="AI engineering case studies">{cases.map(item=><Tab key={item.id} type="button" role="tab" aria-selected={active.id===item.id} $active={active.id===item.id} onClick={()=>setActive(item)}><small>{item.number} / {item.proof}</small><strong>{item.title}</strong></Tab>)}</Tabs><AnimatePresence mode="wait"><Content key={active.id} initial={reduce?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduce?undefined:{opacity:0,y:-8}} transition={{duration:.24}} role="tabpanel"><Overview><div><div className="context">{active.context}</div><h3>{active.title}</h3><p>{active.problem}</p></div><Proof>{active.proof}</Proof></Overview><Flow>{active.stages.map((stage,index)=><Step key={stage.label}><span>STEP 0{index+1}</span><h4>{stage.label}</h4><p>{stage.detail}</p></Step>)}</Flow><Decisions><Decision><small>Engineering decision</small><p>{active.decision}</p></Decision><Decision><small>Tradeoff</small><p>{active.tradeoff}</p></Decision><Decision $accent><small>Guardrail</small><p>{active.guardrail}</p></Decision></Decisions><Result><div><h4>Evidence / outcome</h4><p>{active.result}</p></div><div className="tools">{active.tools.map(tool=><span key={tool}>{tool}</span>)}</div></Result></Content></AnimatePresence></Lab><Principles><article><strong>01 · Start with the user</strong><p>The model is an implementation detail. The user problem and success criteria come first.</p></article><article><strong>02 · Bound the intelligence</strong><p>Schemas, deterministic logic, and clear agent roles make probabilistic systems dependable.</p></article><article><strong>03 · Verify the output</strong><p>I inspect, test, measure, and keep humans in control where mistakes carry real consequences.</p></article></Principles></div></Section>;
};

export default Playground;
