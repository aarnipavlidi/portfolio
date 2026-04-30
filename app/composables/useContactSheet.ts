export const useContactSheet = () => {
  const isOpen = useState<boolean>('contactSheet', () => false);

  const open = () => { isOpen.value = true };
  const close = () => { isOpen.value = false };

  return { isOpen, open, close };
};
