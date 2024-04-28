import { Configuration } from "openai";

function configuration() {
    const config = new Configuration({
      apiKey: process.env.OPEN_AI_SECRET,
      organization: process.env.OPEN_AI_ORGANIZATION_ID,
    });
    
}

export default configuration