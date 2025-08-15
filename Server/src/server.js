import app from './app.js';
import { env } from './config/env.js';

const PORT = env.PORT || 8000

app.get("/", (req, res) => {
  res.send("HYIP backend is running!");
});
app.listen(PORT, () => {
  console.log(`🚀 Auth API listening on http://localhost:${PORT}`);
});
