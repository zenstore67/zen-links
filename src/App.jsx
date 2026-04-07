import React from 'react';
import { motion } from 'framer-motion';

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:'20px',height:'20px'}}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:'20px',height:'20px'}}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{width:'20px',height:'20px'}}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const links = [
  { label:'YouTube', sublabel:'@zenstore67', href:'https://www.youtube.com/@zenstore67', icon:YouTubeIcon, color:'#FF0000' },
  { label:'Discord', sublabel:'Join the community', href:'https://discord.gg/2PDXGRTQp6', icon:DiscordIcon, color:'#5865F2' },
  { label:'Instagram', sublabel:'@zenstore672', href:'https://www.instagram.com/zenstore672/', icon:InstagramIcon, color:'#E1306C' },
];

export default function App() {
  return (
    <div style={{minHeight:'100vh',background:'#000',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'4rem 1rem',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)'}} />
      <div style={{position:'absolute',inset:0,opacity:0.02,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',backgroundSize:'60px 60px'}} />

      <div style={{position:'relative',zIndex:10,width:'100%',maxWidth:'24rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.7,ease:[0.22,1,0.36,1]}} style={{marginBottom:'1.5rem'}}>
          <img src="https://media.base44.com/images/public/69d532d35d299dc5c3528f4d/3459263b0_22723512caf743e79d654cc2054828d1.png" alt="ZEN Community" style={{width:'320px',objectFit:'contain',filter:'drop-shadow(0 0 40px rgba(255,255,255,0.08)) brightness(1.05)'}} />
        </motion.div>

        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}} style={{color:'rgba(255,255,255,0.3)',fontSize:'0.875rem',textAlign:'center',marginBottom:'2.5rem',letterSpacing:'0.05em',lineHeight:1.6,fontFamily:'Inter, sans-serif'}}>
          Welcome to the ZEN Community.<br />Find us everywhere below.
        </motion.p>

        <div style={{width:'100%',display:'flex',flexDirection:'column',gap:'0.75rem'}}>
          {links.map(({ label, sublabel, href, icon: Icon, color }, i) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
              transition={{duration:0.5,delay:0.4+i*0.1,ease:[0.22,1,0.36,1]}}
              whileHover={{scale:1.02,y:-2}} whileTap={{scale:0.98}}
              style={{position:'relative',display:'flex',alignItems:'center',gap:'1rem',width:'100%',padding:'1rem 1.25rem',borderRadius:'2px',border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',backdropFilter:'blur(8px)',textDecoration:'none',transition:'all 0.3s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.07)';e.currentTarget.style.borderColor='rgba(255,255,255,0.2)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.03)';e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';}}
            >
              <div style={{position:'absolute',left:0,top:0,bottom:0,width:'2px',borderRadius:'2px 0 0 2px',backgroundColor:color,opacity:0.6}} />
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'36px',height:'36px',borderRadius:'2px',flexShrink:0,backgroundColor:`${color}18`,color}}>
                <Icon />
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <span style={{color:'rgba(255,255,255,0.9)',fontWeight:600,fontSize:'0.875rem',letterSpacing:'0.05em',fontFamily:'Inter, sans-serif'}}>{label}</span>
                <span style={{color:'rgba(255,255,255,0.3)',fontSize:'0.75rem',marginTop:'2px',fontFamily:'JetBrains Mono, monospace'}}>{sublabel}</span>
              </div>
              <div style={{marginLeft:'auto',color:'rgba(255,255,255,0.15)',fontSize:'1.125rem'}}>→</div>
            </motion.a>
          ))}
        </div>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} style={{marginTop:'3rem',color:'rgba(255,255,255,0.15)',fontSize:'10px',letterSpacing:'0.3em',textTransform:'uppercase',fontFamily:'JetBrains Mono, monospace'}}>
          ZEN Community © 2026
        </motion.p>
      </div>
    </div>
  );
}
