const fs = require('fs').promises

const file1 = 'file1.txt'
const file2 = 'file2.txt'

async function concatenate(file1,file2){
    const [data1, data2] = await Promise.all([fs.readFile(file1,'utf8'),fs.readFile(file2,'utf8')])
    const data = data1+data2
    console.log(data);
}

concatenate(file1,file2)