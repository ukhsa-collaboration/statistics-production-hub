const expandables = document.getElementsByClassName("expandable-header");
  
const expand = function(){
  target = this.getAttribute('aria-controls');
  expanded = this.getAttribute('aria-expanded');
    
  if(expanded == "true"){
    document.getElementById(target).setAttribute("aria-hidden", true);
    this.setAttribute("aria-expanded", false);
  } else if(expanded == "false"){
    document.getElementById(target).setAttribute("aria-hidden", false);
    this.setAttribute("aria-expanded", true);
  }
}