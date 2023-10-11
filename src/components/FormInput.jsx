function FormInput({ placeholder, onSetFirstName }) {
  return (
    <div className="flex flex-col items-center mb-3">
      <label></label>
      <input
        onChange={(e) => onSetFirstName(e.target.value)}
        placeholder={placeholder}
        className="border-b-black border-b outline-none text-center w-72 pb-2 pt-2 text-sm"
      />
    </div>
  );
}

export default FormInput;
