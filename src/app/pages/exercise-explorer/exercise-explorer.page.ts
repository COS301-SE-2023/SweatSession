import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ViewExerciseComponent } from "./view-exercise/view-exercise.component";

@Component({
  selector: 'app-exercise-explorer',
  templateUrl: './exercise-explorer.page.html',
  styleUrls: ['./exercise-explorer.page.scss'],
})


export class ExerciseExplorerPage implements  AfterViewInit  {

  constructor(private modalController: ModalController,
              private router:Router,
              private platform: Platform,
              private alertController: AlertController,
              private store: Store) { }


  @ViewChild('canvas') private canvasRef: ElementRef;
  bodypart$: string = "null";
  //* Stage Properties

 
  //? Scene properties
  private camera: THREE.PerspectiveCamera;

 
  //? Helper Properties (Private Properties);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loaderGLTF = new GLTFLoader();

  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;

  private flag: boolean = true ;

  private raycaster = new THREE.Raycaster();

  private mouse = new THREE.Vector2();

  private gltfModel!: THREE.Group;

  private controls: OrbitControls;

  ngAfterViewInit() {
    this.init();
  }

  private init() {
    this.presentAlert();
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    this.scene = new THREE.Scene();
    /////
    if(localStorage.getItem('darkmode')=='true') {
      this.scene.background = new THREE.Color(0x000000);
      
    } else {
      this.scene.background = new THREE.Color(0xF2F8FC);
      
    }


    /////

    //this.scene.background = new THREE.Color(0x000000);
    this.camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    this.camera.position.set(10, 10, 5);
    //this.camera.position.z = 5;
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

   const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
   directionalLight.position.set(1, 1, 1).normalize();
   this.scene.add(directionalLight);

   this.controls = new OrbitControls(this.camera, this.canvas);
   this.controls.enableRotate = true; // Enable rotation
   this.controls.enablePan = false; // Disable panning
   this.controls.minPolarAngle = Math.PI / 2 ; // Set the minimum polar angle to restrict vertical rotation
   this.controls.maxPolarAngle = Math.PI / 2 ; // Set the maximum polar angle to restrict vertical rotation

    const loader = new GLTFLoader();
    loader.load('assets/male_base_mesh.glb', (gltf) => {
      this.gltfModel = gltf.scene;
      const scale = 8; 
      this.gltfModel.scale.set(scale, scale, scale);
      this.scene.add(this.gltfModel);
      this.animate();
    });

    // Add onclick event listener to the canvas
    canvas.addEventListener('click', this.onCanvasClick.bind(this));
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this));
    // Rotate the model (optional)
    if (this.gltfModel) {
      this.gltfModel.rotation.y += 0.01;
    }
    this.controls.update(); // Update the controls

    this.renderer.render(this.scene, this.camera);
  }

  private onCanvasClick(event: MouseEvent) {
    // Calculate mouse coordinates relative to the canvas
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    // Calculate normalized device coordinates (NDC) from mouse coordinates
    const ndcX = (x / canvas.clientWidth) * 2 - 1;
    const ndcY = -((y / canvas.clientHeight) * 2) + 1;
  
    // Create a raycaster from the NDC
    const raycaster = new THREE.Raycaster();
    const mousePosition = new THREE.Vector2(ndcX, ndcY);
    raycaster.setFromCamera(mousePosition, this.camera);
  
    // Check for intersections with the model's meshes
    const intersects = raycaster.intersectObjects(this.gltfModel.children, true);
    if (intersects.length > 0) {
      // Handle click on the first intersected mesh (you can modify this logic as needed)
      const mesh = intersects[0].object;
      console.log('Clicked on mesh:', mesh);

      if (intersects[0].object.name == "Object_16"){
        this.openExercisePage('pectoral');
        //console.log('chest clicked');
      }
      else if (intersects[0].object.name == "Object_8" ){
        this.openExercisePage('traps');
        // console.log('upperback clicked');
      }
      else if (intersects[0].object.name == "Object_20"){
        // console.log('thighs clicked');
        this.openExercisePage('glutes');
      }
      else if (intersects[0].object.name == "Object_5"){
        this.openExercisePage('calves');
      }
      else if (intersects[0].object.name == "Object_18"){
        // console.log('gluteal muscle clicked');
        this.openExercisePage('glutes');
      }
      else if (intersects[0].object.name == "Object_11"){
        this.openExercisePage('biceps');
        // console.log('upperarm clicked');
      }
      else if (intersects[0].object.name == "Object_22"){
        this.openExercisePage('forearms');
        // console.log('midarm clicked');
      }
      else if (intersects[0].object.name == "Object_9"){
        this.openExercisePage('forearms');
        // console.log('midarm clicked');
      }
      else if (intersects[0].object.name == "Object_10"){
        this.openExercisePage('deltoids');
        // console.log('shoulders clicked');
      }
      else if (intersects[0].object.name == "Object_21"){
        this.openExercisePage('traps');
        // console.log('shoulders clicked');
      }
      else if (intersects[0].object.name == "Object_14"){
        this.openExercisePage('abdominal');
        // console.log('shoulders clicked');
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '3D-Model',
      message: 'Click on the muscles of the model to view exercises!',
      buttons: ['OK']
    });
    

    await alert.present();
  }

  async openExercisePage(bodypart: string)
  {
    this.bodypart$ = bodypart;
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ViewExerciseComponent,
        componentProps: {
            receivedBodypart: this.bodypart$,
        }
    });
    return await modal.present();
  }




  }