# Cognittron Project

Project proposed by Cognita to test the skills of a developer, this project it's like a simple to-do list where you can add new Steps in the DB and also remove them.


## Tech Stack

**Client:** RemixJS, TailwindCSS

**Server:** Neo4j

## Screenshots

![App Screenshot](https://github.com/vitor-bitencourt/cognita-dev-test/blob/main/public/cognittron.png?raw=true)

## Referencies that helped me

 - [Remix Doc](https://remix.run/docs/en/main)
 - [TailwindCSS Doc](https://tailwindcss.com/docs/installation)
 - [Neo4j Doc for JS](https://neo4j.com/docs/javascript-manual/current/)
 - [Youtube Content About POPUP](https://youtu.be/i8fAO_zyFAM?si=LDyM3zCQArXB7sxL)
 - [Youtube Content About Neo4j Connection](https://youtu.be/AxdZcJMnalo?si=F5_x-03Knh_UlsQa)
 - [Youtube Content About Remix Overview](https://youtu.be/DLbisSZgFVU?si=hnD8bb0_AkjGP7_K)


## Features

- Read the Steps
- Create New Steps
- Delete the Steps

I also tried to create the function to update the node, but I don't have time to do it anymore, but it's a feature I can do in the future and I know there are many things to make an application better, like dealing with form validations and protecting access of the routes.


## Environment Set Up

To run this project you will need to install the Neo4j desktop on your PC and also create the Nodes, the Relationship and set up the connection to your DB

- [Neo4j Download](https://neo4j.com/download/)
Once you download it you gotta create your DB and set a Username and a Password, it will be necessary for the connection to the application.
- [Here you can see how to create](https://neo4j.com/docs/)
With your DB created and running, run these queries to create the Nodes and the Relationships:
```sql
  CREATE (s:Step { 
	id: 'step-1', 
	title: 'O primeiro passo', 
	content: 'O conteúdo do primeiro passo' 
  })
  CREATE (t:Trail {
	id: 'trail-1',
	title: 'A primeira trilha'
  })  
  CREATE (tm:Theme {
	id: 'theme-1',
	title: 'O primeiro tema'
  })
  CREATE (a:Academy {
	id: 'academy-1',
	title: 'A primeira academia'
  })
```
```sql
MATCH (s:Step { id: 'step-1'}), (t:Trail { id: 'trail-1' }) CREATE (t)-[:HAS_STEP]->(s)
MATCH (tm:Theme { id: 'theme-1'}), (t:Trail { id: 'trail-1' }) CREATE (tm)-[:HAS_TRAIL]->(t)
MATCH (a:Academy { id: 'academy-1'}), (tm:Theme { id: 'theme-1' }) CREATE (a)-[:HAS_THEME]->(tm)
```
Now in the db.js file, set up the URL, Username and the Password:
```bash
'url',
neo4j.auth.basic('username', 'password')
```

## FAQ

#### The + Adicionar Passo or Cancel button it's not working

During the development I faced a problem with the state management of the Form opening when I tested the project in another PC, I tried to fix with another way of state management like Redux but still not working in my second machine, so I am reminding here that if you face this problem, just change the 'useState' of the 'showForm' to True and you will see the form to create new nodes, you can find the 'showForm' at the file 'explore.$trailId.jsx'.




## Lessons Learned

In this project I had a closer approach with React, even though using Remix.Js, I could see why remix is a better solution to create FullStack Applications, the loader comes to solve the problem tha every React Dev faces in the Standard React . I learned a little about the Neo4j, at the beginning it was really tough to understand how could I create those relationships, but once you get used you realize that it's not hard, personally I think it is similar to SQL.

It was a really challenging project for me, but I can assure that it made me a better developer, I faced problems to connect the application in the DB, to read the data because I had to understand how the loader works and once I got this , I started to face a huge problem with the Form submitting because I was used to the React pattern sending and then I discovered that the Remix has its own way it self and I also learned that the loader works only for GET requests, to make a POST request, you gotta use the action function that is not so different from the loader.

I also learned to work with the Tailwind, to be honest I thought that it would be harder to use, but for me it wasn't, I had the help of the Docs and I think that is's all a rookie needs.
