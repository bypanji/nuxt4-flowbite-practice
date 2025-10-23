export function useFlowbite(callback: (flowbite: unknown) => void) {
  if (typeof window !== 'undefined') {
    import('flowbite').then((flowbite) => {
      callback(flowbite);
    });
  }
}