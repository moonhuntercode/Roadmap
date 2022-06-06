const loadInitialTemplate=()=>{
    const template= //html
    `
    <div class="container1">
    <h1>REPASOS</h1>
    <div className="navbar">
    <nav>
    <a href="/inicio">inicio</a>
    <a href="/inicio">courses</a>
    <a href="/inicio">contact</a>
    </nav>
    </div>
    </div>
    `
    const body=document.getElementsByTagName('body')[0];
    body.innerHTML=template;
}

window.onload=()=>{
    loadInitialTemplate();
}