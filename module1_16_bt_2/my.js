class Temperature {
    constructor(c,f,k) {
        this.c=c;
        this.f = f;
        this.k = k;
    }
   getCelius (){
        return this.c;
   }
   getf(){
        return this.c*9/5 +32;
   }
   getk(){
        return this.c + 273.1;
   }
}
let changeTemperature = new Temperature(25);
document.write("do f la " +changeTemperature.getf());
document.write("<br>")
document.write("do k la " + changeTemperature.getk())