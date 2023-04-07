const fs = require('fs');
const inquirer =require('inquirer');
const {Circle,Triangle,Square} = require('./lib/shapes.js')



inquirer
.prompt([
    {
        type:'list',
        name:'shape',
        message:'what shape are you feeling?',
        Choices:['Circle','Triangle','Square']
    },
    {
        type:'input',
        name:'color',
        message:'please enter a color you would like to use'
    },
    {
        type:'input',
        name:'logo',
        message:'what would you like it to say ?',

        validate:function(value){
            if(value.length > 3){
                return true;
            }
            else{
                return 'please enter a vlaue of 3 characters or less'
            }
        }
    },
    {
        type:'input',
        name:'text-color',
        message:'what color would you like your text?'
    }
    
])
.then((response)=>{
    let shape;
    if (response === 'Circle'){
        shape = new Circle();
    }
    else if (response === 'Triangle'){
        shape = new Triangle();
    }
    else if (response === 'Square'){
        shape = new Square();
    }
    shape.setColor(response.colo);

    const svg = new SVG();
    svg.setShape(shape);

    
    svg.setText(response.text, response.textColor);

    const newSvg = svg.render();
    
    
    fs.writeFile('myNew.svg',newSvg , (err) =>{
        if (err) throw err;
        console.log('Generated logo.svg');
    } )
})