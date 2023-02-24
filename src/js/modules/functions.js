export function isWebp() {
   function testWebP(callback) {
      let webP = new Image()
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2)
      }
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
   }
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp'
      document.documentElement.classList.add(className)
   })
}
export function menuInit() {
   if (document.querySelector('.icon-menu')) {
      document.addEventListener('click', function (e) {
         if (e.target.closest('.icon-menu')) {
            document.documentElement.classList.toggle('menu-open')
         }
      })
   }
}
export function menuOpen() {
   document.documentElement.classList.add('menu-open')
}
export function menuClose() {
   document.documentElement.classList.remove('menu-open')
}
