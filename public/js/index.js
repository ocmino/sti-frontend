/* var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("onclick").innerHTML = clicks;
}



var charachter = 
document.getElementById("charachter");
var block =
document.getElementById("block");
function jump(){
    if(charachter.classList != "animate"){
        charachter.classList.add("animate");
    }
    charachter.classList.add("animate");
    setTimeout(function(){
        charachter.classList.remove("animate");
    }, 500);
}


var checkDead = setInterval(function(){

    var charachterTop = parseInt(window.getComputedStyle(charachter).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && charachterTop > 130){
        if(confirm('Du fick ' + clicks + ' poäng. Tryck på  "Ok" för att spela igen.')){
            window.location = '/'
        }
        return 
    }
 

}, 10); */


// Find the latest version by visiting https://cdn.skypack.dev/three
import * as THREE from 'three';
import { GridHelper, Scene } from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



// SETTING UP SCENE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 )

camera.position.x = 200;
camera.position.y = 75



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild( renderer.domElement );



const pointLight = new THREE.PointLight(0xffffff);
const lightHelper = new THREE.PointLightHelper(pointLight)
pointLight.position.set(45, 25, -45);
scene.add(pointLight)
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(pointLight, ambientLight);






//CREATE BOX
let boxGeometry = new THREE.BoxGeometry( 100, 100, 100);








//CREATE SPHERE
const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 16),
  new THREE.MeshBasicMaterial({
    map: moonTexture
  })
);
scene.add(moon);
var t = 0;
function render() { 
    requestAnimationFrame(render); 
    t += 0.01;          

    moon.rotation.y += 0.001;

    //SPHERE ORBIT
    moon.position.x = 25*Math.cos(t) + (0,0,0);
    moon.position.z = 25*Math.sin(t) + (0,0,0);
    moon.position.y = 15*Math.sin(t) + (0,0,0);

    renderer.render(scene, camera); 
} 
render();









// CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );




// CREATING BOX AND APPLYING PICTURES
let materialArray = [];
let texture_ft = new THREE.TextureLoader().load( 'meadow_ft.jpg');
let texture_bk = new THREE.TextureLoader().load( 'meadow_bk.jpg');
let texture_up = new THREE.TextureLoader().load( 'meadow_up.jpg');
let texture_dn = new THREE.TextureLoader().load( 'meadow_dn.jpg');
let texture_rt = new THREE.TextureLoader().load( 'meadow_rt.jpg');
let texture_lf = new THREE.TextureLoader().load( 'meadow_lf.jpg');
  
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
for (let i = 0; i < 6; i++)
  materialArray[i].side = THREE.BackSide;
   

let skybox = new THREE.Mesh( boxGeometry, materialArray );
scene.add( skybox );
animate();

// ANIMATION LOOP
function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );

  moon.rotation.y += 0.05;
  skybox.rotation.y += 0.005;
  
}


