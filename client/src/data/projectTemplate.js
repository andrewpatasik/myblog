const projectTemplate = [
  {
    id: 0,    
    title: "BLOG API",
    image: "/static/images/preview-1.png",
    stack: ["react-brands", "node-js-brands", "js-square-brands"],
    description:
      "I always wanted to share everything I've learned either it's about new technology in programming or a simple how to guide to code something. From that intention, I decided to build my personal blog where I can write and share my content to the Internet. This blog is built by following Restful API approach, where I use MERN-stack as a basis to build the web app. From the server-side, an Express JS-based Backend will serves the data through API endpoints, and then from client-side I made two client interfaces to interact with the backend. The first client is for Blog Management where the user can do CRUD action for managing blog posts that stored on Mongo DB. The second is for blog reader where the user can only read the blog post and leave comment on it. These two client-side will be consuming the same API that being served from the backend.",
  },
  {
    id: 1,
    title: "KLUBHAUS",
    image: "/static/images/preview-2.png",
    stack: ["js-square-brands", "node-js-brands"],
    description:
      "Klubhaus is a online forum where user can write anything and share it anonymously. I build this web app to hone my understanding of MVC design pattern, where Node JS is the language of the backend. Because there is not much complexity intended for the client view, I decided to use EJS Template to structure the client view, where all the data are stored in Mongo DB using Mongoose to create the model. Lastly, so the user can write post more expressively, I use What You See Is What You Get (WYSIWYG) HTML editor Quill for full-featured editor. The web app is still in WIP for more features in the future.",
  },
  {
    id: 2,
    title: "KOCHEF",
    image: "/static/images/preview-3.png",
    stack: ["js-square-brands", "html5-brands", "css3-brands"],
    description:
      "Kochef is a website to search your new favorite recipes. The data is fetched from Masak Apa Hari Ini API created by tomorisakura. This website is initially inteded for small screen devices, where I use Tailwind to style the components. All the main components are Custom Elements written in vanilla Javascript. User can save their favorite recipes which will be stored in their browser local storage.",
  },
];
export default projectTemplate;
