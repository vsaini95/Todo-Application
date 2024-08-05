## Overview

This Todo application is a simple yet powerful task management tool built with React and Tailwind CSS. It allows users to create, read, update, delete (CRUD) tasks, and search through them efficiently. The responsive design ensures a seamless experience across various devices.

## System Design

*Frontend: React for building the user interface.
*Styling: Tailwind CSS for styling the application.
*State Management: React's useState and useEffect hooks.
*Search Functionality: Filter tasks based on search queries

## Implementation

### Components

*App: The root component that manages the state of tasks.
*TodoList: Displays the list of tasks with options to edit and delete.
*TodoItem: Represents an individual task item.
*TodoForm: for taking input todo and adding.
*SearchBar: for Searching using keyword filtering.

### Features

*Add Task: Users can add new tasks using the TaskForm component.
*View Tasks: Tasks are displayed in the TaskList component.
*Edit Task: Tasks can be edited inline within the TaskItem component.
*Delete Task: Tasks can be removed from the list.
*Search Tasks: Tasks can be filtered by typing keywords into the search bar.


## Setup and Run Instructions

### Prerequisites

*Node.js and npm (or yarn) installed

### Steps

### 1. Clone the Repository

git clone [repo url](https://github.com/vsaini95/Todo-Application)

### 2. Install dependencies

cd my-tailwind-app
npm install

### 3. Start the development server:

npm start

The app will be available at http://localhost:5173/


## Usage

Add a task: Use the input field and the "+" button to add new tasks.
Edit a task: Click the task button next to a task to edit its details.
Delete a task: Click the delete button next to a task to remove it.
Search tasks: Use the search bar to filter tasks by keywords.

