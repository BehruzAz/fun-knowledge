let cur='', idx=0, lastCur='', bhSide=-1, bhReason=-1;

(function(){
  const colours=['#818CF8','#FB923C','#34D399','#38BDF8','#F472B6','#FBBF24','#A78BFA'];
  const wrap=document.getElementById('bubbles');
  for(let i=0;i<16;i++){
    const d=document.createElement('div');
    const sz=Math.random()*64+18;
    d.className='bub';
    d.style.cssText='width:'+sz+'px;height:'+sz+'px;background:'+colours[i%colours.length]+';left:'+(Math.random()*100)+'%;bottom:'+(Math.random()*-80)+'%;animation-duration:'+(9+Math.random()*14)+'s;animation-delay:'+(Math.random()*12)+'s';
    wrap.appendChild(d);
  }
})();

function launchConfetti(){
  const cols=['#818CF8','#FB923C','#34D399','#F472B6','#FBBF24','#38BDF8','#A78BFA'];
  for(let i=0;i<70;i++){
    const p=document.createElement('div');
    p.className='confetti-piece';
    const sz=Math.random()*10+5;
    p.style.cssText='width:'+sz+'px;height:'+sz+'px;background:'+cols[~~(Math.random()*cols.length)]+';left:'+(Math.random()*100)+'vw;animation-duration:'+(1.2+Math.random()*2)+'s;animation-delay:'+(Math.random()*.9)+'s;border-radius:'+(Math.random()>.5?'50%':'3px');
    document.body.appendChild(p);
    p.addEventListener('animationend',()=>p.remove());
  }
}

function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on'));document.getElementById(id).classList.add('on');window.scrollTo({top:0,behavior:'instant'})}
function home(){show('s-home')}
function go(g){cur=g;lastCur=g;idx=0;load()}
function replay(){go(lastCur)}
function done(){launchConfetti();setTimeout(()=>show('s-res'),300)}

function makeStars(id,total,filled){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML='';
  for(let i=0;i<total;i++){
    const s=document.createElement('span');s.className='str';s.textContent='⭐';el.appendChild(s);
    if(i<filled)setTimeout(()=>s.classList.add('on'),i*90+100);
  }
}

function load(){bhSide=-1;bhReason=-1;if(cur==='ta')loadTa();else if(cur==='tn')loadTn();else if(cur==='bh')loadBh();else if(cur==='hk')loadHk()}

function showFb(fbId,icoId,txtId,ok){
  const fb=document.getElementById(fbId);
  fb.className='fbanner '+(ok?'ok':'no');
  document.getElementById(icoId).textContent=ok?'🌟':'🤔';
  document.getElementById(txtId).textContent=ok?"Zo'r! Juda to'g'ri! 🎉":"Yo'q, bu emas... Yana urining! 💪";
  fb.style.display='block';fb.classList.remove('show');void fb.offsetWidth;fb.classList.add('show');
}

function loadTa(){
  const d=DATA.ta[idx];makeStars('ta-stars',DATA.ta.length,idx);
  document.getElementById('ta-sub').textContent=(idx+1)+' / '+DATA.ta.length;
  document.getElementById('ta-ico').textContent=d.ico;document.getElementById('ta-q').textContent=d.q;
  const fb=document.getElementById('ta-fb');fb.style.display='none';fb.classList.remove('show');
  document.getElementById('ta-nxt').disabled=true;
  const c=document.getElementById('ta-choices');c.innerHTML='';
  d.opts.forEach((o,i)=>{const b=document.createElement('button');b.className='cbtn c'+i;b.innerHTML='<span class="cico">'+o.ico+'</span>'+o.txt;b.onclick=()=>pickTa(o.ok,b);c.appendChild(b)});
  show('s-ta');
}
function pickTa(ok,btn){
  if(btn.classList.contains('no')||btn.classList.contains('ok'))return;
  if(ok){btn.classList.add('ok');showFb('ta-fb','ta-fbico','ta-fbtxt',true);document.getElementById('ta-nxt').disabled=false}
  else{btn.classList.add('no');btn.disabled=true;showFb('ta-fb','ta-fbico','ta-fbtxt',false)}
}
function nxtTa(){idx++;idx>=DATA.ta.length?done():loadTa()}

