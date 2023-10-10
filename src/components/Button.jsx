function Button({ children }) {
  return (
    <button className="text-black mt-6 border-black border-2 text-sm px-8 py-4 rounded-full bg-white">
      {children}
    </button>
  );
}

export default Button;
