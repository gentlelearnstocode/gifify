# Gifify

[Gifify](https://gifify-kohl.vercel.app/)
This is the repository for Gifify app that displays trending gifs and performs gif search

## Technical requirement

- Node >= 18.16.0
- Vite >= 4.4.0

## Developed using

- Vite
- ReactJS
- Material UI
- React Query
- Axios
- React Router
- Notistack
- [Giphy APIs](https://developers.giphy.com/)

## Commands

- To install dependencies run: `npm install`
- To start the app run: `npm install`

## Technical constraint

- This project is currently using Giphy free tier subscription which limits the API calls at 42 reads per hour and 1000 searches/API calls per day. Therefore, the app only displays 12 gifs at the time to prevent running out of API requests

## Summary

I spent less than 2 days to complete this project, it breaks down to:

- First day:
  - Analyze requirements
  - Select tech stacks and toolings
  - Register Giphy's API
  - Scaffold project's skeleton
- Second day:
  - Design core and common components
  - Implement basic features
  - Refactor some components to be more reusable
  - Write document
  - Deploy on Vercel
