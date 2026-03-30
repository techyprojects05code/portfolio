import { useState, useEffect, useRef } from "react";

const Icon = {
  Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  Linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Mail: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Send: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>,
  X: () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Bot: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/></svg>,
  Down: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6,9 12,15 18,9"/></svg>,
  Menu: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  Term: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4,17 10,11 4,5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  Ext: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
};

const DATA = {
  name: "Yash Purohit",
  email: "yash.purohit2610@gmail.com",
  taglines: ["Building AI + automation products","RAG systems that ship to prod","Multi-agent frameworks at scale","Writing on tech, systems & mindset"],
  social: { github: "https://github.com/Yashp-5", linkedin: "https://www.linkedin.com/in/yash-purohit-3703261b8/" },
  about: [
    "I'm an Associate AI Developer at Medtronic Engineering and Innovation Center, building RAG systems, LLM-powered tools, and multi-agent frameworks that actually ship to production.",
    "Finishing my Integrated M.Tech in Software Engineering at VIT Vellore (8.48 CGPA). My work sits at the intersection of AI engineering, automation, and product thinking.",
    "Outside work, I write about tech, systems design, and mindset. I believe the best AI systems are the ones that make humans faster — not replace them.",
  ],
  stats: [{ value:"5+",label:"AI Projects Shipped"},{value:"60%+",label:"RAG Accuracy Gain"},{value:"25%",label:"Ops Efficiency Boost"},{value:"8.48",label:"CGPA @ VIT"}],
  skillGroups: [
    { label:"Languages", items:["Python","JavaScript","Java","SQL"] },
    { label:"AI / LLM Stack", items:["LangChain","OpenAI API","HuggingFace","LangGraph","MLflow","W&B"] },
    { label:"Agent Frameworks", items:["CrewAI","OpenAI Agents SDK","Composio","LangSmith","MCPs"] },
    { label:"MLOps & Cloud", items:["Databricks","FastAPI","Docker","AWS","Jenkins","GitHub"] },
    { label:"Databases", items:["PostgreSQL","MongoDB","MySQL","ChromaDB"] },
    { label:"Automation & BI", items:["n8n","UIPath","Glean AI","Power BI","Salesforce"] },
  ],
  projects: [
    {
      id: 1,
      title: "AI Workflow Orchestrator for Business Automation",
      desc: "Built event-driven automation workflows using n8n integrated with Python microservices and LLMs. Automated email classification, lead routing, and CRM updates using AI-based decision logic and stateful workflows.",
      tech: ["n8n", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
      badge: "Flagship"
    },
    {
      id: 2,
      title: "AI-Enhanced RPA System using UiPath",
      desc: "Developed enterprise-grade RPA bots integrated with AI services for document processing and system automation. Combined UiPath workflows with Python APIs for validation, LLM-based interpretation, and exception handling.",
      tech: ["UiPath", "Python", "OpenAI", "REST APIs"],
      badge: "Enterprise"
    },
    {
      id: 3,
      title: "Multi-Agent AI Automation System",
      desc: "Designed a multi-agent system where planner and executor agents collaborate to automate complex workflows. Integrated n8n as the execution layer with Python-based agent logic and persistent memory.",
      tech: ["CrewAI", "n8n", "Python", "PostgreSQL"],
      badge: "Agents"
    },
    {
      id: 4,
      title: "Automated Document Processing Pipeline",
      desc: "Built an end-to-end document processing system combining UiPath, Python, and LLMs. Extracts, interprets, and routes documents like invoices and reports using semantic understanding and workflow automation.",
      tech: ["UiPath", "Python", "OCR", "OpenAI", "n8n"],
      badge: "Automation"
    },
    {
      id: 5,
      title: "AI Trading Automation Pipeline",
      desc: "Developed an event-driven trading system that generates signals using technical indicators and executes trades via automated workflows. Integrated Python strategy engine with n8n for execution and alerts.",
      tech: ["Python", "n8n", "FastAPI", "m.Stock API"],
      badge: "Finance"
    }
  ],
  experience: [
    { company:"Medtronic Engineering & Innovation Center", role:"Associate AI Developer — Intern", duration:"Nov 2024 – Present", type:"In-office · Full-time", color:"#00ff88",
      bullets:["Built RAG-based chatbot with LangChain and vector DBs for document Q&A","Developed Custom GPTs using OpenAI Assistants API for internal use cases","Implemented LLMOps pipelines with LangSmith, MLflow, and Databricks","Trained & deployed ML models on Databricks using Delta Live Tables","Prototyped AI agents using CrewAI, OpenAI Agents SDK, Composio, and MCPs","Presented at Global-IT Product Fair during internship tenure"] },
    { company:"Vellore Institute of Technology", role:"Integrated M.Tech — Software Engineering", duration:"2020 – 2025", type:"Academic · 8.48 CGPA", color:"#00d4ff",
      bullets:["Specialized in AI/ML, distributed systems, and software architecture","Research focus on predictive ML pipelines and LLM-based retrieval systems","Presented Knot Theory paper at T.I.M.E Conference, IISER Pune (2019)","Presented at Gujarat Ganit Mandal meet, IIT Gandhinagar (2018)"] },
  ],
};

const SYSTEM_PROMPT = `You are Yash Purohit's personal AI assistant on his portfolio website. Be concise, warm, and slightly technical. Answer only questions about Yash.
About Yash:
- Role: Associate AI Developer Intern @ Medtronic E&IC (Nov 2024–Present): RAG chatbots (LangChain/FAISS/OpenAI), Custom GPTs, LLMOps (LangSmith/MLflow/Databricks), AI agents (CrewAI/Composio/OpenAI SDK), multi-agent evaluation
- Education: Integrated M.Tech Software Engineering, VIT Vellore, 2020–2025, CGPA 8.48
- Projects: RAG Document Chatbot, AI Agent System, Internal GPT Wrapper (OpenAI+Glean AI), Workflow Automation Suite (n8n/UIPath), Anaemia Detection ML, Power BI Dashboard (AkzoNobel, 25% efficiency gain)
- Skills: Python, LangChain, OpenAI API, CrewAI, LangGraph, FastAPI, Docker, Databricks, AWS, n8n, UIPath, Glean AI, Power BI, PostgreSQL, ChromaDB, HuggingFace
- Email: yash.purohit2610@gmail.com
Keep answers to 2-3 sentences unless more detail is requested. Only answer questions about Yash. Be helpful and direct.`;

const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Syne:wght@400;600;700;800&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--bg:#070709;--bg2:#0d0d10;--surf:#111116;--bdr:#1c1c24;--bdr2:#252530;--g:#00ff88;--c:#00d4ff;--r:#ff3366;--tx:#d8d8e0;--mt:#50505a;--mono:'JetBrains Mono',monospace;--disp:'Syne',sans-serif}
    html{scroll-behavior:smooth}
    body{background:var(--bg);color:var(--tx);font-family:var(--mono);overflow-x:hidden;line-height:1.6}
    ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--g);border-radius:2px}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideR{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
    @keyframes pulse{0%,100%{box-shadow:0 0 8px var(--g),0 0 16px rgba(0,255,136,.3)}50%{box-shadow:0 0 22px var(--g),0 0 44px rgba(0,255,136,.5)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
    @keyframes g1{0%,100%{clip-path:inset(5% 0 88% 0);transform:translateX(0)}25%{clip-path:inset(15% 0 40% 0);transform:translateX(-4px)}50%{clip-path:inset(60% 0 10% 0);transform:translateX(4px)}75%{clip-path:inset(30% 0 55% 0);transform:translateX(-2px)}}
    @keyframes g2{0%,100%{clip-path:inset(88% 0 5% 0);transform:translateX(0)}25%{clip-path:inset(40% 0 15% 0);transform:translateX(4px)}50%{clip-path:inset(10% 0 60% 0);transform:translateX(-4px)}75%{clip-path:inset(55% 0 30% 0);transform:translateX(2px)}}
    @keyframes scan{0%{top:0}100%{top:100%}}
    .cb{animation:blink 1s step-end infinite}
    .fu{animation:fadeUp .7s ease-out both}
    .fl{animation:float 3s ease-in-out infinite}
    .gc{background:var(--surf);border:1px solid var(--bdr);border-radius:10px;transition:border-color .3s,box-shadow .3s,transform .3s}
    .gc:hover{border-color:rgba(0,255,136,.45);box-shadow:0 0 24px rgba(0,255,136,.1),0 8px 32px rgba(0,0,0,.6);transform:translateY(-3px)}
    .st{display:inline-block;padding:4px 12px;border:1px solid var(--bdr2);border-radius:20px;font-size:.7rem;color:var(--mt);letter-spacing:.05em;transition:all .25s;cursor:default}
    .st:hover{border-color:var(--g);color:var(--g);box-shadow:0 0 8px rgba(0,255,136,.2);background:rgba(0,255,136,.05)}
    .tp{display:inline-block;padding:3px 9px;background:rgba(0,255,136,.07);border:1px solid rgba(0,255,136,.18);border-radius:4px;font-size:.63rem;color:#00cc6a;letter-spacing:.04em}
    .nl{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mt);text-decoration:none;padding:4px 0;position:relative;transition:color .2s}
    .nl::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--g);transition:width .3s;box-shadow:0 0 6px var(--g)}
    .nl:hover{color:var(--g)}.nl:hover::after{width:100%}
    .bp{display:inline-flex;align-items:center;gap:8px;padding:11px 26px;background:var(--g);color:#070709;font-family:var(--mono);font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border:none;border-radius:4px;cursor:pointer;text-decoration:none;transition:box-shadow .3s,transform .2s}
    .bp:hover{box-shadow:0 0 28px rgba(0,255,136,.55),0 0 56px rgba(0,255,136,.2);transform:translateY(-1px)}
    .bo{display:inline-flex;align-items:center;gap:8px;padding:10px 24px;background:transparent;color:var(--g);font-family:var(--mono);font-size:.78rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;border:1px solid rgba(0,255,136,.35);border-radius:4px;cursor:pointer;text-decoration:none;transition:all .3s}
    .bo:hover{background:rgba(0,255,136,.07);border-color:var(--g);box-shadow:0 0 16px rgba(0,255,136,.2)}
    .sl{font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--g);margin-bottom:.5rem}
    .sh{font-family:var(--disp);font-size:clamp(2rem,5vw,2.8rem);font-weight:800;color:#eeeef5;line-height:1.05}
    .sd{width:48px;height:2px;background:linear-gradient(90deg,var(--g),var(--c));margin-top:1rem;box-shadow:0 0 8px var(--g)}
    .td{width:12px;height:12px;border-radius:50%;border:2px solid var(--g);background:var(--bg);box-shadow:0 0 10px var(--g);flex-shrink:0}
    input,textarea{background:var(--surf)!important;border:1px solid var(--bdr2)!important;color:var(--tx)!important;font-family:var(--mono)!important;font-size:.8rem!important;padding:13px 16px!important;width:100%!important;outline:none!important;border-radius:4px!important;transition:border-color .2s,box-shadow .2s!important}
    input:focus,textarea:focus{border-color:rgba(0,255,136,.5)!important;box-shadow:0 0 12px rgba(0,255,136,.1)!important}
    input::placeholder,textarea::placeholder{color:var(--mt)!important}
    textarea{resize:vertical;min-height:120px}
    @media(max-width:768px){.hm{display:none!important}.sm{display:flex!important}}
    @media(min-width:769px){.sm{display:none!important}}
  `}</style>
);

// Matrix Canvas
const Matrix = () => {
  const r = useRef(null);
  useEffect(() => {
    const c = r.current; if(!c) return;
    const ctx = c.getContext("2d");
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize(); window.addEventListener("resize", resize);
    const cols = Math.floor(c.width/22);
    const drops = Array.from({length:cols},()=>Math.random()*-60);
    const chars = "01PYTHONLANGCHAINRAGAIAGENT>_[]{}NEURAL</>";
    let raf;
    const draw = () => {
      ctx.fillStyle = "rgba(7,7,9,0.055)"; ctx.fillRect(0,0,c.width,c.height);
      drops.forEach((y,i) => {
        const ch = chars[Math.floor(Math.random()*chars.length)];
        const hi = i%7===0;
        ctx.fillStyle = hi?"rgba(0,255,136,0.65)":"rgba(0,255,136,0.15)";
        ctx.font = `${hi?"bold ":""}13px JetBrains Mono,monospace`;
        ctx.fillText(ch, i*22, y*20);
        if(y*20>c.height && Math.random()>.977) drops[i]=0;
        drops[i]+=.5;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={r} style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.5}} />;
};

// Typewriter
const TW = ({texts,speed=75,pause=1800}) => {
  const [txt,setTxt]=useState(""); const [idx,setIdx]=useState(0);
  const [ci,setCi]=useState(0); const [del,setDel]=useState(false);
  useEffect(()=>{
    const cur=texts[idx];
    const t=setTimeout(()=>{
      if(!del){ if(ci<cur.length){setTxt(cur.slice(0,ci+1));setCi(n=>n+1);}else setTimeout(()=>setDel(true),pause); }
      else{ if(ci>0){setTxt(cur.slice(0,ci-1));setCi(n=>n-1);}else{setDel(false);setIdx(n=>(n+1)%texts.length);} }
    },del?speed/2.5:speed);
    return()=>clearTimeout(t);
  },[ci,del,idx,texts,speed,pause]);
  return <span style={{color:"#00d4ff"}}>{txt}<span className="cb" style={{color:"#00ff88"}}>█</span></span>;
};

// Glitch Name
const GN = ({text}) => {
  const [g,setG]=useState(false);
  useEffect(()=>{ const iv=setInterval(()=>{setG(true);setTimeout(()=>setG(false),280);},5000); return()=>clearInterval(iv); },[]);
  const s={fontFamily:"var(--disp)",fontWeight:800,fontSize:"clamp(3rem,9vw,6.5rem)",lineHeight:1,letterSpacing:"-0.02em",color:"#eeeef5",position:"relative",display:"inline-block"};
  return (
    <span style={s}>
      {g&&<span aria-hidden style={{position:"absolute",inset:0,color:"#ff3366",animation:"g1 .28s steps(1) infinite"}}>{text}</span>}
      {g&&<span aria-hidden style={{position:"absolute",inset:0,color:"#00d4ff",animation:"g2 .28s steps(1) infinite"}}>{text}</span>}
      {text}
    </span>
  );
};

// Nav
const Nav = () => {
  const [sc,setSc]=useState(false); const [mo,setMo]=useState(false);
  useEffect(()=>{const fn=()=>setSc(window.scrollY>40);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  const lks=["About","Skills","Projects","Experience","Contact"];
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:500,padding:"16px 32px",background:sc?"rgba(7,7,9,.93)":"transparent",backdropFilter:sc?"blur(14px)":"none",borderBottom:sc?"1px solid rgba(0,255,136,.08)":"none",transition:"all .4s",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <a href="#hero" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:8}}>
        <span style={{color:"#00ff88",fontFamily:"var(--mono)",fontSize:".8rem",fontWeight:700}}><span style={{color:"var(--mt)"}}>{">"}</span>_</span>
        <span style={{fontFamily:"var(--disp)",fontWeight:700,fontSize:".9rem",color:"#eeeef5",letterSpacing:".05em"}}>yash.dev</span>
      </a>
      <div className="hm" style={{display:"flex",gap:36}}>
        {lks.map(l=><a key={l} href={`#${l.toLowerCase()}`} className="nl">{l}</a>)}
      </div>
      <a href={`mailto:${DATA.email}`} className="hm bo" style={{fontSize:".68rem",padding:"7px 16px"}}>Hire Me</a>
      <button className="sm" onClick={()=>setMo(o=>!o)} style={{background:"none",border:"none",color:"var(--tx)",cursor:"pointer"}}><Icon.Menu/></button>
      {mo&&(
        <div style={{position:"fixed",top:"60px",left:0,right:0,background:"rgba(7,7,9,.97)",backdropFilter:"blur(20px)",borderBottom:"1px solid var(--bdr)",padding:"24px",display:"flex",flexDirection:"column",gap:20,animation:"fadeUp .25s ease-out"}}>
          {lks.map(l=><a key={l} href={`#${l.toLowerCase()}`} className="nl" style={{fontSize:".9rem"}} onClick={()=>setMo(false)}>{l}</a>)}
        </div>
      )}
    </nav>
  );
};

