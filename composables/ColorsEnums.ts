export const useBackgroundColor = () => {
  return useColorMode().preference === 'dark' ? '#16161D' : '#F8F6FF';
}