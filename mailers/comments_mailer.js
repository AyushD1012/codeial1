const nodemailer= require('../config/nodemailer');

//this is another way of exporting a method
 exports.newComment=(comment)=>{
    console.log('inside newComment mailer', comment);


    nodemailer.transporter.sendMail({
        from: 'shubhd1012@gmail.com',
        to: comment.user.email,
        subject: "New Comment Published!",
        html:'<h1>Yup, your comment is now published!</h1>'
    },
    (err,info)=>{
        if(err){
            console.log('error in sending email', err);
            return;
        }
        // console.log('message sent', info);

        return;
    });
 }