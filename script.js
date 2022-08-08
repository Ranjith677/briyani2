async function rest(){
    let data = await fetch("https://biriyani.anoram.com/get")
    let res = await data.json()
    console.log(res.image)


     var name =document.getElementById('name').value
     console.log(name)

     var b=document.getElementById('img')
     b.innerHTML=`
     <div class="card-body">
        <h1 class="card-title "> <b class="text-danger">Hi ${name} this is for you </b></h1>
        <img src="${res.image}" class="card-img-top" alt=".">
        
        
    </div>`
}