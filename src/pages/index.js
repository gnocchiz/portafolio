import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

import * as THREE from 'three';

// Define los shaders como cadenas de texto
const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform sampler2D texture;
uniform vec2 direction;
void main() {
    vec2 offset = direction / textureSize(texture, 0);
    vec4 sum = texture2D(texture, vUv) * 0.2270270270;
    sum += texture2D(texture, vUv + offset * 1.3846153846) * 0.3162162162;
    sum += texture2D(texture, vUv - offset * 1.3846153846) * 0.3162162162;
    sum += texture2D(texture, vUv + offset * 3.2307692308) * 0.0702702703;
    sum += texture2D(texture, vUv - offset * 3.2307692308) * 0.0702702703;
    gl_FragColor = sum;
}
`;




export {Home, About, Projects, Contact}

