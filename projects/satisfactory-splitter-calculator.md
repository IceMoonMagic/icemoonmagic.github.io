# Satisfactory Splitter Calculator

In the game [Satisfactory](https://www.satisfactorygame.com/),
players move items between machines using conveyor belts.
Since each conveyor belt can only directly connect one output to one input,
there are splitters that can divide belts into 2 or 3 and mergers that can merge 2 or 3 belts,
and splitter and mergers can chain into eachother.

When trying to put a single belt into multiple machines, there are two main ways to split the belts.
There's the manifold style, which is just a main belt with splitters in series going to each machine.
Due to the nature of splitters, this causes the earlier machines to fill up faster.
There's also load balanced, which splits a belt in such a way that each machine gets the same amount of
items the entire time.
Both styles are equally efficient (after some time),
so most players tend to just use manifolds due to the lower size and complexity.

There may also be scenarios where one needs to split a belt into a specific ratio
(e.g. sending items to multiple sets of machines, each with differing items / min requirements).
Once again, both manifolds and load balancing can apply here, but the time to saturating may be even longer
here.

As someone who prefers load balancing (for both it's start up time and aesthetics),
I found it challenging to determine how to arrange my splitters, so I made a calculator.

This project's source code is publically available on
[GitHub](https://github.com/IceMoonMagic/Satisfactory-Splitter-Calculator).
While it was originally written in Python,
the main implementation is now in TypeScript, with a GUI powered by Vue, bundled with Vite,
hosted on [GitHub Pages](https://icemoonmagic.github.io/Satisfactory-Splitter-Calculator/).

Additionally, I've written an explaination the steps it takes to do the calculation in the
[How it Works section of the README](https://github.com/IceMoonMagic/Satisfactory-Splitter-Calculator?tab=readme-ov-file#how-it-works).
