import Hero from "./hero";

const About = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
             This is a porfolio project to showcase my frontend and react.js developer skills. This app shows the details of searched movies. Details includes, overview, rating and runtime of a selected movie.
             The content comes from tmdb.org api and is formated using css and bootstrap component to make it not only look and feel nice to use but to make it responsive on all devices. 
             The Home page displays trending movies for the current week. Visit my <a href = "https://github.com/NotChristopher/movie-project">Github</a> to view the source code, make sure to read the "Readme.md" file to help you navigate the code and for 
             a look on how I went about creating this app. 
             Thank you for your time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
