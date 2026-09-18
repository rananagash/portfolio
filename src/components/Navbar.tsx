import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Wrap = styled.header`
  position: fixed; inset: 18px 0 auto; z-index: 50; pointer-events: none;
`;
const Nav = styled.nav`
  pointer-events: auto; width: min(900px, calc(100% - 32px)); margin: auto; min-height: 62px; padding: 8px 10px 8px 18px;
  display: flex; align-items: center; justify-content: space-between; gap: 20px;
  background: rgba(255,253,248,.86); border: 1.5px solid ${theme.colors.line}; border-radius: 18px;
  box-shadow: 4px 5px 0 rgba(24,24,23,.12); backdrop-filter: blur(16px);
`;
const Brand = styled.a`font-weight: 900; letter-spacing: -.04em; font-size: 1.15rem; white-space: nowrap; span { color: ${theme.colors.blue}; }`;
const Links = styled.div<{ $open: boolean }>`
  display: flex; align-items: center; gap: 4px;
  a { padding: 10px 12px; border-radius: 10px; font-size: .9rem; font-weight: 700; &:hover { background: ${theme.colors.paperStrong}; } }
  @media (max-width: 700px) {
    display: ${({ $open }) => $open ? 'flex' : 'none'}; position: absolute; top: 72px; left: 16px; right: 16px; padding: 12px;
    flex-direction: column; align-items: stretch; background: ${theme.colors.white}; border: 1.5px solid ${theme.colors.line}; border-radius: 16px; box-shadow: 4px 5px 0 rgba(24,24,23,.12);
  }
`;
const Status = styled.a`
  display: flex !important; align-items: center; gap: 7px; background: ${theme.colors.lime} !important; border: 1px solid ${theme.colors.line};
  &::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #238636; box-shadow: 0 0 0 3px rgba(35,134,54,.14); }
`;
const Menu = styled.button`
  display: none; width: 42px; height: 42px; border: 0; border-radius: 10px; background: ${theme.colors.ink}; color: white; cursor: pointer; font-size: 1.25rem;
  @media (max-width: 700px) { display: grid; place-items: center; }
`;

const resumeUrl = new URL('../../documents/Rana_Nagash_Resume.pdf', import.meta.url).href;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('resize', close); return () => window.removeEventListener('resize', close); }, []);
  return <Wrap><Nav aria-label="Main navigation">
    <Brand href="#top" onClick={() => setOpen(false)}>RANA<span>.</span></Brand>
    <Links $open={open}>
      <a href="#work" onClick={() => setOpen(false)}>Work</a><a href="#experience" onClick={() => setOpen(false)}>Experience</a><a href="#playground" onClick={() => setOpen(false)}>Playground</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><a href={resumeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume ↗</a>
      <Status href="mailto:nagashrana@gmail.com">Let’s talk</Status>
    </Links>
    <Menu type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</Menu>
  </Nav></Wrap>;
};
export default Navbar;
