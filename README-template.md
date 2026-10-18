# Project Brief: Bridge Collective Landing Page & Admin Dashboard

**Client:** Bridge Collective (Education Charity)  
**Project Type:** Full-Stack Web Application (Phase 1 MVP)  
**Date:** October 2026

---

## 1. Project Overview
Bridge Collective is a non-profit organization dedicated to funding schools, training teachers, and measuring educational impact across the globe. We need a modern, high-impact landing page to showcase our key metrics to potential donors and partners.

Because our numbers change frequently, the site cannot be purely static. We need a dynamic full-stack application where the metrics are pulled from a database and can be updated by our internal team.

## 2. Design & Brand Guidelines
*   **Vibe:** Professional, trustworthy, modern, and clean.
*   **Color Palette:** Deep royal blue background (`hsla(228, 99%, 58%, 1)`) with varying opacities of white text for contrast and visual hierarchy.
*   **Typography:** Clean sans-serif (we prefer 'Inter').
*   **Layout:** A responsive, boxed card layout (max-width ~1100px) with a subtle drop shadow, floating on a light gray background.

## 3. Scope of Work (Key Features)

### A. The Frontend (User-Facing)
*   **Header:** Logo on the left, and a functional hamburger menu on the right. Clicking the hamburger should toggle a dropdown menu.
*   **Hero Section (Left Side):** A large, compelling headline ("A classroom for every child.") and a supporting paragraph.
*   **Stats Grid (Right Side):** A 2x2 grid displaying four key metrics:
    *   Students Reached (with sparkle icon)
    *   Schools Partnered (with plus icon)
    *   Teachers Trained (with arrow icon)
    *   Graduation Lift (with trending-up icon)
*   **Animations:** When the page loads, the stat numbers must count up from 0 to their final value smoothly (no layout shifting or jumping).
*   **Footer:** Must display the current date dynamically (e.g., "Sunday, October 18, 2026") and our registered charity number.

### B. The Backend (API & Data)
*   **API Integration:** The frontend must fetch the stats from a REST API (`GET /api/stats`), rather than hardcoding them in the HTML.
*   **Data Persistence:** The data must persist even if the server restarts. For this MVP, you can use a JSON file to store the database state.
*   **Refresh Trigger:** Clicking any of the four stat icons should trigger a re-fetch of the API and re-run the count-up animation.

### C. The Admin Panel (Internal Tool)
*   We need a simple, hidden form at the bottom of the page (above the footer).
*   It should contain four input fields allowing us to manually update the stats.
*   When we click "Save to Database", it must send a `POST` request to the backend to overwrite the existing stats, update the JSON file, and instantly reflect the new numbers on the frontend without reloading the page.

## 4. Technical Requirements
*   **Frontend:** Semantic HTML5, CSS3 (Grid & Flexbox), Vanilla JavaScript (Fetch API, Async/Await, DOM manipulation).
*   **Backend:** Node.js with Express.js.
*   **File System:** Use Node's built-in `fs` module to read/write the JSON database.

## 5. Out of Scope (For Future Phases)
*   Full user authentication (Admin login) — we will just use a simple visible form for now.
*   Migrating from a JSON file to a robust database (like MongoDB or PostgreSQL).
*   Email newsletter integration.

## 6. Deliverables
*   Fully functional, locally hosted full-stack application.
*   Clean, well-commented code.
*   A `README.md` file explaining how to run `npm install` and `npm run dev`.
![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

**Note: Delete this note and the content above if you didn't use AI, or replace with your own experience.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
