module.exports = {
  prefix: "t!",
  status: {
    		name: "Tickets",
    		type: "watching"
  },
  ExpressServer: true, //If you wanted to make the website run or not
  Port: 3000, //Which port website gonna be hosted
   emojis: {
        giveaway: "🎉",
        special: "🔴",
        general: "✔️"
  },
  ticketembed: {
    title: "Tickets",
    description: "To create a ticket, click the button that suits your request!",
    footer: "NitrixEXE"
  },
token: process.env.TOKEN || "MTIwMTIxOTIwMzM2MTk0NzY1OA.G9_OaG.JZStT-RM4iolBBBl0Fv-tH4QYNcI3oSRChh-84",
mongo: process.env.MONGO || "mongodb+srv://rlx:rlx@rlx4.lxsal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
};
