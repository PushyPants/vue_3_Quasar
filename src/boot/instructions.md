Author: Push
date: 5/10/23
reference: https://quasar.dev/quasar-cli-vite/boot-files#introduction

Boot files fulfill one special purpose: they run code before the App’s Vue root component is instantiated while giving you access to certain variables, which is required if you need to initialize a library, interfere with Vue Router, _inject Vue prototype_ or inject the root instance of the Vue app.

#To add a Boot File:

- create a file in the boot folder > someName.ts
- make sure to add the file's name to the quasar.config.ts so that it knows to run it
  - quasar.config.ts > boot: ['someName']
