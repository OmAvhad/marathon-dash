const express=require("express");
const app=express()
const bodyParser=require("body-parser")
const mongoose=require("mongoose");
const axios=require("axios");
const {HfInference }=require("@huggingface/inference")
const  OpenAI  = require('openai');
const Facebook = require('facebook-node-sdk');
const Poster=require("./Poster");
const Notification=require("./notification");

const Petition=require("./petition");

const usera=require("./user");
mongoose.connect("mongodb+srv://surajchavan19:SachinJugalSuraj@cluster0.wo3ec.mongodb.net/event")
const facebook = new Facebook({ appId: '606827581626140', secret: '127afb87caf23e167ff7ee92e4789cdc' });
var FB = require('fb');
const { parse, format } = require('date-fns');
let id="";
// const { LocalAuth ,MessageMedia, Buttons } = require('whatsapp-web.js');
let count=60
const openai = new OpenAI ({
    apiKey:"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"
});

const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

client.on('ready', () => {
    console.log('Client is ready!');
});
const { MessageMedia } = require('whatsapp-web.js');


let msg=[];
client.on('message', async message => {
//   if(message.author=="917738872498@c.us" || message.author=="919136263315@c.us" || message.author=="919920585204@c.us" || message.author=="917700084212@c.us"){
	msg.push(message.body);
    console.log(message.body);
   
        if(message.body==="New Event"){
            // let message=`Hii!!👋 Welcome to Event Hub, You can find all the details related to Event booking, Ticket etc 🥰 .`
            // // let button = new Buttons('Hii!!👋 Welcome to Event Hub, You can find all the details related to Event booking, Ticket etc 🥰 .',[{body:'New Events'},{body:'bt2'},{body:'bt3'}],'Hii User 👋','Made with 💓 by Ming');
        
            const media = await MessageMedia.fromUrl('https://res.cloudinary.com/dfy3abzt0/raw/upload/v1696600007/ng0nx3s2lfs6obheelr4.jpg');

 
let data=` New Event:
Desc:A beach cleaning marathon is scheduled to take place in Mumbai on *20th September 2002*. If you're passionate about preserving the environment and love running along the scenic coast, this event is perfect for you. Join us in making a positive impact and contact *7738872498* for more details.

`
client.sendMessage(media,{caption: data});
    }
    


        
//         if(msg.length>=5){
//             let string="";
//             for(let i=0;i<msg.length;i++){
// string+=` ${msg[i]}`
//             }
//             async function op(){
//             const completion = await  openai.chat.completions.create({
//                 messages: [{ role: "system", content: `can you summarize this String: ${string} with important message,timing,location in pointer form and limit is 50 words`}],
//                 model: "gpt-3.5-turbo",
//               });
            
//             //    completion.choices[0].message
//             client.sendMessage(message.from, 
//                 completion.choices[0].message.content);
//             }
//             op();
//         }
    // }
});

// });
 
 
client.initialize();
 
 

// const cloudinary = require('cloudinary').v2
// cloudinary.config({
//     cloud_name: "dfy3abzt0",
//     api_key: "343664451281917",
//     api_secret: "wMXPCBOc6XURqDJsmFC1rWft0TM",
//   });
  
//   let result="";

// const sponsorSchema={
//     name:String,
//     email:String
// }
// const feedbackSchema={
//     event:{ type: mongoose.Schema.Types.ObjectId, ref: 'Poster' },
//     feedback:String,
//     star:Number

// }
// app.use(bodyParser.json());
// const feedback=mongoose.model("feedback",feedbackSchema);
// app.all('*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     if ('OPTIONS' == req.method) {
//     res.sendStatus(200);
//     } else {
//       next();
//     }
//   });
// const sponsor=mongoose.model('sponsor',sponsorSchema);
// const hf = new HfInference("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");
// const imagegenerate=async()=>{
    
//     const blob = await hf.textToImage({
//         inputs: "Generate a room image with green colour and furnished with sofa,lights and light on the celing of room in indian style",
//         model: "stabilityai/stable-diffusion-2",
//         // parameters: {
//         //   negative_prompt: "blurry",
//         // },
//       });

//    // Convert the Blob to a Buffer
//    console.log("done1");
//    const buffer = Buffer.from(await blob.arrayBuffer());
//   console.log("done2");
//   const op=await cloudinary.uploader.upload_stream({ resource_type: 'raw',format: 'jpg'  }, (error, result) => {
//     if (error) {
//         console.error('Error uploading to Cloudinary:', error);

