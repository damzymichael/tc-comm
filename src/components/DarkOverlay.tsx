interface Props {
  zIndex?: 10 | 20 | 30 | 40 | 50;
  display: boolean;
  toggleDisplay: () => void;
  desktopDisplay?: boolean;
}
const DarkOverlay = ({
  display,
  toggleDisplay,
  zIndex,
  desktopDisplay
}: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 block h-screen z-${
        zIndex || 20
      } bg-[#0000009C] transition-[opacity] ease-in duration-300 ${
        display ? 'w-screen opacity-100' : 'w-0 opacity-0'
      } ${!desktopDisplay && 'sm:hidden'}`}
      onClick={toggleDisplay}
    />
  );
};

export default DarkOverlay;
