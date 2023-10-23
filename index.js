#!/usr/bin/env node
const { exec } = require('child_process');
const path = require('path');

let project_name = "";
let group_name = "";

if(process.argv.length > 4){
  let refinedProcess = process.argv;
  refinedProcess = refinedProcess.slice(2).join(' ');
  project_name = refinedProcess.split(" -- ")[0];
  group_name = refinedProcess.split(" -- ")[1];
}else{
  project_name = process.argv[2];
  group_name = process.argv[4];
}

console.log("project_name", project_name);
console.log("group_name", group_name);

const printerPath = path.join(__dirname, 'printer.js');

exec(
  `az pipelines variable-group list --group-name "${group_name}" --project "${project_name}"`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    const sample = stdout;
    const { spawn } = require('child_process');
    const node = spawn('node', [printerPath, '-p', sample, '.env']);

    node.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    node.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    node.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
);
