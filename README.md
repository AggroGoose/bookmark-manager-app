# Bookmark Manager App

This project is an Advanced level challenge from [Frontend Mentor](https://www.frontendmentor.io). I picked it because of its use of sorting and filtering for the dynamic cards. As I'm looking to build an ecommerce style project website, this challenge is perfect to play around with and get right.

## The Challenge

The challenge is to use Figma Design to design a bookmark manager app that allows you to accomplish the following:

- Add bookmarks with discriptions and filterable tags.
- Sort bookmarks by recently added, recently visited, and most visited.
- Filter bookmarks by tag.
- Pin or unpin bookmarks to the top of sort/filter area.
- Archive bookmarks with option to view archived sites.
- View and restore or delete archived bookmarks
- Search through all bookmarks by title
- Edit existing bookmarks

Additional challenges opt for full-stack development by connecting to a database, and adding user authentication to store saved bookmarks by user. I decided to not go this route for the current state of the application as I really only wanted practice with the state management aspects and have done full-stack apps in other projects. This app's initial state is loaded via JSON and resets when user refreshes the page.

## The Stack

This app is built as a single page app, and so I didn't need to use any heavy frameworks like Next.js or Sveltekit and instead built the app with React.js/Vite:

- React.js basic app with Vite
- TailwindCSS for styling
- React Redux w/ Redux Toolkit

## The Process

Initially I planned to build the app without a state management tool like Redux, but due to the number of places State needed to be managed for filtering and sorting, I decided that Redux was valid for this app. The majority of App State was designed inside of Redux, with only the filter buttons and the UI state taking place outside of Redux.

I built the app desktop first, because I was mainly concerned with app functionality, i.e. working menus, filters, sorting, searching, etc. Then once I got these built out I started to focus on settings like Dark Mode and responsiveness.

Overall, this was a fun project to build but were I to do something similar I'd want to tinker with other state management libraries and options to try to reduce the overhead that something like redux brings.
