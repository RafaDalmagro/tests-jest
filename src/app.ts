import http from "node:http";

const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
];

const app = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/products") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }
});

export { app };
