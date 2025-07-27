# Flexoki Blog

Welcome to the Flexoki Blog project! This project is designed to showcase a simple blog using Tailwind CSS for styling and Markdown files for blog posts. The blog is hosted on GitHub Pages and is structured to be easily extendable.

## Project Structure

The project has the following structure:

```
flexoki-blog
├── src
│   ├── index.html         # Main HTML document for the website
│   ├── blog               # Directory containing blog posts in Markdown format
│   │   ├── post1.md       # First blog post
│   │   └── post2.md       # Second blog post
│   ├── impressum.html     # Legal notice (Impressum)
│   └── datenschutz.html    # Privacy policy (Datenschutz)
├── public
│   └── styles.css         # Custom styles for the website
├── README.md              # Documentation for the project
└── tailwind.config.js     # Configuration file for Tailwind CSS
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/yourusername/flexoki-blog.git
   ```

2. **Install Dependencies**: 
   Navigate to the project directory and install any necessary dependencies. If you're using a package manager like npm, you can run:
   ```
   npm install
   ```

3. **Run the Project**: 
   Open `src/index.html` in your web browser to view the homepage and access the blog posts.

4. **Customizing Styles**: 
   You can customize the styles in `public/styles.css` to override or extend the default Tailwind CSS styles.

## Usage Guidelines

- Add new blog posts by creating new Markdown files in the `src/blog` directory.
- Update the `src/index.html` file to include links to new blog posts.
- Ensure that the legal notice and privacy policy are up to date in `src/impressum.html` and `src/datenschutz.html`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

This project uses Tailwind CSS for styling. For more information, visit [Tailwind CSS](https://tailwindcss.com).