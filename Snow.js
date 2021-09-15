class Snow extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("snow5.webp");
    Matter.Body.setAngle(this.body, angle);
  }
}