function InputsOfProfile({ type, placeholder, onChange,label=null,defValue="" }) {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
    };
    if(label){return(  <>
        <label className="text-label-gray font-bold">{label}</label>
        <input
            type={type}
            value={defValue}
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full hover:border-dark-green focus:border-dark-green [&:has(:focus-within)]:border-dark-green active:border-dark-green h-10 bg-transparent border-b-[1px] placeholder:text-sm border-dark-gray mb-2"
        />
    </>)}
    else{return (
        <>
            <input
                type={type}
                value={defValue}
                placeholder={placeholder}
                onChange={handleChange}
                className="w-full h-10 bg-transparent border-b-[1px] placeholder:text-sm border-dark-gray"
            />
        </>
    );}
}

export default InputsOfProfile;
