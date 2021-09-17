class Firstpage{

    constructor(){
      this.title = createElement('h1')
        this.greeting = createElement('h2');
        this.input = createInput("Enter your name here");
       this.button = createButton('Play');
       this.name = null;
}
hide(){
    this.input.hide();
    this.button.hide();
}
display(){


  this.title.html("Kaun Banega Crorepati");
  this.title.position(500, 0);

  this.title.style('color', 'white');
    this.greeting.html("Enter your name to start!");
    this.greeting.position(500, 150);
    this.greeting.style('color','white');

    this.input.position(475,250);
        this.input.style('width', '300px');
        this.input.style('height', '30px');
        this.input.style('background', 'lavender');

        this.button.position(560,300);
        this.button.style('width', '100px');
        this.button.style('height', '20px');
        this.button.style('background', 'lightpink');
        this.name = this.input.value();

      //  console.log(this.name);
      this.button.mousePressed(()=>{
        welcome.play();
  
        checkAns.shapeColor = 225;
       
    

       this.button.hide();
       this.input.hide();
      this.greeting.hide();
    
        question = new Question();
        question.display();
        
    
    
      });
}



  

}