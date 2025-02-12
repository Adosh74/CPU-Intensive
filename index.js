import express from "express";
import { Worker } from "worker_threads";

const app = express();

app.use(express.json());




app.get("/cpu-intensive", (req, res) => {
    const start = performance.now();
    // for loop to simulate a CPU-intensive task
    const worker = new Worker("./calc.js");

    worker.on("message", (message) => {
        res.status(200).json({ 
            message: message,
            time: ((performance.now() - start) / 1000).toFixed(2) + " seconds"
        });
    });

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});