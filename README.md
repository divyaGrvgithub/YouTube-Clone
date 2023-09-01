# YouTube-Clone

## git setup :
# got to your project location :
default setting :
=================
echo "# Rahul-Coding-Tast-List" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rahulcdev13/Rahul-Coding-Tast-List.git
git push -u origin main
====================
git branch -M main
git remote add origin https://github.com/rahulcdev13/Namaste-Youtube-App.git
git push -u origin main


> $ git init
> $ git add .
> $ git commit -m  "message"
# Go to github account and create a new reporsotory.
# Then execute below command on command line in youre project folder.
> $ git branch -M main
> $ git remote add origin https://github.com/rahulcdev13/Namaste-Youtube-App.git
> git push -u origin main
================================
# Create-react-app

npx create-react-app namaste-youtube

- means executing the react app

---

# install the tailwindcss

npm i -D tailwindcss

# Need to initialize tailwind then configure file will created

npx tailwindcss init
added in config file :
content: [
"./src/**/*.js"
],

# After add below 3 tailwind in your App.css file

@tailwind base
@tailwind components
@tailwind utilities

---

design UI :
{
// Head
// Body
// Sidebar
// MenuItems
// MainContainer
// ButtonList
// VideoContainer
// VideoCart
//
}
==============
Highar order function

<!-- Search suggestion api data -->

fetch("https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iphone")

<!-- Dbouncing : -->

typing slow : 200ms
typing fast : 30ms

performance :

- iphone pro max - 14 latter \* 1000 = 140000
- With debouncing - 3 API calls \* 1000 = 3000

Debuoncing with 200ms

- if difference between two key stroke is < 200ms - Decline api call
- < 200ms make an api call

// make an api call after ever key press
// but if the difference between 2 API calls is greate that (<) 200ms
// decline the api call

/\*

- key press -i
- - render the componnet
- - useEffect()
- - Start Timer = > make api call after 200ms
- \*\* key press -ip
- - destroy the componnet(useEffect return method)
- - re-render the componnet
- - useEffect()
- - Start Timer = > make api call after 200ms
- - with new timer
- setTimeout(200) - Make an api call
- \*/
  <!-- Cache is here  -->
  const arrComment =[
  {
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply : [
  {
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[]
  }
  ]
  },
  {
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply : [
  {
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[{
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[{
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[{
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[]
  }]
  }]
  }]
  }
  ]
  },
  {
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply : [
  {
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[{
  name :"Rahul chavan",
  text: "namaste rract project very good",
  reply:[]
  }]
  }
  ]
  }
  ]
====================================

web sockets
API Polling
================
check live chating count
document.getElementsByTagName("yt-live-chat-text-message-renderer").length;
