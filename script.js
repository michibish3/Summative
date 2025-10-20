const facts = [
  "I love painting, sleeping and being on my phone when I have free time. Sometimes, I also do baking when I have time, and the right ingredients",
  "I don't do any sports in the moment, but I go to the gym instead.",
  "Whenever I bake, I often like to make brownies, or cookies because those are my favourite things.",
  "I also enjoy being with friends after school."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});


