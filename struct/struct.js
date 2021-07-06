const imagenes = [
    {
        image: 'https://www.estilodf.tv/wp-content/uploads/2020/03/Untitled-2-420x245.jpg'
    },
    {
        image: 'https://nocionesunidas.com/wp-content/uploads/2020/01/azul-portada.jpg'
    },
    {
        image: 'https://www.colorpsychology.org/es/wp-content/uploads/2019/07/verde-color.png'
    },
    {
        image: 'https://lucasfh1976.files.wordpress.com/2014/03/img_20140319_183227.jpg'
    },
    {
        image: 'https://www.lifeder.com/wp-content/uploads/2017/02/c%C3%B3mo-hacer-color-naranja.jpg'
    },
    {
        image: 'https://img.freepik.com/foto-gratis/tarjeta-plantilla-informe-papel-suave_1258-167.jpg?size=626&ext=jpg'
    }];

let incremento = 0;


function pictures_right () {
    const picture = document.getElementById('picture');
    let img = '';
    incremento++;
    if(incremento == imagenes.length) {
        incremento = 0;
        img = `
                Imagen numero ${incremento}
                <br>
                <img class="image" src='${imagenes[incremento].image}' alt="">
           `
        picture.innerHTML = img;
    }
    else if(incremento != imagenes.length){
        img = `
                Imagen numero ${incremento}
                <br>
                <img class="image" src='${imagenes[incremento].image}' alt="">
           `
        picture.innerHTML = img;
    }
}

function pictures_left () {
    const picture = document.getElementById('picture');
    let img = '';

    incremento--;   
    if(incremento == -1){
        incremento = (imagenes.length-1)//de 5 a 4
        img = `
                Imagen numero ${incremento}
                <br>
                <img class="image" src='${imagenes[incremento].image}' alt="">
            `
        picture.innerHTML = img;  
    }
    else if(incremento != -1){
        img = `
                Imagen numero ${incremento}
                <br>
                <img class="image" src='${imagenes[incremento].image}' alt="">
            `
        picture.innerHTML = img;   
    }
}

console.log('Tamano: '+imagenes.length)