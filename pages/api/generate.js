import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Unique and detailed travel ideas in";
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.apiCall}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `
    prompt: Unique and detailed travel ideas in taiwan if you like fishing
    response:
    1. Go Saltwater fly-fishing in Kinmen: Kinmen is an archipelago located just off the coast of mainland China that offers excellent saltwater fly-fishing opportunities. You can target a variety of species including trevally, queenfish, and barracuda.

    2.Visit Taiwan's east coast: Taiwan's east coast has a diverse range of fish species, from large game fish like tuna and marlin to smaller species like grouper and snapper. You can book a fishing charter to explore the best spots for these fish.

    3.Experiance Trout fishing in the Central Mountains: Taiwan's central mountain range offers great trout fishing in its crystal clear mountain streams and rivers. The most popular species to catch is the Taiwan native "Formosan landlocked salmon"

    4.Take an adventure Kayak fishing in Tainan: Tainan is known for its mangrove forests, estuaries and coastal lagoons that are ideal for kayak fishing. You can target species like snook, tarpon, and mangrove jack.

    5.Have the time of your life Fishing on the Sun Moon Lake: Sun Moon Lake is known for its scenic beauty and is a great spot to catch fish like mandarin fish, tilapia and carp. You can also hire a boat and try to catch the Giant Snakehead (Channa argus) a freshwater fish native to Taiwan.
    
    prompt: Unique and detailed travel ideas in ${req.body.apiCall}
    response:
    `,
    temperature: 0.9,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;