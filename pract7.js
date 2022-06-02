export class OP{

    agregaAlumno(alumno){

        const listado=document.getElementById("datost");
        const al=document.createElement("tr")

        al.innerHTML=`
                  <td>${alumno.nombre}</td>
                  <td>${alumno.apellido}</td>
                  <td>${alumno.cal}</td>
                  
                  <td id="bot">
                      <a href="eliminar" class="btn-alumno" id="eliminar" name="eliminar">Eliminar</a>
                      <a href="modificar" class="btn-alumno" id="modificar" name="modificar">Modificar</a>
                  </td>
                  `;
    
        listado.appendChild(al);
        document.getElementById("nombre").value="";
        document.getElementById("apellido").value="";
        document.getElementById("cal").value=7;
    }
    mostrar(aviso){
        const div=document.createElement("div");
        div.className="alerta";
        div.appendChild(document.createTextNode(aviso));
  
        const mensaje=document.querySelector(".mensaje");
        mensaje.appendChild(div);
  
        setTimeout(function(){
            document.querySelector(".alerta").remove();
        },3000);
    }

    eliminaAlumno(elemento){

    elemento.parentElement.parentElement.remove();
    this.mostrar("Alumno eliminado");

}
   
   modifica(elemento){
    let nombre=elemento.parentElement.parentElement.cells[0].innerHTML;
    let apellido=elemento.parentElement.parentElement.cells[1].innerHTML;
    let cal=elemento.parentElement.parentElement.cells[2].innerHTML;

    document.getElementById("nombre").value=nombre;
    document.getElementById("apellido").value=apellido;
    document.getElementById("cal").value=cal;
    document.getElementById("listado").disabled=true;

    document.getElementById("guardar").value="Actualizar";
}
    actualizando(elemento,a,b,c){
    elemento.parentElement.parentElement.cells[0].innerHTML=a;
    elemento.parentElement.parentElement.cells[1].innerHTML=b;
    elemento.parentElement.parentElement.cells[2].innerHTML=c;

    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("cal").value=7;
    document.getElementById("guardar").value="Guardar";
}
limpiar(){
       document.getElementById("falumnos").reset();
   }
}