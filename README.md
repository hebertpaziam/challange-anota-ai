# Front-end Test (Angular 2+) - Anota AI

This test is presented to the Front End development candidates to evaluate technical
knowledge.

## Prerequisites:
- Make sure that the Angular 2+ framework is already installed along with its
dependencies.
Notes

- You can use CSS pre-processors and we will be happy if you organize your code
using a know CSS architecture/methodology.

- You can **NOT** use a complementary framework/library (bootstrap, angular
material, etc.) for handling the style of the page and listing the data.

- Don't be alarmed, we don't expect everyone to be able to complete all the tasks,
so do what you can without worrying.

- Instructions for submitting the test are located at the end of this document.

## The Challenge
Your challenge is to create a simple page based on the following **image** and **video**. For
this, you should use the Angular 2+ framework and your skills with CSS. We will also
provide the API and links for the images that should be used.

[Test Image](http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/teste/Test-front-anota-ai.jpg), 
[Test Video](http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/teste/Test-front-anota-ai.webm)

### Auxiliary files:

[Favicon](http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/favicon.png), 
[Close Icon](http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/close.svg), 
[Logo Image](http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/128x128.png)

## Tasks
1. Create a workspace and an **initial application** with the Angular 2+ framework.
2. Create the **Header** of the page.
3. Create a **list of cards**. For, this you’ll need to send a HTTP GET request to the URI below to receive the [JSON list](http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json)

   * Use the following reference for the type names:
     - Type 1: Paisagem
     - Type 2: Flor
     - Type 3: Pizza

4. Insert an option to **delete card** (the card must be removed from the list on the
front-end)

5. Insert a “search field” and implement a **product filtering** feature where the user can
filter the cards by title or description.

## Submission Instructions
1. Make sure your project is fully functional and ready for evaluation.
2. Remove the "node_modules" folder to reduce file size.
3. Compress all project files into a .zip file, naming it after yourself.
