var scene, renderer;
var camera, gridHelper, wireframe;

init();
animate();

function init () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    gridHelper = new THREE.GridHelper(
        500,
        20,
        '#179943',
        '#179943');
    gridHelper.position.y = -50;
    scene.add(gridHelper);

    var shape = new THREE.OctahedronGeometry(20, 1);
    var geometry = new THREE.EdgesGeometry( shape );
    var material = new THREE.LineBasicMaterial({
        color: '#23a7ff',
        linewidth: 3
    });

    wireframe = new THREE.LineSegments( geometry, material );
    wireframe.position.y = -30;

    scene.add(wireframe);
}
function animate () {
    requestAnimationFrame(animate);
    var time = -performance.now() * 0.0002;
    camera.position.x = 75 * Math.cos(time);
    camera.position.z = 75;
    camera.lookAt(wireframe.position);
    renderer.render(scene, camera);
}