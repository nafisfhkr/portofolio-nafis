import type { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import type { ReactThreeFiber } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ReactThreeFiber.ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ReactThreeFiber.ThreeElement<typeof MeshLineMaterial>;
  }
}

declare module '*.glb' {
  const src: string;
  export default src;
}
