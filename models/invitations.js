const mongoose = require('mongoose');

const invitationPageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  invitationType : { type: String, required: true },
  invitationId : { type : mongoose.Schema.Types.ObjectId, required: true }, 
    header : {
      title : 
          {
            text : { type : String, required: true },
            style : { type : String, required: true }
          },
        navBanner : 
            {
              text : { type : String, required: true },
              style : { type : String, required: true }
            }    
    },
  sliders:{
    sliderOne : [
      {
        image : { type : String, required: true },
        style : { type : String, required: true },
        text : { type : String, required: true },
        action : { type : String, required: true },

      }
    ],
    sliderTwo : [
      {
        image : { type : String, required: true },
        style : { type : String, required: true },
        text : { type : String, required: true },
        action : { type : String, required: true },

      }
    ],
    sliderThree : [
      {
        image : { type : String, required: true },
        style : { type : String, required: true },
        text : { type : String, required: true },
        action : { type : String, required: true },

      }
    ]
  },
    message: {
          Heading : { 
            text : { type : String, required: true },
            style : { type : String, required: true }
          },
          SubHeading : { 
            text : { type : String, required: true },
            style : { type : String, required: true }
          },
    },
    location :{
        lat : { type : String, required: true },
        long : { type : String, required: true },
    },
    contact :{
      phone : { type : String, required: true },
      email : { type : String, required: true },
      website : { type : String, required: true },
    },
    footer :{
      image : { type : String, required: true },
      style : { type : String, required: true },
      text : { type : String, required: true },

    },
  theme : {
    primary : { type : String, required: true },
    secondary : { type : String, required: true },
  } 
});

const Invitations = mongoose.model('Invitations', invitationPageSchema);

module.exports = Invitations;
