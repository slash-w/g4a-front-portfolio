import "./footer.css"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center myfooter">
        <p className="text-[#FAFCFC] text-sm">
          © 2023 G4A Corporation. All rights reserved. All trademarks are the property of their respective owners in the US and other countries.
        </p>
        <p className="text-[#FAFCFC] text-sm">All prices include VAT (where applicable). <span className="cursor-pointer text-amber-400 hover:text-amber-300"> Privacy Policy </span> | <span className="cursor-pointer text-amber-400 hover:text-amber-300"> Legal information </span> | <span className="cursor-pointer text-amber-400 hover:text-amber-300"> G4A Subscriber Agreement </span> | <span className="cursor-pointer text-amber-400 hover:text-amber-300"> Refunds </span> | <span className="cursor-pointer text-amber-400 hover:text-amber-300"> cookies </span></p>
    </footer>
  );
}
