const loadInitialTemplate=()=>{
    const template= //html
    `
    <h1>hola mundaso</h1>
    `
    const body=document.getElementsByTagName('body')[0];
    body.innerHTML=template;
}

window.onload=()=>{
    loadInitialTemplate();
}