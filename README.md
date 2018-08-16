# SayMosaic-Take-Home-Project
This is a take home project for software engineering positions. Please finish within one week. You may send a zip file to `xuezheng.ma@saymosaic.com`. Or invite `xuezhma` to a private GitHub repo.

## Starting point
Use this following answer from a stackoverflow question (Draw on HTML5 Canvas using a mouse):
https://stackoverflow.com/a/8398189/5875244

We will build a whiteboard drawing app based on this answer. There are different tasks for frontend focus and backend focus.

## Requirement

### Basic requirement

Use JavaScript, or a compile to JS lanuage. e.g. TypeScript.

Remove save and clear functionalities from the stackoverflow answer.

Refactor the stackoverflow answer to modern best practices. e.g. Change impure functions into pure functions.

#### Bounce points:
Setup ESLint

Include a Dockerfile

Deploy on heroku, or another service


### Frontend requirement

Create a website with 6 instances of the whiteboard. Each with a min size of 300px * 300px and max of 600px * 600px. They may fit in one row or several rows depending on how big the screen is. Implement a responsive design. (Remember to make sure drawing still works after a whiteboard is resized)

#### Bounce points:

Use client side storage to remember user's drawing when he close and reopens the website


### Backend requirement

Make this whiteboard a collaboration tool. All user on this website is drawing on the same whiteboard. Disable user from picking a color. Assign each of them a unique color.

#### Bounce points:

When user closes and reopens the website, you remember who he was and assign him his old color.