import serve from "micro";
import api from "./lib";

serve(api).listen(8080, err => {
  if (err) throw err;
  console.log("server listening on *:8080");
});
