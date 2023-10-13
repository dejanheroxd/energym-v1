function Button({ children }) {
  return (
    <button
      aria-label="Button"
      className="text-black mt-6 border-black border-2 text-sm px-8 py-4 rounded-full bg-white duration-200 lg:hover:bg-gymrose lg:hover:border-gymrose lg:hover:text-white"
    >
      {children}
    </button>
  );
}

export default Button;
