
# Documentation on requirement of Mixins in Vue.js

##  What is  Mixins in Vue.js 
In Vue.js, mixins are a set of defined logic, stored in a predefined way specified by Vue.js. We can use these mixins over and over to add functionality to our Vue.js instances and components. So, we can say that mixins are used to distribute reusable functionalities for Vue components. They provide a flexible and straightforward way to deal with Vue.js components and share reusable code among them.

## What are mixins used for?

Mixins are a language concept that allows a programmer to inject some code into a class. Mixin programming is a style of software development, in which units of functionality are created in a class and then mixed in with other classes. A mixin class acts as the parent class, containing the desired functionality.
## How use mixin in VUE JS?

To use mixins in a Vue application, you have to pass through four stages:
 ##  
    .1 Create the mixin file.
    .2 Import the mixin file into the needed component.
    .3 Remove the repeated logic from said components.
    .4 Register the mixin.
# How to Create and example code
## Mixins are basically to be used with components. They share reusable code among components. When a component uses mixin, all options of mixin become a part of the component options.
## Example
    <html>
    <head>
       <title>VueJs Instance</title>
      <script type = "text/javascript" src = "js/vue.js"></script>
       </head>
      <body>
      <div id = "databinding"></div>
      <script type = "text/javascript">
      var vm = new Vue({
      el: '#databinding',
            data: {
            },
            methods : {
            },
         });
         var myMixin = {
            created: function () {
               this.startmixin()
            },
            methods: {
               startmixin: function () {
                  alert("Welcome  to mixin example");
               }
            }
         };
         var Component = Vue.extend({
            mixins: [myMixin]
         })
         var component = new Component();
      </script>
    </body>
    </html>																	
 ### When a mixin and a component contain overlapping options, they are merged as shown in the following example.
    <html>
    <head>
      <title>VueJs Instance</title>
      <script type = "text/javascript" src = "js/vue.js"></script>
    </head>
    <body>
      <div id = "databinding"></div>
      <script type = "text/javascript">
         var mixin = {
            created: function () {
               console.log('mixin called')
            }
         }
         new Vue({
            mixins: [mixin],
            created: function () {
               console.log('component called')
            }
         });  </script>     </body>
                                       </html>
    </body>
    </html>

### Now the mixin and the vue instance has the same method created. This is the output we see in the console. As seen, the option of the vue and the mixin will be merged.
 
 ### If we happen to have the same function name in methods, then the main vue instance will take priority.
## Example
 
    <html>
    <head>
      <title>VueJs Instance</title>
      <script type = "text/javascript" src = "js/vue.js"></script>
     </head>
     <body>
      <div id = "databinding"></div>
      <script type = "text/javascript">
         var mixin = {
            methods: {
               hellworld: function () {
                  console.log('In HelloWorld');
               },
               samemethod: function () {
                  console.log('Mixin:Same Method');
               }
            }
         };
         var vm = new Vue({
            mixins: [mixin],
            methods: {
               start: function () {
                  console.log('start method');
               },
               samemethod: function () {
                  console.log('Main: same method');
               }
            }
         });
         vm.hellworld();
         vm.start();
         vm.samemethod();
      </script>
    </body>
    </html>
## We will see mixin has a method property in which helloworld and samemethod functions are defined. Similarly, vue instance has a methods property in which again two methods are defined start and samemethod.
    Each of the following methods are called.
    vm.hellworld(); // In HelloWorld
    vm.start(); // start method
    vm.samemethod(); // Main: same method
    ## As seen above, we have called helloworld, start, and samemethod function. samemethod is also present in mixin, however, priority will be given to the main instance, as seen in the following console.
 
