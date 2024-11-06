function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            
            <div class="bg-body-tertiary p-5 rounded" style="background-image: url(${element.flags.png}); background-repeat: no-repeat; background-size: cover;">
          <div class="col-sm-8 py-5 mx-auto">
            <h1 class="display-5 fw-normal text-white">${element.name.common}</h1>
            <p class="fs-5 text-white">${element.flags.alt}</p>
            <h2 class="text-white">${element.capital[0]}</h2>
            <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with offcanvases built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.</p>
            <p>
              <a class="btn btn-primary" href="/docs/5.3/components/navbar/#offcanvas" role="button">Learn more about offcanvas navbars &raquo;</a>
            </p>
        </div>
        </div>
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}
loadItems()
async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
      
        <div class="col-lg-4 ">
            <img  src="${element.flags.png}" alt="" class="bd-placeholder-img rounded-circle" width="170" height="170"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)">
        
        
        
        <h4>${"Country Name  : "+element.continents}</h4>
        <p>${"Capital        :  "+element.capital}</p>
        <p>${"Region   :  "+element.region}</p>
        <p>${"Population   : "+element.population}</p>
        <p>${"Status  : "+element.status}</p>
    


          <p><a class="btn btn-secondary" href="${element.maps.googleMaps}">View Map &raquo;</a></p>
        </div><!-- /.col-lg-4 -->

       
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}
