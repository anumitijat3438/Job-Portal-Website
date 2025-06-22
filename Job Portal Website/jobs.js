const jobData = [
  { id: 1, title: "Frontend Developer", location: "Delhi", category: "IT", salary: 60000 },
  { id: 2, title: "Accountant", location: "Mumbai", category: "Finance", salary: 40000 },
  { id: 3, title: "Backend Developer", location: "Delhi", category: "IT", salary: 55000 },
  { id: 4, title: "Financial Analyst", location: "Mumbai", category: "Finance", salary: 70000 },
  { id: 5, title: "Graphic Designer", location: "Bangalore", category: "Design", salary: 45000 },
  { id: 6, title: "Data Scientist", location: "Hyderabad", category: "IT", salary: 80000 },
  { id: 7, title: "HR Manager", location: "Pune", category: "HR", salary: 50000 },
  { id: 8, title: "Marketing Executive", location: "Chennai", category: "Marketing", salary: 48000 },
  { id: 9, title: "Software Engineer", location: "Delhi", category: "IT", salary: 60000 },
  { id: 10, title: "UI/UX Designer", location: "Bangalore", category: "Design", salary: 45000 },
  { id: 11, title: "Payroll Officer", location: "Pune", category: "HR", salary: 50000 },
  { id: 12, title: "Digital Marketer", location: "Chennai", category: "Marketing", salary: 48000 },
  { id: 13, title: "Data Analyst", location: "Mumbai", category: "Finance", salary: 55000 },
  { id: 14, title: "Mobile App Developer", location: "Hyderabad", category: "IT", salary: 65000 },
  { id: 15, title: "Recruitment Specialist", location: "Pune", category: "HR", salary: 52000 },
  { id: 16, title: "SEO Specialist", location: "Chennai", category: "Marketing", salary: 47000 },
  { id: 17, title: "Java Developer", location: "Delhi", category: "IT", salary: 62000 },
  { id: 18, title: "Graphic Designer", location: "Bangalore", category: "Design", salary: 44000 },
  { id: 19, title: "Business Analyst", location: "Mumbai", category: "Finance", salary: 56000 },
  { id: 20, title: "HR Executive", location: "Pune", category: "HR", salary: 51000 },
  { id: 21, title: "Social Media Manager", location: "Chennai", category: "Marketing", salary: 47000 },
  { id: 22, title: "Cloud Engineer", location: "Hyderabad", category: "IT", salary: 77000 },
  { id: 23, title: "Product Manager", location: "Delhi", category: "IT", salary: 85000 },
  { id: 24, title: "Content Writer", location: "Chennai", category: "Marketing", salary: 46000 }
];

let visibleCount = 8;
let filteredJobs = [];

function loadJobs(jobs) {
  const listings = document.getElementById("job-listings");
  listings.innerHTML = "";
  
  jobs.slice(0, visibleCount).forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Category:</strong> ${job.category}</p>
      <p><strong>Salary:</strong> ₹${job.salary}</p>
      <button class="apply-btn" onclick="applyToJob('${job.title}')">Apply</button>
    `;
    listings.appendChild(card);
  });

  // 👇 This controls whether the Load More button is visible or hidden
  document.querySelector(".load-more").style.display =
    visibleCount >= jobs.length ? "none" : "block";
}


function applyToJob(title) {
  alert(`You have applied for the position: ${title}`);
}

function applyFilters() {
  const search = document.getElementById("search-title")?.value.toLowerCase() || "";
  const location = document.getElementById("filter-location").value;
  const category = document.getElementById("filter-category").value;
  const salary = parseInt(document.getElementById("filter-salary").value);

  let allJobs = [...jobData];
  const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  allJobs.push(...storedJobs);

  filteredJobs = allJobs.filter(job => {
    return (
      job.title.toLowerCase().includes(search) &&
      (location === "" || job.location === location) &&
      (category === "" || job.category === category) &&
      (isNaN(salary) || job.salary >= salary)
    );
  });
  visibleCount = 8;
  loadJobs(filteredJobs);
}

function loadMoreJobs() {
  visibleCount += 8;
  loadJobs(filteredJobs);
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
});

