async function loadComponent(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

loadComponent("header-placeholder", "header.html");
loadComponent("footer-placeholder", "footer.html");
