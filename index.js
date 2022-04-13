const bodyParser = require('body-parser');
const keepAlive = require("./server")
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
let Eris = require('eris');

keepAlive()
let tokens = [
 'ODkxNzU2NzQxMTMyNDUxOTAw.YVDK3w.v3LvoaiNb2GpFMbsXbyyfUidKWI',
 'ODkxNzYyNjEyOTM1NzUzNzk4.YVDLnA.hfOW9Btv3JOCce4qRkLvqJFymKc',
 'ODkxNzY0OTY1NTUwMjAyODgw.YfqaWQ.G0nDdwRqLeQtOuqQJAUVPV9t4f8',
 'ODkxNzcwNjQyMzY4NzE2ODMx.YVDNQQ.5cBbNqraXYeY46oulyceuDWx9cQ',
 'ODkxNzcyODU5MTg4Mzg3ODQw.YVDO1A.PzqgVdwaoFKI7ExOsFaGkwiq6YY',

'ODkxNzY3NzU4MTgwNzE2NTc0.YVDV-w.mmyJlVAlI6I8Y4n43ygdWHR6ZcA',
 'ODkxNzgwNjU1MjM3NzE4MDE3.YVDbMw.rDBilA3YK3seX2f_Km9cuK-99wU',
 'ODkyMTk0NDQ2NTM0MzkzODU2.YVJsIA.xthds4ijqoGWj02sED79VwZ-MUM',
 'ODkyMTk2NzYyMjY0MTU4MjI4.YVJsUg.oZlUHyrZRurYYnv6DVnFeiOFQKw',
 'ODkyMTk4NDg3ODgwNTIzNzk2.YVJsmw.FQCGqYbRNAC1uOvwOH02V7nacpk',
 'ODkyMjAwODcwMTEwOTYxNzA1.YVJs5w.m_vOdxNZ1yusXhD69RMhkCdMalY',
 'ODkyMjA0NTIwNjQ4NjI2Mjc2.YVJtNQ.P6rSTH89FdjrwQYvySSmcH_gFsE',
 'ODkyMjA3MjczNDIwNjUyNTQ0.YVJtTA.gtb7GPm9_uefIIakwSMQkaBdPew',  
  'ODkyMjEwMDU4MzYzMDQzODgw.YVJtmA.g8Q_8UF72U-9K8YmFK5zNI0M1Ok',
 'ODkyMjEyNzI3Mzc5MDM0MTQy.YVJtyg.2kwCTdGGh4Zy-awCtjox2Po5ejs',
 'ODQ1NDI1NDY3MTA4MzYwMTky.YfF4rQ.46rOhubMCpowCksGLYONxoH5EVg',
 'ODc1NjA0MzA2MTQzODg3Mzcx.YfF3uw.xu99BdtgvoUk6WVjbFkQQn-9zt4',
 'ODc1MzM1NTMwODY5NTg4MDA5.YfF8Qw.aNJEGzcYizC0wNIKv_U_jh0PBSE',
  
'ODY4ODI1NTgxNTE1NjAzOTk4.YfF-lw.NkzydKYK9WfHatknLzDGlkDWCtk',

'OTQ5MzkyNDk2NDQwNTM3MTI4.YiN-Mg.Aid0-M_VqO3pSlXhqwiCGgDJACA',

'OTQ5NDE0NTQyMjQ3NjE2NTEy.YiODYw.xSCYQ_Q7TkdyUNl9MZP0UfGCHYc',

'OTQ5NDE1MTk5MDEyNjgzODA3.YiOFzQ.ckRwsxUkXDbMtfB523I_PZqYenE',

'OTQ5NDU4NjA3OTc0NTQzNDAx.YiOHfA.PfukpCyTj-NNYaeZVI8JzU0ClkU',

'OTQ5NDU5OTA3MzIzNzg1Mjg2.YiOKTg.7WdHemowoRkCfM6VlXRfW-NfHUo',

'OTQ5NDYxODA3NTQwNjA0OTI5.YiOX_Q.aYsrYHc-ziSpKfwUK_4FZMMZX6Y',
  
'OTQ5NDYzMDg0NzgxNjg2ODU0.YiOSGg.Y9J1mCe3REixZgIh1-OGowMZljk',

'OTQ5NDYxNjMzNTc3NjY4NjQ4.YiOVhA.k5JNvM3aHX3bdw7scsbsOiaHB4U',

'ODkwMTIwOTc2NjYxMTE0OTIw.YjIZgA.Q-Sm2jhpweqvr41XT3i7PG__0Rc',

'ODkwMTIyMTYyNTk2MzU2MDk2.YjIbcg.4CYZuhdG96nR_51nXqnOjTwheHw',

'ODkwMTIzNTcwNDM1NDgxNjEw.YjIcng.VJyGkvlt1zuoZMzNXQz2yP4UXaU',

'ODkwMTI0NjYxNDAzMjk1NzQ0.YjIdmA.B65dNeP3gFseLDqZPp0Ao4NLdtU',

'ODkwMTI1NzE1Nzg0MjE2NjA5.YjIhxA.kqrl4HiqD5306U4kP1Orrq4QcmY',
  
'ODkwMTI2OTg1ODI3ODY0NTc2.YjIgKg.cZZdP0BAHsb9bkg_x2oKOy1FAqw',
  
'ODkwMTQzNjk3NDAyOTg2NTU3.YjIjPA.68hg8AQZOLj1sgfdtx6hBwc5aAs',
  
"ODkwMTg3Njk0Mzg1Mjc0ODkw.Yj-rdg.OGO-RkIS66p0ZbhaeXztrlfYhn8",
  
"ODkwMTU2MzYxMDkzMDk5NTYw.Yj-rMQ.7aSqEEtPnJzlwURBqu2MAfKig3U",

 "ODkwMTUzODEzMDI4MjY2MDU0.YjOLoQ.D62VPTSQzF-lZqwGiBaOsxHyyp4"



 ]
var C = 0
console.log(tokens.length)
for (const token of tokens) {
  C++
  let num = C
  let client = new Eris(token)

  client.on('ready', () => {

    console.log(`${client.user.username} Logined!`)
  })

  client.on('messageCreate', async (msg) => {
    let args = msg.content.slice([].length).trim().split(/ +/);
    let admins = [

      '555373982463819786', // انوس
      '394597283410214912', // امجد
      '505233217079607296', //derpie
      '828427632462135307', //مضعج
      '305252386249768964', // عبدو potatoe
      '282859044593598464', //probot
      '159985870458322944', //mee6
      '898291014882717746' //Potatoe Farmer
      
    ]
    //بتقدر تحط شخصين واكثر مو شرط واحد
    //هون بتحط الايدي اللي بتحكم بالتوكنات
    if (!admins.includes(msg.author.id)) return;
    let commandName = args.shift().toLowerCase();
    console.log(commandName)
    if (commandName === `${num}c`) {
      //اللي هو البرفكس بتقدر تبدله s حرف ال  
      msg.delete() //بتقدر تحذف هاض السطر اذا ما بدك رسالتك تنحذف
      client.createMessage(msg.channel.id, args.slice(0).join(" "))
    }
  })
  client.connect()
}
