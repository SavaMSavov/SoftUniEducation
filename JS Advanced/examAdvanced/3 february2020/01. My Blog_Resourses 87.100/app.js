function solve() {
  const authorInput = document.querySelector("#creator");
  const titleInput = document.querySelector("#title");
  const categoryInput = document.querySelector("#category");
  const contentInput = document.querySelector("#content");
  const sections = document.querySelectorAll("section");
  const addBtn = document.querySelector("form > button");
  addBtn.addEventListener("click", addArticle);

  function addArticle(e) {
    e.preventDefault();
    const articleSec = sections[1];

    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const categoryPar = document.createElement("p");
    const creatorPar = document.createElement("p");
    const contentPar = document.createElement("p");

    const categoryStrong = document.createElement("strong");
    const creatorStrong = document.createElement("strong");
    categoryStrong.textContent = categoryInput.value;
    creatorStrong.textContent = authorInput.value;

    h1.textContent = titleInput.value;
    categoryPar.textContent = "Category:";
    creatorPar.textContent = "Creator:";

    categoryPar.appendChild(categoryStrong);
    creatorPar.appendChild(creatorStrong);
    contentPar.textContent = contentInput.value;

    article.appendChild(h1);
    article.appendChild(categoryPar);
    article.appendChild(creatorPar);
    article.appendChild(contentPar);

    const btnDIV = document.createElement("div");
    btnDIV.className = "buttons";
    const deleteBTN = document.createElement("button");
    const archiveBTN = document.createElement("button");
    deleteBTN.className = "btn delete";
    archiveBTN.className = "btn archive";
    deleteBTN.textContent = "Delete";
    archiveBTN.textContent = "Archive";
    btnDIV.appendChild(deleteBTN);
    btnDIV.appendChild(archiveBTN);
    article.appendChild(btnDIV);

    articleSec.appendChild(article);

    deleteBTN.addEventListener("click", () => {
      article.remove();
    });
    archiveBTN.addEventListener("click", archiveF);

    function archiveF(e) {
      e.preventDefault;
      const archiveSec = sections[3];
      const ulArchive = archiveSec.querySelector("ul");
      const liArchive = document.createElement("li");
      liArchive.textContent =
        e.target.parentNode.parentNode.firstChild.innerText;
      const removal = e.target.parentNode.parentNode;
      removal.remove();
      ulArchive.appendChild(liArchive);
      Array.from(ulArchive.children)
        .sort((a, b) => a.innerText.localeCompare(b.innerText))
        .forEach((node) => ulArchive.appendChild(node));
    }
  }
}
