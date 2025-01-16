import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){return o.map(({largeImageURL:r,webformatURL:s,tags:a,likes:e,views:t,comments:c,downloads:l})=>`<li class="gallery-item">
          <article class="card">
      <a class="card-link" href="${r}"><img class="card-image" src="${s}" alt="${a}"/></a>        
      <div class="card-container">
            <div class="card-item">
              <p class="card-title">Likes</p>
              <p class="card-count">${e}</p>
            </div>
            <div class="card-item">
              <p class="card-title">Views</p>
              <p class="card-count">${t}</p>
            </div>
            <div class="card-item">
              <p class="card-title">Comments</p>
              <p class="card-count">${c}</p>
            </div>
            <div class="card-item">
              <p class="card-title">Downloads</p>
              <p class="card-count">${l}</p>
            </div>
          </div>
          </article>
            </li>`).join("")}const p="https://pixabay.com/api/",f="48226781-c314bf294542f2e13595e23de";function m(o){return fetch(`${p}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=u(r.hits);i.gallery.insertAdjacentHTML("beforeend",s),new d(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(r=>{throw console.error("Error fetching images:",r),r})}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",h);function h(o){o.preventDefault();const s=o.currentTarget.elements.state.value.trim();if(i.gallery.innerHTML="",!s){n.error({message:"Please enter your request",position:"topRight"});return}i.loader.classList.remove("is-hidden"),m(s).catch(a=>{i.loader.style.display="none",n.error({message:"Error fetching images. Please try again later.",position:"topRight"}),console.error(a)}).finally(()=>{i.loader.classList.add("is-hidden")}),i.form.reset()}
//# sourceMappingURL=index.js.map
