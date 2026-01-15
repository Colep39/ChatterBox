# ChatterBox - Full Stack Social Media Platform

A modern, full-stack social media application built with **React**, **TypeScript**, and **Appwrite**.  
Users can create, explore, like, and save posts while enjoying a smooth, responsive UI and fast data fetching powered by **React Query**.

---

<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-React_Query-black?style=for-the-badge&logoColor=white&logo=reactquery&color=FF4154" alt="reactquery" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>
  
</div>

## Introduction

This application provides a clean and user-friendly social media experience with essential features such as authentication, post creation, profile management, and real-time data updates.

The goal of this project was to:
- Strengthen full-stack React skills
- Learn Backend-as-a-Service (BaaS) using Appwrite
- Practice clean architecture, reusable components, and modern frontend patterns

---

## Tech Stack

- **React.js**
- **TypeScript**
- **Appwrite (BaaS)**
- **React Query (TanStack Query)**
- **Tailwind CSS**
- **shadcn/ui**

---

## Features

- **Authentication System**  
  Secure user authentication with Appwrite

- **Explore Feed**  
  Browse posts with a featured creators section

- **Like & Save Posts**  
  Like and save posts with dedicated pages for each

- **Create & Edit Posts**  
  Drag-and-drop file uploads with full post editing support

- **Detailed Post Page**  
  View post details along with related content

- **User Profiles**  
  Edit profile details and view liked posts

- **Browse Other Users**  
  Explore other users’ profiles and posts

- **Responsive UI**  
  Mobile-friendly layout with a bottom navigation bar

- **React Query Integration**  
  - Automatic caching  
  - Parallel queries  
  - Optimized mutations  
  - Improved performance

- **Backend as a Service (Appwrite)**  
  Authentication, database, file storage, and user management

---

## Quick Start

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Git
- Node.js
- npm

---

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### Intall Dependencies
```bash
npm install
```

### Setup your Environment Variables
``` bash
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```

### Run the Project
``` bash
npm run dev
