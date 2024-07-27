const projectsDiv = document.getElementById("projects");

for (let i = 0; i < PROJECTS.length; i++) {
     const currentProhect = PROJECTS[i];

     const projectDiv = document.createElement("div");
     const divStyle = document.createAttribute("style");
     divStyle.value = "width: 100%; margin 10px; text-align:center;";
     projectsDiv.setAttributeNode(divStyle);

     //h3
     const title = document.createElement("h3");
     const titleNode = document.createTextNode(currentProhect.title);
     title.appendChild(titleNode);

     //img
     const img = document.createElement("img");
     const imgStyle = document.createAttribute("style");
     imgStyle.value = "width: 180px; height: 100px;";
     img.setAttributeNode(imgStyle);
     const source = document.createAttribute("src");
     source.value = "./images/" + currentProhect.img;
     img.setAttributeNode(source);

     //p
     const p = document.createElement("p");
     const pNpde = document.createTextNode(currentProhect.description);
     p.appendChild(pNpde);

     projectDiv.appendChild(title);
     projectDiv.appendChild(img);
     projectDiv.appendChild(p);

     projectsDiv.appendChild(projectDiv);

}