// Hero
const Hero = () => (
  <section id="hero" style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
    <Matrix/>
    <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 80% 60% at 50% 40%,rgba(0,255,136,.045) 0%,transparent 70%)"}}/>
    <div style={{position:"relative",zIndex:2,maxWidth:"1100px",margin:"0 auto",padding:"0 32px",width:"100%"}}>
      <div className="fu">
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:"1.5rem"}}>
          <div style={{width:8,height:8,borderRadius:"50%",background:"#00ff88",boxShadow:"0 0 10px #00ff88",animation:"pulse 2s infinite"}}/>
          <span style={{fontFamily:"var(--mono)",fontSize:".72rem",color:"var(--mt)",letterSpacing:".18em",textTransform:"uppercase"}}>Available for opportunities</span>
        </div>
        <GN text="Yash Purohit"/>
        <div style={{marginTop:"1.2rem",fontFamily:"var(--mono)",fontSize:"clamp(.9rem,2.5vw,1.2rem)",minHeight:"2rem"}}>
          <TW texts={DATA.taglines}/>
        </div>
        <p style={{marginTop:"1.5rem",maxWidth:"540px",color:"var(--mt)",fontSize:".85rem",lineHeight:1.9}}>
          Associate AI Developer <span style={{color:"#00ff88"}}>@Medtronic</span> · Building RAG systems, AI agents, and automation pipelines that actually go to production.
        </p>
        <div style={{marginTop:"2.5rem",display:"flex",flexWrap:"wrap",gap:14}}>
          <a href="#projects" className="bp">View Work</a>
          <a href="#contact" className="bo">Get in Touch</a>
          <a href={DATA.social.github} target="_blank" rel="noreferrer" className="bo" style={{padding:"10px 16px"}}><Icon.Github/></a>
          <a href={DATA.social.linkedin} target="_blank" rel="noreferrer" className="bo" style={{padding:"10px 16px"}}><Icon.Linkedin/></a>
        </div>
      </div>
      <div className="fl" style={{position:"absolute",bottom:40,left:"50%",transform:"translateX(-50%)",cursor:"pointer",color:"var(--mt)"}} onClick={()=>document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}>
        <Icon.Down/>
      </div>
    </div>
  </section>
);

