# Refactoring Documentation

## Overview
This document outlines the changes made during the refactoring process of the PCM repository. The main objectives were to improve code maintainability and readability by adopting more standardized practices.

## Changes Made

1. **Separation of Concerns**  
   We migrated from inline styles to separate CSS files. This change allows for better maintainability and adherence to best practices for styling web applications.

2. **Event Handling**  
   Inline event handlers were replaced with the use of event listeners. This change enhances separation of concerns, allowing HTML to remain clean and logic to be handled in the JavaScript files.

   - **Before:**  
     ```html
     <button onclick="handleClick()">Click me</button>
     ```  
   - **After:**  
     ```html
     <button id="myButton">Click me</button>
     <script>
       document.getElementById('myButton').addEventListener('click', handleClick);
     </script>
     ```

## Migration Steps
1. Identify all instances of inline styles and events in the project.
2. Move styles to dedicated `.css` files located in the `styles/` directory.
3. Bind JavaScript events using `addEventListener` in relevant scripts instead of using inline attributes.

## Maintenance Guide
- **CSS Files:**  
  Ensure any new styles are added to the separate CSS files rather than inline styles in HTML.
- **Event Listeners:**  
  Always use `addEventListener` for binding events. This method improves performance and allows multiple listeners for the same event.

By following these guidelines, developers can ensure the code remains clean, organized, and easy to maintain.