//     } else {

//         const imageUrl = result.secure_url;
//         result=imageUrl
//         console.log(result);
//         // console.log('Image URL from Cloudinary:', result);
//     //  return imageUrl

        
//     }
// }).end(buffer);
//     console.log(result);
//     //   return op;
     
// };

// imagegenerate()

// const generateDescription=async(eventName, eventDate, eventContact,eventLocation)=>{



// const completion = await  openai.chat.completions.create({
//     messages: [{ role: "system", content: `Can you generate a description of 20 words  with following parameters eventName: ${eventName} eventDate: ${eventDate} eventLocation: ${eventLocation} eventcontact: ${eventContact} in one paragraph only make the eventloaction,eventDate and eventContact in italic different font`}],
//     model: "gpt-3.5-turbo",
//   });

//   return completion.choices[0].message
// }

// const generatePrDescription=async(eventName, eventDate, eventContact,eventLocation)=>{



//     const completion = await  openai.chat.completions.create({
//         messages: [{ role: "system", content: `Can you generate a Pr Message for sponsor of 50 words with following parameters eventName: ${eventName} eventDate: ${eventDate} eventLocation: ${eventLocation} eventcontact: ${eventContact} in one paragraph only make the eventloaction and eventContact bold`}],
//         model: "gpt-3.5-turbo",
//       });
    
//       return completion.choices[0].message
//     }
    

    FB.setAccessToken('EAAOthZBxeSBwBO2nNXAgIoo2ivqzaZCbGXHISQGY3RkFuPTZCtDr6L1tgKFbAkmggtRaCZAGf37x73a8ZCLcW863UcHZCBFRzIZA4u8GrnTVaoRwF1EFmyZBYcsKoLR1gH8ZCz0lv4oKKHbJcpxjZAklHVRwYJLMbfIbpl7PZCkUZAr3DsQ4ZC7EpHOl1Qk5UmWk7mE0bBV4k8qelR2UzoI7MGxIzkQXLqf8ZCt3ek');

const uploadtoFb=async(url, Description)=>{
    console.log("ppp",url);
//    const data=await FB.api(
//         '/148283878349743/photos',
//         'POST',
//         {"url":`http://res.cloudinary.com/dfy3abzt0/raw/upload/v1694862546/xphpg4pbixzt0beeaaut.jpg`,"message":`jkkjij`},
//         function(response) {
//             console.log(response);
//         }
//       );
//       return data;
FB.api(`/157826944070092/photos`, 'POST', 
{
    // 'source': fs.createReadStream("PATH_TO_THE_LOCAL_FILE"),
          "url":`${url}`,

    'caption': `${Description}`,
    // 'alt_text_custom': 'Ceci est une alt description',
    //'tag': [{'x':, 'y', 'tag_uid, tag_text'}]
    // 'published': false ==> IF YOU WANT TO PUBLISH LATER
    // 'scheduled_publish_time' ==> DATE OF THE PUBLICATION
}, 
function (response) {

    if (response.error) {
        console.log('error occurred: ')
        console.log(response.error)
    } else {
        console.log('local photo uploaded to page!');
        // Step 2 : publish media
       
}
});
}


//     //   FB.api('148283878349743/photos', 'post', { source:'http://res.cloudinary.com/dfy3abzt0/raw/upload/v1694862546/xphpg4pbixzt0beeaaut.jpg', caption: 'My vacation' }, function (res) {
//     //     if(!res || res.error) {
//     //       console.log(!res ? 'error occurred' : res.error);
//     //       return;
//     //     }
//     //     console.log('Post Id: ' + res.post_id);
//     //   });
// }

// const sendalertoSponsor=async(url,data)=>{
//     const response=await sponsor.find();
//     const op=[];
//     for(let i=0;i<response.length;i++){
//         op.push(response[i].email);
//     }
//     console.log(op);
//  const res=await   axios.post('https://376d-2409-40c0-1057-86f6-3d01-e67a-d232-3b0f.ngrok.io/send_email/', {
//     "recipient_emails":op,
//     "prmessage":data,
//     "posterimg":url,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

// }
// // sendalertoSponsor()
// app.get("/getUser",async(req,res)=>{
// const data=await usera.find({_id:id});
//   res.json(data);



// })
// app.post("/createPoster/:eventName/:date/:location/:contact/:category/:time",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     try{



