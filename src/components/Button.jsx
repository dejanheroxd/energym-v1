function Button({ children }) {
  return (
    <button
      aria-label="Button"
      className="text-black mt-6 border-gymGreenBright border-2 text-sm px-8 py-4 rounded-full bg-gymGreenBright duration-200 lg:hover:bg-gymGreenBright lg:hover:border-gymGreenBright "
    >
      {children}
    </button>
  );
}

export default Button;
