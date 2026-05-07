// Tab Navigation
const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove active class from all links
    tabs.forEach((t) => t.classList.remove('active'));
    // Hide all contents
    contents.forEach((c) => c.classList.remove('active'));

    // Activate clicked tab and corresponding content
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});