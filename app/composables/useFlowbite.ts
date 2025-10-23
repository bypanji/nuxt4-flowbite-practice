export function useFlowbite(callback: (flowbite: unknown) => void) {
  if (import.meta.client) {
    import('flowbite').then((flowbite) => {
      callback(flowbite);
    });
  }
}