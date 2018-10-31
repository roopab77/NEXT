// app.get('/send-email',
//   ensureLoggedIn('/signin'),
//   function (req, res) {
//     res.render('email', {
//       pageTitle: "Send an email"
//     });
//   });

// app.get('/send', function (req, res) {
//   //code to send e-mail.
//   console.log(req.query);
//   var mailOptions = {
//     to: req.query.to,
//     subject: req.query.subject,
//     text: req.query.text
//   }
//   console.log(mailOptions);
//   smtpTransport.sendMail(mailOptions, function (error, response) {
//     if (error) {
//       console.log(error);
//       res.end("error");
//     } else {
//       console.log("Message sent: " + response.message);
//       res.end("sent");
//     }
//   });

// });

// app.post('/send-email', function (req, res) {
//   let transporter = nodeMailer.createTransport({
//       // host: 'smtp.gmail.com',
//       // port: 465,
//       // secure: true,
//       service: "gmail",
//       auth: {
//           user: 'seemastunes@gmail.com',
//           pass: 'Bandra50'
//       }
//   });
//   console.log(req.body);
//   let mailOptions = {
//       from: "seemastunes@gmail.com", // sender address
//       to: req.body.to, // list of receivers
//       subject: req.body.subject, // Subject line
//       text: req.body.body, // plain text body
//       html: '<b>NodeJS Email Tutorial</b>' // html body
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message %s sent: %s', info.messageId, info.response);
//           res.render('index');
//       });
//   });