document.querySelectorAll(".grid-item img").forEach(e=>{e.addEventListener("click",()=>{const t=document.createElement("div");t.className="lightbox",t.innerHTML=`
        <img src="${e.src.replace("/300x200","")}" 
             class="lightbox-img"
             alt="${e.alt}">
      `,document.body.appendChild(t),t.addEventListener("click",()=>{t.remove()})})})