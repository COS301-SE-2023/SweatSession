import { ModalController } from '@ionic/angular';
import { ViewExercisesComponent } from './view-exercises/view-exercises.component';

import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as THREE from "three";
import  MouseMeshInteraction  from 'src/app/services/exercise-explorer/exercise-explorer.service';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

@Component({
  selector: 'app-exercise-explorer',
  templateUrl: './exercise-explorer.page.html',
  styleUrls: ['./exercise-explorer.page.scss'],
})


export class ExerciseExplorerPage implements OnInit, AfterViewInit {

  constructor(private modalController: ModalController) { }


  @ViewChild('canvas') private canvasRef: ElementRef;

  //* Stage Properties

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPane: number = 1;

  @Input('farClipping') public farClippingPane: number = 1000;

  //? Scene properties
  private camera: THREE.PerspectiveCamera;

  private controls: OrbitControls;

  private ambientLight: THREE.AmbientLight;

  private light1: THREE.PointLight;

  private light2: THREE.PointLight;

  private light3: THREE.PointLight;

  private light4: THREE.PointLight;

  private model: any;

  private directionalLight: THREE.DirectionalLight;

  private clickableMeshes: THREE.Mesh[] = [];

  private materialClickHandlers = {}; 

  //? Helper Properties (Private Properties);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;

  

  /**
   *Animate the model
   *
   * @private
   * @memberof ExerciseExplorerPage
   */
  
  private animateModel() {
    if (this.model) {
      this.model.rotation.z += 0.005;
    }
  }

  /**
   *create controls
   *
   * @private
   * @memberof ExerciseExplorerPage
   */

  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setSize(this.canvas.clientWidth , this.canvas.clientHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
  
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  
    // Set the limits for vertical rotation (in radians)
    this.controls.minPolarAngle = Math.PI / 2; // Minimum vertical angle (0 radians = looking straight up)
    this.controls.maxPolarAngle = Math.PI / 2; // Maximum vertical angle (Math.PI/2 radians = looking straight ahead)
  
    this.controls.update();
  };

  /**
   * Create the scene
   *
   * @private
   * 
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd4d4d8)
    this.loaderGLTF.load('assets/male_base_mesh.glb', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      //const scaleFactor = 1;
      //this.model.scale.set(scaleFactor, scaleFactor, scaleFactor);
      const scale = Math.min(100 / 100, 100 / 100); 
      this.model.scale.set(scale, scale, scale);
  
      console.log(this.model);
      var box = new THREE.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
     
     
      this.scene.add(this.model); 

      
     const raycaster = new THREE.Raycaster();
     const mouse = new THREE.Vector2();
     const targetMesh = this.model ;

     this.model.traverse((child: THREE.Mesh) => {
      if (child instanceof THREE.Mesh) {
        
        
        this.clickableMeshes.push(child);
        child.userData['clickable'] = true;
       

  
      }
      
    });




     const onMouseClick = (event: MouseEvent) => {
      raycaster.setFromCamera(mouse, this.camera);
      //console.log(raycaster);
      console.log('Mouse Click Coordinates:', mouse.x, mouse.y);
      const intersects = raycaster.intersectObjects(this.clickableMeshes);
      //console.log(intersects);
      console.log(raycaster);
      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object; 
        console.log('Mesh clicked!', clickedMesh);
        console.log(intersects[0].object.name);

        if (intersects[0].object.name == "Object_16"){
          console.log('head clicked');
        }
        else if (intersects[0].object.name == "Object_14" && raycaster.ray.direction.x < 0){
          console.log('upperback clicked');
        }
        else if (intersects[0].object.name == "Object_21" && raycaster.ray.direction.x < 0){
          console.log('lowerback clicked');
          console.log(raycaster.ray.direction.x );
        }
        else if (intersects[0].object.name == "Object_20"){
          console.log('thighs clicked');
        }
        else if (intersects[0].object.name == "Object_5"){
          console.log('legs clicked');
        }
        else if (intersects[0].object.name == "Object_14"){
          console.log('chest clicked');
        }
        else if (intersects[0].object.name == "Object_21"){
          console.log('stomach clicked');
        }
        else if (intersects[0].object.name == "Object_18"){
          console.log('gluteal muscle clicked');
        }
        else if (intersects[0].object.name == "Object_11"){
          console.log('upperarm clicked');
        }
        else if (intersects[0].object.name == "Object_22"){
          console.log('midarm clicked');
        }
        else if (intersects[0].object.name == "Object_8"){
          console.log('shoulders clicked');
        }
       
      }
    };
    function onMouseMove( event: { clientX: number; clientY: number; } ) {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
    window.addEventListener( 'click', onMouseClick, false );
    window.addEventListener( 'mousemove', onMouseMove, false );
   //this.canvas.addEventListener('click', onMouseClick, false);
   //this.canvas.addEventListener('mousemove', onMouseMove, false);
  
  


    });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    )
    this.camera.position.x = 100;
    this.camera.position.y = 100;
    this.camera.position.z = 50;
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Adjust color and intensity
    this.scene.add(this.ambientLight);

    // Directional Light
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Adjust color and intensity
    this.directionalLight.position.set(0, 1, 0);
    this.scene.add(this.directionalLight);

    // Point Lights (You can add more if needed)
    this.light1 = new THREE.PointLight(0xffffff, 1); // Adjust color and intensity
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);

    this.light2 = new THREE.PointLight(0xffffff, 1); // Adjust color and intensity
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);

   
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * 
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: ExerciseExplorerPage = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      //component.animateModel();
      requestAnimationFrame(render);
    }());
  }

  ////////
  /*
  

  ///////
*/
 

  ngOnInit(): void {

  }

  async openExerciseModal() {
    const modal = await this.modalController.create({
      component: ViewExercisesComponent, // Replace LocationModalPage with the name of your modal component
    });
    await modal.present();
  
    // Handle the location selection event when the modal is dismissed
    const { data } = await modal.onDidDismiss();
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
    
  }


}

