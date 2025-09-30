declare module "aframe-react" {
  import * as React from "react";

  interface EntityProps extends React.HTMLAttributes<any> {
    primitive?: string;
    position?: string | { x: number; y: number; z: number };
    rotation?: string | { x: number; y: number; z: number };
    scale?: string | { x: number; y: number; z: number };
    color?: string;
    text?: {
      value?: string;
      align?: string;
      width?: number;
      color?: string;
    };
    [key: string]: any;
  }

  export const Entity: React.FC<EntityProps>;
  export const Scene: React.FC<React.HTMLAttributes<any>>;
}
