// File B.ts
// Cyclic Dependencies
import A from './A';
export default function B() {
  A();
}