# Bridge Collective - Full-Stack Landing Page

A dynamic, full-stack landing page for the Bridge Collective charity. The application features smooth count-up animations for key metrics, a custom REST API to serve the data, and an admin form to update the database persistently.

## 🚀 Features

- **Dynamic Data Rendering:** Stats are fetched from a Node.js backend instead of being hardcoded in HTML.
- **Smooth Count-Up Animation:** Numbers animate from `0` to their target value on page load using `setInterval`.
- **Zero Layout Shift:** Utilizes CSS `font-variant-numeric: tabular-nums` and Flexbox/Grid constraints to prevent the page from jumping as numbers grow.
- **Persistent Database:** Uses Node's built-in `fs` (File System) module to read and write data to a `stats.json` file. Data survives server restarts.
- **Admin Form:** A built-in form that sends a `POST` request to update the database and instantly re-animates the frontend.
- **Responsive Design:** (Coming soon) Built with CSS Grid and Flexbox.
- **Dynamic Date:** The footer displays the current date formatted via `toLocaleDateString`.

## 🛠️ Tech Stack

**Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (Fetch API, Async/Await, DOM Manipulation)

**Backend:**
- Node.js
- Express.js
- File System (`fs`) for JSON data persistence

## 📋 Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd grid-landing-page-main