//     const eventName=req.params.eventName;
//     const eventDate=req.params.date;
//       const Category=req.params.category;
//     const eventLocation=req.params.location;
//     const eventContact=req.params.contact;
//       const time=req.params.time
//     // const generateimage=await imagegenerate();
//     // console.log("generateimage",generateimage);
//     // console.log(generateimage.secure_url);
//   console.log("done1");
//     const Description=await generateDescription(eventName, eventDate, eventContact,eventLocation);
//     console.log("done2",Description);
//     const prMessage=await generatePrDescription(eventName, eventDate, eventContact,eventLocation);
//     console.log("done");
     
//     const blob = await hf.textToImage({
//         inputs: `${eventName}`,
//         model: "stabilityai/stable-diffusion-2-1",
//         // parameters: {
//         //   negative_prompt: "blurry",
//         // },
//       });

//    // Convert the Blob to a Buffer
//    console.log(blob);
//    const buffer = Buffer.from(await blob.arrayBuffer());
  
//   const op=await cloudinary.uploader.upload_stream({ resource_type: 'raw',format: 'jpg'  },async (error, result) => {
//     if (error) {
//         console.error('Error uploading to Cloudinary:', error);

//     } else {

//         const imageUrl = result.secure_url;
//         result=imageUrl
//         console.log(imageUrl);
//         console.log(Description.content);
             
// const uploadtoFbb=await uploadtoFb(imageUrl,Description.content);


// let obj={
//     eventName:eventName,
//     category:Category,
//     date:eventDate,
//     location:eventLocation,
//     Number:eventContact,
//     aiDesc:Description.content,
//     img:imageUrl,
//   time:time,
  
//     prMessage:prMessage.content,
// }
// const  savePoster=new Poster(obj);
// const saveData=await savePoster.save();
// const getUserwithSameInterest=await usera.find()

// for(let i=0;i<getUserwithSameInterest.length;i++){
// let uid=getUserwithSameInterest[i]._id;
// let eid=saveData._id;
// let obj1={
//   uid:uid,
//   eventId:eid,
//   notification:`${eventName} matches with your interest for voluntering. Register here`
// }
// const saveNoti=new Notification(obj1);
// const resData=await saveNoti.save();
// console.log(resData);



// }


// console.log("done");
//       // let uid = req.query.id;
//   let creator = "640c5839ec422bf7374c5de0";
 

//   // let data = await User.findById(uid);
//   let token = job.token;
//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'key=AAAAYLnN3WI:APA91bH4MdcLGmGf01ryZ94sEuWkgtBlzuYlz7yRRpdHQGMtzf1ZMsfVuL-9Hp4FgRRLDs_fHYk2iBS_P1PvrDXNWxd5Hqu9QOU-uFV1S3-zRY-qHpdHPBerVWpIJeItsZvluK5oLaUG'
//   }

//   const response =  axios.post('https://fcm.googleapis.com/fcm/send', {
//     "to": token,
//     "priority": "high",
//     "time_to_live": 1000000,
//     "fcm_options": {
//       "analytics_label": "push_analytics"
//     },
//     "notification": {
//       "title": "New event Created",
//       "body": ` ${eventName} has been organized on ${eventDate} Register on Event Hub`
//     }
//   }, {
//     headers: headers
//   })
//     .then((response) => {
//     //   console.log(response)
//     })
//     .catch((error) => {
//     //   console.log(error)
//     })
// // const sendalertToSponsor=await sendalertoSponsor(imageUrl,prMessage.content);
// res.json({
//     url:imageUrl,
//     prMessage:prMessage.content,
//    desc:Description.content,
  

// });
//         // console.log('Image URL from Cloudinary:', result);
//     //  return imageUrl

        
//     }
// }).end(buffer);
//     console.log(result);
//     //   return op;







// // const sendalertToUser=await sendalertToUser(eventName, eventDate, eventContact,eventLocation);



//     }catch(e){

//     }
//     // res.json(Description)

// })
// app.get("/signPetition",async(req,res)=>{
//   count++;
//   res.json({"message":"success"})
// })

// app.get("/getnoti",async(req,res)=>{
// const data=await Notification.find({uid:id}).populate('eventId');
// res.json(data);



// })

// app.post("/createProfile",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     const data=req.body;
//     const userData=new usera({...data});
//     const saveData=await userData.save();
//     console.log(saveData);
//     if(saveData){
//         res.json({"data":"success"})
//     }else{
//         res.json({"data":"failed"})

//     }

// });

