import express from "express";
import bp from "body-parser";
import cors from "cors";

const corsAccess = {
  origin: "http://localhost:5173/",
  optionsSuccessStatus: 200,
  method: "GET, POST",
};

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors(corsAccess));
app.listen(8080);

const data = {
  todos: [{ todo: "Test: Nothing To Do", id: 123, completed: false }], // serving as fake database
};

app.post("/update/:data", cors(corsAccess), (req, res) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
  });
  res.header({
    "Access-Control-Allow-Headers": "*",
  });
  const incomingData = JSON.parse(req.params.data.slice(1));
  data.todos = [...incomingData];
  console.log(data);
});

app.get("/getData", cors(corsAccess), (req, res) => {
  console.log(data);
  res.header({
    "Access-Control-Allow-Origin": "*",
  });
  res.header({
    "Access-Control-Allow-Headers": "*",
  });
  res.json(data.todos);
});
