A command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.

The application runs from the command line, accept the GitHub username as an argument, fetch the user’s recent activity using the GitHub API, and display it in the terminal. The user should be able to: Provide the GitHub username as an argument when running the CLI. node gitcli --user <username>

Fetch the recent activity of the specified GitHub user using the GitHub API. You can use the following endpoint to fetch the user’s activity:

https://api.github.com/users/<username>/events
Example: https://api.github.com/users/kamranahmedse/events

Display the fetched activity in the terminal.

Output:
1. WatchEvent at Aslam97/shadcn-minimal-tiptap on 13/10/2024, 5:14:50 am
2. IssuesEvent at withastro/astro on 13/10/2024, 4:42:42 am
3. PushEvent at kamranahmedse/developer-roadmap on 12/10/2024, 5:41:57 pm
- ...

Handle errors gracefully, such as invalid usernames or API failures.
Use a programming language of your choice to build this project.
