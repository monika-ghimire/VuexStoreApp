

<style scoped>
.Create-Course-btn {
  background: rgb(5, 5, 102);
  color: white;
  padding: 8px;
  float: right;
}
.my-design-btn{
    background: #e2ecfb;
    color: #4D74B1;
}
button{
    border-radius:4px;
}
button:hover{
    border: 1px solid #4D74B1 ;
    transition: 0.3s;
   
}
.Start-Designing-btn{
    border-radius:4px;
    border: 2px solid gainsboro;
    padding: 4px 20px;
    background: #F3F3F3;
}
.group-start-designing-content{

    text-align: center;
    line-height: 4ch;

}
.img-designing{
    margin-left: 44%;

}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
 .Create-Course-btn {
    padding: 4px;
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 0.8em;
 }
 .Email-Template-Builder-content{
    font-size: 0.9em;
    margin-top: 6%;
 }
 .btn-group button {
    margin-left: 18%;
    margin-top: 8%;
    width:25%;
    font-size: 0.8em;
 }
 .img-designing{
    margin-left: 34%;
    margin-top: 8%;
 }
 .group-start-designing-content{
 font-size: 0.8em;
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

.img-designing{
    margin-left: 39%;
    margin-top: 10%;
 }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

.img-designing{
    margin-left: 42%;

}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
 
.img-designing{
    margin-left: 44%;

}
}

</style>

<template>
    <div class="p-10 pt-1 relative">


      <section>
      <div class="grid sm:grid-cols-2 pt-10 ">
        
        <div class="Email-Template-Builder-content">
          <h3 class="font-bold">Email Template Builder</h3>
          <p class="font-semibold">
            Create and customize the pre - build email templates
          </p>
        </div>
        <div class="pr-10">
          <button class="Create-Course-btn"> + Create template</button>
        </div>
        
      </div>

      <div class="mt-9 btn-group">
        <button class=" my-design-btn p-2 font-semibold">My Design (0)</button>
        <button class="ml-10  border-2 border-indigo-5  p-2 font-semibold">All Template</button>
      </div>
    </section>

    <section>
        <div class=" group-start-designing-content items-center">
          

            <img src="../assets/img3.png" class="img-designing"/>
            <h2 class="font-semibold">Let’s start designing!</h2>
            <p>Get started by creating an awesome email or browse and edit existing email templates. Enjoy it!</p>
            <button class="Start-Designing-btn mt-6"> Start Designing</button>
        </div>
    </section>

        
    </div>
    
       


    
   
</template>

<script>

</script>
