# Feb. 20th 2021, Bootstrap Sass
> (Last Decision: Feb. 24 2021, by Andy Young)

Resources to get started: 

- [Bootstrap Sass Docs](https://getbootstrap.com/docs/5.0/customize/sass/)

## Status: accepted

## Deciders: Andy, Justin, Enrique

## Context and Problem Statement

The frontend of our Pomodoro Timer will need some kind of clean and uniform style sheet that is easily customizable, so we can implement the designs that we have.

## Decision Drivers

- Developer experience and friendliness.
- Performance.
- Mobile friendliness (not required for the project but a feature we want to include).

## Considered Options

- Custom CSS
- Papercss
- Bootstrap

## Decision Outcome

Chosen option: we chose the Bootstrap framework because it provides the best developer experience out of all three options. Although it has more overhead than Custom CSS does, we can still use SASS to prune undesired features. Thus, the great adjustability and customizability of this style sheet makes it overall the most auspicious choice for us.

## Pros and Cons of the Options <!-- optional -->

### Custom CSS

- Good because it provides the least overhead. There are no superfluous CSS lines - only what's important and **imperative** to our project.
- Good because it gives us complete control over customizability.
- Bad because it becomes inflexible when our CSS is set in stone.
- Bad because minutiae will be difficult to cover, and different CSS styles between developers may clash.
- Bad because it doesn't support mobile designs; we must design our own.

### Papercss

- Good because it is developer-friendly, fruitful, and efficacious.
- Good because it is class-based, making it easily adjustable and adaptable.
- Bad because it is very opinionated. While provides a fulsome amount of benefits for us, it still doesn't give us complete customizability.
- Bad because there is no way to extract desired components, creating overhead and a decrease in performance.

### Bootstrap

- Good because it is developer-friendly and provides a copious amount of styles for us.
- Good because the Bootstrap grid will facilitate scaling down to mobile.
- Good because the class-based system will enforce consistency and adaptability.
- Good because Sass gives great control over customizability. We can consistently define styles and rules overriding the default Bootstrap variables. Additionally, we can implement our custom designs.
- Bad because it has overhead, which can impact performance, but this can be mitigated by taking only the components we need using Sass imports in the final version of our application.
