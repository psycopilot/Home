document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const updateSlide = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        document.getElementById('prev-btn').disabled = currentSlide === 0;
        document.getElementById('next-btn').disabled = currentSlide === slides.length - 1;
    };

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlide();
        }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    });

    updateSlide();
});

const options = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", 
    "Honeydew", "Indian Fig", "Jackfruit", "Kiwi", "Lemon", "Mango", 
    "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", 
    "Tomato", "Ugli fruit", "Vanilla", "Watermelon", "Xigua", "Yellow Passion Fruit", "Zucchini"
];

function updateSuggestionsintel() {
     // Obtiene el valor del campo de entrada (input) y lo convierte a minúsculas para facilitar la comparación
     const input = document.getElementById('autocompleteInput').value.toLowerCase();
    
     // Dividir la entrada en palabras clave
     const keywords = input.split(' ').map(keyword => keyword.trim()).filter(keyword => keyword.length > 0);
     
     // Obtiene la lista de sugerencias (datalist) del documento
     const datalist = document.getElementById('suggestions');
     
     // Limpia las sugerencias anteriores eliminando todo el contenido de la lista de sugerencias
     datalist.innerHTML = '';
 
     // Si no hay palabras clave, no muestra sugerencias y sale de la función
     if (keywords.length === 0) return;
 
     // Filtra las opciones según cada palabra clave
     const filteredOptions = intel.filter(option => {
         // Verifica si al menos una palabra clave está contenida en el primer elemento del sub-array
         return keywords.some(keyword => option[0].toLowerCase().includes(keyword));
     }).slice(0, 5);
 
     // Para cada opción filtrada, crea un nuevo elemento <option> y lo agrega al datalist
     filteredOptions.forEach(option => {
         // Crea un nuevo elemento <option>
         const optionElement = document.createElement('option');
         
         // Establece el valor del <option> al primer elemento del sub-array filtrado
         optionElement.value = option[0];
         
         // Agrega el elemento <option> al datalist
         datalist.appendChild(optionElement);
    });
}
function updateSuggestionsintel2() {
    // Obtiene el valor del campo de entrada (input) y lo convierte a minúsculas para facilitar la comparación
    const input = document.getElementById('autocompleteInput3').value.toLowerCase();
   
    // Dividir la entrada en palabras clave
    const keywords = input.split(' ').map(keyword => keyword.trim()).filter(keyword => keyword.length > 0);
    
    // Obtiene la lista de sugerencias (datalist) del documento
    const datalist = document.getElementById('suggestions3');
    
    // Limpia las sugerencias anteriores eliminando todo el contenido de la lista de sugerencias
    datalist.innerHTML = '';

    // Si no hay palabras clave, no muestra sugerencias y sale de la función
    if (keywords.length === 0) return;

    // Filtra las opciones según cada palabra clave
    const filteredOptions = intel.filter(option => {
        // Verifica si al menos una palabra clave está contenida en el primer elemento del sub-array
        return keywords.some(keyword => option[0].toLowerCase().includes(keyword));
    }).slice(0, 5);

    // Para cada opción filtrada, crea un nuevo elemento <option> y lo agrega al datalist
    filteredOptions.forEach(option => {
        // Crea un nuevo elemento <option>
        const optionElement = document.createElement('option');
        
        // Establece el valor del <option> al primer elemento del sub-array filtrado
        optionElement.value = option[0];
        
        // Agrega el elemento <option> al datalist
        datalist.appendChild(optionElement);
   });
}
function updateSuggestionsamd() {
    console.log("holis");
    const input2 = document.getElementById('autocompleteInput2').value.toLowerCase();
    console.log("Valor de input2:", input2);
   
    // Dividir la entrada en palabras clave
    const keywords2 = input2.split(' ').map(keyword3 => keyword3.trim()).filter(keyword3 => keyword3.length > 0);
    console.log("Palabras clave:", keywords2);
    // Obtiene la lista de sugerencias (datalist) del documento
    const datalist2 = document.getElementById('suggestions2');
    
    // Limpia las sugerencias anteriores eliminando todo el contenido de la lista de sugerencias
    datalist2.innerHTML = '';
    
    // Si no hay palabras clave, no muestra sugerencias y sale de la función
    if (keywords2.length === 0) return;
    
    // Filtra las opciones según cada palabra clave
    const filteredOptions2 = amd.filter(option3 => {
        // Verifica si al menos una palabra clave está contenida en el valor de la propiedad 'Nom' del objeto option
        return keywords2.every(keyword3 => 
            option3.Nom.toLowerCase().includes(keyword3)
        );
    }).slice(0, 5);
    console.log("Opciones filtradas:", filteredOptions2);
    // Para cada opción filtrada, crea un nuevo elemento <option> y lo agrega al datalist
    filteredOptions2.forEach(option3 => {
        // Crea un nuevo elemento <option>
        const optionElement2 = document.createElement('option');
        
        // Establece el valor del <option> al primer elemento del sub-array filtrado
        optionElement2.value = option3.Nom;
        console.log("Agregando opción al datalist:", option3.Nom);
        // Agrega el elemento <option> al datalist
        datalist2.appendChild(optionElement2);
    });
}
function updateSuggestionsamd2() {
    console.log("holis");
    const input22 = document.getElementById('autocompleteInput2').value.toLowerCase();
    console.log("Valor de input2:", input2);
   
    // Dividir la entrada en palabras clave
    const keywords22 = input22.split(' ').map(keyword3 => keyword3.trim()).filter(keyword3 => keyword3.length > 0);
    console.log("Palabras clave:", keywords22);
    // Obtiene la lista de sugerencias (datalist) del documento
    const datalist22 = document.getElementById('suggestions2');
    
    // Limpia las sugerencias anteriores eliminando todo el contenido de la lista de sugerencias
    datalist22.innerHTML = '';
    
    // Si no hay palabras clave, no muestra sugerencias y sale de la función
    if (keywords22.length === 0) return;
    
    // Filtra las opciones según cada palabra clave
    const filteredOptions22 = amd.filter(option3 => {
        // Verifica si al menos una palabra clave está contenida en el valor de la propiedad 'Nom' del objeto option
        return keywords22.every(keyword3 => 
            option3.Nom.toLowerCase().includes(keyword3)
        );
    }).slice(0, 5);
    console.log("Opciones filtradas:", filteredOptions2);
    // Para cada opción filtrada, crea un nuevo elemento <option> y lo agrega al datalist
    filteredOptions2.forEach(option3 => {
        // Crea un nuevo elemento <option>
        const optionElement2 = document.createElement('option');
        
        // Establece el valor del <option> al primer elemento del sub-array filtrado
        optionElement2.value = option3.Nom;
        console.log("Agregando opción al datalist:", option3.Nom);
        // Agrega el elemento <option> al datalist
        datalist2.appendChild(optionElement2);
    });
}
document.getElementById('autocompleteForm').style.display = 'none';
document.getElementById('autocompleteForm2').style.display = 'none';
function toggleForm(type) {
    if (type === 'intel') {
        document.getElementById('autocompleteForm').style.display = 'block';
        document.getElementById('autocompleteForm2').style.display = 'none';
        var model1 = "intel";
    } else if (type === 'amd') {
        document.getElementById('autocompleteForm').style.display = 'none';
        document.getElementById('autocompleteForm2').style.display = 'block';
        var model1 = "amd"
    }
}
function toggleForm2(types) {
    if (types === 'intel') {
        document.getElementById('2autocompleteForm').style.display = 'block';
        document.getElementById('2autocompleteForm2').style.display = 'none';
        console.log("intel1");
        var model1 = "intel";
    } else if (types === 'amd') {
        document.getElementById('2autocompleteForm').style.display = 'none';
        document.getElementById('2autocompleteForm2').style.display = 'block';
        var model1 = "amd"
        console.log("amd1");
    }
}
function toggleForm(types) {
    if (types === 'intel') {
        document.getElementById('autocompleteForm').style.display = 'block';
        console.log("intel2");
        document.getElementById('autocompleteForm2').style.display = 'none';
        var model1 = "intel";
    } else if (types === 'amd') {
        document.getElementById('autocompleteForm').style.display = 'none';
        document.getElementById('autocompleteForm2').style.display = 'block';
        console.log("amd2");
        var model1 = "amd"
    }
}
function showSelectedValue() {
    const inputElement = document.getElementById('autocompleteInput');
    const selectedValue = inputElement.value;
    document.getElementById('selectedValue').innerText = `Selected value: `;
}

