#!/usr/bin/env node
const { exec } = require('child_process');
const path = require('path');

const project_name = process.argv[2];
const group_name = process.argv[3];

const printerPath = path.join(__dirname, 'printer.js');

exec(
  `az pipelines variable-group list --group-name '${group_name}' --project '${project_name}'`,
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
