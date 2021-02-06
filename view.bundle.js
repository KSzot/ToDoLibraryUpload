!function(){"use strict";var t={811:function(t,e,i){new class{constructor(){this._getValues=()=>{var t={fields:!1,stringBuilder:""};if(this._conditionFuntoGetValue(this.authorInput.value.length,t,"Pole autor jest wymagane"),this._conditionFuntoGetValue(this.bookInput.value.length,t,"Pole tytuł książki jest wymagane"),this._conditionFuntoGetValue(this.categorySelect.selectedIndex,t,"Pole kategoria jest wymagane"),this._conditionFuntoGetValue(this.priority.selectedIndex,t,"Pole piorytet jest wymagane"),t.fields){console.log(t.stringBuilder);var e=document.getElementById("modalBodyBadInput");e.lastElementChild&&e.removeChild(e.lastElementChild);var i=document.createElement("p");return i.innerText=t.stringBuilder,e.appendChild(i),$("#exampleModalBadInput").modal("show"),!1}return this.divMoveDown.textContent="Dodano książkę pomyślnie!",this.divMoveDown.classList.add("divMoveDown"),{author:this.authorInput.value,title:this.bookInput.value,category:this.categorySelect.options[this.categorySelect.selectedIndex].text,priority:this.priority.options[this.priority.selectedIndex].text}},this._generateTable=(t,e)=>{for(var i of e){var n=t.insertRow();for(var s in i)if("id"!=s){var a=n.insertCell();a.classList.add("text-wrap","text-break","smallPadding"),a.setAttribute("data-value",i.id);var o=document.createTextNode(i[s]);a.appendChild(o)}}},this._clearDOM=()=>{for(;this.tableBook.lastElementChild.firstChild;)this.tableBook.lastElementChild.removeChild(this.tableBook.lastElementChild.firstChild)},this._clearInput=()=>{this.authorInput.value="",this.authorInput.classList.remove("active"),this.bookInput.value="",this.bookInput.classList.remove("active"),this.categorySelect.selectedIndex=0,this.priority.selectedIndex=0},this._changeItemCounter=t=>{this.itemCounter.textContent="Licznik pozycji: ".concat(t)},this._setValueonFormSelected=(t,e)=>{t.forEach(((i,n)=>{i.text==e&&(t.selectedIndex=n)}))},this.bindAddBook=t=>{this.btnAdd.addEventListener("click",(e=>{e.preventDefault(),this._getValues()&&t(this._getValues())}))},this.bindSortColumn=t=>{this.tableBook.tHead.rows.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t(e.target.dataset.value)}))}))},this.bindSearchInput=t=>{this.searchInput.addEventListener("input",(e=>{if(e.preventDefault(),0!=this.categoryFilter.selectedIndex){var i=this.categoryFilter[this.categoryFilter.selectedIndex].dataset.value;t(e.target.value,i)}}))},this.bindEditOrDeleteItem=t=>{this.tableBook.lastElementChild.addEventListener("click",(e=>{var i=e.target.dataset.value;this.btnShowHide.textContent="Ukryj",$(".multi-collapse").collapse("show"),this._displayNone(this.btnAdd),this._displayNone(this.btnClearOne),this._displayInline(this.btnBack),this._displayInline(this.btnDelete),this._displayInline(this.btnUpdate),t(i)}))},this.bindClearInput=()=>{this.btnClearOne.addEventListener("click",(()=>{this._clearInput()}))},this.windowsTarget=()=>{window.addEventListener("click",(t=>{console.log(t.target)}))},this.displayBooks=t=>{this._clearDOM(),this._generateTable(this.tableBook.lastElementChild,t),this._changeItemCounter(t.length),this._clearInput()},this.onInsertToInput=t=>{this.authorInput.value=t.author,this.authorInput.classList.add("active"),this.bookInput.value=t.title,this.bookInput.classList.add("active"),this._setValueonFormSelected(this.categorySelect,t.category),this._setValueonFormSelected(this.priority,t.priority)},this.bindUpdateBook=t=>{this.btnUpdate.addEventListener("click",(e=>{e.preventDefault(),this._getValues()&&(t(this._getValues()),this._displayNone(this.btnUpdate),this._displayNone(this.btnDelete),this._displayNone(this.btnBack),this._displayInline(this.btnAdd),this._displayInline(this.btnClearOne))}))},this.bindDeleteBook=t=>{this.btnDelete.addEventListener("click",(e=>{e.preventDefault(),t(),this.divMoveDown.textContent="Usunięto książkę pomyślnie!",this.divMoveDown.classList.add("divMoveDown"),this._displayNone(this.btnUpdate),this._displayNone(this.btnDelete),this._displayNone(this.btnBack),this._displayInline(this.btnAdd),this._displayInline(this.btnClearOne)}))},this.bindDeleteAllBook=t=>{this.btnDeleteAll.addEventListener("click",(()=>{t(),this._displayNone(this.btnUpdate),this._displayNone(this.btnDelete),this._displayNone(this.btnBack),this._displayInline(this.btnAdd),this._displayInline(this.btnClearOne)}))},this.stopSubmit=()=>{this.formSubmit.addEventListener("submit",(t=>{t.preventDefault(),this.searchInput.blur()}))},this.createOptionElement=t=>{this.btnNewCategory.addEventListener("click",(e=>{var i=document.createElement("option"),n=parseInt(this.categorySelect.lastElementChild.value)+1,s=this.newCategoryInput.value;i.value=n,i.text=s,this.categorySelect.appendChild(i),t(s)}))},this.displayCategory=t=>{t.forEach(((t,e)=>{var i=document.createElement("option");i.text=t,i.value=e+1,this.categorySelect.appendChild(i)}))},this.showHideCreateBookForm=()=>{this.btnShowHide.addEventListener("click",(()=>{this.btnShowHide.textContent="Ukryj"==this.btnShowHide.textContent.trim()?"Pokaż":"Ukryj"}))},this.backToEditOrDeleteItem=()=>{this.btnBack.addEventListener("click",(()=>{this._displayNone(this.btnUpdate),this._displayNone(this.btnDelete),this._displayNone(this.btnBack),this._displayInline(this.btnAdd),this._displayInline(this.btnClearOne),this._clearInput()}))},this.whichAnimationEvent=()=>{var t=document.createElement("fakeelement"),e={animation:"animationiteration",OAnimation:"oAnimationIteration",MozAnimation:"animationiteration",WebkitAnimation:"webkitAnimationIteration"};for(var i in e)if(void 0!==t.style[i])return e[i]},this.removeAnimation=()=>{this.divMoveDown.addEventListener(this.whichAnimationEvent(),(()=>{console.log("ampmEl event listener fired"),this.divMoveDown.classList.remove("divMoveDown")}))},this.afterSelectedDisplaySearch=()=>{this.categoryFilter.addEventListener("change",(t=>{0!=t.target.options.selectedIndex?this.searchInput.parentNode.classList.contains("d-none")&&this.searchInput.parentNode.classList.remove("d-none"):this.searchInput.parentNode.classList.contains("d-none")||this.searchInput.parentNode.classList.add("d-none")}))},this.authorInput=document.getElementById("author"),this.bookInput=document.getElementById("book"),this.categorySelect=document.getElementById("category"),this.priority=document.getElementById("priority"),this.btnAdd=document.getElementById("btnAdd"),this.btnClearOne=document.getElementById("btnClearOne"),this.tableBook=document.getElementById("tableBook"),this.searchInput=document.getElementById("searchInput"),this.categoryFilter=document.getElementById("categoryFilter"),this.itemCounter=document.getElementById("itemCounter"),this.btnUpdate=document.getElementById("btnUpdate"),this.btnDelete=document.getElementById("btnDelete"),this.btnDeleteAll=document.getElementById("btnDeleteAll"),this.btnNavbar=document.querySelector(".navbar-toggler"),this.formSubmit=document.getElementById("formSubmit"),this.btnNewCategory=document.getElementById("btnNewCategory"),this.newCategoryInput=document.getElementById("newCategoryInput"),this.btnShowHide=document.getElementById("btnShowHide"),this.btnBack=document.getElementById("btnBack"),this.divMoveDown=document.getElementById("MoveDown")}_conditionFuntoGetValue(t,e,i){0==t&&(e.fields=!0,e.stringBuilder+="".concat(i,".\n"))}_displayNone(t){t.classList.remove("d-inline-block"),t.classList.add("d-none")}_displayInline(t){t.classList.add("d-inline-block"),t.classList.remove("d-none")}}}},e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i(811)}();