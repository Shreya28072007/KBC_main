class Question6 {

    constructor() {
      this.title = createElement('h1')
  
      this.input2 = createInput("Enter Correct Option No..");
      this.button = createButton('Submit');
      this.button2 = createButton('Next');
     
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
   
        this.button.hide();
        this.input2.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
  
  
    }
  
    display(){
      this.title.html("Kaun Banega Crorepati");
      this.title.position(500, 0);

      this.title.style('color', 'white');
      this.question.style('color', 'white');
      this.option1.style('color', 'skyblue');
      this.option2.style('color', 'skyblue');
      this.option3.style('color', 'skyblue');
      this.option4.style('color', 'skyblue');
  
      this.question.html("Question 6:- What is India's rank on EIU's Global Democracy Index 2019? " );
      this.question.position(300, 130);
      this.option1.html("1: 48th Rank " );
      this.option1.position(300, 200);
      this.option2.html("2: 50th Rank " );
      this.option2.position(300, 230);
      this.option3.html("3: 53rd Rank " );
      this.option3.position(300, 260);
      this.option4.html("4: 51st Rank" );
      this.option4.position(300, 290);
  
      this.input2.position(250, 450);
    this.button.position(550, 450);
    this.button2.position(750,450);
      
    
      this.button.mousePressed(()=>{
       
   
       
        if(system.authenticate(accessCode6,this.input2.value())){
        checkAns.shapeColor = "green";
        correctAns+=1;
      }else{
        checkAns.shapeColor = "red";
      }
      this.title.hide();
  
      this.input2.hide();
      this.button.hide();
      });
  
      this.button2.mousePressed(()=>{
        
        checkAns.shapeColor = 225;
        this.title.hide();
  ;
        this.button.hide();
        this.button2.hide();
        this.input2.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        
  
    
        question7 = new Question7();
        question7.display();
        
  
  
      })
      
    }
  }
  