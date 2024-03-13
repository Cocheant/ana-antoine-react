import { useState } from "react";
import current from "../lang/current"



const LanguageSelector = () => {
    const langs = ['en', 'es', 'fr'];
    let languageText = current.language;

    var idx = langs.indexOf(languageText);

    langs.splice(idx, 1);

    langs.splice(0, 0, languageText)

    const [selected, setSelected] = useState(languageText);
    const [open, setOpen] = useState(false);

    return (

        <div className="w-30 font-medium  h-10 cursor-pointer overflow-x" >
            <div
                onClick={() => setOpen(!open)}
                className={`bg-green md:text-base text-sm text-vlorange   w-30 p-2  items-center justify-between rounded ${open && "hidden"}`}
            >
                {selected}
            </div>
            <p
                className={`bg-green/80 rounded items-center flex flex-row overflow-x-auto " ${open ? "max-w-30 " : "max-w-0 "} `}
            >

                {langs?.map((country) => (
                    <p
                        key={country}
                        className={`p-2 text-sm md:text-base hover:bg-vlorange hover:text-green text-vlorange bg-green
           
                        }
                ${country
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            setOpen(false);

                            if (country !== selected) {
                                setSelected(country);
                                localStorage.setItem("PreferredLang", country);
                                location.reload();
                            }
                            setOpen(false);

                        }}
                    >
                        {country}
                    </p>
                ))}
            </p>
        </div >
    )
}

export default LanguageSelector
