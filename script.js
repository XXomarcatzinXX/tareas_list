// aqui es donde pasamos la variable al html mediante el id

const tareaContainer = document.getElementById('tasksContainer');



// cree el objeto que va a guardar la info del input

const createTarea = event => {
    event.preventDefault();

    //  aqui creo que la constante con que nos permite acceder al obj de un evento

    const { value } = event.target.tareaText


    // aqui le digo que retorne el evento
    


    if(!value) return;


    // practicamente creo otra variable donde le digo que los elemntos que se guarden sean en formato h1

    const tarea = document.createElement('h1');


    tarea.classList.add('tarea');


    tarea.textContent = value;


    tareaContainer.prepend(tarea);

    // aqui reseto el evento solo pa que el input quede vacio una vez llenado, como en typescript

    event.target.reset();


};


// var eliminar_elminar = tarea.removeChild(child);
