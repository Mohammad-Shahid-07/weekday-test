# Candidate Application Platform

## Overview

This project is a candidate application platform built with React.js, Redux, CSS, and Material UI. The platform allows users to view job listings, apply filters to refine job searches, and implement infinite scroll for seamless browsing of job opportunities.

### Features Implemented:

- **Job Cards**:

  - Display job listings as cards containing essential information such as job title, company name, location, job description (expandable), experience required, and apply button/link.

- **Filters**:

  - Implemented various filters to refine job listings based on:
    - Minimum experience
    - Company name
    - Location
    - Remote/on-site
    - Tech stack
    - Role
    - Minimum base pay

- **Infinite Scroll**:

  - Integrated infinite scroll functionality to automatically load additional job listings as the user scrolls down the page, providing a seamless browsing experience.

- **Responsive Design** (Optional):
  - Ensured that the platform is responsive and works well on different screen sizes, including mobile devices.

## Technology Stack

- **Frontend**:

  - React.js
  - Redux Toolkit for state management
  - Material UI for styling

- **API Integration**:
  - Utilized an API endpoint (`https://api.weekday.technology/adhoc/getSampleJdJSON`) to fetch job listings with pagination support (using `limit` and `offset` parameters).

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Mohammad-Shahid-07/weekday-test.git
   cd your-repo
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Open your web browser and navigate to `http://localhost:5173/` to view the application.
