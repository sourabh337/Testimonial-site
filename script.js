const reviews = [
  {
    name: "Sarah Jenkins",
    job: "UX Designer",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    text: "Working with this team was an absolute breeze. They delivered on every single promise, and our web traffic doubled within a month of launch!"
  },
  {
    name: "David Chen",
    job: "Software Engineer",
    rating: "★★★★☆",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    text: "The clean architecture and attention to code quality blew me away. It's rare to find developers who care this much about maintainability."
  },
  {
    name: "Elena Rodriguez",
    job: "Marketing Director",
    rating: "★★★★★",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    text: "Their support team is unmatched. Whenever we had questions or needed adjustments, they responded within minutes. Highly recommended!"
  }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const stars = document.getElementById("stars");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function showPerson(index) {
  const item = reviews[index];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  stars.textContent = item.rating;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  showPerson(currentIndex);
});

prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showPerson(currentIndex);
});
