const fs = require('fs');
const inquirer =require('inquirer');
const {circle,triangle,square} = require('./lib/shapes')


// need a write me file that will hod the image that is held

inquirer
.prompt([
    {
        type:'list',
        name:'shape',
        message:'what shape are you feeling?',
        Choices:['circle','triangle','square']
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
    if (response === 'circle'){
        shape = new circle();
    }
    else if (response === 'triangle'){
        shape = new triangle();
    }
    else if (response === 'square'){
        shape = new square();
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