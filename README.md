<p align="center">
  <a href="" rel="noopener">
    <img src="https://i.imgur.com/AZ2iWek.png" alt="Flixtogether Logo" width="600">
  </a>
</p>

<h3 align="center">Flixtogether</h3>

<p align="center">
  Personalized Group-Based Movie Recommendations<br>
  Bringing people together, one movie at a time.
</p>

---

## 📝 Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Innovation and Impact](#innovation-and-impact)
- [Installation](#installation)
- [Future Scope](#future-scope)
- [Tech Stack](#tech-stack)
- [Authors](#authors)

## 🧐 Problem Statement <a name="problem-statement"></a>

Picking a movie for a group with diverse tastes often turns into a lengthy, frustrating ordeal. Existing recommendation tools focus on individual preferences, neglecting the needs of group dynamics. Flixtogether steps in to simplify this by delivering a smart system that blends multiple user choices into tailored movie suggestions, complete with ratings and details.

## 💡 Solution <a name="solution"></a>

Flixtogether collects movie preferences from a group, runs them through a weighted recommendation algorithm, and proposes films that suit everyone’s tastes. Powered by the TMDb API, it fetches up-to-date movie info—including ratings and genres—ensuring groups can decide with confidence and ease.

## 👨‍💻 Innovation and Impact <a name="innovation-and-impact"></a>

Flixtogether sets itself apart with a collaborative filtering method designed for groups, not just individuals. By leveraging real-time TMDb ratings, it offers transparent, trustworthy recommendations. This streamlines the movie-picking process, enhancing social gatherings and making movie nights more enjoyable across a wide range of genres and preferences.

## 🛠️ Installation <a name="installation"></a>

Get Flixtogether up and running locally with these steps:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Dharshan2208/flixtogether.git
   cd flixtogether
   ```

2. **Install Dependencies**  
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add your API keys:  
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   
   ```

4. **Start the Development Server**  
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173` to see Flixtogether in action.

5. **Build for Production** (Optional)  
   ```bash
   npm run build
   ```
   Preview the production build with:  
   ```bash
   npm run preview
   ```

## 🚀 Future Scope <a name="future-scope"></a>

- **User Feedback System**: Allow users to rate suggestions for better accuracy.
- **User Profiles**: Save preferences for personalized experiences.
- **Watch History**: Tailor recommendations based on past selections.
- **Streaming Integration**: Connect to platforms like Netflix or Amazon Prime.

## ⛏️ Tech Stack <a name="tech-stack"></a>

- **[React](https://reactjs.org/)** - Dynamic frontend library
- **[Vite](https://vite.dev/)** - High-speed development server
- **[Tailwind CSS](https://tailwindcss.com/)** - Modern, responsive styling
- **[TMDb API](https://developer.themoviedb.org/docs/getting-started)** - Real-time movie data
- **[Appwrite](https://www.appwrite.io/)** - Efficient database solution
- **[Node.js](https://nodejs.org/)** - Robust runtime environment
- **[Gemini API](https://ai.google.dev/gemini-api/docs)** - AI-powered recommendations
- **[Vercel](https://vercel.com/)** - Easy deployment platform

## ✍️ Authors <a name="authors"></a>

- **[Arham Garg](https://github.com/arhamgarg)** 
- **[Dharshan2208](https://github.com/Dharshan2208)** 
- **[Jestifer Harold](https://github.com/JestiferHarold)** 
---
