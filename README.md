## DCU Exam Papers 

### Overview

A basic React JS app and python script that pulls all the exam papers from DCU's master listing google spreadsheet and builds a static site that allows users to search by module and year for their requested exam papers. 

### Requirements

- Python3 
- Python3 Requests Module 
- npm

### Install 

Run npm install within the DCU-Exam-Papers folder 

### Development

Run npm start to start a local development server if messing with the front end. 
You can edit the python within the python folder 

### Deployment 

Run the build bat or sh file to obtain the latest exam papers and build the site. 

### Maintenance 

Setup a cron job to rebuild the site weekly/monthly to obtain latest exam papers from the master exam page and move the latest build of the into public html folder of where it's being hosted. 