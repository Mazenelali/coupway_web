function InputsOfProfile({ type, placeholder, onChange }) {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
    };

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                className="w-full h-10 bg-transparent border-b-[1px] placeholder:text-sm border-dark-gray"
            />
        </>
    );
}

export default InputsOfProfile;