// app.post("/createPetition",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     const data=req.body;
//     const userData=new Petition({...data});
//     const saveData=await userData.save();
//     console.log(saveData);
//     if(saveData){
//         res.json({"data":"success"})
//     }else{
//         res.json({"data":"failed"})

//     }

// });
// app.get("/getPetition",async(req,res)=>{
//    res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
// const data=await Petition.find();
//   let ans=[]
//   for(let i=0;i<data.length;i++){
// let op=data[i];
//     let obj={
//       _id:op._id,
//       name:op.name,
//       cause:op.cause,
//       category:op.category,
//       target:op.target,
//       count:count,
//       img:op.img

    
//     }
   
//     ans.push(obj);
//   }
  
//   res.json(ans);
// })
// app.get("/searchPetition",async(req,res)=>{
//   let e=req.query.petition
  
// const data=await Petition.find({ name: {$regex:e,$options:'i'}} );
//    let ans=[]
//   for(let i=0;i<data.length;i++){
// let op=data[i];
//     let obj={
//       _id:op._id,
//       name:op.name,
//       cause:op.cause,
//       category:op.category,
//       target:op.target,
//       count:count,
//       img:op.img

    
//     }
   
//     ans.push(obj);
//   }
  
//   res.json(ans);
//   // res.json(data);

// })

// app.get("/tokenSave",async(req,res)=>{
// console.log("token",req.query.token);
//   res.json({"message":"okay"})
// })
// app.get("/push", async (req, res) => {
//   // let uid = req.query.id;
//   let creator = "640c5839ec422bf7374c5de0";
 

//   // let data = await User.findById(uid);
//   let token = job.token;
//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'key=AAAAYLnN3WI:APA91bH4MdcLGmGf01ryZ94sEuWkgtBlzuYlz7yRRpdHQGMtzf1ZMsfVuL-9Hp4FgRRLDs_fHYk2iBS_P1PvrDXNWxd5Hqu9QOU-uFV1S3-zRY-qHpdHPBerVWpIJeItsZvluK5oLaUG'
//   }

//   const response = axios.post('https://fcm.googleapis.com/fcm/send', {
//     "to": token,
//     "priority": "high",
//     "time_to_live": 1000000,
//     "fcm_options": {
//       "analytics_label": "push_analytics"
//     },
//     "notification": {
//       "title": "New event Created",
//       "body": ` kjfhksjhfdjlnsajk  kjhfglashkjgf kjfhgkjhasf`
//     }
//   }, {
//     headers: headers
//   })
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })

// app.get("/searchEvent",async(req,res)=>{
//   let e=req.query.event
  
// const data=await Poster.find({ eventName: {$regex:e,$options:'i'}} );
//   res.json(data);

// })
// app.post("/login",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     const check=await usera.findOne({email:req.body.email});
//     if(check){
//         id=check._id;
//         console.log(id);
//         res.json({"data":"success"});
//     }else{
//         res.json({"data":"failed"});

//     }
// })
// app.get("/getEventByCategory",async(req,res)=>{

// const join1=await Poster.find({category:req.query.category.toLowerCase()})
// res.json(join1);


// })

// app.get("/join",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if(req.query.type=="participant"){
//     const mId=req.query.marathonId;
//     const join=await usera.findOneAndUpdate({_id:id}, {$push: { participated: mId } });
//     const join1=await Poster.findOneAndUpdate({_id:mId}, {$push: { participants: id } });
//     if(join){
//         res.json({"message":"success"});
//         }else{
//             res.json({"message":"failed"});
//         }
//     }else{
//         const mId=req.query.marathonId;
//         const join=await usera.findOneAndUpdate({_id:id}, {$push: { volunter: mId } });
//         const join1=await Poster.findOneAndUpdate({_id:mId}, {$push: { volunter: id } });
  
//         if(join){
//             res.json({"message":"success"});
//             }else{
//                 res.json({"message":"failed"});
//             }
//     }

   
    
// })

// app.get("/getUsersMarathon",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
// const findData=await Poster.find( {participants: [id]})
// const findData1=await Poster.find( {volunter: [id]})

// let ans=[];
//   for(let i=0;i<findData.length;i++){
// let op=findData[i];
//     let obj={
//       _id:op._id,
//       eventName:op.eventName,
//       date:op.date,
//       location:op.location,
//       Number:op.Number,
//       aiDesc:op.aiDesc,
//       img:op.img,
//       category:op.category,
//       prMessage:op.prMessage,
//       participants:op.participants,
//       volunter:op.volunter,
//       time:op.time,
//       volunterCheck:false

    
//     }
   
