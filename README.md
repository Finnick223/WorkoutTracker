# Workout Tracker

This repository contains my front-end react project, developed in collaboration with a friend who built the [back-end API](https://github.com/Wojtur28/WorkoutTracker). The app helps users track their workout routines and body measurements progress.

Technologies used in this project:

<p>

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"  alt="Typescript">

<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"  alt="Vite">

<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"  alt="JWT">

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"  alt="React">

<img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"  alt="React Query">

<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"  alt="React router">

<img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"  alt="React Hook Form">

<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"  alt="Material UI">

<img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"  alt="Framer Motion">

<img src="https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B"  alt="Vitest">

<img src="https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white"  alt="Testing-library">

<img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"  alt="Cypress">

<img src="https://img.shields.io/badge/Github%20Actions-282a2e?style=for-the-badge&logo=githubactions&logoColor=367cfe" alt="Github Actions">

<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"  alt="Docker">

</p>

## What is this project about?

This project provides simple and intuitive platform, where users can record and review their training results, they also can track their body measurements over time and visualize progress using charts or check history with infinite loading. Home page dashboard offers all essential informations with easy navigation to different app sections.

Checkout screenshots from the application on features overview section.

## Setting up project and commands

Clone this repository:

```bash
git  clone  https://github.com/Finnick223/WorkoutTracker
```

Go to the project and install:

```bash
npm  install
```

Running app as dev:

```bash
npm  run  dev
```

Running prettier:

```bash
npm  run  format
```

Running eslint:

```bash
npm  run  lint
```

Running husky:

```bash
npm  run  prepare
```

Running unit tests:

```bash
npm  run  test
```

Running e2e tests:

```bash
npm  run  cy:open
```

## Design

Design of this app is based on [MaterialUI](https://mui.com/material-ui/) components, but is created by myself without any UI tools like Figma. So it where built on the fly aiming to provide a clean, simple user interface and ensuring responsiveness across devices.

I also created dark theme, which can be found at settings in profile page.

It isn't fancy but I were focused on funcionality part.

## Features overview

There is a list of features that I've already implemented.

### Technologies

- [x] React Query for efficient data fetching and caching
- [x] React Hook Form for form handling
- [x] ESLint, Prettier, Husky, Lint-Staged for code readability
- [x] Material UI for a clean components and responsiveness
- [x] Framer-motion for providing simple animations
- [x] Vitest, Testing-Library and Cypress to provide unit, integration and e2e tests
- [x] Github Actions to implement CI feature

### Auth

- [x] Users authentication with JWT token
- [x] validation on login and register (disable button and show helper text)
- [x] resetting password

![sign up screen](screenshots/en/register.png)

![sign in screen](screenshots/en/login.png)

![reset password](screenshots/en/resetPassword.png)

### Dashboard

- [x] Showing welcome text and quick navigation to other parts
- [x] Showing last measurement
- [x] Showing weight progress chart
- [x] Showing exercise stats chart
- [x] Showing date of last training and link to navigate

![Dashboard](screenshots/en/dashboard.png)

### Training section

#### Training panel

- [x] User can manage workout cards, add, edit and delete
- [x] Pagination dynamically adjusts based on available data, preventing navigation to empty pages

![Training panel](screenshots/en/trainingPanel.png)

#### Exercise panel

- [x] User can manage exercise grid (add,edit,delete)
- [x] User have predefined exercises name list
- [x] User can't add negative number
- [x] User can set number of sets

![Exercise panel](screenshots/en/exercisePanel.png)

### User section

#### New Measurements

- [x] User can add common body measurements
- [x] User can see animated body based on currenty hovered measurement

![New measurement page](screenshots/en/newMeasurement.png)

#### Measurements History

- [x] Users can track how their measurements changed in time
- [x] History is based on infinite loading button

![Measurement history](screenshots/en/measurementHistory.png)

#### Measurements Charts

- [x] Users can view their measurements in a dynamic line chart

![Measurement charts](screenshots/en/measurementCharts.png)

### Profile section

#### Account

- [x] Users can see and edit personal informations

#### Settings

- [x] Users can set Dark Mode option

![Profile panel](screenshots/en/profilePanel.png)
![Dark mode profile panel](screenshots/en/darkProfilePanel.png)

### Footer

![Footer](screeenshots/en/footer.png)

## TODO

- [ ] Add avatar funcionality
- [ ] Create new welcome page
