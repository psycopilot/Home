

// Generate speech



import { HfInference } from '@huggingface/inference';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const inference = new HfInference("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");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/caress"));
// Initialize the index.html at the start
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
   
});
app.get('/course', (req, res) => {
    res.sendFile(path.join(__dirname, 'course.html'));
   
});
async function obtenerRespuestaSegundaPeticion() {
    try {
      const response = await axios.get('URL_DE_LA_SEGUNDA_PETICION');
      return response.data;
    } catch (error) {
      console.error('Error en la segunda petición:', error);
      throw error;
    }
  }

app.get('/hola', (req, res) => {
    res.send("hellos");
});
let arrayCadenas = ["Estos son los mensajes anteriores"];
let convers = 0;
var Arraycadenasvar = "";
var Arraycadenasvares = "";
app.use(express.json());
app.use(express.static('public'));
var hola=0;
let paraulesdolentes = "Por tu lado. Hola. (Respuesta cortante y distante, como para mantener una conversación mínima y sin ánimo de continuar la conversación).";
app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(`Message received: ${message}`);

    try {

      
         
        // Call the language model with the received message as the prompt
        let modelResponse = "";
        let modelResponse1 = "";
        let modelResponse2 = "";
        let modelResponse4 = "";
        let modelResponse6 ="";
        let modelResponse10="";
        console.log(message);
        for (let i = 0; i < arrayCadenas.length; i++) {
            var Arraycadenasvar = Arraycadenasvar + arrayCadenas[i];
        }
        if(hola==0){
            var textos = "El chico ha empezado la conversación";
            
            hola=1;
        }
        else{
            var textos = "Esta ha sido la conversación:" + Arraycadenasvar;
        }
        
        for await (const chunk of inference.chatCompletionStream({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            //google/flan-t5-large
            //mistralai/Mixtral-8x7B-Instruct-v0.1
            messages: [{ role: "user", content: " Act like a friend who is caring about me " + textos + "I have said:" + message +". In less than 70 words, Talk like if you were a mental health professional with me asking information and give advice without saying to look for professional help (because that's why you're here) ask me questions to help me better:" }],
            max_tokens: 170,
        })) {
            modelResponse += chunk.choices[0]?.delta?.content || "";
            
        }
 
       
        console.log("enviat");
        res.json({ reply:modelResponse, /*
            solucio:corr,
        correct:correccion,
        resultados: resultado,
    answer:modelResponse*/});
    
        // Respond to the client with the model's response
        var e = await inference.translation({
            model: 't5-base',
            inputs: 'My name is Wolfgang and I live in Berlin'
          });
          
        const holoasa =  await inference.translation({
            model: 'facebook/mbart-large-50-many-to-many-mmt',
            inputs: "Bonjour",
            parameters: {
            "src_lang": "en_XX",
            "tgt_lang": "fr_XX"
           }
          });
          console.log("holoasa"+holoasa);
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
