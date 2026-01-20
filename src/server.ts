import app from "./app";
import "./cron/index";
import "./queue/worker";


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});