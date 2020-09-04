// Gets the filter section.
let menu = document.getElementById("js-pw-filters");
// Gets the whole body.
let body = document.querySelector("body");
// Gets the filter UL section.
let filtrarPor = document.getElementsByClassName("is-gridWall-filters")[0];
// Gets each filter section options.
let nuevoBtn = menu.getElementsByClassName("is-gridWall-filters__block");
// Gets the top of the filter section?
let marginTopRemove = menu.getElementsByClassName("is-modal__content")[0];
// From the MENU (Filter Section) get each class "is-accordion" which is the <li> element and place them on an array.
let dropDownList = Array.from(menu.getElementsByClassName("is-accordion__item js-facet-accordion"));
let links = [];
let test = "";
// Styles Array
let stylesArray = [
  "[nuevosFiltros = 'true'] .is-modal__content{margin-top:0;border-top:0;}",
  "[nuevosFiltros = 'true'] .is-pw__filters{padding-top:15px!important}",
  "[nuevosFiltros = 'true'] .is-pw__product .is-promoTag{z-index:1}",
  "[nuevosFiltros = 'true'] .is-pw__wrapper{flex-wrap:wrap}",
  "[nuevosFiltros = 'true'] .is-modal__main{flex-grow:1;padding: 0 25px 0 0px;height:inherit;}",
  "[nuevosFiltros = 'true'] #newScript { flex-shrink:0 }",
  "[nuevosFiltros = 'true'] .is-gridWall-filters > li{position:relative;border:0;height:72px;padding-top:10px;text-transform:uppercase}",
  "[nuevosFiltros = 'true'] .is-gridWall-filters{display: flex;flex-direction: row;align-items: flex-end;flex-wrap: wrap;justify-content: flex-start;letter-spacing:1px;}",
  "[nuevosFiltros = 'true'] #newScript { flex-shrink:0 }",
  "[nuevosFiltros = 'true'] .is-gridWall-filters__checkbox:hover:after{border-radius:15px}",
  "[nuevosFiltros = 'true'] .facet__list { position:absolute;flex-basis: calc(50% - 6px); }",
  "[nuevosFiltros = 'true'] form.js-facet-value label{padding: 0 15px}",
  "[nuevosFiltros = 'true'] form.js-facet-value{margin-right:2px;flex: 1;text-align: center;flex-shrink: 1;display: block;flex-grow: 0;white-space: nowrap;}",
  "[nuevosFiltros = 'true'] .facet__values { overflow:visible!important }",
  "[nuevosFiltros = 'true'] .facet__value__count { display:none }",
  "[nuevosFiltros = 'true'] #js-pw-filters .is-gridWall-filters__block { display:flex;flex-wrap:wrap }",
  "[nuevosFiltros = 'true'] #js-pw-filters is-gridWall-filters__checkbox,#js-pw-filters .is-gridWall-filters__radio{padding: 0 15px;margin-right: 2px;}",
  "[nuevosFiltros = 'true'] #js-pw-filters .is-gridWall-filters__checkbox__title,#js-pw-filters .is-gridWall-filters__radio__title{padding:0;margin:0;text-transform: uppercase!important;font-size: 9px;    line-height: 1em;padding-top: 7px;padding-bottom: 5px;}",
  "[nuevosFiltros = 'true'] #js-pw-filters .is-accordion__item:nth-child(n+7){opacity:0;transition:all 0.3s ease-in-out}",
  "[nuevosFiltros = 'true'] .is-gridWall-filters__textButton{font-size:10px!important}",
  "[nuevosFiltros = 'true'] #brand .is-gridWall-filters__block{display:grid;}",
  "[nuevosFiltros = 'true'] #brand form{flex:1;    max-width: 49%;}",
  "[nuevosFiltros = 'true'] #newScript b {color: #50a3f1; font-weight: 900;letter-spacing: 2px;font-size:14px}",
  "[nuevosFiltros = 'true'] #newScript button {background:transparent;border:0;color:#ff7676;font-weight:900;letter-spacing:2px;font-size:12px}",
  "[nuevosFiltros = 'true'] .is-gridWall-filters__checkbox__overlay,#js-pw-filters .is-gridWall-filters__radio__overlay,.is-gridWall-filters__checkbox__input:checked + span{background:unset;position: absolute;border: none;width: 100%;height: 100%;top: 50%;transform: translateY(-50%);border-radius: 30px;border: 1px solid gainsboro;}",
  "[nuevosFiltros = 'true'] #js-pw-filters .is-gridWall-filters__checkbox__input:checked + span{border-color: black;font-weight: 600}",
  "[nuevosFiltros = 'true'] #newScript b {color: #50a3f1; font-weight: 900;letter-spacing: 1px}",
  "[nuevosFiltros = 'true'] #js-pw-filters.showR{height: 144px;}",
  "[nuevosFiltros = 'true'] .is-accordion__item{border-top:0;}",
  "[nuevosFiltros = 'true'] #js-pw-filters.showR #newScript:first-child{align-self:flex-start}",
  "[nuevosFiltros = 'true'] #js-pw-filters {box-sizing:border-box;transition:all 0.3s;overflow:visible;max-width:1100px;width:100%;display:flex;height: 72px;align-items: center;border-radius: 60px;border: 1px solid #e4e4e4;padding: 15px 35px;box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);margin: 15px auto;left:0;right:0}",
  "[nuevosFiltros = 'true'] #newScript i{width: 38px;height: 38px;border-radius: 30px;border: 1px solid #e4e4e4;color: #c4c4c4;display: inline-block;vertical-align: middle;margin-top:1px;line-height: 31px;font-size: 30px;margin-left: 10px;}",
  '[nuevosFiltros = "true"] #js-pw-filters .is-accordion[is-component="Accordion"] .is-accordion__item-wrapper {padding-right:0;z-index:1}',
  '[nuevosFiltros = "true"] #js-pw-filters .is-accordion[is-component="Accordion"] .facet__list {opacity:0;max-height: inherit;z-index: -1;top: 53px;padding-bottom: 0px;transition: all 0.3s;height:0;max-width:unset!important;box-shadow:rgba(0, 0, 0, 0.1) 0px -1px 8px;border: 1px solid rgb(228, 228, 228);position: absolute;left: 50%;transform: translateX(-50%);right: 0;margin: 0 auto;width: 120%;background: white;border-radius: 10px;padding: 15px 5px 0 5px;top:17px;padding-top:40px}',
  '[nuevosFiltros = "true"] #js-pw-filters .is-accordion[is-component="Accordion"] .is-accordion__item-wrapper.toggled + .facet__list {max-height:inherit!important;height:auto;opacity:1;z-index:2}',
  "[nuevosFiltros = 'true'] .is-accordion__item-icon{position:relative;right-4px;}",
  "[nuevosFiltros = 'true'] #js-pw-filters .is-accordion[is-component='Accordion']{display:flex;}",
  "[nuevosFiltros = 'true'] .is-accordion__item-wrapper.toggled{z-index:9!important}",
  '[nuevosFiltros = "true"] #js-pw-filters .is-accordion[is-component="Accordion"] .is-accordion__item-wrapper.toggled .is-accordion__item-title{z-index:9}',
  "[nuevosFiltros = 'true'] #js-pw-filters .is-accordion__item-title .filterCount{position:relative;display: none;top:0;right:0;margin-left: 5px;background:red;color: white;width: 16px;height: 16px;font-size: 10px;line-height: 1.6em;letter-spacing:0px}",
  "[nuevosFiltros = 'true'] .is-pw__wrapper.is-modal-opened.stuck-top .is-pw__products{padding-left:0;margin-left:0}",
  "[nuevosFiltros = 'true'].is-pw__products{padding-right:35px;margin-left:0}",
  '[nuevosFiltros = "true"] #js-pw-filters .icon-minus:before {content:"";margin-left: -5px;margin-top: 9px;display: block;transform: rotate(-45deg);width: 10px!important;background: black;height: 3px;border-radius: 10px 0px 0px 10px;}',
  '[nuevosFiltros = "true"] #js-pw-filters .icon-minus:after {content: "";width: 10px;height: 3px;background: black;display: block;transform: rotate(45deg);margin-top: -4px;border-radius: 0px 10px 10px 0px;}',
  '[nuevosFiltros = "true"] #js-pw-filters .icon-plus:before {border-radius:10px 0 0 10px;content:"";transform:rotate(45deg);position: absolute;width: 10px!important;height:3px;left: -10px;line-height: 20px;margin-top: 7px;background: black;}',
  "[nuevosFiltros = 'true'] #js-pw-filters .is-gridWall-filters.is-accordion .is-accordion__item-title{display: flex;align-items: center;margin-right:10px;text-transform:uppercase;font-weight: 900;font-size: 10px;letter-spacing: 3px;}",
  '[nuevosFiltros = "true"] #js-pw-filters .icon-plus:after {content:"";margin-left: -4px;margin-top: 7px;display: block;transform: rotate(135deg);width: 10px!important;background: black;height: 3px;border-radius: 10px 0px 0px 10px;}',
  "[nuevosFiltros = 'true'] #js-pw-filters .is-gridWall-filters.is-accordion .is-accordion__item-wrapper[is-has-accordion-children]{    text-align: center;justify-content: center;display: flex;min-width: unset;padding: 0 15px;justify-content:center;margin: 0 3px;}",
];
// Removes unwanted Filter Sections from the list.
dropDownList.map((l, i) => {
  if(l.style.display == "none"){
    l.remove();
  }
});
// This runs only if size of site is greater than 991 which is the size the site changes from a desktop to mobile view.
if (window.innerWidth > 991) {
  // Makes an attribute NuevosFiltros and sets it to true.
  body.setAttribute("nuevosFiltros", true);
  initialSetUp();
}
// If Screen is resized...
window.addEventListener("resize", function () {
  // Turns off the filters if the size is less than 991 or if it is off.
  if (window.innerWidth <= 991 && body.getAttribute("nuevosFiltros") === "false") {
    console.log("IS MOBILE");
    return true;
    // This works when DESKTOP > MOBILE.
  } else if ((window.innerWidth > 991 && body.getAttribute("nuevosFiltros") === "false") ||
    (window.innerWidth > 991 && body.getAttribute("nuevosFiltros") === null)) {
    console.log("DESKTOP > MOBILE");
    // Sets the new Filtros Attribute.
    body.setAttribute("nuevosFiltros", true);
    // && is used to safe-guard against undefined.
    menu.classList.contains("closed") && menu.classList.remove("closed");
    // If newScript is not present.
    if (!document.getElementById("newScript")) {
      console.log("initialSetUp!");
      initialSetUp();
    }
    // This works when MOBILE > DESKTOP.
  } else if (window.innerWidth <= 991 && body.getAttribute("nuevosFiltros") === "true") {
    console.log("MOBILE > DESKTOP");
    body.setAttribute("nuevosFiltros", "false");
    if (document.getElementById("newScript")) {
      document.getElementById("newScript").remove();
      document.getElementById("newScript").remove();
      Array.from(document.querySelectorAll("seleccionar")).map(function (btnC) {
        btnC.remove();
      });
    }
  }
});
// InitialSetup() Function
function initialSetUp() {
  // Adds the select filter title on start of Filter Section.
  filtrarPor.insertAdjacentHTML(
    "afterbegin",
    '<div id="newScript" style="align-self:center;"><b>FILTRA POR:</b></div>'
  );
}
/* MostrarRestante()
 * This Function expands the FilterBox area
 * and displays every section.
 */
