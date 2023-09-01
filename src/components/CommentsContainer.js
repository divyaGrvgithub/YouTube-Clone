import React from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

// const arrComment = [
//   {
//     name: "Rahul chavan",
//     text: "namaste rract project very good",
//     reply: [
//       {
//         name: "Samat chavan",
//         text: "namaste rract project very good",
//         reply: [],
//       },
//       {
//         name: "Kishor chavan",
//         text: "namaste rract project very good",
//         reply: [],
//       },
//       {
//         name: "Harshdeep chavan",
//         text: "namaste rract project very good",
//         reply: [],
//       },
//     ],
//   },
//   {
//     name: "Suresh chavan",
//     text: "namaste rract project very good",
//     reply: [
//       {
//         name: "Rahul chavan",
//         text: "namaste rract project very good",
//         reply: [
//           {
//             name: "Rahul chavan",
//             text: "namaste rract project very good",
//             reply: [
//               {
//                 name: "Rahul chavan",
//                 text: "namaste rract project very good",
//                 reply: [
//                   {
//                     name: "Rahul chavan",
//                     text: "namaste rract project very good",
//                     reply: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Nilesh chavan",
//     text: "namaste rract project very good",
//     reply: [
//       {
//         name: "Rahul chavan",
//         text: "namaste rract project very good",
//         reply: [
//           {
//             name: "Rahul chavan",
//             text: "namaste rract project very good",
//             reply: [],
//           },
//         ],
//       },
//     ],
//   },
// ];

const actualComment = [
  {
    name:"@spillthebuzz",
    text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    reply:[
      {
        name: "Samat chavan",
        text: "After the hype of linkedin i came here and believe me it was worth it all...the way of your presentation and the feeling that  instead of a teacher a friend is teaching,makes the videos more and more interesting.thanks a lot for sharing your precious knowledge with us and that too for free of cost.",
        reply: [],
      },
    ]
    
  },
  {
    name:"@DebojyotiMandal",
    text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, 🚀🚀🚀♥Amazing content",
    reply:[
      {
        name: "Samat chavan",
        text: "hh my God Man!! 🔥 Heavy stuffs. I literally had goosebumps when you showed practical example of 📚 Thank you so much for these awesome contents. 🙏🏼",
        reply: [],
      },
      {
        name: "Samat chavan",
        text: "namaste rract project very⭐🔴🚀♥ good",
        reply: [],
      },
    ]
  },
  {
    name:"@rahulchavan",
    text:"You kept the old cooking style alive, fan of the your cooking brother एकदा तरी येतलाय जेवुक😁😁",
    reply:  [
      {
        name: "Samat chavan",
        text: "कोणी कोणी शेवट पर्यंत व्हिडिओ बघितला? Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
        reply: [],
      },
      {
        name: "Samat chavan",
        text: "You kept the old cooking style alive, fan of the your cooking brother एकदा तरी येतलाय जेवुक😁😁",
        reply: [],
      },
    ]
  },
  {
    name:"@yogeshsabankar",
    text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    reply: [
      {
        name: "Samat chavan",
        text: "Amo suas receitas,e seu estilo de cozinhar tbm!!❤❤😊😊",
        reply: [],
      },
      {
        name: "Kishor chavan",
        text: "Pooja tu kharach all rounder aahes.Tuja recipe khup chan astat.👌👌❤️",
        reply: [],
      },
      {
        name: "Harshdeep chavan",
        text: "namaste rract project very good",
        reply: [],
      },
    ],
  },
  {
    name:"@spillthebuzz",
    text:"Literally i was studying from 2 hour and feeling so ❤❤❤ tired then accidentally come on this playlist ...❤❤❤ Feeling like someone is singing for me and literally a different vibe comes ❤❤❤    ",
    reply:[
      {
        name: "Samat chavan",
        text: "Your voice is totally heart touching ❤😊",
        reply: [],
      },
    ]
    
  },
  {
    name:"@DebojyotiMandal",
    text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    reply:[
      {
        name: "Samat chavan",
        text: "namaste rract project very good",
        reply: [],
      },
      {
        name: "Samat chavan",
        text: "Aaaaahhhhhhhh kya voice hai. Yaar 🔥🔥🔥...,...❤️❤️❤️so sweet", 
        reply: [],
      },
    ]
  },
  {
    name:"@rahulchavan",
    text:"Magical voice 💫💫💫❣️",
    reply:  [
      {
        name: "Samat chavan",
        text: "namaste rract project very good",
        reply: [],
      },
      {
        name: "Samat chavan",
        text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
        reply: [],
      },
    ]
  },
  {
    name:"@yogeshsabankar",
    text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    reply: [
      {
        name: "Samat chavan",
        text: "What a magical Superb voice… I m Artist when I m working alwz listen ur songs … it’s gave me energy to do my work ✍",
        reply: [],
      },
      {
        name: "Kishor chavan",
        text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
        reply: [],
      },
      {
        name: "Harshdeep chavan",
        text: "namaste rract project very good",
        reply: [],
      },
    ],
  }
]

const Comment = ({ data }) => {
  return (
    <>
      <div className="flex">
        <img
          className="h-8 col-span-1"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-logo"
        />
        <div className="px-3 mb-5">
          <p className="font-bold">{data.name}</p>
          <p>{data.text}</p>
          <p className="flex text-25 mt-2">
            {" "}
            <FiThumbsUp className="mx-2 mr-3 mt-1" />
            652
            <FiThumbsDown className="mx-2 mr-3 ml-3 mt-2" />
            25
            <span className="ml-5"> Reply</span>
          </p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return (
    <>
      {/* Desclaimer : Please use key as a index */}
      {comments.map((comment, index) => {
        return (
          <>
            <div className="p-2" key={index} >
              <Comment key={index} data={comment} />
              <div className="pl-5 ml-5">
                <CommentList comments={comment.reply} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-1 m-1 w-2/3">
      <CommentList comments={actualComment} />
    </div>
  );
};

export default CommentsContainer;