function loadTn(){
  const d=DATA.tn[idx];makeStars('tn-stars',DATA.tn.length,idx);
  document.getElementById('tn-sub').textContent=(idx+1)+' / '+DATA.tn.length;
  document.getElementById('tn-ico').textContent=d.ico;document.getElementById('tn-q').textContent=d.q;
  const fb=document.getElementById('tn-fb');fb.style.display='none';fb.classList.remove('show');
  document.getElementById('tn-nxt').disabled=true;
  const c=document.getElementById('tn-choices');c.innerHTML='';
  d.opts.forEach((o,i)=>{const b=document.createElement('button');b.className='cbtn c'+i;b.innerHTML='<span class="cico">'+o.ico+'</span>'+o.txt;b.onclick=()=>pickTn(o.ok,b);c.appendChild(b)});
  show('s-tn');
}
function pickTn(ok,btn){
  if(btn.classList.contains('no')||btn.classList.contains('ok'))return;
  if(ok){btn.classList.add('ok');showFb('tn-fb','tn-fbico','tn-fbtxt',true);document.getElementById('tn-nxt').disabled=false}
  else{btn.classList.add('no');btn.disabled=true;showFb('tn-fb','tn-fbico','tn-fbtxt',false)}
}
function nxtTn(){idx++;idx>=DATA.tn.length?done():loadTn()}

function loadBh(){
  const d=DATA.bh[idx];makeStars('bh-stars',DATA.bh.length,idx);
  bhSide=-1;bhReason=-1;
  document.getElementById('bh-sub').textContent=(idx+1)+' / '+DATA.bh.length;
  document.getElementById('bh-ico').textContent=d.ico;document.getElementById('bh-q').textContent=d.q;
  const fb=document.getElementById('bh-fb');fb.style.display='none';fb.classList.remove('show');
  document.getElementById('bh-nxt').disabled=true;
  document.getElementById('bh-reason-section').style.display='none';
  const sides=document.getElementById('bh-sides');sides.innerHTML='';
  d.sides.forEach((s,i)=>{
    const b=document.createElement('button');b.className='teamcard '+s.col;
    b.innerHTML='<div style="font-size:clamp(28px,7vw,42px);margin-bottom:6px">'+s.ico+'</div><h3>'+(i===0?'1-guruh':'2-guruh')+'</h3><p>'+s.txt+'</p>';
    b.onclick=()=>pickBhSide(i,d);sides.appendChild(b);
  });
  show('s-bh');
}
function pickBhSide(i,d){
  if(bhSide!==-1)return;bhSide=i;
  document.querySelectorAll('#bh-sides .teamcard').forEach((b,j)=>{if(j===i)b.classList.add('picked');else b.style.opacity='.36'});
  document.getElementById('bh-reason-section').style.display='block';
  const chips=document.getElementById('bh-chips');chips.innerHTML='';
  d.reasons.forEach((r,j)=>{
    const ch=document.createElement('button');ch.className='chip '+(d.rcolor[j]||'cblue');
    ch.style.animationDelay=(j*.07)+'s';ch.textContent=r;ch.onclick=()=>pickBhReason(ch);chips.appendChild(ch);
  });
}
function pickBhReason(ch){
  if(bhReason!==-1)return;bhReason=1;
  document.querySelectorAll('#bh-chips .chip').forEach(c=>c.classList.remove('picked'));ch.classList.add('picked');
  const fb=document.getElementById('bh-fb');fb.className='fbanner ok';
  document.getElementById('bh-fbico').textContent='👍';document.getElementById('bh-fbtxt').textContent="Zo'r! Fikringizni aytdingiz! 🎉";
  fb.style.display='block';fb.classList.remove('show');void fb.offsetWidth;fb.classList.add('show');
  document.getElementById('bh-nxt').disabled=false;
}
function nxtBh(){idx++;idx>=DATA.bh.length?done():loadBh()}

function loadHk(){
  const d=DATA.hk[idx];makeStars('hk-stars',DATA.hk.length,idx);
  document.getElementById('hk-sub').textContent=(idx+1)+' / '+DATA.hk.length;
  document.getElementById('hk-ico').textContent=d.ico;document.getElementById('hk-txt').textContent=d.txt;
  const fb=document.getElementById('hk-fb');fb.style.display='none';fb.classList.remove('show');
  document.getElementById('hk-nxt').disabled=true;
  const c=document.getElementById('hk-choices');c.innerHTML='';
  d.opts.forEach((o,i)=>{const b=document.createElement('button');b.className='cbtn c'+i;b.innerHTML='<span class="cico">'+o.ico+'</span>'+o.txt;b.onclick=()=>pickHk(o.ok,b);c.appendChild(b)});
  show('s-hk');
}
function pickHk(ok,btn){
  if(btn.classList.contains('no')||btn.classList.contains('ok'))return;
  if(ok){btn.classList.add('ok');showFb('hk-fb','hk-fbico','hk-fbtxt',true);document.getElementById('hk-nxt').disabled=false}
  else{btn.classList.add('no');btn.disabled=true;showFb('hk-fb','hk-fbico','hk-fbtxt',false)}
}
function nxtHk(){idx++;idx>=DATA.hk.length?done():loadHk()}
