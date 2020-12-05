
function showModal(id){
    console.log("click");
    document.getElementById("Modal").style.display="block";
    parent = document.getElementById("contenidoModal");
    title = parent.children[1];
    content = parent.children[2];
    if(id==1){
        title.innerHTML="Mordor"
        content.innerHTML="Mordor es un país situado al sureste de la Tierra Media, que tuvo gran importancia durante la Guerra del Anillo por ser el lugar donde Sauron, el Señor Oscuro, decidió edificar su fortaleza de Barad-dûr para intentar atacar y dominar a todos los pueblos de la Tierra Media. Se trata de una región desolada, rodeada de montañas con un interior desértico sin vegetación. "
    }else if(id==2){
        title.innerHTML="Gondor"
        content.innerHTML="Gondor es el nombre que recibió el reino del exilio del Sur que fue fundado después de la Caída de Númenor por Isildur y su hermano Anárion. El padre de ambos, Elendil, fundador de Arnor, el reino del exilio del Norte, también ejercía soberanía sobre Gondor. "
    }else if(id==3){
        title.innerHTML="Rohan"
        content.innerHTML="Rohan es un reino fundado por los Hombres del Norte, los Eorlingas, que ocupa las grandes llanuras cubiertas de pastos situadas al norte de las Montañas Blancas y al este de las Montañas Nubladas. Sus habitantes descienden de los hombres de Éothéod, y se caracterizan por ser amantes de los caballos y por ser los principales aliados del reino de Gondor."
    }else if(id==4){
        title.innerHTML="Rhovanion"
        content.innerHTML="Rhovanion, también conocida como las Tierras Salvajes o las Tierras Ásperas, es una extensa región que se extiende al este de las Montañas Nubladas (s. Hithaeglir), hasta el Río Rápido (s. Celduin) limitando con Rohan al sur, Eriador al oeste, Forodwaith al norte y Rhûn al este."
    }else if(id==5){
        title.innerHTML="Eriador"
        content.innerHTML="Es una de las regiones más extensas de la Tierra Media . Se encuentra habitado por muchos pueblos, y en él viven Hombres, Elfos, Enanos y Hobbits . Fue aquí donde en los primeros años de la Tercera Edad los Hombres fundaron el reino de Arnor, que se acabó perdiendo, quedando sólo el reino de Gondor. "
    }
}

// When the user clicks on <span> (x), close the modal
function closeModal(){
    document.getElementById("Modal").style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 