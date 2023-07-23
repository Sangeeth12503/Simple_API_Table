fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();//converted to object json

}).then((objectData)=>{
    console.log(objectData[0].title);
    let tabledata="";
    objectData.map((values)=>{
        tabledata+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"></td>
      </tr>
     `;
    });
    document.getElementById("table_body").innerHTML=tabledata;
}).catch((err)=>{
    console.log(err);
})