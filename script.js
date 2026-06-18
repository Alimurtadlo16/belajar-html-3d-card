document.addEventListener("DOMContentLoaded", function() {
    
    const kartuAli = document.querySelector(".tilt-box");

    if (kartuAli) {
        VanillaTilt.init(kartuAli, {
            max: 20,           
            speed: 400,        
            glare: true,       
            "max-glare": 0.3,  
            scale: 1.05,       
            
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45, 
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45  
        });
    }
});