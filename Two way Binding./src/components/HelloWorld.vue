<template>
  <div class="box">
    <h1>{{ msg }}</h1>
        <h1 class="H1">
            <u>WELCOME TO LIVE UPDATE DATA IN </u>
        </h1>
        <h2 class="H2">Two Way Data Binding</h2>
        <label> First Name : <input v-model="first" placeholder="plz type your first name " class="H3">
        </label>
        <br> <br>
        <label class="H4"> First Name : <Strong> {{ first }}</Strong> </label>


        <br><br>


        <label> Last Name : <input v-model="last" placeholder="plz type your last name " class="H3">
        </label>
        <br> <br>
        <label class="H4"> Last Name : <Strong> {{last}}</Strong> </label>
    </div>
  
</template>

<script    >
export default {
  name: "HelloWorld",
  data()
  {
    return {
      first:"",
      last:"",
    }
  }
}
</script>


<style scoped>
.box {
  border: 5px dotted green;
  text-align: center;
  background-color: azure;
}
.H1 {
  font-size: 50px;
  font-style: italic;
  color: blue;
}
.H2 {
  font-size: 35px;
  font-style: oblique;
  color: aqua;
}
.H3 {
  font-size: 20px;
}
.H4 {
  font-size: 20px;
}
</style>
