  // File A.ts
  // Cyclic Dependencies
  import B from './B';
  export default function A() {
    B();
  }