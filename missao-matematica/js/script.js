const $=id=>document.getElementById(id);
let level='easy',questions=[],index=0,score=0,streak=0,locked=false;
document.querySelectorAll('.level').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.level').forEach(b=>b.classList.remove('active'));
 btn.classList.add('active');level=btn.dataset.level;
}));
const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
function makeQuestion(){
 let a,b,answer,op,topic;
 if(level==='easy'){
  const type=rand(0,3);
  if(type===0){a=rand(12,90);b=rand(5,60);answer=a+b;op='+';topic='Adição espacial';}
  else if(type===1){a=rand(30,100);b=rand(5,a-5);answer=a-b;op='−';topic='Subtração lunar';}
  else if(type===2){a=rand(2,12);b=rand(2,10);answer=a*b;op='×';topic='Multiplicação turbo';}
  else {b=rand(2,10);answer=rand(2,12);a=b*answer;op='÷';topic='Divisão orbital';}
 }else if(level==='medium'){
  const type=rand(0,3);
  if(type===0){a=rand(15,80);b=rand(3,35);answer=a+b;op='+';topic='Cálculo de rota';}
  else if(type===1){a=rand(40,150);b=rand(5,a-10);answer=a-b;op='−';topic='Combustível restante';}
  else if(type===2){a=rand(6,18);b=rand(4,12);answer=a*b;op='×';topic='Multiplicação avançada';}
  else {b=rand(3,12);answer=rand(4,20);a=b*answer;op='÷';topic='Divisão precisa';}
 }else{
  const type=rand(0,4);
  if(type===0){a=rand(2,15);b=rand(2,8);answer=a*a+b*b;return build(`${a}² + ${b}²`,answer,'Potências');}
  if(type===1){a=rand(2,12);b=rand(2,12);answer=a*b+rand(5,20);return build(`${a} × ${b} + ${answer-a*b}`,answer,'Expressão numérica');}
  if(type===2){a=rand(10,30);b=rand(2,9);answer=a*b;return build(`${answer} ÷ ${b}`,a,'Divisão e raciocínio');}
  if(type===3){a=rand(10,40);b=rand(5,25);answer=a+b;return build(`Qual é ${a+b}% de 100?`,a+b,'Porcentagem');}
  a=rand(3,12);b=rand(2,10);answer=a*b;return build(`Se ${a} caixas têm ${b} itens cada, quantos itens há?`,answer,'Problema lógico');
 }
 return build(`${a} ${op} ${b}`,answer,topic);
}
function build(text,answer,topic){
 const opts=new Set([answer]);
 while(opts.size<4){let v=answer+rand(-Math.max(8,Math.ceil(answer*.3)),Math.max(8,Math.ceil(answer*.3)));if(v>=0&&v!==answer)opts.add(v);}
 return {text,answer,topic,opts:[...opts].sort(()=>Math.random()-.5)};
}
function startGame(){
 score=0;streak=0;index=0;questions=Array.from({length:10},makeQuestion);
 $('start').classList.add('hidden');$('result').classList.add('hidden');$('game').classList.remove('hidden');showQuestion();
}
function showQuestion(){
 locked=false;let q=questions[index];
 $('score').textContent=score;$('streak').textContent=streak;$('questionNo').textContent=`${index+1}/10`;
 $('bar').style.width=`${index*10}%`;$('topic').textContent=q.topic;$('question').textContent=q.text+' = ?';
 $('feedback').textContent='';$('feedback').className='feedback';$('next').classList.add('hidden');$('answers').innerHTML='';
 q.opts.forEach((v,i)=>{let btn=document.createElement('button');btn.className='answer';btn.textContent=v;btn.addEventListener('click',()=>choose(v,btn));$('answers').appendChild(btn);});
}
function choose(value,btn){
 if(locked)return;locked=true;let q=questions[index];let correct=value===q.answer;
 document.querySelectorAll('.answer').forEach(b=>{b.disabled=true;if(Number(b.textContent)===q.answer)b.classList.add('correct');});
 if(correct){score+=100+streak*20;streak++;$('feedback').textContent='✨ Muito bem! Resposta correta! + pontos';$('feedback').classList.add('good');}
 else{streak=0;btn.classList.add('wrong');$('feedback').textContent=`Quase! A resposta certa é ${q.answer}. Continue tentando!`;$('feedback').classList.add('bad');}
 $('score').textContent=score;$('streak').textContent=streak;$('bar').style.width=`${(index+1)*10}%`;$('next').classList.remove('hidden');
 $('next').textContent=index===9?'VER RESULTADO 🏆':'PRÓXIMA PERGUNTA ➜';
}
function finish(){
 $('game').classList.add('hidden');$('result').classList.remove('hidden');
 $('finalScore').textContent=score+' pontos';
 let pct=score/1000;
 if(pct>=.8){$('medal').textContent='🏆';$('resultTitle').textContent='Lenda da matemática!';$('resultText').textContent='Incrível! Você dominou a missão espacial. Seu raciocínio está em outro planeta!';}
 else if(pct>=.5){$('medal').textContent='🥇';$('resultTitle').textContent='Missão muito bem cumprida!';$('resultText').textContent='Você foi muito bem! Continue praticando para chegar ainda mais longe.';}
 else{$('medal').textContent='🌟';$('resultTitle').textContent='Treinamento concluído!';$('resultText').textContent='Todo comandante começa treinando. Tente mais uma vez e supere sua pontuação!';}
}
$('begin').addEventListener('click',startGame);
$('next').addEventListener('click',()=>{if(index<9){index++;showQuestion();}else finish();});
$('again').addEventListener('click',()=>{$('result').classList.add('hidden');$('start').classList.remove('hidden');});
