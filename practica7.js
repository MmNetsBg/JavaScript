import {Alumno} from '/pralumno7.js';
import{OP} from"./prac7.js";

// Al dar click en modificar los datos se deben pasar al 
// formulario y el boton de guardar se va a cambiar a Actualizar
// Al actualizar, se actualizan los datos de la tabla

let element;


guardar.addEventListener('click',function(e){
    const op= new OP;
    
    if(guardar.value == "Guardar"){
        let nombre=document.getElementById("nombre").value;
        let apellido=document.getElementById("apellido").value;
        let cal=document.getElementById("cal").value;
        if(nombre==="" || apellido==="" || cal===""){
            op.mostrar("faltan datos");
        }else{
            const alumno= new Alumno(nombre,apellido,cal);
            op.agregaAlumno(alumno);
            op.mostrar("Alumno Agregado");
        }
    }
    if(guardar.value == "Actualizar"){    
        let nombre=document.getElementById("nombre").value;
        let apellido=document.getElementById("apellido").value;
        let cal=document.getElementById("cal").value;
        if(nombre==="" || apellido==="" || cal===""){
            op.mostrar("Faltan datos");
        }else{
           
            op.actualizando(element,nombre,apellido,cal);  
            op.mostrar("Alumno Actualizado");
        }
    }
    e.preventDefault();
});
document.getElementById("listado").addEventListener("click",(e)=>{
    const op=new OP;
    if(e.target.id=="eliminar"){
        op.eliminaAlumno(e.target);
    }
    if(e.target.id=="modificar"){
        element=e.target;
        op.modifica(e.target);
    }
    e.preventDefault();
});