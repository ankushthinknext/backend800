import jwt from "jsonwebtoken";
//token creation

let secret = "dfskljds238923@#423498232#$234982304";

let token2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM4NDk4LCJuYW1lIjoiTU9oaXQiLCJsb2NhdGlvbiI6Ik1vaGFsaSIsImV4cGlyZXNJbiI6MjAsImlhdCI6MTY1MTExODcwMH0.-fNmlpKWZT_ZrLqiltwqNeZBJ1rZUpWbANqoGoZHOVc";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM4NDk4LCJuYW1lIjoiTU9oaXQiLCJsb2NhdGlvbiI6Ik1vaGFsaSIsImlhdCI6MTY1MTExNzkzN30.ED3HvuJUmCOt3WIh-6vJWPbtZvwWOD1dMttDuhPrpgM";

let info = jwt.verify(token2, secret);
let duration = parseInt(new Date().getTime() / 1000) - info.iat;
if (duration > info.expiresIn) {
  console.log("Token has expired");
}
console.log("duration", duration);

console.log(info);
