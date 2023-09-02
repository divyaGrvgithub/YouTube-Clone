# Youtube-clone [Live](https://you-tube-clone-5lu7ibkyh-divyagrvgithub.vercel.app/) 

![logo](https://cdn.vox-cdn.com/thumbor/b36noYT2bfb68KwmdP4U8bo16hM=/0x0:1848x1036/1400x788/filters:focal(688x471:689x472)/cdn.vox-cdn.com/uploads/chorus_asset/file/19353488/Screen_Shot_2019_11_06_at_5.04.08_PM.png)

![Screenshot of the Application](https://cdn.vox-cdn.com/thumbor/VXo0XCVNeysQWoO7uxX7xGKe1ok=/0x0:1494x840/1400x788/filters:focal(220x120:221x121)/cdn0.vox-cdn.com/uploads/chorus_asset/file/8449755/New_Dark_Theme.png)
![Screenshot of the Application](https://www.addictivetips.com/app/uploads/2018/12/screenshot-youtube.jpg)
![Screenshot of the Application](https://media.sproutsocial.com/uploads/2022/08/youtube-ad-example-fliteboard.png)

## Table of content 📝   
1. Features
2. Tech Stack
3. Getting Started
4. Understand Context Api
5. Contribute

## 1. Features 🎯

<details>
  <summary>1. Infinite Scrolling</summary>
  <ul>
    <li>Implemented infinite scrolling using the powerful <a href="https://www.npmjs.com/package/react-infinite-scroll-component">react-infinite-scroll-component</a> library.</li>
    <li>Experience the same seamless scrolling used by platforms like Facebook, Instagram, YouTube, and TikTok, etc.</li>
  </ul>
</details>

<details>
  <summary>2. Modern Dark Theme</summary>
  <ul>
    <li>Most modern applications use a dark theme.</li>
    <li>It's an eye-comfortable and highly demanded feature.</li>
  </ul>
</details>

<details>
  <summary>3. Loading UI</summary>
  <ul>
    <li>I have used the Chakra UI <a href="https://chakra-ui.com/docs/components/skeleton">Skeleton</a> component for loading.</li>
    <li>It's a very important feature for a good user experience.</li>
  </ul>
</details>

<details>
  <summary>4. Country Option 🌍</summary>
  <ul>
    <li>I have provided users with a country option to filter videos.</li>
    <li>With this option, users can embark on a journey around the world and become creative thinkers.</li>
  </ul>
</details>

<details>
  <summary>5. Autocomplete Search Bar</summary>
  <ul>
    <li>I created an Autocomplete Search bar using the Google Queries API - <em>https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&num=10&q=${query}</em></li>
    <li>The Autocomplete Search bar provides a similar experience to YouTube for my application.</li>
  </ul>
</details>

<details>
  <summary>6. Mobile Responsive</summary>
  <ul>
    <li>This application is designed to be mobile-friendly, ensuring that users can enjoy its features on various devices.</li>
  </ul>
</details>


## 2. Tech Stack
1. ⚛️ **[ReactJS](https://react.dev/)** - A popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.
2. 💎 **[Chakra UI](https://chakra-ui.com)** - A flexible and accessible UI component library for React that makes it easy to create visually appealing and responsive user interfaces.
3. Packages
   - [react-router-dom](https://reactrouter.com/web/guides/quick-start)
   - [react-icons](https://react-icons.github.io/react-icons/)
   - [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
   - [axios](https://axios-http.com/docs/intro)
   - [react-youtube](https://www.npmjs.com/package/react-youtube)
   - [framer-motion](https://www.framer.com/api/motion/)
   - [lodash](https://lodash.com/docs/)
   - [date-fns](https://date-fns.org/)
   - [numeral](https://numeraljs.com/)


## 3. Getting Started ▶️

Follow these steps to set up and run the project on your local machine.

#### 1. Clone the Repository

To get a local copy of this repository, run the following command in your terminal:

```sh
git clone https://github.com/divyaGrvgithub/YouTube-Clone
```

#### 2. Navigate to the Project

Change your working directory to the project folder:

```sh
cd YouTube-Clone
```

#### 3. Install Dependencies

Install the required packages using npm:

```sh
npm i
npm i -D tailwindcss
```
#### 4. API KEY Setup

To fetch YouTube data, you'll need the following `API_KEYS`. Follow these steps to set them up:

1. Obtain a **YouTube API key from Google** by visiting [Google Developers - Getting Started](https://developers.google.com/youtube/v3/getting-started). If you need detailed instructions, you can also refer to [How to Get a YouTube API Key](https://blog.hubspot.com/website/how-to-get-youtube-api-key).
2. Get a YouTube V3 API key from [Rapid API - YouTube V3](https://rapidapi.com/ytdlfree/api/youtube-v31). If you haven't used Rapid API before, you'll need to sign up after signup subscribe to the **YouTube V3 API** for free.

Once you have your API keys, proceed with the following:

3. Create a `.env` file in the `root` directory of your project.
4. Place your API key values in the `.env` file as shown below. Note that I've included two Google API keys as backups in case one exceeds its usage limits.

```sh
REACT_APP_YOUTUBE_API_KEY_GOOGLE1=YOUR_API_KEY
REACT_APP_YOUTUBE_API_KEY_GOOGLE2=YOUR_API_KEY
REACT_APP_YOUTUBE_API_KEY_RAPIDAPI=YOUR_API_KEY
```

> Note :- The `REACT_APP` prefix is used to define environment variables in a React application. These variables are used during the build process and can be accessed in your code using `process.env.REACT_APP_VARIABLE_NAME`.


#### 5. Start the Project

Run the following command to launch the ReactJS project in your local environment:

```sh
npm start
```

#### 6. Access the Project

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the project.

That's it! You're now ready to explore the project locally.

Happy coding! 🚀

<div align="center">
  <h4>⭐️If you've found value in this, a star would be a wonderful way to say thanks..</h4>
</div>


## 4. Understand Context API 🧠 

`YoutubeContext.js` is a context module designed to simplify the management of YouTube data in your React application. It leverages the power of React's Context API to provide a centralized state and functions for fetching and handling YouTube data.

Key Features:

- Fetch trending videos based on country code.
- Perform autocomplete suggestions for search queries.
- Retrieve search results for videos based on user queries.
- Efficiently handle API calls and loading states.
- I have incorporated a second API for generateAutocomplete suggestions due to the first API's lack of mobile screen support. However, the first API offers unlimited access on 
   desktop, which is why I decided to utilize both.
- For the functions getSearchVideos and getTrendingVideo, I implemented the second API as a backup. This arrangement ensures that when the first API exceeds its usage limit, 
  the second API can seamlessly take over and provide uninterrupted service. This approach enhances the reliability of the application and provides a smooth user experience.


## 5. How to Contribute 🤝 

Thank you for considering contributing to this project! Your contributions make a real difference and help improve this project for everyone. Here are a few ways you can get involved:

- **Report Bugs:** If you come across any bugs or issues, please [open an issue](https://github.com/divyGrvgithub/YouTube-Clone/issues) to let us know. Be sure to provide as much detail as possible.
- **Suggest Enhancements:** Have an idea to make this project even better? Feel free to [create an issue](https://github.com/divyGrvgithub/YouTube-Clone/issues) to share your enhancement suggestions.
- **Submit Pull Requests:** If you're technically inclined, you can submit a pull request with code changes. Make sure to follow our coding guidelines and explain the purpose of your pull request.
- **Spread the Word:** If you love this project, a simple star or sharing it with others can make a big difference.

We value every contribution, big or small, and appreciate your support in making this project better for the entire community. Thank you for being a part of it!