let intel = [
    [
        " Intel® Core™2 Duo Processor T6670",
        "Q3'09",
        "2",
        "",
        "2 MB L2 Cache",
        ""
    ],
    [
        " Intel® Core™2 Quad Processor Q9505",
        "Q3'09",
        "4",
        "",
        "6 MB L2 Cache",
        ""
    ],
    [
        " Intel® Core™2 Quad Processor Q9505S",
        "Q3'09",
        "4",
        "",
        "6 MB L2 Cache",
        ""
    ],
    [
        " Intel® Core™ 3 processor 100HL",
        "Q2'24",
        "8",
        "4.6 GHz",
        "12 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 3 processor 100U",
        "Q1'24",
        "6",
        "4.7 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® Graphics"
    ],
    [
        " Intel® Core™ 3 processor 100U",
        "Q1'24",
        "6",
        "4.7 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® Graphics"
    ],
    [
        " Intel® Core™ 3 processor 100UL",
        "Q2'24",
        "6",
        "4.5 GHz",
        "10 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 5 processor 120HL",
        "Q2'24",
        "12",
        "4.7 GHz",
        "18 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 5 processor 120U",
        "Q1'24",
        "10",
        "5 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Graphics"
    ],
    [
        " Intel® Core™ 5 processor 120UL",
        "Q2'24",
        "10",
        "4.6 GHz",
        "12 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 5 processor 130HL",
        "Q2'24",
        "12",
        "4.8 GHz",
        "18 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 5 processor 130UL",
        "Q2'24",
        "10",
        "4.7 GHz",
        "12 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 7 processor 150U",
        "Q1'24",
        "10",
        "5.4 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Graphics"
    ],
    [
        " Intel® Core™ 7 processor 150UL",
        "Q2'24",
        "10",
        "5 GHz",
        "12 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 7 processor 160HL",
        "Q2'24",
        "14",
        "5.2 GHz",
        "24 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 7 processor 160UL",
        "Q2'24",
        "10",
        "5.2 GHz",
        "12 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ 7 processor 150HL",
        "Q2'24",
        "14",
        "5 GHz",
        "24 MB",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i3 processor 14100",
        "Q1'24",
        "4",
        "4.7 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3 processor 14100F",
        "Q1'24",
        "4",
        "4.7 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3 processor 14100T",
        "Q1'24",
        "4",
        "4.4 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-330E Processor",
        "Q1'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-330M Processor",
        "Q1'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-330UM Processor",
        "Q2'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-350M Processor",
        "Q1'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-370M Processor",
        "Q3'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-380M Processor",
        "Q3'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-380UM Processor",
        "Q4'10",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-390M Processor",
        "Q1'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-530 Processor",
        "Q1'10",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-540 Processor",
        "Q1'10",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-550 Processor",
        "Q2'10",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-560 Processor",
        "Q3'10",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1005G1 Processor",
        "Q3'19",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1110G4 Processor",
        "Q3'20",
        "2",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1115G4 Processor",
        "Q3'20",
        "2",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1115G4 Processor",
        "Q3'20",
        "2",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1115G4E Processor",
        "Q3'20",
        "2",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1115GRE Processor",
        "Q3'20",
        "2",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1120G4 Processor",
        "Q1'21",
        "4",
        "3.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1125G4 Processor",
        "Q1'21",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1125G4 Processor",
        "Q1'21",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1210U Processor",
        "Q1'22",
        "6",
        "4.40 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1215U Processor",
        "Q1'22",
        "6",
        "4.40 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1215U Processor",
        "Q1'22",
        "6",
        "4.40 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1215UE Processor",
        "Q1'22",
        "6",
        "",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1215UL Processor",
        "Q3'22",
        "6",
        "4.40 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1220P Processor",
        "Q1'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1220PE Processor",
        "Q1'22",
        "8",
        "",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1305U Processor",
        "Q1'23",
        "5",
        "4.50 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1315U Processor",
        "Q1'23",
        "6",
        "4.5 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1315U Processor",
        "Q1'23",
        "6",
        "4.50 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1315UE Processor",
        "Q1'23",
        "6",
        "4.50 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1315URE Processor",
        "Q1'23",
        "6",
        "4.50 GHz",
        "10 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1320PE Processor",
        "Q1'23",
        "8",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-1320PRE Processor",
        "Q1'23",
        "8",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-2100 Processor",
        "Q1'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i3-2100T Processor",
        "Q1'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i3-2102 Processor",
        "Q2'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i3-2105 Processor",
        "Q2'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2115C Processor",
        "Q2'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-2120 Processor",
        "Q1'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i3-2120T Processor",
        "Q3'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i3-2125 Processor",
        "Q3'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2130 Processor",
        "Q3'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i3-2310E Processor",
        "Q1'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2310M Processor",
        "Q1'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2312M Processor",
        "Q2'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2328M Processor",
        "Q3'12",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2330E Processor",
        "Q2'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2330M Processor",
        "Q2'11",
        "2",
        "",
        "3 MB L3 Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2340UE Processor",
        "Q2'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2348M Processor",
        "Q1'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2350M Processor",
        "Q4'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2357M Processor",
        "Q2'11",
        "2",
        "",
        "3 MB L3 Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2365M Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-2367M Processor",
        "Q4'11",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2370M Processor",
        "Q1'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i3-2375M Processor",
        "Q1'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-2377M Processor",
        "Q2'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-3110M Processor",
        "Q2'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3115C Processor",
        "Q3'13",
        "2",
        "",
        "4 MB L3 Cache",
        ""
    ],
    [
        " Intel® Core™ i3-3120M Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3120ME Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3130M Processor",
        "Q1'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3210 Processor",
        "Q1'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-3217U Processor",
        "Q2'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3217UE Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3220 Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-3220T Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-3225 Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3227U Processor",
        "Q1'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3229Y Processor",
        "Q1'13",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3240 Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-3240T Processor",
        "Q3'12",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-3245 Processor",
        "Q2'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i3-3250 Processor",
        "Q2'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-3250T Processor",
        "Q2'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i3-4000M Processor",
        "Q4'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4005U Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4010U Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4010Y Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i3-4012Y Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i3-4020Y Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i3-4025U Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4030U Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4030Y Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i3-4100E Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4100M Processor",
        "Q4'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4100U Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4102E Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4110E Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4110M Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4112E Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4120U Processor",
        "Q2'14",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4130 Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4130T Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4150 Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4150T Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4158U Processor",
        "Q3'13",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i3-4160 Processor",
        "Q3'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4160T Processor",
        "Q3'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4170 Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4170T Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i3-4330 Processor",
        "Q3'13",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4330T Processor",
        "Q3'13",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4330TE Processor",
        "Q3'13",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4340 Processor",
        "Q3'13",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4340TE Processor",
        "Q2'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4350 Processor",
        "Q2'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4350T Processor",
        "Q2'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4360 Processor",
        "Q2'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4360T Processor",
        "Q3'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4370 Processor",
        "Q3'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-4370T Processor",
        "Q1'15",
        "2",
        "",
        "4 MB",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i3-5005U Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i3-5010U Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i3-5015U Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i3-5020U Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i3-5157U Processor",
        "Q1'15",
        "2",
        "",
        "3 MB",
        "Intel® Iris® Graphics 6100"
    ],
    [
        " Intel® Core™ i3-6006U Processor",
        "Q4'16",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 520"
    ],
    [
        " Intel® Core™ i3-6098P Processor",
        "Q4'15",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 510"
    ],
    [
        " Intel® Core™ i3-6100 Processor",
        "Q3'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6100E Processor",
        "Q4'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6100H Processor",
        "Q3'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6100T Processor",
        "Q3'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6100TE Processor",
        "Q4'15",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6100U Processor",
        "Q3'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 520"
    ],
    [
        " Intel® Core™ i3-6102E Processor",
        "Q4'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6157U Processor",
        "Q3'16",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 550"
    ],
    [
        " Intel® Core™ i3-6167U Processor",
        "Q3'15",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 550"
    ],
    [
        " Intel® Core™ i3-6300 Processor",
        "Q3'15",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6300T Processor",
        "Q3'15",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-6320 Processor",
        "Q3'15",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i3-7020U Processor",
        "Q2'18",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i3-7100 Processor",
        "Q1'17",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7100E Processor",
        "Q1'17",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7100H Processor",
        "Q1'17",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7100T Processor",
        "Q1'17",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7100U Processor",
        "Q3'16",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i3-7101E Processor",
        "Q1'17",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7101TE Processor",
        "Q1'17",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7102E Processor",
        "Q1'17",
        "2",
        "",
        "3 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7130U Processor",
        "Q2'17",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i3-7167U Processor",
        "Q1'17",
        "2",
        "",
        "3 MB",
        "Intel® Iris® Plus Graphics 650"
    ],
    [
        " Intel® Core™ i3-7300 Processor",
        "Q1'17",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7300T Processor",
        "Q1'17",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7320 Processor",
        "Q1'17",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-7350K Processor",
        "Q1'17",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8100 Processor",
        "Q4'17",
        "4",
        "",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8100B Processor",
        "Q3'18",
        "4",
        "",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8100H Processor",
        "Q4'17",
        "4",
        "",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8100T Processor",
        "Q2'18",
        "4",
        "",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8109U Processor",
        "Q2'18",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 655"
    ],
    [
        " Intel® Core™ i3-8130U Processor",
        "Q1'18",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i3-8140U Processor",
        "Q4'19",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i3-8145U Processor",
        "Q3'18",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 8th Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i3-8145UE Processor",
        "Q3'18",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i3-8300 Processor",
        "Q2'18",
        "4",
        "",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8300T Processor",
        "Q2'18",
        "4",
        "",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-8350K Processor",
        "Q4'17",
        "4",
        "",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9100 Processor",
        "Q2'19",
        "4",
        "4.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9100E Processor",
        "Q2'19",
        "4",
        "3.70 GHz",
        "6 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9100F Processor",
        "Q2'19",
        "4",
        "4.20 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-9100HL Processor",
        "Q2'19",
        "4",
        "2.90 GHz",
        "6 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9100T Processor",
        "Q2'19",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9100TE Processor",
        "Q2'19",
        "4",
        "3.20 GHz",
        "6 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9300 Processor",
        "Q2'19",
        "4",
        "4.30 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9300T Processor",
        "Q2'19",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9320 Processor",
        "Q2'19",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9350K Processor",
        "Q2'19",
        "4",
        "4.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-9350KF Processor",
        "Q1'19",
        "4",
        "4.60 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-10100 Processor",
        "Q2'20",
        "4",
        "4.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10100E Processor",
        "Q2'20",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10100F Processor",
        "Q4'20",
        "4",
        "4.30 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-10100T Processor",
        "Q2'20",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10100TE Processor",
        "Q2'20",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10100Y Processor",
        "Q1'21",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 615"
    ],
    [
        " Intel® Core™ i3-10105 Processor",
        "Q1'21",
        "4",
        "4.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10105F Processor",
        "Q1'21",
        "4",
        "4.40 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-10105T Processor",
        "Q1'21",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10110U Processor",
        "Q3'19",
        "2",
        "4.10 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-10110Y Processor",
        "Q3'19",
        "2",
        "4.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-10300 Processor",
        "Q2'20",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10300T Processor",
        "Q2'20",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10305 Processor",
        "Q1'21",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10305T Processor",
        "Q1'21",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10320 Processor",
        "Q2'20",
        "4",
        "4.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-10325 Processor",
        "Q1'21",
        "4",
        "4.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i3-11100HE Processor",
        "Q3'21",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-12100 Processor",
        "Q1'22",
        "4",
        "4.30 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-12100E Processor",
        "Q1'22",
        "4",
        "4.20 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-12100F Processor",
        "Q1'22",
        "4",
        "4.30 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-12100T Processor",
        "Q1'22",
        "4",
        "4.10 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-12100TE Processor",
        "Q1'22",
        "4",
        "4.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-12300 Processor",
        "Q1'22",
        "4",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-12300HE Processor",
        "Q1'22",
        "8",
        "",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics"
    ],
    [
        " Intel® Core™ i3-12300HL Processor",
        "Q3'22",
        "8",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-12300T Processor",
        "Q1'22",
        "4",
        "4.20 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-13100 Processor",
        "Q1'23",
        "4",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-13100E Processor",
        "Q1'23",
        "4",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-13100F Processor",
        "Q1'23",
        "4",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i3-13100T Processor",
        "Q1'23",
        "4",
        "4.20 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-13100TE Processor",
        "Q1'23",
        "4",
        "4.10 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i3-13300HE Processor",
        "Q1'23",
        "8",
        "4.6 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-13300HRE Processor",
        "Q1'23",
        "8",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i3-L13G4 Processor",
        "Q2'20",
        "5",
        "2.80 GHz",
        "4 MB",
        "Intel® UHD Graphics"
    ],
    [
        " Intel® Core™ i3-N300 Processor",
        "Q1'23",
        "8",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics"
    ],
    [
        " Intel® Core™ i3-N305 Processor",
        "Q1'23",
        "8",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics"
    ],
    [
        " Intel® Core™ i5 processor 14400",
        "Q1'24",
        "10",
        "4.7 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5 processor 14400F",
        "Q1'24",
        "10",
        "4.7 GHz",
        "20 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5 processor 14400T",
        "Q1'24",
        "10",
        "4.5 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5 processor 14450HX",
        "Q1'24",
        "10",
        "4.8 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 14th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5 processor 14500",
        "Q1'24",
        "14",
        "5 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5 processor 14500HX",
        "Q1'24",
        "14",
        "4.9 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 14th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5 processor 14500T",
        "Q1'24",
        "14",
        "4.8 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5 processor 14600",
        "Q1'24",
        "14",
        "5.2 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5 processor 14600K",
        "Q4'23",
        "14",
        "5.3 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5 processor 14600KF",
        "Q4'23",
        "14",
        "5.3 GHz",
        "24 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5 processor 14600T",
        "Q1'24",
        "14",
        "5.1 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5+8400 Processor\n(9M Cache, up to 4.00 GHz) includes Intel® Optane™ Memory",
        "Q2'18",
        "6",
        "4.00 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5+8500 Processor\n(9M Cache, up to 4.10 GHz) includes Intel® Optane™ Memory",
        "Q2'18",
        "6",
        "4.10 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7Y54 Processor",
        "Q3'16",
        "2",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 615"
    ],
    [
        " Intel® Core™ i5-7Y57 Processor",
        "Q1'17",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 615"
    ],
    [
        " Intel® Core™ i5-430M Processor",
        "Q1'10",
        "2",
        "2.53 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-430UM Processor",
        "Q2'10",
        "2",
        "1.73 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-450M Processor",
        "Q2'10",
        "2",
        "2.66 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-460M Processor",
        "Q3'10",
        "2",
        "2.80 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-470UM Processor",
        "Q4'10",
        "2",
        "1.86 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-480M Processor",
        "Q1'11",
        "2",
        "2.93 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-520E Processor",
        "Q1'10",
        "2",
        "2.93 GHz",
        "3 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-520M Processor",
        "Q1'10",
        "2",
        "2.93 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-520UM Processor",
        "Q1'10",
        "2",
        "1.87 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-540M Processor",
        "Q1'10",
        "2",
        "3.07 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-540UM Processor",
        "Q2'10",
        "2",
        "2.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-560M Processor",
        "Q3'10",
        "2",
        "3.20 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-560UM Processor",
        "Q3'10",
        "2",
        "2.13 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-580M Processor",
        "Q3'10",
        "2",
        "3.33 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-650 Processor",
        "Q1'10",
        "2",
        "3.46 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-655K Processor",
        "Q2'10",
        "2",
        "3.46 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-660 Processor",
        "Q1'10",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-661 Processor",
        "Q1'10",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-670 Processor",
        "Q1'10",
        "2",
        "3.73 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-680 Processor",
        "Q2'10",
        "2",
        "3.86 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-750 Processor",
        "Q3'09",
        "4",
        "3.20 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-750S Processor",
        "Q1'10",
        "4",
        "3.20 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-760 Processor",
        "Q3'10",
        "4",
        "3.33 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-1035G1 Processor",
        "Q3'19",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-1035G4 Processor",
        "Q3'19",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics"
    ],
    [
        " Intel® Core™ i5-1035G7 Processor",
        "Q3'19",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics"
    ],
    [
        " Intel® Core™ i5-1130G7 Processor",
        "Q3'20",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1135G7 Processor",
        "Q3'20",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1135G7 Processor",
        "Q3'20",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1140G7 Processor",
        "Q1'21",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1145G7 Processor",
        "Q1'21",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1145G7E Processor",
        "Q3'20",
        "4",
        "4.10 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1145GRE Processor",
        "Q3'20",
        "4",
        "4.10 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-1155G7 Processor",
        "Q2'21",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1155G7 Processor",
        "Q2'21",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1230U Processor",
        "Q1'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1235U Processor",
        "Q1'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1235U Processor",
        "Q1'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1235UL Processor",
        "Q3'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1240P Processor",
        "Q1'22",
        "12",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1240U Processor",
        "Q1'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1245U Processor",
        "Q1'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1245UE Processor",
        "Q1'22",
        "10",
        "",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1245UL Processor",
        "Q3'22",
        "10",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1250P Processor",
        "Q1'22",
        "12",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1250PE Processor",
        "Q1'22",
        "12",
        "",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1334U Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1335U Processor",
        "Q1'23",
        "10",
        "4.6 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1335UE Processor",
        "Q1'23",
        "10",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1340P Processor",
        "Q1'23",
        "12",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1340PE Processor",
        "Q1'23",
        "12",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1345U Processor",
        "Q1'23",
        "10",
        "4.7 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1345UE Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1345URE Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1350P Processor",
        "Q1'23",
        "12",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1350PE Processor",
        "Q1'23",
        "12",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-1350PRE Processor",
        "Q1'23",
        "12",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-2300 Processor",
        "Q1'11",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2310 Processor",
        "Q2'11",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2320 Processor",
        "Q3'11",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2380P Processor",
        "Q1'12",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-2390T Processor",
        "Q1'11",
        "2",
        "3.50 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2400 Processor",
        "Q1'11",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2400S Processor",
        "Q1'11",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2405S Processor",
        "Q2'11",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2410M Processor",
        "Q1'11",
        "2",
        "2.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2430M Processor",
        "Q4'11",
        "2",
        "3.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2435M Processor",
        "Q4'11",
        "2",
        "3.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2450M Processor",
        "Q1'12",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2450P Processor",
        "Q1'12",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-2467M Processor",
        "Q2'11",
        "2",
        "2.30 GHz",
        "3 MB L3 Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2500 Processor",
        "Q1'11",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2500K Processor",
        "Q1'11",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2500S Processor",
        "Q1'11",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2500T Processor",
        "Q1'11",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i5-2510E Processor",
        "Q1'11",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2515E Processor",
        "Q1'11",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2520M Processor",
        "Q1'11",
        "2",
        "3.20 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2537M Processor",
        "Q1'11",
        "2",
        "2.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2540M Processor",
        "Q1'11",
        "2",
        "3.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-2550K Processor",
        "Q1'12",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-2557M Processor",
        "Q2'11",
        "2",
        "2.70 GHz",
        "3 MB L3 Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i5-3210M Processor",
        "Q2'12",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3210M Processor",
        "Q2'12",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3230M Processor",
        "Q1'13",
        "2",
        "3.20 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3230M Processor",
        "Q1'13",
        "2",
        "3.20 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3317U Processor",
        "Q2'12",
        "2",
        "2.60 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3320M Processor",
        "Q2'12",
        "2",
        "3.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3330 Processor",
        "Q3'12",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3330S Processor",
        "Q3'12",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3337U Processor",
        "Q1'13",
        "2",
        "2.70 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3339Y Processor",
        "Q1'13",
        "2",
        "2.00 GHz",
        "3 MB",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3340 Processor",
        "Q3'13",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3340M Processor",
        "Q1'13",
        "2",
        "3.40 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3340S Processor",
        "Q3'13",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3350P Processor",
        "Q3'12",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-3360M Processor",
        "Q2'12",
        "2",
        "3.50 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3380M Processor",
        "Q1'13",
        "2",
        "3.60 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3427U Processor",
        "Q2'12",
        "2",
        "2.80 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3437U Processor",
        "Q1'13",
        "2",
        "2.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3439Y Processor",
        "Q1'13",
        "2",
        "2.30 GHz",
        "3 MB",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3450 Processor",
        "Q2'12",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3450S Processor",
        "Q2'12",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3470 Processor",
        "Q2'12",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3470S Processor",
        "Q2'12",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3470T Processor",
        "Q2'12",
        "2",
        "3.60 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3475S Processor",
        "Q2'12",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3550 Processor",
        "Q2'12",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3550S Processor",
        "Q2'12",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3570 Processor",
        "Q2'12",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3570K Processor",
        "Q2'12",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-3570S Processor",
        "Q2'12",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3570T Processor",
        "Q2'12",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 2500"
    ],
    [
        " Intel® Core™ i5-3610ME Processor",
        "Q2'12",
        "2",
        "3.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i5-4200H Processor",
        "Q4'13",
        "2",
        "3.40 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4200M Processor",
        "Q4'13",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4200U Processor",
        "Q3'13",
        "2",
        "2.60 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i5-4200Y Processor",
        "Q3'13",
        "2",
        "1.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i5-4202Y Processor",
        "Q3'13",
        "2",
        "2.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i5-4210H Processor",
        "Q3'14",
        "2",
        "3.50 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4210M Processor",
        "Q2'14",
        "2",
        "3.20 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4210U Processor",
        "Q2'14",
        "2",
        "2.70 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i5-4210Y Processor",
        "Q3'13",
        "2",
        "1.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i5-4220Y Processor",
        "Q2'14",
        "2",
        "2.00 GHz",
        "3 MB",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i5-4250U Processor",
        "Q3'13",
        "2",
        "2.60 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 5000"
    ],
    [
        " Intel® Core™ i5-4258U Processor",
        "Q3'13",
        "2",
        "2.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i5-4260U Processor",
        "Q2'14",
        "2",
        "2.70 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 5000"
    ],
    [
        " Intel® Core™ i5-4278U Processor",
        "Q3'14",
        "2",
        "3.10 GHz",
        "3 MB",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i5-4288U Processor",
        "Q3'13",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i5-4300M Processor",
        "Q4'13",
        "2",
        "3.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4300U Processor",
        "Q3'13",
        "2",
        "2.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i5-4300Y Processor",
        "Q3'13",
        "2",
        "2.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i5-4302Y Processor",
        "Q3'13",
        "2",
        "2.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i5-4308U Processor",
        "Q3'14",
        "2",
        "3.30 GHz",
        "3 MB",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i5-4310M Processor",
        "Q1'14",
        "2",
        "3.40 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4310U Processor",
        "Q1'14",
        "2",
        "3.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i5-4330M Processor",
        "Q4'13",
        "2",
        "3.50 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4340M Processor",
        "Q1'14",
        "2",
        "3.60 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4350U Processor",
        "Q3'13",
        "2",
        "2.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 5000"
    ],
    [
        " Intel® Core™ i5-4360U Processor",
        "Q1'14",
        "2",
        "3.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 5000"
    ],
    [
        " Intel® Core™ i5-4400E Processor",
        "Q3'13",
        "2",
        "3.30 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4402E Processor",
        "Q3'13",
        "2",
        "2.70 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4402EC Processor",
        "Q1'14",
        "2",
        "",
        "4 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-4410E Processor",
        "Q2'14",
        "2",
        "",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4422E Processor",
        "Q2'14",
        "2",
        "2.90 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4430 Processor",
        "Q2'13",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4430S Processor",
        "Q2'13",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4440 Processor",
        "Q3'13",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4440S Processor",
        "Q3'13",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4460 Processor",
        "Q2'14",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4460S Processor",
        "Q2'14",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4460T Processor",
        "Q2'14",
        "4",
        "2.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4570 Processor",
        "Q2'13",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4570R Processor",
        "Q2'13",
        "4",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i5-4570S Processor",
        "Q2'13",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4570T Processor",
        "Q2'13",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4570TE Processor",
        "Q2'13",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4590 Processor",
        "Q2'14",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4590S Processor",
        "Q2'14",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4590T Processor",
        "Q2'14",
        "4",
        "3.00 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4670 Processor",
        "Q2'13",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4670K Processor",
        "Q2'13",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4670R Processor",
        "Q2'13",
        "4",
        "3.70 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i5-4670S Processor",
        "Q2'13",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4670T Processor",
        "Q2'13",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4690 Processor",
        "Q2'14",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4690K Processor",
        "Q2'14",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4690S Processor",
        "Q2'14",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-4690T Processor",
        "Q2'14",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i5-5200U Processor",
        "Q1'15",
        "2",
        "2.70 GHz",
        "3 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i5-5250U Processor",
        "Q1'15",
        "2",
        "2.70 GHz",
        "3 MB",
        "Intel® HD Graphics 6000"
    ],
    [
        " Intel® Core™ i5-5257U Processor",
        "Q1'15",
        "2",
        "3.10 GHz",
        "3 MB",
        "Intel® Iris® Graphics 6100"
    ],
    [
        " Intel® Core™ i5-5287U Processor",
        "Q1'15",
        "2",
        "3.30 GHz",
        "3 MB",
        "Intel® Iris® Graphics 6100"
    ],
    [
        " Intel® Core™ i5-5300U Processor",
        "Q1'15",
        "2",
        "2.90 GHz",
        "3 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i5-5350H Processor",
        "Q2'15",
        "2",
        "3.50 GHz",
        "4 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i5-5350U Processor",
        "Q1'15",
        "2",
        "2.90 GHz",
        "3 MB",
        "Intel® HD Graphics 6000"
    ],
    [
        " Intel® Core™ i5-5575R Processor",
        "Q2'15",
        "4",
        "3.30 GHz",
        "4 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i5-5675C Processor",
        "Q2'15",
        "4",
        "3.60 GHz",
        "4 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i5-5675R Processor",
        "Q2'15",
        "4",
        "3.60 GHz",
        "4 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i5-6200U Processor",
        "Q3'15",
        "2",
        "2.80 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 520"
    ],
    [
        " Intel® Core™ i5-6260U Processor",
        "Q3'15",
        "2",
        "2.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 540"
    ],
    [
        " Intel® Core™ i5-6267U Processor",
        "Q3'15",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 550"
    ],
    [
        " Intel® Core™ i5-6287U Processor",
        "Q3'15",
        "2",
        "3.50 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 550"
    ],
    [
        " Intel® Core™ i5-6300HQ Processor",
        "Q3'15",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6300U Processor",
        "Q3'15",
        "2",
        "3.00 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 520"
    ],
    [
        " Intel® Core™ i5-6350HQ Processor",
        "Q1'16",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i5-6360U Processor",
        "Q3'15",
        "2",
        "3.10 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 540"
    ],
    [
        " Intel® Core™ i5-6400 Processor",
        "Q3'15",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6400T Processor",
        "Q3'15",
        "4",
        "2.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6402P Processor",
        "Q4'15",
        "4",
        "3.40 GHz",
        "6 MB",
        "Intel® HD Graphics 510"
    ],
    [
        " Intel® Core™ i5-6440EQ Processor",
        "Q4'15",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6440HQ Processor",
        "Q3'15",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6442EQ Processor",
        "Q4'15",
        "4",
        "2.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6500 Processor",
        "Q3'15",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6500T Processor",
        "Q3'15",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6500TE Processor",
        "Q4'15",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6585R Processor",
        "Q2'16",
        "4",
        "3.60 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i5-6600 Processor",
        "Q3'15",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6600K Processor",
        "Q3'15",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6600T Processor",
        "Q3'15",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i5-6685R Processor",
        "Q2'16",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i5-7200U Processor",
        "Q3'16",
        "2",
        "3.10 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i5-7260U Processor",
        "Q1'17",
        "2",
        "3.40 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 640"
    ],
    [
        " Intel® Core™ i5-7267U Processor",
        "Q1'17",
        "2",
        "3.50 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 650"
    ],
    [
        " Intel® Core™ i5-7287U Processor",
        "Q1'17",
        "2",
        "3.70 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 650"
    ],
    [
        " Intel® Core™ i5-7300HQ Processor",
        "Q1'17",
        "4",
        "3.50 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7300U Processor",
        "Q1'17",
        "2",
        "3.50 GHz",
        "3 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i5-7360U Processor",
        "Q1'17",
        "2",
        "3.60 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 640"
    ],
    [
        " Intel® Core™ i5-7400 Processor",
        "Q1'17",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7400T Processor",
        "Q1'17",
        "4",
        "3.00 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7440EQ Processor",
        "Q1'17",
        "4",
        "3.60 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7440HQ Processor",
        "Q1'17",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7442EQ Processor",
        "Q1'17",
        "4",
        "2.90 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7500 Processor",
        "Q1'17",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7500T Processor",
        "Q1'17",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7600 Processor",
        "Q1'17",
        "4",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7600K Processor",
        "Q1'17",
        "4",
        "4.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7600T Processor",
        "Q1'17",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-7640X X-series Processor",
        "Q2'17",
        "4",
        "4.20 GHz",
        "6 MB",
        ""
    ],
    [
        " Intel® Core™ i5-8200Y Processor",
        "Q3'18",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 615"
    ],
    [
        " Intel® Core™ i5-8210Y Processor",
        "Q1'19",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 617"
    ],
    [
        " Intel® Core™ i5-8250U Processor",
        "Q3'17",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i5-8257U Processor",
        "Q3'19",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 645"
    ],
    [
        " Intel® Core™ i5-8259U Processor",
        "Q2'18",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 655"
    ],
    [
        " Intel® Core™ i5-8260U Processor",
        "Q4'19",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i5-8265U Processor",
        "Q3'18",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 8th Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-8269U Processor",
        "Q2'18",
        "4",
        "4.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 655"
    ],
    [
        " Intel® Core™ i5-8279U Processor",
        "Q2'19",
        "4",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 655"
    ],
    [
        " Intel® Core™ i5-8300H Processor",
        "Q2'18",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8305G Processor with Radeon™ Pro WX Vega M GL graphics",
        "Q3'18",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8305G Processor with Radeon™ RX Vega M GL graphics",
        "Q1'18",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8310Y Processor",
        "Q1'19",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 617"
    ],
    [
        " Intel® Core™ i5-8350U Processor",
        "Q3'17",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i5-8365U Processor",
        "Q2'19",
        "4",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 8th Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i5-8365UE Processor",
        "Q3'18",
        "4",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i5-8400 Processor",
        "Q4'17",
        "6",
        "4.00 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8400B Processor",
        "Q2'18",
        "6",
        "4.00 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8400H Processor",
        "Q2'18",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8400T Processor",
        "Q2'18",
        "6",
        "3.30 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8500 Processor",
        "Q2'18",
        "6",
        "4.10 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8500B Processor",
        "Q2'18",
        "6",
        "4.10 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8500T Processor",
        "Q2'18",
        "6",
        "3.50 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8600 Processor",
        "Q2'18",
        "6",
        "4.30 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8600K Processor",
        "Q4'17",
        "6",
        "4.30 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-8600T Processor",
        "Q2'18",
        "6",
        "3.70 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9300H Processor",
        "Q2'19",
        "4",
        "4.10 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9300HF Processor",
        "Q2'19",
        "4",
        "4.10 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-9400 Processor",
        "Q1'19",
        "6",
        "4.10 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9400F Processor",
        "Q1'19",
        "6",
        "4.10 GHz",
        "9 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-9400H Processor",
        "Q2'19",
        "4",
        "4.30 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9400T Processor",
        "Q2'19",
        "6",
        "3.40 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9500 Processor",
        "Q2'19",
        "6",
        "4.40 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9500E Processor",
        "Q2'19",
        "6",
        "4.20 GHz",
        "9 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9500F Processor",
        "Q2'19",
        "6",
        "4.40 GHz",
        "9 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-9500T Processor",
        "Q2'19",
        "6",
        "3.70 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9500TE Processor",
        "Q4'17",
        "6",
        "3.60 GHz",
        "9 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9600 Processor",
        "Q2'19",
        "6",
        "4.60 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9600K Processor",
        "Q4'18",
        "6",
        "4.60 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-9600KF Processor",
        "Q1'19",
        "6",
        "4.60 GHz",
        "9 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-9600T Processor",
        "Q2'19",
        "6",
        "3.90 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10200H Processor",
        "Q3'20",
        "4",
        "4.10 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10210U Processor",
        "Q3'19",
        "4",
        "4.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10210Y Processor",
        "Q3'19",
        "4",
        "4.00 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10300H Processor",
        "Q2'20",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10310U Processor",
        "Q2'20",
        "4",
        "4.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10310Y Processor",
        "Q3'19",
        "4",
        "4.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10400 Processor",
        "Q2'20",
        "6",
        "4.30 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10400F Processor",
        "Q2'20",
        "6",
        "4.30 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-10400H Processor",
        "Q2'20",
        "4",
        "4.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10400T Processor",
        "Q2'20",
        "6",
        "3.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10500 Processor",
        "Q2'20",
        "6",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10500E Processor",
        "Q2'20",
        "6",
        "4.20 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10500H Processor",
        "Q4'20",
        "6",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-10500T Processor",
        "Q2'20",
        "6",
        "3.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10500TE Processor",
        "Q2'20",
        "6",
        "3.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10505 Processor",
        "Q1'21",
        "6",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10600 Processor",
        "Q2'20",
        "6",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10600K Processor",
        "Q2'20",
        "6",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-10600KF Processor",
        "Q2'20",
        "6",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-10600T Processor",
        "Q2'20",
        "6",
        "4.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i5-11260H Processor",
        "Q2'21",
        "6",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-11300H Processor",
        "Q1'21",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i5-11320H Processor",
        "Q2'21",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-11400 Processor",
        "Q1'21",
        "6",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-11400F Processor",
        "Q1'21",
        "6",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-11400H Processor",
        "Q2'21",
        "6",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-11400T Processor",
        "Q1'21",
        "6",
        "3.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-11500 Processor",
        "Q1'21",
        "6",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i5-11500H Processor",
        "Q2'21",
        "6",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-11500HE Processor",
        "Q3'21",
        "6",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-11500T Processor",
        "Q1'21",
        "6",
        "3.90 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i5-11600 Processor",
        "Q1'21",
        "6",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i5-11600K Processor",
        "Q1'21",
        "6",
        "4.90 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i5-11600KF Processor",
        "Q1'21",
        "6",
        "4.90 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-11600T Processor",
        "Q1'21",
        "6",
        "4.10 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i5-12400 Processor",
        "Q1'22",
        "6",
        "4.40 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-12400F Processor",
        "Q1'22",
        "6",
        "4.40 GHz",
        "18 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-12400T Processor",
        "Q1'22",
        "6",
        "4.20 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-12450H Processor",
        "Q1'22",
        "8",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-12450HX Processor",
        "Q2'22",
        "8",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-12500 Processor",
        "Q1'22",
        "6",
        "4.60 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-12500E Processor",
        "Q1'22",
        "6",
        "4.50 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-12500H Processor",
        "Q1'22",
        "12",
        "4.50 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-12500HL Processor",
        "Q3'22",
        "12",
        "4.50 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-12500T Processor",
        "Q1'22",
        "6",
        "4.40 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-12500TE Processor",
        "Q1'22",
        "6",
        "4.30 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-12600 Processor",
        "Q1'22",
        "6",
        "4.80 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-12600H Processor",
        "Q1'22",
        "12",
        "4.50 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-12600HE Processor",
        "Q1'22",
        "12",
        "",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-12600HL Processor",
        "Q3'22",
        "12",
        "4.50 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-12600HX Processor",
        "Q2'22",
        "12",
        "4.60 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-12600K Processor",
        "Q4'21",
        "10",
        "4.90 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-12600KF Processor",
        "Q4'21",
        "10",
        "4.90 GHz",
        "20 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-12600T Processor",
        "Q1'22",
        "6",
        "4.60 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13400 Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-13400E Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-13400F Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "20 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-13400T Processor",
        "Q1'23",
        "10",
        "4.40 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 730"
    ],
    [
        " Intel® Core™ i5-13420H Processor",
        "Q1'23",
        "8",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-13450HX Processor",
        "Q1'23",
        "10",
        "4.60 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-13500 Processor",
        "Q1'23",
        "14",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13500E Processor",
        "Q1'23",
        "14",
        "4.60 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13500H Processor",
        "Q1'23",
        "12",
        "4.7 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-13500H Processor",
        "Q1'23",
        "12",
        "4.70 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-13500HX Processor",
        "Q1'23",
        "14",
        "4.70 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-13500T Processor",
        "Q1'23",
        "14",
        "4.60 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13500TE Processor",
        "Q1'23",
        "14",
        "4.50 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13505H Processor",
        "Q1'23",
        "12",
        "4.70 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-13600 Processor",
        "Q1'23",
        "14",
        "5 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13600H Processor",
        "Q1'23",
        "12",
        "4.8 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-13600HE Processor",
        "Q1'23",
        "12",
        "4.80 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-13600HRE Processor",
        "Q1'23",
        "12",
        "4.80 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i5-13600HX Processor",
        "Q1'23",
        "14",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i5-13600K Processor",
        "Q4'22",
        "14",
        "5.1 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-13600KF Processor",
        "Q4'22",
        "14",
        "5.1 GHz",
        "24 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i5-13600T Processor",
        "Q1'23",
        "14",
        "4.8 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i5-L16G7 Processor",
        "Q2'20",
        "5",
        "3.00 GHz",
        "4 MB",
        "Intel® UHD Graphics"
    ],
    [
        " Intel® Core™ i7 processor 14650HX",
        "Q1'24",
        "16",
        "5.2 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 14th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7 processor 14700",
        "Q1'24",
        "20",
        "5.4 GHz",
        "33 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7 processor 14700F",
        "Q1'24",
        "20",
        "5.4 GHz",
        "33 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7 processor 14700HX",
        "Q1'24",
        "20",
        "5.5 GHz",
        "33 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 14th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7 processor 14700K",
        "Q4'23",
        "20",
        "5.6 GHz",
        "33 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7 processor 14700KF",
        "Q4'23",
        "20",
        "5.6 GHz",
        "33 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7 processor 14700T",
        "Q1'24",
        "20",
        "5.2 GHz",
        "33 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7+8700 Processor\n(12M Cache, up to 4.60 GHz) includes Intel® Optane™ Memory",
        "Q2'18",
        "6",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7Y75 Processor",
        "Q3'16",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 615"
    ],
    [
        " Intel® Core™ i7-610E Processor",
        "Q1'10",
        "2",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-620LE Processor",
        "Q1'10",
        "2",
        "2.80 GHz",
        "4 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-620LM Processor",
        "Q1'10",
        "2",
        "2.80 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-620M Processor",
        "Q1'10",
        "2",
        "3.33 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-620UE Processor",
        "Q1'10",
        "2",
        "2.13 GHz",
        "4 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-620UM Processor",
        "Q1'10",
        "2",
        "2.13 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-640LM Processor",
        "Q1'10",
        "2",
        "2.93 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-640M Processor",
        "Q3'10",
        "2",
        "3.46 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-640UM Processor",
        "Q1'10",
        "2",
        "2.27 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-660LM Processor",
        "Q3'10",
        "2",
        "3.06 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-660UE Processor",
        "Q1'10",
        "2",
        "2.40 GHz",
        "4 MB",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-660UM Processor",
        "Q2'10",
        "2",
        "2.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-680UM Processor",
        "Q3'10",
        "2",
        "2.53 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics for Previous Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-720QM Processor",
        "Q3'09",
        "4",
        "2.80 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-740QM Processor",
        "Q3'10",
        "4",
        "2.93 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-820QM Processor",
        "Q3'09",
        "4",
        "3.06 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-840QM Processor",
        "Q3'10",
        "4",
        "3.20 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-860 Processor",
        "Q3'09",
        "4",
        "3.46 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-860S Processor",
        "Q1'10",
        "4",
        "3.46 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-870 Processor",
        "Q3'09",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-870S Processor",
        "Q2'10",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-875K Processor",
        "Q2'10",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-880 Processor",
        "Q2'10",
        "4",
        "3.73 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-920XM Processor Extreme Edition",
        "Q3'09",
        "4",
        "3.20 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-930 Processor",
        "Q1'10",
        "4",
        "3.06 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-940XM Processor Extreme Edition",
        "Q3'10",
        "4",
        "3.33 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-960 Processor",
        "Q4'09",
        "4",
        "3.46 GHz",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-970 Processor",
        "Q3'10",
        "6",
        "3.46 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-980 Processor",
        "Q2'11",
        "6",
        "3.60 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-980X Processor Extreme Edition",
        "Q1'10",
        "6",
        "3.60 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-990X Processor Extreme Edition",
        "Q1'11",
        "6",
        "3.73 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-1065G7 Processor",
        "Q3'19",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics"
    ],
    [
        " Intel® Core™ i7-1160G7 Processor",
        "Q3'20",
        "4",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1165G7 Processor",
        "Q3'20",
        "4",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1165G7 Processor",
        "Q3'20",
        "4",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1180G7 Processor",
        "Q1'21",
        "4",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1185G7 Processor",
        "Q3'20",
        "4",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1185G7E Processor",
        "Q3'20",
        "4",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1185GRE Processor",
        "Q3'20",
        "4",
        "4.40 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-1195G7 Processor",
        "Q2'21",
        "4",
        "5.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1195G7 Processor",
        "Q2'21",
        "4",
        "5.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1250U Processor",
        "Q1'22",
        "10",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1255U Processor",
        "Q1'22",
        "10",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1255UL Processor",
        "Q3'22",
        "10",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1260P Processor",
        "Q1'22",
        "12",
        "4.70 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1260U Processor",
        "Q1'22",
        "10",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1265U Processor",
        "Q1'22",
        "10",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1265UE Processor",
        "Q1'22",
        "10",
        "",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1265UL Processor",
        "Q3'22",
        "10",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1270P Processor",
        "Q1'22",
        "12",
        "4.80 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1270PE Processor",
        "Q1'22",
        "12",
        "",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1280P Processor",
        "Q1'22",
        "14",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1355U Processor",
        "Q1'23",
        "10",
        "5 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1360P Processor",
        "Q1'23",
        "12",
        "5.00 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1365U Processor",
        "Q1'23",
        "10",
        "5.2 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1365UE Processor",
        "Q1'23",
        "10",
        "4.90 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1370P Processor",
        "Q1'23",
        "14",
        "5.20 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1370PE Processor",
        "Q1'23",
        "14",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-1375PRE Processor",
        "Q1'23",
        "14",
        "4.8 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-2600 Processor",
        "Q1'11",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i7-2600K Processor",
        "Q1'11",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2600S Processor",
        "Q1'11",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 2000"
    ],
    [
        " Intel® Core™ i7-2610UE Processor",
        "Q1'11",
        "2",
        "2.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2617M Processor",
        "Q1'11",
        "2",
        "2.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2620M Processor",
        "Q1'11",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2629M Processor",
        "Q1'11",
        "2",
        "3.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2630QM Processor",
        "Q1'11",
        "4",
        "2.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2635QM Processor",
        "Q1'11",
        "4",
        "2.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2637M Processor",
        "Q2'11",
        "2",
        "2.80 GHz",
        "4 MB L3 Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2640M Processor",
        "Q4'11",
        "2",
        "3.50 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2649M Processor",
        "Q1'11",
        "2",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2655LE Processor",
        "Q1'11",
        "2",
        "2.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2657M Processor",
        "Q1'11",
        "2",
        "2.70 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2670QM Processor",
        "Q4'11",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2675QM Processor",
        "Q4'11",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2677M Processor",
        "Q2'11",
        "2",
        "2.90 GHz",
        "4 MB L3 Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2700K Processor",
        "Q4'11",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2710QE Processor",
        "Q1'11",
        "4",
        "3.00 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2715QE Processor",
        "Q1'11",
        "4",
        "3.00 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2720QM Processor",
        "Q1'11",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2760QM Processor",
        "Q4'11",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2820QM Processor",
        "Q1'11",
        "4",
        "3.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2860QM Processor",
        "Q4'11",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2920XM Processor Extreme Edition",
        "Q1'11",
        "4",
        "3.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-2960XM Processor Extreme Edition",
        "Q4'11",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 3000"
    ],
    [
        " Intel® Core™ i7-3517U Processor",
        "Q2'12",
        "2",
        "3.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3517UE Processor",
        "Q2'12",
        "2",
        "2.80 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3520M Processor",
        "Q2'12",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3537U Processor",
        "Q1'13",
        "2",
        "3.10 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3540M Processor",
        "Q1'13",
        "2",
        "3.70 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3555LE Processor",
        "Q2'12",
        "2",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3610QE Processor",
        "Q2'12",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3610QM Processor",
        "Q2'12",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3612QE Processor",
        "Q2'12",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3612QM Processor",
        "Q2'12",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3612QM Processor",
        "Q2'12",
        "4",
        "3.10 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3615QE Processor",
        "Q2'12",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3615QM Processor",
        "Q2'12",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3630QM Processor",
        "Q3'12",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3632QM Processor",
        "Q3'12",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3632QM Processor",
        "Q3'12",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3635QM Processor",
        "Q3'12",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3667U Processor",
        "Q2'12",
        "2",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3687U Processor",
        "Q1'13",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3689Y Processor",
        "Q1'13",
        "2",
        "2.60 GHz",
        "4 MB",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3720QM Processor",
        "Q2'12",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3740QM Processor",
        "Q3'12",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3770 Processor",
        "Q2'12",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3770K Processor",
        "Q2'12",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3770S Processor",
        "Q2'12",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3770T Processor",
        "Q2'12",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3820 Processor",
        "Q1'12",
        "4",
        "3.80 GHz",
        "10 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-3820QM Processor",
        "Q2'12",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3840QM Processor",
        "Q3'12",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3920XM Processor Extreme Edition",
        "Q2'12",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3930K Processor",
        "Q4'11",
        "6",
        "3.80 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-3940XM Processor Extreme Edition",
        "Q3'12",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4000"
    ],
    [
        " Intel® Core™ i7-3960X Processor Extreme Edition",
        "Q4'11",
        "6",
        "3.90 GHz",
        "15 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-3970X Processor Extreme Edition",
        "Q4'12",
        "6",
        "4.00 GHz",
        "15 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-4500U Processor",
        "Q3'13",
        "2",
        "3.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i7-4510U Processor",
        "Q2'14",
        "2",
        "3.10 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i7-4550U Processor",
        "Q3'13",
        "2",
        "3.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 5000"
    ],
    [
        " Intel® Core™ i7-4558U Processor",
        "Q3'13",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i7-4578U Processor",
        "Q3'14",
        "2",
        "3.50 GHz",
        "4 MB",
        "Intel® Iris® Graphics 5100"
    ],
    [
        " Intel® Core™ i7-4600M Processor",
        "Q4'13",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4600U Processor",
        "Q3'13",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4400"
    ],
    [
        " Intel® Core™ i7-4610M Processor",
        "Q1'14",
        "2",
        "3.70 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4610Y Processor",
        "Q3'13",
        "2",
        "2.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 4200"
    ],
    [
        " Intel® Core™ i7-4650U Processor",
        "Q3'13",
        "2",
        "3.30 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 5000"
    ],
    [
        " Intel® Core™ i7-4700EC Processor",
        "Q1'14",
        "4",
        "",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-4700EQ Processor",
        "Q2'13",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4700HQ Processor",
        "Q2'13",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4700MQ Processor",
        "Q2'13",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4702EC Processor",
        "Q1'14",
        "4",
        "",
        "8 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-4702HQ Processor",
        "Q2'13",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4702MQ Processor",
        "Q2'13",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4710HQ Processor",
        "Q2'14",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4710MQ Processor",
        "Q2'14",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4712HQ Processor",
        "Q2'14",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4712MQ Processor",
        "Q2'14",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4720HQ Processor",
        "Q1'15",
        "4",
        "3.60 GHz",
        "6 MB",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4722HQ Processor",
        "Q1'15",
        "4",
        "3.40 GHz",
        "6 MB",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4750HQ Processor",
        "Q3'13",
        "4",
        "3.20 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4760HQ Processor",
        "Q2'14",
        "4",
        "3.30 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4765T Processor",
        "Q2'13",
        "4",
        "3.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4770 Processor",
        "Q2'13",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4770HQ Processor",
        "Q3'14",
        "4",
        "3.40 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4770K Processor",
        "Q2'13",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4770R Processor",
        "Q2'13",
        "4",
        "3.90 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4770S Processor",
        "Q2'13",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4770T Processor",
        "Q2'13",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4770TE Processor",
        "Q2'13",
        "4",
        "3.30 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4771 Processor",
        "Q3'13",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4785T Processor",
        "Q2'14",
        "4",
        "3.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4790 Processor",
        "Q2'14",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4790K Processor",
        "Q2'14",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4790S Processor",
        "Q2'14",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4790T Processor",
        "Q2'14",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4800MQ Processor",
        "Q2'13",
        "4",
        "3.70 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4810MQ Processor",
        "Q1'14",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4820K Processor",
        "Q3'13",
        "4",
        "3.90 GHz",
        "10 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-4850HQ Processor",
        "Q3'13",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4860HQ Processor",
        "Q1'14",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4870HQ Processor",
        "Q3'14",
        "4",
        "3.70 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4900MQ Processor",
        "Q2'13",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4910MQ Processor",
        "Q1'14",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4930K Processor",
        "Q3'13",
        "6",
        "3.90 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-4930MX Processor Extreme Edition",
        "Q2'13",
        "4",
        "3.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4940MX Processor Extreme Edition",
        "Q1'14",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 4600"
    ],
    [
        " Intel® Core™ i7-4950HQ Processor",
        "Q3'13",
        "4",
        "3.60 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4960HQ Processor",
        "Q4'13",
        "4",
        "3.80 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-4960X Processor Extreme Edition",
        "Q3'13",
        "6",
        "4.00 GHz",
        "15 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-4980HQ Processor",
        "Q3'14",
        "4",
        "4.00 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 5200"
    ],
    [
        " Intel® Core™ i7-5500U Processor",
        "Q1'15",
        "2",
        "3.00 GHz",
        "4 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i7-5550U Processor",
        "Q1'15",
        "2",
        "3.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 6000"
    ],
    [
        " Intel® Core™ i7-5557U Processor",
        "Q1'15",
        "2",
        "3.40 GHz",
        "4 MB",
        "Intel® Iris® Graphics 6100"
    ],
    [
        " Intel® Core™ i7-5600U Processor",
        "Q1'15",
        "2",
        "3.20 GHz",
        "4 MB",
        "Intel® HD Graphics 5500"
    ],
    [
        " Intel® Core™ i7-5650U Processor",
        "Q1'15",
        "2",
        "3.10 GHz",
        "4 MB",
        "Intel® HD Graphics 6000"
    ],
    [
        " Intel® Core™ i7-5700EQ Processor",
        "Q2'15",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-5700HQ Processor",
        "Q2'15",
        "4",
        "3.50 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5750HQ Processor",
        "Q2'15",
        "4",
        "3.40 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5775C Processor",
        "Q2'15",
        "4",
        "3.70 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5775R Processor",
        "Q2'15",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5820K Processor",
        "Q3'14",
        "6",
        "3.60 GHz",
        "15 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-5850EQ Processor",
        "Q2'15",
        "4",
        "3.40 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5850HQ Processor",
        "Q2'15",
        "4",
        "3.60 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5930K Processor",
        "Q3'14",
        "6",
        "3.70 GHz",
        "15 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-5950HQ Processor",
        "Q2'15",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® Iris® Pro Graphics 6200"
    ],
    [
        " Intel® Core™ i7-5960X Processor Extreme Edition",
        "Q3'14",
        "8",
        "3.50 GHz",
        "20 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-6500U Processor",
        "Q3'15",
        "2",
        "3.10 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 520"
    ],
    [
        " Intel® Core™ i7-6560U Processor",
        "Q3'15",
        "2",
        "3.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 540"
    ],
    [
        " Intel® Core™ i7-6567U Processor",
        "Q3'15",
        "2",
        "3.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 550"
    ],
    [
        " Intel® Core™ i7-6600U Processor",
        "Q3'15",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 520"
    ],
    [
        " Intel® Core™ i7-6650U Processor",
        "Q3'15",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 540"
    ],
    [
        " Intel® Core™ i7-6660U Processor",
        "Q1'16",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® Iris® Graphics 540"
    ],
    [
        " Intel® Core™ i7-6700 Processor",
        "Q3'15",
        "4",
        "4.00 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6700HQ Processor",
        "Q3'15",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6700K Processor",
        "Q3'15",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6700T Processor",
        "Q3'15",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6700TE Processor",
        "Q4'15",
        "4",
        "3.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6770HQ Processor",
        "Q1'16",
        "4",
        "3.50 GHz",
        "6 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i7-6785R Processor",
        "Q2'16",
        "4",
        "3.90 GHz",
        "8 MB",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i7-6800K Processor",
        "Q2'16",
        "6",
        "3.60 GHz",
        "15 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-6820EQ Processor",
        "Q4'15",
        "4",
        "3.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6820HK Processor",
        "Q3'15",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6820HQ Processor",
        "Q3'15",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6822EQ Processor",
        "Q4'15",
        "4",
        "2.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6850K Processor",
        "Q2'16",
        "6",
        "3.80 GHz",
        "15 MB",
        ""
    ],
    [
        " Intel® Core™ i7-6870HQ Processor",
        "Q1'16",
        "4",
        "3.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i7-6900K Processor",
        "Q2'16",
        "8",
        "3.70 GHz",
        "20 MB",
        ""
    ],
    [
        " Intel® Core™ i7-6920HQ Processor",
        "Q3'15",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 530"
    ],
    [
        " Intel® Core™ i7-6950X Processor Extreme Edition",
        "Q2'16",
        "10",
        "3.50 GHz",
        "25 MB",
        ""
    ],
    [
        " Intel® Core™ i7-6970HQ Processor",
        "Q1'16",
        "4",
        "3.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Pro Graphics 580"
    ],
    [
        " Intel® Core™ i7-7500U Processor",
        "Q3'16",
        "2",
        "3.50 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i7-7560U Processor",
        "Q1'17",
        "2",
        "3.80 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 640"
    ],
    [
        " Intel® Core™ i7-7567U Processor",
        "Q1'17",
        "2",
        "4.00 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 650"
    ],
    [
        " Intel® Core™ i7-7600U Processor",
        "Q3'16",
        "2",
        "3.90 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 620"
    ],
    [
        " Intel® Core™ i7-7660U Processor",
        "Q1'17",
        "2",
        "4.00 GHz",
        "4 MB",
        "Intel® Iris® Plus Graphics 640"
    ],
    [
        " Intel® Core™ i7-7700 Processor",
        "Q1'17",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7700HQ Processor",
        "Q1'17",
        "4",
        "3.80 GHz",
        "6 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7700K Processor",
        "Q1'17",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7700T Processor",
        "Q1'17",
        "4",
        "3.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7740X X-series Processor",
        "Q2'17",
        "4",
        "4.50 GHz",
        "8 MB",
        ""
    ],
    [
        " Intel® Core™ i7-7800X X-series Processor",
        "Q2'17",
        "6",
        "4.00 GHz",
        "8.25 MB L3 Cache",
        ""
    ],
    [
        " Intel® Core™ i7-7820EQ Processor",
        "Q1'17",
        "4",
        "3.70 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7820HK Processor",
        "Q1'17",
        "4",
        "3.90 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7820HQ Processor",
        "Q1'17",
        "4",
        "3.90 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-7820X X-series Processor",
        "Q2'17",
        "8",
        "4.30 GHz",
        "11 MB L3 Cache",
        ""
    ],
    [
        " Intel® Core™ i7-7920HQ Processor",
        "Q1'17",
        "4",
        "4.10 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8086K Processor",
        "Q2'18",
        "6",
        "5.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8500Y Processor",
        "Q1'19",
        "2",
        "4.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 615"
    ],
    [
        " Intel® Core™ i7-8550U Processor",
        "Q3'17",
        "4",
        "4.00 GHz",
        "8192",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i7-8557U Processor",
        "Q3'19",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 645"
    ],
    [
        " Intel® Core™ i7-8559U Processor",
        "Q2'18",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 655"
    ],
    [
        " Intel® Core™ i7-8565U Processor",
        "Q3'18",
        "4",
        "4.60 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 8th Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-8569U Processor",
        "Q2'19",
        "4",
        "4.70 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® Iris® Plus Graphics 655"
    ],
    [
        " Intel® Core™ i7-8650U Processor",
        "Q3'17",
        "4",
        "4.20 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i7-8665U Processor",
        "Q2'19",
        "4",
        "4.80 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 8th Generation Intel® Processors"
    ],
    [
        " Intel® Core™ i7-8665UE Processor",
        "Q3'18",
        "4",
        "4.40 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics 620"
    ],
    [
        " Intel® Core™ i7-8700 Processor",
        "Q4'17",
        "6",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8700B Processor",
        "Q2'18",
        "6",
        "4.60 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8700K Processor",
        "Q4'17",
        "6",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8700T Processor",
        "Q2'18",
        "6",
        "4.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8705G Processor with Radeon™ RX Vega M GL graphics",
        "Q1'18",
        "4",
        "4.10 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8706G Processor with Radeon™ Pro WX Vega M GL graphics",
        "Q3'18",
        "4",
        "4.10 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8706G Processor with Radeon™ RX Vega M GL graphics",
        "Q1'18",
        "4",
        "4.10 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8709G Processor with Radeon™ RX Vega M GH graphics",
        "Q1'18",
        "4",
        "4.10 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8750H Processor",
        "Q2'18",
        "6",
        "4.10 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8809G Processor with Radeon™ RX Vega M GH graphics",
        "Q1'18",
        "4",
        "4.20 GHz",
        "8 MB",
        "Intel® HD Graphics 630"
    ],
    [
        " Intel® Core™ i7-8850H Processor",
        "Q2'18",
        "6",
        "4.30 GHz",
        "9 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9700 Processor",
        "Q2'19",
        "8",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9700E Processor",
        "Q2'19",
        "8",
        "4.40 GHz",
        "12 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9700F Processor",
        "Q2'19",
        "8",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-9700K Processor",
        "Q4'18",
        "8",
        "4.90 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9700KF Processor",
        "Q1'19",
        "8",
        "4.90 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-9700T Processor",
        "Q2'19",
        "8",
        "4.30 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9700TE Processor",
        "Q2'19",
        "8",
        "3.80 GHz",
        "12 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9750H Processor",
        "Q2'19",
        "6",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9750HF Processor",
        "Q2'19",
        "6",
        "4.50 GHz",
        "12 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-9800X X-series Processor",
        "Q4'18",
        "8",
        "4.40 GHz",
        "16.5 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-9850H Processor",
        "Q2'19",
        "6",
        "4.60 GHz",
        "12 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9850HE Processor",
        "Q2'19",
        "6",
        "4.40 GHz",
        "9 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-9850HL Processor",
        "Q2'19",
        "6",
        "4.10 GHz",
        "9 MB",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-10510U Processor",
        "Q3'19",
        "4",
        "4.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10510Y Processor",
        "Q3'19",
        "4",
        "4.50 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10610U Processor",
        "Q2'20",
        "4",
        "4.90 GHz",
        "8 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10700 Processor",
        "Q2'20",
        "8",
        "4.80 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-10700E Processor",
        "Q2'20",
        "8",
        "4.50 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-10700F Processor",
        "Q2'20",
        "8",
        "4.80 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-10700K Processor",
        "Q2'20",
        "8",
        "5.10 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-10700KF Processor",
        "Q2'20",
        "8",
        "5.10 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-10700T Processor",
        "Q2'20",
        "8",
        "4.50 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-10700TE Processor",
        "Q2'20",
        "8",
        "4.40 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i7-10710U Processor",
        "Q3'19",
        "6",
        "4.70 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10750H Processor",
        "Q2'20",
        "6",
        "5.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10810U Processor",
        "Q2'20",
        "6",
        "4.90 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10850H Processor",
        "Q2'20",
        "6",
        "5.10 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10870H Processor",
        "Q3'20",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-10875H Processor",
        "Q2'20",
        "8",
        "5.10 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-11370H Processor",
        "Q1'21",
        "4",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-11375H Processor",
        "Q1'21",
        "4",
        "5.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics"
    ],
    [
        " Intel® Core™ i7-11390H Processor",
        "Q2'21",
        "4",
        "5.00 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-11600H Processor",
        "Q3'21",
        "6",
        "4.60 GHz",
        "18 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-11700 Processor",
        "Q1'21",
        "8",
        "4.90 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i7-11700F Processor",
        "Q1'21",
        "8",
        "4.90 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-11700K Processor",
        "Q1'21",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i7-11700KF Processor",
        "Q1'21",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-11700T Processor",
        "Q1'21",
        "8",
        "4.60 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i7-11800H Processor",
        "Q2'21",
        "8",
        "4.60 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-11850H Processor",
        "Q2'21",
        "8",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-11850HE Processor",
        "Q3'21",
        "8",
        "4.70 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-12650H Processor",
        "Q1'22",
        "10",
        "4.70 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-12650HX Processor",
        "Q2'22",
        "14",
        "4.70 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-12700 Processor",
        "Q1'22",
        "12",
        "4.90 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-12700E Processor",
        "Q1'22",
        "12",
        "4.80 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-12700F Processor",
        "Q1'22",
        "12",
        "4.90 GHz",
        "25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-12700H Processor",
        "Q1'22",
        "14",
        "4.70 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-12700HL Processor",
        "Q3'22",
        "14",
        "4.70 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-12700K Processor",
        "Q4'21",
        "12",
        "5.00 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-12700KF Processor",
        "Q4'21",
        "12",
        "5.00 GHz",
        "25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-12700T Processor",
        "Q1'22",
        "12",
        "4.70 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-12700TE Processor",
        "Q1'22",
        "12",
        "4.60 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-12800H Processor",
        "Q1'22",
        "14",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-12800HE Processor",
        "Q1'22",
        "14",
        "",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-12800HL Processor",
        "Q3'22",
        "14",
        "4.80 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-12800HX Processor",
        "Q2'22",
        "16",
        "4.80 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-12850HX Processor",
        "Q2'22",
        "16",
        "4.80 GHz",
        "25 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-13620H Processor",
        "Q1'23",
        "10",
        "4.90 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-13650HX Processor",
        "Q1'23",
        "14",
        "4.90 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-13700 Processor",
        "Q1'23",
        "16",
        "5.20 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-13700E Processor",
        "Q1'23",
        "16",
        "5.10 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-13700F Processor",
        "Q1'23",
        "16",
        "5.20 GHz",
        "30 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-13700H Processor",
        "Q1'23",
        "14",
        "5 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-13700HX Processor",
        "Q1'23",
        "16",
        "5.00 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i7-13700K Processor",
        "Q4'22",
        "16",
        "5.40 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-13700KF Processor",
        "Q4'22",
        "16",
        "5.40 GHz",
        "30 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i7-13700T Processor",
        "Q1'23",
        "16",
        "4.90 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-13700TE Processor",
        "Q1'23",
        "16",
        "4.80 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i7-13705H Processor",
        "Q1'23",
        "14",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-13800H Processor",
        "Q1'23",
        "14",
        "5.2 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-13800HE Processor",
        "Q1'23",
        "14",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-13800HRE Processor",
        "Q1'23",
        "14",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i7-13850HX Processor",
        "Q1'23",
        "20",
        "5.30 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9 processor 14900",
        "Q1'24",
        "24",
        "5.8 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9 processor 14900F",
        "Q1'24",
        "24",
        "5.8 GHz",
        "36 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9 processor 14900HX",
        "Q1'24",
        "24",
        "5.8 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 14th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9 processor 14900K",
        "Q4'23",
        "24",
        "6 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9 processor 14900KF",
        "Q4'23",
        "24",
        "6 GHz",
        "36 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9 processor 14900KS",
        "Q1'24",
        "24",
        "6.2 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9 processor 14900T",
        "Q1'24",
        "24",
        "5.5 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-7900X X-series Processor",
        "Q2'17",
        "10",
        "4.30 GHz",
        "13.75 MB L3 Cache",
        ""
    ],
    [
        " Intel® Core™ i9-7920X X-series Processor",
        "Q3'17",
        "12",
        "4.30 GHz",
        "16.5 MB L3 Cache",
        ""
    ],
    [
        " Intel® Core™ i9-7940X X-series Processor",
        "Q3'17",
        "14",
        "4.30 GHz",
        "19.25 MB",
        ""
    ],
    [
        " Intel® Core™ i9-7960X X-series Processor",
        "Q3'17",
        "16",
        "4.20 GHz",
        "22 MB",
        ""
    ],
    [
        " Intel® Core™ i9-7980XE Extreme Edition Processor",
        "Q3'17",
        "18",
        "4.20 GHz",
        "24.75 MB",
        ""
    ],
    [
        " Intel® Core™ i9-8950HK Processor",
        "Q2'18",
        "6",
        "4.80 GHz",
        "12 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9820X X-series Processor",
        "Q4'18",
        "10",
        "4.10 GHz",
        "16.5 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-9880H Processor",
        "Q2'19",
        "8",
        "4.80 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9900 Processor",
        "Q2'19",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9900K Processor",
        "Q4'18",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9900KF Processor",
        "Q1'19",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-9900KS Processor",
        "Q4'19",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9900T Processor",
        "Q2'19",
        "8",
        "4.40 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9900X X-series Processor",
        "Q4'18",
        "10",
        "4.40 GHz",
        "19.25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-9920X X-series Processor",
        "Q4'18",
        "12",
        "4.40 GHz",
        "19.25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-9940X X-series Processor",
        "Q4'18",
        "14",
        "4.40 GHz",
        "19.25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-9960X X-series Processor",
        "Q4'18",
        "16",
        "4.40 GHz",
        "22 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-9980HK Processor",
        "Q2'19",
        "8",
        "5.00 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-9980XE Extreme Edition Processor",
        "Q4'18",
        "18",
        "4.40 GHz",
        "24.75 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-10850K Processor",
        "Q3'20",
        "10",
        "5.20 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-10885H Processor",
        "Q2'20",
        "8",
        "5.30 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-10900 Processor",
        "Q2'20",
        "10",
        "5.20 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-10900E Processor",
        "Q2'20",
        "10",
        "4.70 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-10900F Processor",
        "Q2'20",
        "10",
        "5.20 GHz",
        "20 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-10900K Processor",
        "Q2'20",
        "10",
        "5.30 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-10900KF Processor",
        "Q2'20",
        "10",
        "5.30 GHz",
        "20 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-10900T Processor",
        "Q2'20",
        "10",
        "4.60 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-10900TE Processor",
        "Q2'20",
        "10",
        "4.50 GHz",
        "20 MB Intel® Smart Cache",
        "Intel® UHD Graphics 630"
    ],
    [
        " Intel® Core™ i9-10900X X-series Processor",
        "Q4'19",
        "10",
        "4.50 GHz",
        "19.25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-10920X X-series Processor",
        "Q4'19",
        "12",
        "4.60 GHz",
        "19.25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-10940X X-series Processor",
        "Q4'19",
        "14",
        "4.60 GHz",
        "19.25 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-10980HK Processor",
        "Q2'20",
        "8",
        "5.30 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 10th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-10980XE Extreme Edition Processor",
        "Q4'19",
        "18",
        "4.60 GHz",
        "24.75 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-11900 Processor",
        "Q1'21",
        "8",
        "5.20 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i9-11900F Processor",
        "Q1'21",
        "8",
        "5.20 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-11900H Processor",
        "Q2'21",
        "8",
        "4.90 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-11900K Processor",
        "Q1'21",
        "8",
        "5.30 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i9-11900KF Processor",
        "Q1'21",
        "8",
        "5.30 GHz",
        "16 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-11900T Processor",
        "Q1'21",
        "8",
        "4.90 GHz",
        "16 MB Intel® Smart Cache",
        "Intel® UHD Graphics 750"
    ],
    [
        " Intel® Core™ i9-11950H Processor",
        "Q2'21",
        "8",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-11980HK Processor",
        "Q2'21",
        "8",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 11th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-12900 Processor",
        "Q1'22",
        "16",
        "5.10 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-12900E Processor",
        "Q1'22",
        "16",
        "5.00 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-12900F Processor",
        "Q1'22",
        "16",
        "5.10 GHz",
        "30 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-12900H Processor",
        "Q1'22",
        "14",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i9-12900HK Processor",
        "Q1'22",
        "14",
        "5.00 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i9-12900HX Processor",
        "Q2'22",
        "16",
        "5.00 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-12900K Processor",
        "Q4'21",
        "16",
        "5.20 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-12900KF Processor",
        "Q4'21",
        "16",
        "5.20 GHz",
        "30 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-12900KS Processor",
        "Q1'22",
        "16",
        "5.50 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-12900T Processor",
        "Q1'22",
        "16",
        "4.90 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-12900TE Processor",
        "Q1'22",
        "16",
        "4.80 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-12950HX Processor",
        "Q2'22",
        "16",
        "5.00 GHz",
        "30 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 12th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-13900 Processor",
        "Q1'23",
        "24",
        "5.60 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-13900E Processor",
        "Q1'23",
        "24",
        "5.20 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-13900F Processor",
        "Q1'23",
        "24",
        "5.60 GHz",
        "36 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-13900H Processor",
        "Q1'23",
        "14",
        "5.40 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i9-13900HK Processor",
        "Q1'23",
        "14",
        "5.40 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i9-13900HX Processor",
        "Q1'23",
        "24",
        "5.40 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-13900K Processor",
        "Q4'22",
        "24",
        "5.80 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-13900KF Processor",
        "Q4'22",
        "24",
        "5.8 GHz",
        "36 MB Intel® Smart Cache",
        ""
    ],
    [
        " Intel® Core™ i9-13900KS Processor",
        "Q1'23",
        "24",
        "6.00 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-13900T Processor",
        "Q1'23",
        "24",
        "5.30 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-13900TE Processor",
        "Q1'23",
        "24",
        "5.00 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics 770"
    ],
    [
        " Intel® Core™ i9-13905H Processor",
        "Q1'23",
        "14",
        "5.40 GHz",
        "24 MB Intel® Smart Cache",
        "Intel® Iris® Xe Graphics eligible"
    ],
    [
        " Intel® Core™ i9-13950HX Processor",
        "Q1'23",
        "24",
        "5.50 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ i9-13980HX Processor",
        "Q1'23",
        "24",
        "5.60 GHz",
        "36 MB Intel® Smart Cache",
        "Intel® UHD Graphics for 13th Gen Intel® Processors"
    ],
    [
        " Intel® Core™ m3-6Y30 Processor",
        "Q3'15",
        "2",
        "2.20 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 515"
    ],
    [
        " Intel® Core™ m3-7Y30 Processor",
        "Q3'16",
        "2",
        "2.60 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 615"
    ],
    [
        " Intel® Core™ m3-7Y32 Processor",
        "Q2'17",
        "2",
        "3.00 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 615"
    ],
    [
        " Intel® Core™ m3-8100Y Processor",
        "Q3'18",
        "2",
        "3.40 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® UHD Graphics 615"
    ],
    [
        " Intel® Core™ m5-6Y54 Processor",
        "Q3'15",
        "2",
        "2.70 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 515"
    ],
    [
        " Intel® Core™ m5-6Y57 Processor",
        "Q3'15",
        "2",
        "2.80 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 515"
    ],
    [
        " Intel® Core™ m7-6Y75 Processor",
        "Q3'15",
        "2",
        "3.10 GHz",
        "4 MB Intel® Smart Cache",
        "Intel® HD Graphics 515"
    ],
    [
        " Intel® Core™ M-5Y10 Processor",
        "Q3'14",
        "2",
        "2.00 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ],
    [
        " Intel® Core™ M-5Y10a Processor",
        "Q3'14",
        "2",
        "2.00 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ],
    [
        " Intel® Core™ M-5Y10c Processor",
        "Q4'14",
        "2",
        "2.00 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ],
    [
        " Intel® Core™ M-5Y31 Processor",
        "Q4'14",
        "2",
        "2.40 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ],
    [
        " Intel® Core™ M-5Y51 Processor",
        "Q4'14",
        "2",
        "2.60 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ],
    [
        " Intel® Core™ M-5Y70 Processor",
        "Q3'14",
        "2",
        "2.60 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ],
    [
        " Intel® Core™ M-5Y71 Processor",
        "Q4'14",
        "2",
        "2.90 GHz",
        "4 MB",
        "Intel® HD Graphics 5300"
    ]];

    let amd = [
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 7995WX",
          Cores: "96",
          Potència: "Up to 5.1 GHz",
          Caché: "384 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 7980X",
          Cores: "64",
          Potència: "Up to 5.1 GHz",
          Caché: "256 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 7985WX",
          Cores: "64",
          Potència: "Up to 5.1 GHz",
          Caché: "256 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 5995WX",
          Cores: "64",
          Potència: "Up to 4.5 GHz",
          Caché: "256 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 3995WX",
          Cores: "64",
          Potència: "Up to 4.2 GHz",
          Caché: "256 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 3990X",
          Cores: "64",
          Potència: "Up to 4.3 GHz",
          Caché: "256 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 7970X",
          Cores: "32",
          Potència: "Up to 5.3 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 3970X",
          Cores: "32",
          Potència: "Up to 4.5 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 2990WX",
          Cores: "32",
          Potència: "Up to 4.2 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 7975WX",
          Cores: "32",
          Potència: "Up to 5.3 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 5975WX",
          Cores: "32",
          Potència: "Up to 4.5 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 3975WX",
          Cores: "32",
          Potència: "Up to 4.2 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 7960X",
          Cores: "24",
          Potència: "Up to 5.3 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 3960X",
          Cores: "24",
          Potència: "Up to 4.5 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 2970WX",
          Cores: "24",
          Potència: "Up to 4.2 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 7965WX",
          Cores: "24",
          Potència: "Up to 5.3 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 5965WX",
          Cores: "24",
          Potència: "Up to 4.5 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 9950X",
          Cores: "16",
          Potència: "Up to 5.7 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7950X3D",
          Cores: "16",
          Potència: "Up to 5.7 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7950X",
          Cores: "16",
          Potència: "Up to 5.7 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7945HX3D",
          Cores: "16",
          Potència: "Up to 5.4 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7945HX",
          Cores: "16",
          Potència: "Up to 5.4 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7940HX",
          Cores: "16",
          Potència: "Up to 5.2 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5950X",
          Cores: "16",
          Potència: "Up to 4.9 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5900XT",
          Cores: "16",
          Potència: "Up to 4.8 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 2950X",
          Cores: "16",
          Potència: "Up to 4.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 1950X",
          Cores: "16",
          Potència: "Up to 4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 7955WX",
          Cores: "16",
          Potència: "Up to 5.3 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 5955WX",
          Cores: "16",
          Potència: "Up to 4.5 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 3955WX",
          Cores: "16",
          Potència: "Up to 4.3 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 3950X",
          Cores: "16",
          Potència: "Up to 4.7 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ AI 9 HX 370",
          Cores: "12",
          Potència: "Up to 5.1 GHz",
          Caché: "24 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 9900X",
          Cores: "12",
          Potència: "Up to 5.6 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7900X3D",
          Cores: "12",
          Potència: "Up to 5.6 GHz",
          Caché: "128 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7900X",
          Cores: "12",
          Potència: "Up to 5.6 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7900",
          Cores: "12",
          Potència: "Up to 5.4 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7845HX",
          Cores: "12",
          Potència: "Up to 5.2 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7840HX",
          Cores: "12",
          Potència: "Up to 5.1 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5900X",
          Cores: "12",
          Potència: "Up to 4.8 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 2920X",
          Cores: "12",
          Potència: "Up to 4.3 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 1920X",
          Cores: "12",
          Potència: "Up to 4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 7945WX",
          Cores: "12",
          Potència: "Up to 5.3 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 7945",
          Cores: "12",
          Potència: "Up to 5.4 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 5945WX",
          Cores: "12",
          Potència: "Up to 4.5 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 5945",
          Cores: "12",
          Potència: "Up to 4.7 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5900 (OEM Only)",
          Cores: "12",
          Potència: "Up to 4.7 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ PRO 3945WX",
          Cores: "12",
          Potència: "Up to 4.3 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 3900",
          Cores: "12",
          Potència: "Up to 4.3 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 3900XT",
          Cores: "12",
          Potència: "Up to 4.7 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 3900X",
          Cores: "12",
          Potència: "Up to 4.6 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 3900 Processor (OEM Only)",
          Cores: "12",
          Potència: "Up to 4.3 GHz",
          Caché: "64 MB"
        },
        {
          Nom: "AMD Ryzen™ AI 9 365",
          Cores: "10",
          Potència: "Up to 5 GHz",
          Caché: "24 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 9700X",
          Cores: "8",
          Potència: "Up to 5.5 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 8945HS",
          Cores: "8",
          Potència: "Up to 5.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 8840U",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 8845HS",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 8840HS",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 8700GE",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 8700G",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 8945HS",
          Cores: "8",
          Potència: "Up to 5.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 8845HS",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 8840U",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 8840HS",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 8700G",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 8700F",
          Cores: "8",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 7940HS",
          Cores: "8",
          Potència: "Up to 5.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 7840U",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 7840HS",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 7735U",
          Cores: "8",
          Potència: "Up to 4.75 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 7940HS",
          Cores: "8",
          Potència: "Up to 5.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7840U",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7840HS",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7800X3D",
          Cores: "8",
          Potència: "Up to 5 GHz",
          Caché: "96 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7745HX",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7736U​",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7735U",
          Cores: "8",
          Potència: "Up to 4.75 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7735HS",
          Cores: "8",
          Potència: "Up to 4.75 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7730U",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7700X",
          Cores: "8",
          Potència: "Up to 5.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7700",
          Cores: "8",
          Potència: "Up to 5.3 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 6950H",
          Cores: "8",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 6850U",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 6850H",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 6980HX",
          Cores: "8",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 6980HS",
          Cores: "8",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 6900HX",
          Cores: "8",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 6900HS​",
          Cores: "8",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 6800U​",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 6800HS",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 6800H",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5980HX",
          Cores: "8",
          Potència: "Up to 4.8 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5980HS",
          Cores: "8",
          Potència: "Up to 4.8 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5900HX",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 5900HS",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5825U",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5825C",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800X3D",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "96 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800XT",
          Cores: "8",
          Potència: "Up to 4.8 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800X",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800U",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800HS",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800H",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5700X3D",
          Cores: "8",
          Potència: "Up to 4.1 GHz",
          Caché: "96 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5700X",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5700U",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5700G",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5700",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 4900HS",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 4900H",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4980U Microsoft Surface® Edition",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4800U",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4800HS",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4800H",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4700U",
          Cores: "8",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ Threadripper™ 1900X",
          Cores: "8",
          Potència: "Up to 4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 7745",
          Cores: "8",
          Potència: "Up to 5.3 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 7730U",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 7435HS",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ Z1 Extreme",
          Cores: "8",
          Potència: "Up to 5.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 9 PRO 6950HS",
          Cores: "8",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 6860Z",
          Cores: "8",
          Potència: "Up to 4.75 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 6850HS",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 5875U",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 5850U",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 5845",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 5750GE",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 5750G",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5800 (OEM Only)",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 5700GE",
          Cores: "8",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 4750U",
          Cores: "8",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 4750GE",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 4750G",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4700GE (OEM Only)",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 4700G (OEM Only)",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 3700",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3800XT",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3800X",
          Cores: "8",
          Potència: "Up to 4.5 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3700X",
          Cores: "8",
          Potència: "Up to 4.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 2700X",
          Cores: "8",
          Potència: "Up to 4.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 2700",
          Cores: "8",
          Potència: "Up to 4.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 2700X",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 2700E Processor",
          Cores: "8",
          Potència: "Up to 4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 2700",
          Cores: "8",
          Potència: "Up to 4.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 1700X Processor",
          Cores: "8",
          Potència: "Up to 3.8 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 1700",
          Cores: "8",
          Potència: "Up to 3.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 1800X",
          Cores: "8",
          Potència: "Up to 4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 1700X",
          Cores: "8",
          Potència: "Up to 3.8 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 1700 Processor",
          Cores: "8",
          Potència: "Up to 3.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "FX-9590",
          Cores: "8",
          Potència: "Up to 5 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-9370",
          Cores: "8",
          Potència: "Up to 4.7 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8370E",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8370 with Wraith cooler",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8370",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8350 with Wraith cooler",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8350",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8320E",
          Cores: "8",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8320",
          Cores: "8",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8310",
          Cores: "8",
          Potència: "Up to 4.3 GHz",
          Caché: ""
        },
        {
          Nom: "FX-8300",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8150",
          Cores: "8",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-8120",
          Cores: "8",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 9600X",
          Cores: "6",
          Potència: "Up to 5.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8640U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8645HS",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8640HS",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8600GE",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8600G",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8540U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8500GE",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 8500G",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8645HS",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8640U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8640HS",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8600G",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8500G",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8400F",
          Cores: "6",
          Potència: "Up to 4.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7640U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7640HS",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7540U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7535U",
          Cores: "6",
          Potència: "Up to 4.55 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7645HX",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7640U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7640HS",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7600X",
          Cores: "6",
          Potència: "Up to 5.3 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7600",
          Cores: "6",
          Potència: "Up to 5.1 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7545U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7540U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7535U",
          Cores: "6",
          Potència: "Up to 4.55 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7535HS",
          Cores: "6",
          Potència: "Up to 4.55 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7530U",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7500F",
          Cores: "6",
          Potència: "Up to 5 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7430U",
          Cores: "6",
          Potència: "Up to 4.3 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 6650U",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 6650H",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 6600U",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 6600HS​",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 6600H",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5625U",
          Cores: "6",
          Potència: "Up to 4.3 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5625C",
          Cores: "6",
          Potència: "Up to 4.3 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600X3D",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "96 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600X",
          Cores: "6",
          Potència: "Up to 4.6 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600U",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600HS",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600H",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600GT",
          Cores: "6",
          Potència: "Up to 4.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600G",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5560U",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5500U",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5500GT",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5500",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4680U Microsoft Surface® Edition",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4600U",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4600H",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4500U",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 8540U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7645",
          Cores: "6",
          Potència: "Up to 5.1 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7545U",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 7530U",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ Z1",
          Cores: "6",
          Potència: "Up to 4.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 6650HS",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5675U",
          Cores: "6",
          Potència: "Up to 4.3 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5655GE",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5655G",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5650U",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5650GE",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5650G",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 5645",
          Cores: "6",
          Potència: "Up to 4.6 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5600GE",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 4655GE",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 4655G",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 4650U",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 4650GE",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 4650G",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4600GE (OEM Only)",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4600G",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 4500",
          Cores: "6",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 3600",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3600XT",
          Cores: "6",
          Potència: "Up to 4.5 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3600X",
          Cores: "6",
          Potència: "Up to 4.4 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3600",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "32 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3500 Processor (OEM Only)",
          Cores: "6",
          Potència: "Up to 4.1 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 2600",
          Cores: "6",
          Potència: "Up to 3.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2600X",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2600E",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2600",
          Cores: "6",
          Potència: "Up to 3.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 1600",
          Cores: "6",
          Potència: "Up to 3.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 1600X",
          Cores: "6",
          Potència: "Up to 4 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 1600 (AF)",
          Cores: "6",
          Potència: "Up to 3.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 1600",
          Cores: "6",
          Potència: "Up to 3.6 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "FX-6350 with Wraith cooler",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-6350",
          Cores: "6",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-6300",
          Cores: "6",
          Potència: "Up to 3.8 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-6200",
          Cores: "6",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX 6100",
          Cores: "6",
          Potència: "Up to 3.9 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Phenom™ II 1075T",
          Cores: "6",
          Potència: "",
          Caché: "6 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 8300GE",
          Cores: "4",
          Potència: "Up to 4.9 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 8300G",
          Cores: "4",
          Potència: "Up to 4.9 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 8300G",
          Cores: "4",
          Potència: "Up to 4.9 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 7335U",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Ryzen™ 5 7520U",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7520C",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 7440U",
          Cores: "4",
          Potència: "Up to 4.7 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 7335U",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 7330U",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 7320U",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 7320C",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 7235HS",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 5425U",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 5425C",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 5400U",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 5300U",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 4450U",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 4300U",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3780U Microsoft Surface® Edition",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3750H",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3700U",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 3700C",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3580U Microsoft Surface® Edition",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3550H",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3500U",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3500C",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3450U",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3350U",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3300U",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 2700U",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 2500U",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 2300U",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 2800H",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 2700U",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2600H",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2500U",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 2300U",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "7th Gen AMD PRO A12-9800E APU",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A12-9800 APU",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A12-8870E APU",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A12-8870 APU",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A12-9830B APU",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A12-9800B APU",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A12-8830B APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A12-8800B APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7890K with Radeon™ R7 Graphics and Wraith cooler",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A10-9700 APU",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A10-8850B APU",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A10-8770E APU",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A10-8770 APU",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A10-8750B APU",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A10-9700B APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A10-8730B APU",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A10-8700B APU",
          Cores: "4",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A8-9600 APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A8-8650B APU",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "A8 PRO-7600B with Radeon™ R7 Graphics",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A8-9630B",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A8-9600B APU",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A8-8600B APU",
          Cores: "4",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A8 PRO-7150B with Radeon™ R5 Graphics",
          Cores: "4",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "A4 PRO-3350B with Radeon™ R4 Graphics",
          Cores: "4",
          Potència: "Up to 2.4 GHz",
          Caché: ""
        },
        {
          Nom: "A4 PRO-3340B with Radeon™ HD 8240 Graphics",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD Athlon™ X4 970",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD Athlon™ X4 950",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD Athlon™ X4 940",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "880K with Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "870K with Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "860K with Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 860K",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "845 with Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 760K",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 750K",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 750",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 740",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 631",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 620e",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Ryzen™ 3 8440U",
          Cores: "4",
          Potència: "Up to 4.7 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 7330U",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 5475U",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 5450U",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 5350GE",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 5350G",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 5500H",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 5300GE (OEM Only)",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 5300G (OEM Only)",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 4355GE",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 4355G",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 4350GE",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 4350G",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 4300GE (OEM Only)",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 4300G (OEM Only)",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 4100",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 7 PRO 3700U",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 3500U",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 3400GE",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 3400G",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 3350GE",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 3350G",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 3300U",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 3200GE",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 3200G",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3400GE (OEM Only)",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 3400G with Radeon™ RX Vega 11 Graphics",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3300X",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3200GE (OEM Only)",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3200G with Radeon™ Vega 8 Graphics",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3100",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Athlon™ Gold PRO 3150GE",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Gold PRO 3150G",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Gold 3150GE (OEM Only)",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Gold 3150G (OEM Only)",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 2400GE with Radeon™ Vega 11 Graphics",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 2400G with Radeon™ Vega 11 Graphics",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 2200GE with Radeon™ Vega 8 Graphics",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 2200G with Radeon™ Vega 8 Graphics",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2500X",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2400GE with Radeon™ RX Vega 11 Graphics",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 2400G with Radeon™ RX Vega 11 Graphics",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 2300X",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 2200GE with Radeon™ Vega 8 Graphics",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 2200G with Radeon™ Vega 8 Graphics",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 PRO 1500",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 1300",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 PRO 1200",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 1500X",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "16 MB"
        },
        {
          Nom: "AMD Ryzen™ 5 1400",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 1300X",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 1200",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-4350",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-4320",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "FX-4300",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "FX-4170",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "FX-4130",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "FX-4100",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "7th Gen FX™ 9830P APU",
          Cores: "4",
          Potència: "Up to 3.7 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen FX™ 9800P APU",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen FX-8800P APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "FX-7600P with Radeon™ R7 Graphics",
          Cores: "4",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "FX-7500 with Radeon™ R7 Graphics",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "FX-8800P with Radeon™ R7 Graphics",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A12-9800E APU",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A12-9800 APU",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A12-9730P APU",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A12-9700P APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A10-9700E APU",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A10-9700 APU",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7870K with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7870K with Radeon™ R7 Graphics and Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7860K with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7860K with Radeon™ R7 Graphics and Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7850K with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7800 with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7700K with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A10-6800K with Radeon™ HD 8670D",
          Cores: "4",
          Potència: "Up to 4.4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-6790K with Radeon™ HD 8670D",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: ""
        },
        {
          Nom: "A10-6700T with Radeon™ HD 8650D",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "A10-6700 with Radeon™ HD 8670D",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A10-9630P APU",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A10-9600P APU",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen A10-8700P APU",
          Cores: "4",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7400P with Radeon™ R6 Graphics",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-7300 with Radeon™ R6 Graphics",
          Cores: "4",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "A10 Micro-6700T with Radeon™ R6 Graphics",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "A10-8700P with Radeon™ R6 Graphics",
          Cores: "4",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A10-9700E APU",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "A10 PRO-7850B with Radeon™ R7 Graphics",
          Cores: "4",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A10 PRO-7800B with Radeon™ R7 Graphics",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A10-9730B APU",
          Cores: "4",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "A10 PRO-7350B with Radeon™ R6 Graphics",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "A10-6800B with Radeon™ HD 8670D",
          Cores: "4",
          Potència: "Up to 4.4 GHz",
          Caché: ""
        },
        {
          Nom: "A10-6790B with Radeon™ HD 8670D",
          Cores: "4",
          Potència: "Up to 4.3 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A8-9600 APU",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7670K with Radeon™ R7 Graphics and Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7650K with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7650K with Radeon™ R7 Graphics and Near Silent Thermal Solution",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7600 with Radeon™ R7 Series",
          Cores: "4",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A8-6600K with Radeon™ HD 8570D",
          Cores: "4",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "A8-6500T with Radeon™ HD 8550D",
          Cores: "4",
          Potència: "Up to 3.1 GHz",
          Caché: ""
        },
        {
          Nom: "A8-6500 with Radeon™ HD 8570D",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen A8-8600P APU",
          Cores: "4",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7410 with Radeon™ R5 Graphics",
          Cores: "4",
          Potència: "Up to 2.5 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7200P with Radeon™ R5 Graphics",
          Cores: "4",
          Potència: "Up to 3.3 GHz",
          Caché: ""
        },
        {
          Nom: "A8-7100 with Radeon™ R5 Graphics",
          Cores: "4",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A8-8600P with Radeon™ R6 Graphics",
          Cores: "4",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A8-6410 with Radeon™ R5 Graphics",
          Cores: "4",
          Potència: "Up to 2.4 GHz",
          Caché: ""
        },
        {
          Nom: "A8-6500B with Radeon™ HD 8570D",
          Cores: "4",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "A6-6310 with Radeon™ R4 Graphics",
          Cores: "4",
          Potència: "Up to 2.4 GHz",
          Caché: ""
        },
        {
          Nom: "A6-5200 with Radeon™ HD 8400",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "A6-5200M with Radeon™ HD 8400",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "A6-7310 with Radeon™ R4 Graphics",
          Cores: "4",
          Potència: "Up to 2.4 GHz",
          Caché: ""
        },
        {
          Nom: "A4-7210 with Radeon™ R3 Graphics",
          Cores: "4",
          Potència: "Up to 2.2 GHz",
          Caché: ""
        },
        {
          Nom: "A4 Micro-6400T with Radeon™ R3 Graphics",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "A4-6210 with Radeon™ R3 Graphics",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "A4-5100 with Radeon™ HD 8330",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "A4-5000 with Radeon™ HD 8330",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "Athlon™ 5370 APU with Radeon™ R3 Series",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "Athlon™ 5350 APU with Radeon™ R3 Series",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "Athlon™ 5150 APU with Radeon™ R3 Series",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "Sempron™ 3850 APU with Radeon™ R3 Series",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E2-6110 with Radeon™ R2 Graphics",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E2-3800 with Radeon™ HD 8280",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E2-7110 with Radeon™ R2 Graphics",
          Cores: "4",
          Potència: "Up to 1.8 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 641",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 638",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 631 (65W)",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 980",
          Cores: "4",
          Potència: "",
          Caché: "6 MB"
        },
        {
          Nom: "AMD Phenom™ II 975",
          Cores: "4",
          Potència: "",
          Caché: "6 MB"
        },
        {
          Nom: "AMD Phenom™ II 965",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 960T",
          Cores: "4",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 850",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 840",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "X940",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "N970",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "N960",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B99",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B97",
          Cores: "4",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 425e",
          Cores: "3",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 460",
          Cores: "3",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "N870",
          Cores: "3",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "P860",
          Cores: "3",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B77",
          Cores: "3",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B75",
          Cores: "3",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Ryzen™ 3 5125C",
          Cores: "2",
          Potència: "Up to 3 GHz",
          Caché: "8 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3250U",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3250C",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 3200U",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ PRO 3145B",
          Cores: "2",
          Potència: "Up to 3.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ PRO 3045B",
          Cores: "2",
          Potència: "Up to 3.2 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Silver 3050e",
          Cores: "2",
          Potència: "Up to 2.8 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ PRO 300U Mobile Processor with Radeon™ Vega 3 Graphics",
          Cores: "2",
          Potència: "Up to 3.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ PRO 200U Mobile Processor with Radeon™ Vega 3 Graphics",
          Cores: "2",
          Potència: "Up to 3.2 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Ryzen™ 3 2200U",
          Cores: "2",
          Potència: "Up to 3.4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "7th Gen AMD PRO A6-9500E APU",
          Cores: "2",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A6-9500 APU",
          Cores: "2",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A6-8570E APU",
          Cores: "2",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A6-8570 APU",
          Cores: "2",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A6-8550B APU",
          Cores: "2",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A6 PRO-7400B with Radeon™ R5 Graphics",
          Cores: "2",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A6-9500B APU",
          Cores: "2",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A6-8350B APU",
          Cores: "2",
          Potència: "Up to 3.7 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A6-7350B APU",
          Cores: "2",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A6-8530B APU",
          Cores: "2",
          Potència: "Up to 3.2 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A6-8500B APU",
          Cores: "2",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A6 PRO-7050B with Radeon™ R4 Graphics",
          Cores: "2",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "6th Gen AMD PRO A4-8350B APU",
          Cores: "2",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "A4 PRO-7350B with Radeon™ R5 Graphics",
          Cores: "2",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A4 PRO-7300B with Radeon™ HD 8470D",
          Cores: "2",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A4-5350B APU",
          Cores: "2",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen AMD PRO A4-4350B APU",
          Cores: "2",
          Potència: "Up to 2.9 GHz",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ Gold 7220U",
          Cores: "2",
          Potència: "Up to 3.7 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Gold 7220C",
          Cores: "2",
          Potència: "Up to 3.7 GHz",
          Caché: "2 MB"
        },
        {
          Nom: "AMD Athlon™ Silver 7120U",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: "2 MB"
        },
        {
          Nom: "AMD Athlon™ Silver 7120C",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: "2 MB"
        },
        {
          Nom: "AMD Athlon™ Silver PRO 3125GE",
          Cores: "2",
          Potència: "Up to 3.4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Gold 3150U",
          Cores: "2",
          Potència: "Up to 3.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Gold 3150C",
          Cores: "2",
          Potència: "Up to 3.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Silver 3050U",
          Cores: "2",
          Potència: "Up to 3.2 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ Silver 3050GE (OEM Only)",
          Cores: "2",
          Potència: "Up to 3.4 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™  Silver 3050C",
          Cores: "2",
          Potència: "Up to 3.2 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 3000G",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ PRO 300GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 320GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 300U",
          Cores: "2",
          Potència: "Up to 3.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 300GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ PRO 200GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 240GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 220GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD Athlon™ 200GE",
          Cores: "2",
          Potència: "",
          Caché: "4 MB"
        },
        {
          Nom: "AMD 3020e",
          Cores: "2",
          Potència: "Up to 2.6 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD 3015e",
          Cores: "2",
          Potència: "Up to 2.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "AMD 3015Ce",
          Cores: "2",
          Potència: "Up to 2.3 GHz",
          Caché: "4 MB"
        },
        {
          Nom: "7th Gen A9-9425 APU",
          Cores: "2",
          Potència: "Up to 3.7 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A9-9420 APU",
          Cores: "2",
          Potència: "Up to 3.6 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A9-9410 APU",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9550 APU",
          Cores: "2",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9500E APU",
          Cores: "2",
          Potència: "Up to 3.4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9500 APU",
          Cores: "2",
          Potència: "Up to 3.8 GHz",
          Caché: ""
        },
        {
          Nom: "A6-7470K with Radeon™ R5 Series",
          Cores: "2",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A6-7400K with Radeon™ R5 Series",
          Cores: "2",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "A6-6420K with Radeon™ HD 8470D",
          Cores: "2",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "A6-6400K with Radeon™ HD 8470D",
          Cores: "2",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9225 APU",
          Cores: "2",
          Potència: "Up to 3.1 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9220C APU",
          Cores: "2",
          Potència: "Up to 2.7 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9220 APU",
          Cores: "2",
          Potència: "Up to 2.9 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A6-9210 APU",
          Cores: "2",
          Potència: "Up to 2.8 GHz",
          Caché: ""
        },
        {
          Nom: "A6-7000 with Radeon™ R4 Graphics",
          Cores: "2",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A6-5350M with Radeon™ HD 8450G",
          Cores: "2",
          Potència: "Up to 3.5 GHz",
          Caché: ""
        },
        {
          Nom: "A6-8500P with Radeon™ R5 Graphics",
          Cores: "2",
          Potència: "Up to 3 GHz",
          Caché: ""
        },
        {
          Nom: "A6-6420B with Radeon™ HD 8470D",
          Cores: "2",
          Potència: "Up to 4.2 GHz",
          Caché: ""
        },
        {
          Nom: "A6-6400B with Radeon™ HD 8470D",
          Cores: "2",
          Potència: "Up to 4.1 GHz",
          Caché: ""
        },
        {
          Nom: "A4-7300 with Radeon™ HD 8470D",
          Cores: "2",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A4-6320 with Radeon™ HD 8370D",
          Cores: "2",
          Potència: "Up to 4 GHz",
          Caché: ""
        },
        {
          Nom: "A4-6300 with Radeon™ HD 8370D",
          Cores: "2",
          Potència: "Up to 3.9 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A4-9125 APU",
          Cores: "2",
          Potència: "Up to 2.6 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A4-9120C APU",
          Cores: "2",
          Potència: "Up to 2.4 GHz",
          Caché: ""
        },
        {
          Nom: "7th Gen A4-9120 APU",
          Cores: "2",
          Potència: "Up to 2.5 GHz",
          Caché: ""
        },
        {
          Nom: "Sempron™ 2650 APU with Radeon™ R3 Series",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "7th Gen E2-9010 APU",
          Cores: "2",
          Potència: "Up to 2.2 GHz",
          Caché: ""
        },
        {
          Nom: "E2-3000 with Radeon™ HD 8280",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E1-7010 with Radeon™ R2 Graphics",
          Cores: "2",
          Potència: "Up to 1.5 GHz",
          Caché: ""
        },
        {
          Nom: "E1 Micro-6200T with Radeon™ R2 Graphics",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E1-6010 with Radeon™ R2 Graphics",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E1-2500 with Radeon™ HD 8240",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E1-2200 with Radeon™ HD 8210",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "E1-2100 with Radeon™ HD 8210",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Athlon™ 255e",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 570",
          Cores: "2",
          Potència: "",
          Caché: "6 MB"
        },
        {
          Nom: "AMD Phenom™ II 555",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 565",
          Cores: "2",
          Potència: "",
          Caché: "6 MB"
        },
        {
          Nom: "N660",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "P650",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "N640",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B60",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B59",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "B57",
          Cores: "2",
          Potència: "",
          Caché: ""
        },
        {
          Nom: "AMD Phenom™ II 1045T",
          Cores: "",
          Potència: "Up to 3.2 GHz",
          Caché: "6 MB"
        },
        {
          Nom: "B95",
          Cores: "",
          Potència: "",
          Caché: ""
        }
      ];