import "./donationForm.css";

export default function DonationForm({ formWidth }) {
  return (
    <form
      className={`donation-form ${formWidth} flex flex-col justify-between gap-10 rounded-3xl bg-black bg-opacity-70 px-10 py-20 text-lg font-bold leading-10 text-light-gray`}
    >
      <div className="flex justify-center gap-1.5 ">
        <legend>Give as:</legend>
        <label className="custom-radioBtn-round">
          Private Person
          <input id="private" type="radio" value="private " name="type" />
          <span className="checkmark"></span>
        </label>
        <label className="custom-radioBtn-round">
          Company
          <input type="radio" id="company" name="type" value="Company" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="flex w-full justify-center">
        <label className="custom-radioBtn-big">
          <input id="donate" type="radio" value="donate" name="donation" />
          <span className="checkmark rounded-bl-3xl rounded-tl-3xl border-2 border-light-gray px-14 py-3">
            Donate
          </span>
        </label>
        <label className="custom-radioBtn-big">
          <input
            id="montly"
            type="radio"
            value="Give monthly"
            name="donation"
          />
          <span className="checkmark rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-t-2 border-light-gray px-9 py-3">
            Give monthly
          </span>
        </label>
      </div>
      <div className="flex justify-center">
        <label className="custom-radioBtn-big">
          <input id="200" type="radio" value="200" name="amount" />
          <span className="checkmark rounded-bl-3xl rounded-tl-3xl border-2 border-light-gray px-8 py-3">
            200 kr
          </span>
        </label>
        <label className="custom-radioBtn-big">
          <input id="400" type="radio" value="400" name="amount" />
          <span className="checkmark border-b-2 border-t-2 border-light-gray px-7 py-3">
            400 kr
          </span>
        </label>
        <label className="custom-radioBtn-big ">
          <input id="400" type="radio" value="400" name="amount" />
          <span className="checkmark rounded-br-3xl rounded-tr-3xl border-2 border-light-gray px-8 py-3">
            Optional
          </span>
        </label>
      </div>
      <div className="data-inputs text-light-gray++">
        {/* <div>
          <input
            type="email"
            placeholder="Email"
            className="bg-light-gray- w-full rounded-3xl"
          />
        </div> */}
        <button className="h-12 w-full rounded-3xl bg-light-gray+">Next</button>
        {/* <div>
          <input
            type="phone"
            placeholder="070-123-4567"
            className="bg-light-gray- w-full rounded-3xl"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="YYYYMMDD-XXXX"
            className="bg-light-gray- w-full rounded-3xl"
          />
        </div> */}
      </div>
    </form>
  );
}