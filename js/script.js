const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");
if(menuBtn&&menu){
  menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("abierto");
    menuBtn.textContent=menu.classList.contains("abierto")?"✕":"☰";
  });
}

const contador=document.getElementById("contador");
if(contador){
  let visitas=Number(localStorage.getItem("huellas_visitas"))||0;
  visitas++;
  localStorage.setItem("huellas_visitas",visitas);
  contador.textContent=visitas;
}

const horarioBtn=document.getElementById("horarioBtn");
const horario=document.getElementById("horario");
if(horarioBtn&&horario){
  horarioBtn.addEventListener("click",()=>{
    const dia=new Date().getDay();
    if(dia===0) horario.textContent="Hoy domingo: atención de urgencias de 9:00 a 13:00.";
    else if(dia===6) horario.textContent="Hoy sábado: atención de 9:00 a 14:00.";
    else horario.textContent="Hoy atendemos de 8:00 a 20:00.";
  });
}
