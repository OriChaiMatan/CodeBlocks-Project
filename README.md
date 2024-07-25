# Coding App
## Overview
This project is a Code Collaboration App that allows multiple users to interact with code blocks in real-time. The app supports a mentor-student dynamic, where the mentor can see the code block in read-only mode while students can edit the code. The app features real-time code synchronization, role management, and a solution checker.
## Demo
Try it [here!](https://codeblocks-server-ori-chai-matan.onrender.com/)
## Features
- **Lobby Page**: A page where users can choose from a list of code blocks.
- ⁠⁠**Code Block Page**: A page displaying the selected code block in a text editor with syntax highlighting.
- **Role Management**: The first user to open a code block is the mentor; subsequent users are students.
- **Real-time Updates**: Code changes are displayed in real-time using WebSockets.
- **Role Indicator**: Displays whether the user is a mentor or a student.
- ⁠⁠**Solution Checker**: Shows a smiley face when the student's code matches the solution.
- ⁠**User Count**: Displays the number of students currently viewing the code block.
## Technical Details
- ⁠⁠**Client**: Implemented using React.
- ⁠⁠**Server**: Implemented using Node.js and Express.
- ⁠⁠**Real-time Communication**: Implemented using Socket.io for real-time updates.
## Installation

  ### Frontend
1. Clone the repository:
   ```bash
   https://github.com/OriChaiMatan/CodeBlocks-Project.git

2. Install dependencies:
   ```bash
   npm install

3. Start the application:
   ```bash
   npm run dev
### Backend
1. Clone the repository:
   ```bash
   https://github.com/OriChaiMatan

2. Install dependencies:
   ```bash
   npm install

3. Start the application:
   ```bash
   npm run server
  ## Contributors
  - ⁠[Ori Chai Matan](https://github.com/OriChaiMatan)
## Feel free to contact for any questions! 💻