//     ans.push(obj);
//   }
//     for(let i=0;i<findData1.length;i++){
// let op=findData1[i];
//     let obj={
//       _id:op._id,
//   eventName:op.eventName,
//       date:op.date,
//       location:op.location,
//       Number:op.Number,
//       aiDesc:op.aiDesc,
//       img:op.img,
//       category:op.category,
//       prMessage:op.prMessage,
//       participants:op.participants,
//       volunter:op.volunter,
//       time:op.time,
//       volunterCheck:true

    
//     }
   
//     ans.push(obj);
//   }

// res.json({data:ans});
  

// })
// app.get("/mapCheck",async(req,res)=>{
//    res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   const markerLocations = [
//             { lat: 40.7128, lng: -74.006, title: "Chennai",desc:"abcdedff", "img": "https://res.cloudinary.com/dfy3abzt0/raw/upload/v1696638065/xcbnx1ubbzhujh1hhqu0.jpg"}, // Example: New York City
//             { lat: 34.0522, lng: -118.2437, title: "Mumbai", desc:"abcdedff", "img": "https://res.cloudinary.com/dfy3abzt0/raw/upload/v1696638065/xcbnx1ubbzhujh1hhqu0.jpg"}, // Example: Los Angeles
//             { lat: 41.8781, lng: -87.6298, title: "Asia",desc:"abcdedff", "img": "https://res.cloudinary.com/dfy3abzt0/raw/upload/v1696638065/xcbnx1ubbzhujh1hhqu0.jpg" } // Example: Chicago
//             // Add more marker locations as needed
//           ];
//   res.json(markerLocations)
// })
// app.post("/petitionC",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   console.log("opppp",req.body)
// res.json({"status":"Success"})
// })


// app.get("/getmarathon",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     const currentDate = new Date().toISOString().split('T')[0];
//     const findData=await Poster.find({date:{$gt:currentDate}}).populate('participants');
//   // const currentDate = format(new Date(), 'yyyy-MM-dd');
//   // const currentDate1 = new Date().toISOString().split('T')[0];
//   //   const currentMongoDate = new Date(currentDate1);
//     const findData1=await Poster.find({date: { $lt: currentDate }}).populate('participants');
//     res.json({data:findData,data1:findData1});
// //     let m=0,f=0,age=[],location=[],tot=0;
// //     // let mp=new Map([]);
// //     for(let i=0; i<findData.length;i++){
// //         tot+=findData[i].participants.length
// //       for(let j=0;j<findData[i].participants.length;j++){
// // console.log("--",mp.has(findData[i].participants[j].location));

// // location.push(findData[i].participants[j].location);
// // age.push(findData[i].participants[j].age);
// // if(findData[i].participants[j].gender=='M'){
// //     m++;
// // }
// // if(findData[i].participants[j].gender=='F'){
// //     f++;
// // }

// // }
// //     }
// //     res.json({
// //         "male":m,
// //         "female":f,
// //         "age":age,
// //         "location":location,
// //         "tot":tot
// //     })
// })
// app.get("/getUsersVolunter",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     const findData=await  Poster.find( {volunter: [id]})
//     res.json({data:findData});
    
//     })
// app.post("/createSponsor",async(req,res)=>{
//     const data=req.body;
//     const responseData=new sponsor({...data});
//     const saved=await responseData.save();

//     res.json({data:saved});
// })

// app.get("/getSponsors",async(req,res)=>{
//     const data=await sponsor.find();
//     res.json({data:data});

// })




// //feedback

// app.post("/createfeedback",async(req,res)=>{

// const data=req.body;
// const find=new feedback({...data});
// const response=await find.save();
// res.json({data:find})

// })

// app.get("/getfeedback/:id",async(req,res)=>{
//     const find=await feedback.find({_id:req.params.id});
//     res.json({data:find});

// })
// // app.get("/")

// //nodemailer
// //notice cron 
// //notice schema
// // user schema past history
// // event pictures to smoothen the process

// app.get("/pastMarathon",async(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     const currentDate = format(new Date(), 'yyyy-MM-dd');
//     const findData=await Poster.find().populate('participants');
//     res.json({data:findData});

// });

let port=process.env.PORT||800;
app.listen(port,(req,res)=>{
    console.log('Server is running on port 80');
})
