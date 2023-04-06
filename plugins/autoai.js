import openai from 'openai'
import request from 'request'
export async function all(m, chatUpdate) {
  let chats = global.db.data.chats[m.chat]
  if (chats.autoai && m.text && !m.isCommand) {
    openai.apiKey = "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";
    const prompta = m.text;
    const modela = "text-davinci-003";
    const optionsa = {
       method: "POST",
       url: "https://api.openai.com/v1/completions",
       headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${openai.apiKey}`
       },
       json: true,
       body: {
           prompt: prompta,
           model: modela,
           max_tokens: 1024,       
           temperature: 0.5,
           top_p: 1,
           frequency_penalty: 0,
           presence_penalty: 0,
       }
    }
    request(optionsa, function (error, response, body) {
        //spinner.stop()
        //  if (error) throw new Error(error); 
        m.reply(body.choices[0].text)
    })
  }
}