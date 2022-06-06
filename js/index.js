const loadInitialTemplate=()=>{
    const template= //html
    `
  <div class="container1">
   <nav class="navbar">
   <div class="child_nav"><a href="/inicio">inicio</a></div>
   <div class="child_nav"><a href="/inicio">courses</a></div>
   <div class="child_nav"><a href="/inicio">contact</a></div>
   </nav>
    <h1>REPASOS</h1>
    </div>
    `
    const body=document.getElementsByTagName('body')[0];
    body.innerHTML=template;
}

window.onload=()=>{
    loadInitialTemplate();
}