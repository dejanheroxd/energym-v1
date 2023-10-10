function Button({ children }) {
  return (
    <button className="mt-9 text-black border-black border text-sm px-10 py-4 rounded-full bg-white">
      {children}
    </button>
  );
}

export default Button;
