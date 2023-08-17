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
- To start the app run: `npm start`

## Technical constraint

- This project is currently using Giphy free tier subscription which limits the API calls at 42 reads per hour and 1000 searches/API calls per day. Therefore, the app only displays 12 gifs at the time to prevent running out of API requests

## Summary

I successfully completed this project within a span of less than 2 days, and the breakdown is as follows:

### Day 1:

- **Requirement Analysis:** Analyzed the project requirements

- **Tech Stack and Tool Selection:** Picked the appropriate technology stacks and tools that best suited the project's

- **Project Skeleton Setup:** Established the initial structure and foundation of the project.

- **Giphy API Integration:** Registered and integrated Giphy's API into the project

### Day 2:

- **Core Component Design:** Designed the essential core components that form the backbone of the project's functionality.

- **Basic Feature Implementation:** Implemented the fundamental features of the project including: display trending gifs when user is not searching for a certain topic, perform seaching, implement gif modal to show larger size gif and its information

- **Component Refactoring for Reusability:** Refactored certain components, making them more modular and reusable

- **Deployment on Vercel:** Deployed the project on the Vercel platform

### Positive aspects:

- Core and common components are designed in which it left room for expanding and adding customizations
- API integration and API-related errors are handled centrally
- Project's structure is well designed for future scalability at ease
- Consistent coding practices enforced throughout the app to prevent spaghetti code

### Aspects for improvements:

- Styling is done sketchily due to time constraint and absence of UI design that should be provided
- Infinite scrolling is not implemented due to technical constraint as infinite scrolling will consume huge amount of API's requests which is not really generous from Giphy's free tier
- Errors handling from calling APIs
- Performance optimization