// About
const About = () => (
  <section id="about" style={{padding:"120px 32px",maxWidth:"1100px",margin:"0 auto"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"4rem",alignItems:"start"}}>
      <div className="fu">
        <div className="sl">// 01 — About</div>
        <h2 className="sh">Who I Am</h2>
        <div className="sd"/>
        <div style={{marginTop:"2rem",display:"flex",flexDirection:"column",gap:"1rem"}}>
          {DATA.about.map((p,i)=>(
            <p key={i} style={{fontSize:".85rem",lineHeight:1.9,color:"var(--mt)"}}>
              {i===0&&<span style={{color:"var(--g)",marginRight:6}}>{">"}</span>}{p}
            </p>
          ))}
        </div>
        <div style={{marginTop:"2.5rem",display:"flex",gap:16,flexWrap:"wrap"}}>
          <a href={DATA.social.github} target="_blank" rel="noreferrer" className="bo" style={{fontSize:".7rem",padding:"8px 16px"}}><Icon.Github/> GitHub</a>
          <a href={DATA.social.linkedin} target="_blank" rel="noreferrer" className="bo" style={{fontSize:".7rem",padding:"8px 16px"}}><Icon.Linkedin/> LinkedIn</a>
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div style={{background:"#0d0d10",border:"1px solid var(--bdr)",borderRadius:10,overflow:"hidden",animation:"fadeUp .9s ease-out both"}}>
          <div style={{background:"#111118",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid var(--bdr)"}}>
            {["#ff5f57","#febc2e","#28c840"].map((c,i)=><div key={i} style={{width:12,height:12,borderRadius:"50%",background:c}}/>)}
            <span style={{fontFamily:"var(--mono)",fontSize:".68rem",color:"var(--mt)",marginLeft:8}}>yash@portfolio ~ $</span>
          </div>
          <div style={{padding:"20px",fontFamily:"var(--mono)",fontSize:".77rem",lineHeight:2.1}}>
            {[["Role","Associate AI Developer"],["Company","Medtronic E&IC"],["Location","India"],["Education","M.Tech @ VIT Vellore"],["Focus","LLMs · Agents · Automation"],["Status","🟢 Open to opportunities"]].map(([k,v])=>(
              <div key={k} style={{display:"flex",gap:8}}>
                <span style={{color:"var(--g)",minWidth:80}}>{k}:</span>
                <span style={{color:"var(--tx)"}}>{v}</span>
              </div>
            ))}
            <div style={{marginTop:6,color:"var(--mt)"}}><span style={{color:"var(--g)"}}>$</span><span className="cb" style={{color:"var(--g)",marginLeft:6}}>█</span></div>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {DATA.stats.map((s,i)=>(
            <div key={i} className="gc" style={{padding:"20px",textAlign:"center"}}>
              <div style={{fontFamily:"var(--disp)",fontSize:"1.8rem",fontWeight:800,color:"#00ff88",textShadow:"0 0 16px rgba(0,255,136,.4)"}}>{s.value}</div>
              <div style={{fontFamily:"var(--mono)",fontSize:".62rem",color:"var(--mt)",marginTop:4,letterSpacing:".05em"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Skills
const Skills = () => (
  <section id="skills" style={{padding:"100px 32px",background:"linear-gradient(180deg,transparent,rgba(0,255,136,.018),transparent)"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <div className="sl">// 02 — Skills</div>
      <h2 className="sh">Tech Stack</h2>
      <div className="sd"/>
      <div style={{marginTop:"3.5rem",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.5rem"}}>
        {DATA.skillGroups.map((g,gi)=>(
          <div key={gi} className="gc" style={{padding:"28px",animation:`fadeUp .6s ${gi*.1}s ease-out both`}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:"1.2rem"}}>
              <div style={{width:3,height:20,background:"linear-gradient(#00ff88,#00d4ff)",borderRadius:2,boxShadow:"0 0 6px #00ff88"}}/>
              <span style={{fontFamily:"var(--mono)",fontSize:".7rem",color:"#00ff88",letterSpacing:".12em",textTransform:"uppercase"}}>{g.label}</span>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {g.items.map((sk,si)=><span key={si} className="st">{sk}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Projects
const Projects = () => (
  <section id="projects" style={{padding:"100px 32px"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <div className="sl">// 03 — Projects</div>
      <h2 className="sh">What I've Built</h2>
      <div className="sd"/>
      <div style={{marginTop:"3.5rem",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:"1.5rem"}}>
        {DATA.projects.map((p,i)=>(
          <div key={p.id} className="gc" style={{padding:"28px",display:"flex",flexDirection:"column",gap:"1rem",animation:`fadeUp .6s ${i*.1}s ease-out both`}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontFamily:"var(--mono)",fontSize:".63rem",color:"var(--mt)"}}>0{i+1}</span>
                <Icon.Term/>
              </div>
              {p.badge&&<span style={{fontSize:".6rem",padding:"3px 10px",background:"rgba(0,255,136,.1)",border:"1px solid rgba(0,255,136,.3)",borderRadius:20,color:"#00ff88",letterSpacing:".1em"}}>{p.badge}</span>}
            </div>
            <h3 style={{fontFamily:"var(--disp)",fontSize:"1.05rem",fontWeight:700,color:"#eeeef5",lineHeight:1.3}}>{p.title}</h3>
            <p style={{fontSize:".78rem",color:"var(--mt)",lineHeight:1.8,flex:1}}>{p.desc}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {p.tech.map((t,ti)=><span key={ti} className="tp">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Experience
const Experience = () => (
  <section id="experience" style={{padding:"100px 32px",background:"linear-gradient(180deg,transparent,rgba(0,212,255,.015),transparent)"}}>
    <div style={{maxWidth:"800px",margin:"0 auto"}}>
      <div className="sl">// 04 — Experience</div>
      <h2 className="sh">Career Path</h2>
      <div className="sd"/>
      <div style={{marginTop:"3.5rem",position:"relative"}}>
        <div style={{position:"absolute",left:5,top:0,bottom:0,width:1,background:"linear-gradient(180deg,var(--g),var(--c),transparent)"}}/>
        {DATA.experience.map((e,i)=>(
          <div key={i} style={{paddingLeft:"2.5rem",paddingBottom:"3.5rem",position:"relative",animation:`fadeUp .7s ${i*.2}s ease-out both`}}>
            <div className="td" style={{position:"absolute",left:0,top:5,borderColor:e.color,boxShadow:`0 0 10px ${e.color}`}}/>
            <div className="gc" style={{padding:"28px"}}>
              <div style={{display:"flex",flexWrap:"wrap",gap:8,alignItems:"flex-start",justifyContent:"space-between",marginBottom:".8rem"}}>
                <div>
                  <div style={{fontFamily:"var(--disp)",fontSize:"1.05rem",fontWeight:700,color:"#eeeef5"}}>{e.role}</div>
                  <div style={{fontFamily:"var(--mono)",fontSize:".77rem",color:e.color,marginTop:2}}>{e.company}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontFamily:"var(--mono)",fontSize:".68rem",color:"var(--mt)"}}>{e.duration}</div>
                  <div style={{fontFamily:"var(--mono)",fontSize:".62rem",color:"var(--mt)",marginTop:2}}>{e.type}</div>
                </div>
              </div>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:8,marginTop:12}}>
                {e.bullets.map((b,bi)=>(
                  <li key={bi} style={{display:"flex",gap:10,fontSize:".78rem",color:"var(--mt)",lineHeight:1.7}}>
                    <span style={{color:e.color,flexShrink:0}}>→</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact
const Contact = () => {
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [sent,setSent]=useState(false); const [sending,setSending]=useState(false);
  const h=(k)=>(e)=>setForm(f=>({...f,[k]:e.target.value}));
  const submit=()=>{
    if(!form.name||!form.email||!form.message)return;
    setSending(true); setTimeout(()=>{setSent(true);setSending(false);},1200);
  };
  return (
    <section id="contact" style={{padding:"100px 32px"}}>
      <div style={{maxWidth:"680px",margin:"0 auto"}}>
        <div className="sl">// 05 — Contact</div>
        <h2 className="sh">Let's Talk</h2>
        <div className="sd"/>
        <p style={{marginTop:"1.5rem",fontSize:".85rem",color:"var(--mt)",lineHeight:1.9}}>
          Open to full-time roles, AI/ML collaborations, and interesting side projects. Drop a message — I read every one.
        </p>
        {sent?(
          <div style={{marginTop:"2.5rem",padding:"32px",background:"rgba(0,255,136,.05)",border:"1px solid rgba(0,255,136,.3)",borderRadius:10,textAlign:"center",animation:"fadeUp .5s ease-out"}}>
            <div style={{fontSize:"2rem",marginBottom:12}}>✓</div>
            <div style={{fontFamily:"var(--mono)",fontSize:".85rem",color:"#00ff88"}}>Message received. I'll get back to you soon!</div>
          </div>
        ):(
          <div style={{marginTop:"2.5rem",display:"flex",flexDirection:"column",gap:16}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <div><label style={{display:"block",fontSize:".62rem",color:"var(--mt)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:6}}>Name</label><input value={form.name} onChange={h("name")} placeholder="Your name"/></div>
              <div><label style={{display:"block",fontSize:".62rem",color:"var(--mt)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:6}}>Email</label><input type="email" value={form.email} onChange={h("email")} placeholder="you@example.com"/></div>
            </div>
            <div><label style={{display:"block",fontSize:".62rem",color:"var(--mt)",letterSpacing:".12em",textTransform:"uppercase",marginBottom:6}}>Message</label><textarea value={form.message} onChange={h("message")} placeholder="What's on your mind?"/></div>
            <button className="bp" onClick={submit} disabled={sending} style={{alignSelf:"flex-start",opacity:sending?.7:1}}><Icon.Send/>{sending?"Sending...":"Send Message"}</button>
          </div>
        )}
        <div style={{marginTop:"3.5rem",paddingTop:"2rem",borderTop:"1px solid var(--bdr)",display:"flex",flexWrap:"wrap",gap:24,alignItems:"center"}}>
          {[{icon:<Icon.Mail/>,label:DATA.email,href:`mailto:${DATA.email}`},{icon:<Icon.Github/>,label:"GitHub",href:DATA.social.github},{icon:<Icon.Linkedin/>,label:"LinkedIn",href:DATA.social.linkedin}].map((l,i)=>(
            <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:8,fontSize:".75rem",color:"var(--mt)",textDecoration:"none",transition:"color .2s"}}
              onMouseEnter={e=>e.currentTarget.style.color="#00ff88"} onMouseLeave={e=>e.currentTarget.style.color="var(--mt)"}>
              {l.icon}{l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{borderTop:"1px solid var(--bdr)",padding:"24px 32px",textAlign:"center"}}>
    <span style={{fontFamily:"var(--mono)",fontSize:".63rem",color:"var(--mt)",letterSpacing:".1em"}}>
      <span style={{color:"var(--g)"}}>{">"}</span> built by yash purohit · {new Date().getFullYear()} · <span style={{color:"var(--g)"}}>all systems nominal</span>
    </span>
  </footer>
);

// AI Chat
const Chat = () => {
  const [open,setOpen]=useState(false);
  const [msgs,setMsgs]=useState([{role:"assistant",content:"Hey! I'm Yash's AI assistant 👾 Ask me anything about his work, skills, or projects."}]);
  const [inp,setInp]=useState(""); const [loading,setLoading]=useState(false);
  const endRef=useRef(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs]);
  const send=async()=>{
    if(!inp.trim()||loading) return;
    const um={role:"user",content:inp.trim()};
    const next=[...msgs,um]; setMsgs(next); setInp(""); setLoading(true);
    try{
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:SYSTEM_PROMPT,messages:next.slice(1).map(m=>({role:m.role,content:m.content}))})});
      const d=await res.json();
      setMsgs(p=>[...p,{role:"assistant",content:d.content?.[0]?.text||"Something went wrong. Try again!"}]);
    }catch{setMsgs(p=>[...p,{role:"assistant",content:"Connection error. Please try again."}]);}
    finally{setLoading(false);}
  };
  const suggestions=["What has Yash built?","What are his top skills?","Is he open to work?","Tell me about his AI projects"];
  return(
    <>
      <button onClick={()=>setOpen(o=>!o)} style={{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1000,width:60,height:60,borderRadius:"50%",background:open?"#111":"linear-gradient(135deg,#00ff88,#00d4ff)",border:open?"1px solid rgba(0,255,136,.4)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 24px rgba(0,255,136,.4),0 4px 20px rgba(0,0,0,.6)",animation:open?"none":"pulse 2s infinite",transition:"all .3s"}}>
        <span style={{color:open?"#00ff88":"#070709"}}>{open?<Icon.X/>:<Icon.Bot/>}</span>
      </button>
      {!open&&<div style={{position:"fixed",bottom:"5.4rem",right:"2rem",zIndex:999,background:"#111",border:"1px solid rgba(0,255,136,.25)",borderRadius:6,padding:"6px 12px",fontFamily:"var(--mono)",fontSize:".63rem",color:"#00ff88",whiteSpace:"nowrap",pointerEvents:"none",boxShadow:"0 4px 16px rgba(0,0,0,.5)"}}>Ask Yash's AI ✦</div>}
      {open&&(
        <div style={{position:"fixed",bottom:"6.5rem",right:"2rem",zIndex:999,width:"min(380px,calc(100vw - 2rem))",background:"#0d0d10",border:"1px solid rgba(0,255,136,.25)",borderRadius:12,overflow:"hidden",boxShadow:"0 0 40px rgba(0,255,136,.1),0 24px 64px rgba(0,0,0,.8)",animation:"slideR .3s ease-out"}}>
          <div style={{background:"#111118",padding:"13px 18px",borderBottom:"1px solid var(--bdr)",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#00ff88",boxShadow:"0 0 8px #00ff88",animation:"pulse 1.5s infinite"}}/>
            <span style={{fontFamily:"var(--mono)",fontSize:".74rem",color:"#00ff88",fontWeight:600}}>ask_yash_ai.exe</span>
            <span style={{marginLeft:"auto",fontFamily:"var(--mono)",fontSize:".58rem",color:"var(--mt)"}}>powered by claude</span>
          </div>
          <div style={{height:272,overflowY:"auto",padding:14,display:"flex",flexDirection:"column",gap:10}}>
            {msgs.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
                <div style={{maxWidth:"88%",padding:"9px 13px",background:m.role==="user"?"rgba(0,255,136,.1)":"var(--surf)",border:`1px solid ${m.role==="user"?"rgba(0,255,136,.25)":"var(--bdr)"}`,borderRadius:m.role==="user"?"10px 10px 2px 10px":"10px 10px 10px 2px",fontFamily:"var(--mono)",fontSize:".74rem",lineHeight:1.65,color:m.role==="user"?"#00d4ff":"var(--tx)"}}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading&&<div style={{display:"flex",gap:5,padding:"6px 10px"}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,borderRadius:"50%",background:"#00ff88",opacity:.7,animation:`blink 1s ${i*.2}s infinite`}}/>)}</div>}
            <div ref={endRef}/>
          </div>
          {msgs.length<=1&&(
            <div style={{padding:"0 12px 10px",display:"flex",flexWrap:"wrap",gap:6}}>
              {suggestions.map((s,i)=>(
                <button key={i} onClick={()=>{setInp(s);}} style={{fontFamily:"var(--mono)",fontSize:".6rem",padding:"4px 10px",background:"rgba(0,255,136,.06)",border:"1px solid rgba(0,255,136,.2)",borderRadius:14,color:"#00cc6a",cursor:"pointer",transition:"all .2s"}}>{s}</button>
              ))}
            </div>
          )}
          <div style={{padding:"10px 12px",borderTop:"1px solid var(--bdr)",display:"flex",gap:8}}>
            <input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask about Yash..." style={{flex:1,fontSize:".74rem!important",padding:"9px 12px!important",borderRadius:"6px!important"}}/>
            <button onClick={send} disabled={loading} style={{background:loading?"var(--surf)":"linear-gradient(135deg,#00ff88,#00d4ff)",border:"none",borderRadius:6,padding:"0 14px",cursor:loading?"not-allowed":"pointer",display:"flex",alignItems:"center",opacity:loading?.5:1}}>
              <span style={{color:"#070709"}}><Icon.Send/></span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Scanline overlay
const Scan = () => (
  <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999,background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,136,.007) 3px,rgba(0,255,136,.007) 4px)"}}/>
);

export default function Portfolio() {
  return (
    <>
      <G/>
      <Scan/>
      <Nav/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
      
    </>
  );
}
