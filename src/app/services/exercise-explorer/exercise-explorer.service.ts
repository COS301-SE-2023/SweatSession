import * as THREE from 'three';



 class MouseMeshInteractionHandler {
  mesh_name: string;
  handler_function: (mesh: THREE.Object3D) => void;

  constructor(mesh_name: string, handler_function: (mesh: THREE.Object3D) => void) {
    this.mesh_name = mesh_name;
    this.handler_function = handler_function;
  }
}

 class MouseMeshInteraction {
  scene: THREE.Scene;
  camera: THREE.Camera;
  raycaster: THREE.Raycaster;
  mouse: THREE.Vector2;
  updated: boolean;
  event: string;
  last_mouseenter_mesh: THREE.Object3D | undefined;
  last_pressed_mesh: THREE.Object3D | undefined;
  handlers: Map<string, MouseMeshInteractionHandler[]>;

  constructor(scene: THREE.Scene, camera: THREE.Camera) {
    this.scene = scene;
    this.camera = camera;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.updated = false;
    this.event = '';

    this.last_mouseenter_mesh = undefined;
    this.last_pressed_mesh = undefined;

    this.handlers = new Map();

    this.handlers.set('click', []);
    this.handlers.set('dblclick', []);
    this.handlers.set('contextmenu', []);

    this.handlers.set('mousedown', []);
    this.handlers.set('mouseup', []);
    this.handlers.set('mouseenter', []);
    this.handlers.set('mouseleave', []);

    window.addEventListener('mousemove', this);
    window.addEventListener('click', this);
    window.addEventListener('dblclick', this);
    window.addEventListener('contextmenu', this);
    window.addEventListener('mousedown', this);
  }

  handleEvent(e: MouseEvent) {
    switch (e.type) {
      case 'mousemove': {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.updated = true;
        this.event = 'motion';
        break;
      }
      default: {
        this.updated = true;
        this.event = e.type;
        break;
      }
    }
  }

  addHandler(mesh_name: string, event_type: string, handler_function: (mesh: THREE.Object3D) => void) {
    if (this.handlers.has(event_type)) {
      this.handlers.get(event_type)!.push(new MouseMeshInteractionHandler(mesh_name, handler_function));
    }
  }

  update() {
    if (this.updated) {
      this.raycaster.setFromCamera(this.mouse, this.camera);

      const intersects = this.raycaster.intersectObjects(this.scene.children, true);

      if (intersects.length > 0) {
        if (this.event === 'motion') {
          let mouseenter_handlers = this.handlers.get('mouseenter')!;
          let mouseleave_handlers = this.handlers.get('mouseleave')!;

          if (mouseleave_handlers.length > 0) {
            for (const handler of mouseleave_handlers) {
              if (
                this.last_mouseenter_mesh !== undefined &&
                intersects[0].object !== this.last_mouseenter_mesh &&
                handler.mesh_name === this.last_mouseenter_mesh.name
              ) {
                handler.handler_function(this.last_mouseenter_mesh);
                break;
              }
            }
          }

          if (mouseenter_handlers.length > 0) {
            for (const handler of mouseenter_handlers) {
              if (handler.mesh_name === intersects[0].object.name && intersects[0].object !== this.last_mouseenter_mesh) {
                this.last_mouseenter_mesh = intersects[0].object;
                handler.handler_function(intersects[0].object);
                break;
              }
            }
          }
        } else {
          if (this.event === 'click' && this.last_pressed_mesh === intersects[0].object) {
            for (const handler of this.handlers.get('mouseup')!) {
              if (handler.mesh_name === intersects[0].object.name) {
                handler.handler_function(intersects[0].object);
                break;
              }
            }
            this.last_pressed_mesh = undefined;
          }

          if (this.event === 'mousedown') {
            this.last_pressed_mesh = intersects[0].object;
          }

          let handlers_of_event = this.handlers.get(this.event)!;
          for (const handler of handlers_of_event) {
            if (handler.mesh_name === intersects[0].object.name) {
              handler.handler_function(intersects[0].object);
              break;
            }
          }
        }
      } else if (this.event === 'motion') {
        for (const handler of this.handlers.get('mouseleave')!) {
          if (this.last_mouseenter_mesh !== undefined && handler.mesh_name === this.last_mouseenter_mesh.name) {
            handler.handler_function(this.last_mouseenter_mesh);
            this.last_mouseenter_mesh = undefined;
            break;
          }
        }
      }

      this.updated = false;
    }
  }
}

export default MouseMeshInteraction;
