class Circle{
    constructor(){
        this.color = null;
    }
    setColor(color){
        this.color =color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle {
    constructor(){
        this.color = null;
    }
    setColor(color){
        this.color =color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'`
    }
}

class Square {
    constructor(){
        this.color = null;
    }
    setColor(color){
        this.color =color;
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />'`
    }
}
modual.exports ={Circle,Triangle,Square};