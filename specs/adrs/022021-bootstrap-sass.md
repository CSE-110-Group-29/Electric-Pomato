# Feb. 20th 2021, Bootstrap Sass

Resources to get started:

- [Bootstrap Sass Docs](https://getbootstrap.com/docs/5.0/customize/sass/)

## Status: accepted

## Deciders: Andy, Justin, Enrique

## Context and Problem Statement

The frontend of our pomodoro timer is going to need some kind of clean and uniform style sheet that is easily customizable so that we can implement the designs that we have.

## Decision Drivers

- Developer experience and friendliness.
- Performance.
- Mobile friendliness (not required for the project but a feature we want to include).

## Considered Options

- Custom CSS
- Papercss
- Bootstrap

## Decision Outcome

Chosen option: Bootstrap because although it does have more overhead compared to custom CSS (which can be customized later using SASS, choosing only the features we need) it gives us the best developer experience out of the three options with great adjustability and customizability.

## Pros and Cons of the Options <!-- optional -->

### Custom CSS

- Good, because it provides the least overhead. Each line of CSS would ideally be important and **needed**.
- Good, because it gives us complete control and customizability.
- Bad, because adjustability and adaptability will be very difficult when our CSS is set in stone.
- Bad, because small details will be very hard to cover and different css styles between developers may clash.
- Bad, because scaling to mobile will be hard since we don't have mobile designs and have to come up with it ourselves.

### Papercss

- Good, because it is very developer friendly and does a lot for us.
- Good, because it is easy to adjust and adapt since it is class based.
- Bad, because it is very opinionated and while does a lot for us, won't give us complete customizability.
- Bad, because there is no way to take only the components that we need, creating overhead and drop in performance.

### Bootstrap

- Good, because it is very developer friendly and does a lot of styles for us.
- Good, because the bootstrap grid will help us scale down to mobile very easily.
- Good, because the class based system enforces consistency and easy adaptability.
- Good, because Sass gives us full customizability so that we can consistently define styles and rules overriding the default bootstrap variables to implement our custom design.
- Bad, because there is also overhead which can impact performance, but this can be lessened by taking only the components we need using Sass imports in the final version.
