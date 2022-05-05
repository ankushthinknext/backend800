import transport from "./config/nodemailerConfig.js";

const message = {
  from: "ankush.thinknext@gmail.com",
  to: "info@thinknext.co.in",
  subject: "User Auth Message",
  text: "This is a verfication message",
  html: "<p>HTML version of the message</p>",
};

async function sendMail() {
  let result = await transport.sendMail(message);
  console.log(result);
}

sendMail();
