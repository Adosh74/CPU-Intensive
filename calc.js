import { workerData, parentPort} from 'worker_threads';

export const heavyTask = () => {
    for (let i = 0; i < 400000000; i++) {
        // nested for loop to simulate a CPU-intensive task
        for (let j = 0; j < 50; j++) {
            // do nothing
        }
    }
    return "CPU-intensive task completed";
}

parentPort.postMessage(heavyTask());