// Reading and Writing to files
const fs = require('fs');
// Networking capiabilities
const http = require('http');
// Routing/Examine the urls
const url = require('url');


// // Blocking, Synchronous Way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File written!')

// Non-Blocking, Asynchronous Way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log("Error! ")
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`, 'utf-8', (err) => {
//                 console.log('Your file has been written')
//             })
//         });
//     });
// });
// console.log('will read file!')

// SERVER



const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data)


const server = http.createServer((req, res) => {
    const pathName = req.url

    if(pathName === '/overview' || pathName === '/'){
        res.end('This is the OVERVIEW')
    } else if (pathName === '/product'){
        res.end("This is the PRODUCT")
    }else if (pathName === '/api'){
        res.writeHead(200, { 'Content-type' : 'application/json'} )
        res.end(data);
    }else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Listening to requests on port 8080');
});