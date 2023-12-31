import sunrise1 from "../assets/icons/sunrise1.svg"
import sunset from "../assets/icons/sunset.svg"
import tempMin from "../assets/icons/tempMin.svg"
import tempMax from "../assets/icons/tempMax.svg"

const DailyInfo = ({ timeInfo }) => {

  const {sunriseTime, sunsetTime, dataTempMax, dataTempMin}=timeInfo

  console.log("sunsetTime", sunsetTime)
  return (
    <div className="flex flex-1 bg-white gap-5 sm:gap-16 justify-evenly">
      <section className="flex flex-col bg-white justify-center items-center">
        <img
          src={sunrise1}
          alt=""
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-2"
        />
        <p className="bg-white font-montserrat text-xs text-slate-700 ">Sunrise</p>
        <p className="bg-white font-montserrat text-xs text-slate-700 ">{sunriseTime!==undefined ? "5.55 AM":sunriseTime}</p>
      </section>

      <section className="flex flex-col bg-white justify-center items-center">
        <img
          src={sunset}
          alt=""
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-2"
        />
        <p className="bg-white font-montserrat text-xs text-slate-700 ">Sunset</p>
        <p className="bg-white font-montserrat text-xs text-slate-700 ">{sunsetTime!==undefined ? "6.02 PM":sunsetTime}</p>
      </section>

      <section className="flex flex-col bg-white justify-center items-center">
        <img
          src={tempMin}
          alt=""
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-2"
        />
        <p className="bg-white font-montserrat text-xs text-slate-700 ">Min Temp</p>
        <p className="bg-white font-montserrat text-xs text-slate-700 ">{dataTempMin===undefined ? "30":Math.round(dataTempMin)}</p>

      </section>

      <section className="flex flex-col bg-white justify-center items-center">
        <img
          src={tempMax}
          alt=""
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-2"
        />
        <p className="bg-white font-montserrat text-xs text-slate-700 ">Max Temp</p>
        <p className="bg-white font-montserrat text-xs text-slate-700 ">{dataTempMax===undefined ? "38":Math.round(dataTempMax)}</p>

      </section>
      
    </div>
  );
};

export default DailyInfo;