function MostrarRestante(e) {
  menu.classList.add("showR");
  dropDownList.map((l) => {
    // Added this pice of code so that hidden filters wont show when clicking "Ver Mas".
    l.style.setProperty("display", "block", "important");
    setTimeout(function () {
      l.style.setProperty("opacity", "1", "important");
    }, 200);
  });
}
/* ToggleFilter()
 * This Function adds the toggle feature
 * to each of the FilterSections which
 * toggles the dropdown.
 */
function ToggleFilter(e) {
  for (let i = 0; i < dropDownList.length; i++)
    if (e.id !== dropDownList[i].id && dropDownList[i].children[0].classList.contains("toggled")) {
      dropDownList[i].children[0].classList.remove("toggled");
    } else if (e.id === dropDownList[i].id) {
    dropDownList[i].children[0].classList.toggle("toggled");
  }
}
/* ShowData()
 * Decides if the Sections
 * should hide if the total
 * number of current sections 
 * is > 6 if not all the 
 * sections will be fully 
 * displayed.
 */
function ShowData(e) {
  if(e.path[1].parentNode.id != "" || e.path[1].parentNode.id != null) {
    var counter = 0;
    var filterBoxes = $('.is-accordion__item.js-facet-accordion');
    for(var i=0;i<filterBoxes.length;i++){
      if(filterBoxes[i].style.display == "block"){
        counter++;
      }
    }
    if(counter < 6){
      menu.classList.remove("showR");
    } else {
      menu.classList.add("showR");
    }
    if(e.path[1].parentNode.children[0].className.includes(" toggled")){
      menu.classList.add("showR");
    }
  }
}
/* Onclcick initializer
 * This section adds an event onclick
 * to each of the Filters and toggles
 * if clicked.
 */
dropDownList.map(function (h, i) {
  h.addEventListener("click", (event) => {
    ToggleFilter(event.currentTarget);
    return event.currentTarget.children[0].classList.toggle("toggled");
  });
});
// Applies Styles as soon as the script is loaded.
document.querySelector(".is-accordion__item-wrapper").classList.remove("toggled");
document.querySelector("#js-pw-filters .is-accordion__item .is-accordion").classList.add("is-accordion--closed");
document.querySelector("#js-pw-filters .is-accordion__item .is-accordion").style.maxHeight = "0";
let fixScroll = document.getElementsByClassName("is-pw__filters")[0];
fixScroll.setAttribute("style", "padding-top:15px!important");
// Creates the Stylesheet.
let style = (function () {
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style;
})();
let styles = style.sheet;
// Applies the Styles in the array style and sets events
setTimeout(function () {
  stylesArray.map(function (s) {
    styles.insertRule(s, 0);
  });
  $('.is-accordion__item-wrapper.toggled')[0].classList.remove("toggled");
  Array.from($(".is-accordion__item-wrapper")).map(function (btn) {
    $(btn).attr('onClick', 'ShowData(event);');
  });
  MostrarRestante(event);
}, 100);