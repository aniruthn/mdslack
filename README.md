# MDSlack

This project was built during MDB hackshop meetings. It's inspired by the key features of Slack.

Ideally, this would use something like Turborepo to synchronize packages. Alas, it does not, so there will be duplicate packages in the mobile and web folders.

Both codebases are similar, though the mobile part focuses more on using React Navigation in line with [MDB Training Program's Lesson 2](https://learn.mdb.dev/react-native/lessons/2/) and the web part focuses more on getting used to React, useState, and useEffect in line with [MDB Training Progam's Lesson 1](https://learn.mdb.dev/react-native/lessons/1/).

## Mobile

The mobile build uses Expo.

To get started:

```
cd mobile
yarn install
expo install
expo start
```

See the _Typing in Mobile_ section within _Features to Implement_ below for some potential changes to the mobile files to enforce stronger typing, akin to how it was for web. Note that the goal of making the mobile build was to apply react concepts with React Navigation, not typing, hence the skip.

## Web

The web build uses Create React App.

To get started:

```
cd web
yarn install
yarn start
```

## Features to Implement

### Reactions

During hackshop, we discussed how we might implement reactions. Fork this repository and try making the changes yourself!

There would be a `.json` file that contains a list of allowed reactions as emojis. Editing the allowed emojis would be as simple as changing this file.

On any given message, there would be a button that triggers showing a list of the emojis above the message (probably using absolute positioning). The list would be rendered by mapping over the data from the aforementioned file.

Once an emoji in this list is selected, two things are triggered:

1. The message toggles the given emoji as a reaction, probably storing it as state.
2. The list of emojis above the message disappears.

Some things to consider:

1. There might be other cases in which the list of emojis disappears.
2. How might it make sense to have the emojis persist?

### Typing in Mobile

Right now, a lot of the components use the `any` type and there's a `//@ts-ignore` comment as well. Generally, we want to try to avoid doing this. The web folder has examples of interfaces enforcing typing - try doing the same for the mobile folder, to enforce stronger type rules.

### Routing on Web

While mobile is using React Navigation, web is not using React Router or any sort of routing system. In fact, it's currently a single-page application! Try setting up a router yourself, configuring routes, and perhaps redesigning how different routes may be called to show different screens. This might also require making more screens (and adding features)!

### Input

We haven't implemented a core part of Slack: being able to add input! This will be discussed later on, as we talk about synchronizing with a database to store external data along with internal state to show messages, but it's entirely possible to edit the files here to use state to store the messages to allow sending messages.

One challenge would be making these persist. There's a lot of ways to; try experimenting with a variety to see what you like!
