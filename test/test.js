import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.querySelector('[data-canvas]');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const mesh = new THREE.Mesh(geometry, material);

const lightDirectional = new THREE.DirectionalLight(0xffffff, 1);
lightDirectional.position.set(5, 5, 5);

const degreesToRadians = (degrees) => {
	return degrees * (Math.PI / 180);
}

mesh.rotation.x = degreesToRadians(30);
mesh.rotation.y = degreesToRadians(30);

const lightAmbient = new THREE.AmbientLight(0x9eaeff, 0.2);

class Figure {
	constructor(params) {
		this.params = {
			x: 0,
			y: 0,
			z: 0,
			ry: 0,
			...params
		}
		this.group = new THREE.Group();
		scene.add(this.group);
	}
	createBody() {
		const geometry = new THREE.BoxGeometry(1, 1.5, 1);
		const body = new THREE.Mesh(geometry, material);
		this.group.add(body);
	}
    createHead() {
        const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
        const head = new THREE.Mesh(geometry, material);
        this.group.add(head);
        head.position.y = 1.65;
    }
    createArms() {
        for(let i = 0; i < 2; i++) {
            const geometry = new THREE.BoxGeometry(0.25, 1, 0.25);
            const arm = new THREE.Mesh(geometry, material);
            const m = i % 2 === 0 ? 1 : -1;
            this.group.add(arm);
            arm.position.x = m * 0.8;
            arm.position.y = 0.1;
            arm.rotation.z = degreesToRadians(30 * m);
        }
    }
    init() {
        this.createBody();
        this.createHead();
        this.createArms();
    }
}

const figure = new Figure();
figure.init();

scene.add(lightAmbient);
scene.add(lightDirectional);
scene.add(mesh);
scene.add(camera);