declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        className?: string;
      };
    }
  }
}

export {};