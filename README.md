# Module11-Challenge

The Note Taker App is a simple application that allows users to write, save, and delete notes. 
It provides a user-friendly interface for organizing thoughts and keeping track of tasks. 
The app uses an Express.js backend to handle API routes and save note data to a JSON file.

# Usage

Open web browser and go to http://localhost:3000.
You will be presented with the landing page of the Note Taker App.
Click on the "Get Started" button to navigate to the notes page.
On the notes page, you will see any existing notes listed in the left-hand column.
To create a new note, enter a title and text in the right-hand column.
Once you have entered your note, a "Save" icon will appear in the navigation bar.
Click on the "Save" icon to save the new note.
The new note will now be added to the list of existing notes.
To view a specific note, click on its title in the left-hand column.
To delete a note, click on the red trash icon next to the note in the left-hand column.

# API Routes

GET /api/notes: Fetches all existing notes.
POST /api/notes: Creates a new note and adds it to the list of notes.
DELETE /api/notes/:id: Deletes a note with the specified ID.


