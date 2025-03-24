let express = require("express");
const bodyParser = require("body-parser");
let app = express();
let cors = require("cors");
const axios = require("axios");
app.use(cors());
app.use(bodyParser.json());

const pushMoreUrl = "https://pushmore.io/webhook/34LQgwoNxStyVqk9Tk3dmiwM";

app.post("/send-telegram-message", async (req, res) => {
  const { message } = req.body;

  res.set({ "Access-Control-Allow-Origin": "*" });
  console.log("/send-telegram-message");
  setTimeout(async () => {
    try {
      await axios.post(pushMoreUrl, { message });
      res.status(200).send("OK");
    } catch (error) {
      console.error("Errore invio messaggio a Telegram:", error);
      res.status(500).send("Errore invio messaggio a Telegram " + error);
    }
  }, 2000);
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
